//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const config = require('../lib/config')

// When in development print the URL link and the data stored in the prototype into terminal.
// This is not logged in Heroku or anywhere where the prototype is published.
// To add this functionality, set logData to True in config.json

router.all('*', function (req, res, next) {
  prototypeConfig = config.getHomeOfficeKitConfig().prototypeConfig;
  homeOfficeKitConfig = config.getHomeOfficeKitConfig().homeOfficeKitConfig;

  if (prototypeConfig.isDevelopment && homeOfficeKitConfig.logData) {
    logData = true
    for (urlStart in homeOfficeKitConfig.logData.ignoreUrlsStartingWith) {
      if (req.url.startsWith(urlStart)) {
        logData = false
      }
    }
    if (logData) {
      console.log(`${req.method}: ${req.url}`)
      console.log(req.session.data)
    }
  }
  next()
})

// Finds the current page URL and stores so can be used as the default next page route
router.all('*', function (req, res, next){
  if (!res.locals.homeOfficeKit) {
    res.locals.homeOfficeKit = {}
  }
  const urlParts = req.url.split('/')
  res.locals.homeOfficeKit.pageURL = urlParts[urlParts.length - 1]
  next()
})

// Stores the date to be used on HTML pages.
// This code is run for all requests.
router.get('*', function (req, res, next) {

  // Examples of date
  //
  // {{ date() }} shows todays date in the format 5 May 2022
  // {{ date({day: 'numeric', month: 'numeric', year: 'numeric'}) }} is todays date
  //    in the format 05/05/2022
  // {{ date({day: 'numeric'}) }} shows the just the date of date 5
  // {{ date({day: 'numeric'}, {'day': -1}) }} shows just the date of yesterday
  // {{ date({weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}) }} shows todays date in the format Tuesday, 5 July 2022.
  res.locals.homeOfficeKit.date = function (
    format = {day: 'numeric', month: 'long', year: 'numeric'},
    diff = {'year': 0, 'month': 0, 'day': 0})
    {
      var date = new Date();
      if ('day' in diff) {
        date.setDate(date.getDate() + diff.day)
      }
      if ('month' in diff) {
        date.setMonth(date.getMonth() + diff.month)
      }
      if ('year' in diff) {
        date.setYear(date.getFullYear() + diff.year)
      }
      const formattedDate = new Intl.DateTimeFormat('en-GB', format).format(date);
      return `${formattedDate}`
    }

  // Examples of today
  //
  // Useful for pre-populating date fields
  //
  // {{ today.day }} shows just todays day
  // {{ today.month }} shows just todays month as a number
  // {{ today.year }} shows just todays year as a number
  res.locals.homeOfficeKit.today = {"day": res.locals.homeOfficeKit.date({'day': 'numeric'}),
          "month": res.locals.homeOfficeKit.date({'month': 'numeric'}),
          "year": res.locals.homeOfficeKit.date({'year': 'numeric'})}


  // Examples of yesterday
  //
  // Useful for pre-populating date fields
  //
  // {{ yesterday.day }} shows just todays day
  // {{ yesterday.month }} shows just todays month as a number
  // {{ yesterday.year }} shows just todays year as a number
  res.locals.homeOfficeKit.yesterday = {"day": res.locals.homeOfficeKit.date({'day': 'numeric'}, diff = {'day': -1}),
            "month": res.locals.homeOfficeKit.date({'month': 'numeric'}, diff = {'day': -1}),
            "year": res.locals.homeOfficeKit.date({'year': 'numeric'}, diff = {'day': -1})}

  // The next function means continue looking for other matching routes
  next()
  })

// Radio button redirect
router.post('*', function(req, res, next) {
  // This function redirects if any part of the data contains '~home-office-kit-redirect-to~'

  // This is usually used for radio buttons, by setting the value to "yes~home-office-kit-redirect-to~/page/to/redirect/to"
  // in the format '<value>~<redirect URL>'
  if (req.body) {
    const obj = Object.keys(req.body).length ? req.body : req.query;
    for (const k in obj) {
      const v = obj[k];
      if ((typeof v === 'string') && (v.includes('~home-office-kit-redirect-to~'))) {
        const parts = v.split('~home-office-kit-redirect-to~');
        req.session.data[k] = parts[0];
        const href = parts[1];
        console.log(`Found '~home-office-kit-redirect-to~': redirecting to ${href}`)
        return res.redirect(href);
      }
    }
  }
  next();
})