# Home Office design system plugin for GOV.UK prototype kit

## Use

Used with the GOV.UK prototype kit version 13 and above.

To use:

1. Run `npm install home-office-kit`.
2. In your prototype go to `/manage-prototype/templates`.

You should see the Home Office design system templates.

## Components

You can use the HTML for these Home Office design system components:

* [alert](https://design.homeoffice.gov.uk/components?name=Alert)
* [button](https://design.homeoffice.gov.uk/components?name=Button)
* [expandable banner](https://design.homeoffice.gov.uk/components?name=Expandable%20banner)
* [footer](https://design.homeoffice.gov.uk/components?name=Footer)
* [header](https://design.homeoffice.gov.uk/components?name=Header)
* [highlight](https://design.homeoffice.gov.uk/components?name=Highlight)
* [loading spinner](https://design.homeoffice.gov.uk/components?name=Loading%20spinner)
* [pagination](https://design.homeoffice.gov.uk/components?name=Pagination)
* [status message](https://design.homeoffice.gov.uk/components?name=Status%20message)
* [timeline](https://design.homeoffice.gov.uk/components?name=Timeline)

## Templates

### Home Office blank
This is a blank page in Home Office styling. It extends the Home Office layout within the kit, so is independent of any other layouts you may have in your prototype.

### Question page
This is a template for a form question page. Can be used with any styling.

It includes, the back link, buttons, the `<form>` tags, setting the page heading and so on.

To add a question to the page, add it to the `homeOfficeKit_pageContent` block.

To customise the page, you can set:
* homeOfficeKit_formLayout - for the styling of the page
* homeOfficeKit_pageHeading - for the heading level 1 and page title
* homeOfficeKit_pageTitle - only if you need a different page title to the heading level 1
* homeOfficeKit_nextPage - for the next page of the form
* homeOfficeKit_useSubmitButton - set to true for 'Submit' rather than 'Save and continue'
* homeOfficeKit_primaryButtonText - by default is 'Save and continue'
* homeOfficeKit_secondaryButtonText - to create a secondary button with this text
* homeOfficeKit_secondaryButtonFormAction - the page where the secondary button should go

You can also:
* customise styling (in css) to the `homeOfficeKit_style` block
* customise the back link by overriding the default in the `homeOfficeKit_backLinkURL` block
* customise or remove the buttons by overriding the default in the `homeOfficeKit_buttons` block
* add javascript to `pageScripts` block

### Pagination
An example to copy of how to use [pagination](https://design.homeoffice.gov.uk/components?name=Pagination) in your prototype.

This prevents the need for multiple pages in your prototype for the pagination. Uses the `homeOfficeKitPagination` macro.

### Add another
An example to copy of the javascript for adding another field, one at a time.

### Accordion (previous style)
There are some services using the older less accessible version of the [GOV.UK accordion component](https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/) (from v3.14).

In order to test these services with users, use this example of the `homeOfficeKitLegacyAccordion` macro.

### Show password
Small example of show password.

## Styling

You can use this kit with any styling, you do not need to use the Home Office header, footer and page background.

### Header, footer and page background
To change your prototype to by default use the Home Office styling:
1. In `app/views/layouts/main.html` change `{% extends "..." %}` to `{% extends "home-office-kit-layout.html" %}`

### Font

In `app/assets/sass` create `settings.scss` and add `@import "node_modules/home-office-kit/sass/settings"`

This changes your font from GDS Transport to Roboto, the font used in the Home Office design system.

## Routes

There are some useful routes in the prototype:

### Log prototype data
To log prototype data add to `config.json`:

```
  "pluginConfig": {
    "home-office-kit": {
      "logData": true
    }
  }
```

This should be inside the most outer `{` `}`. If there's a line before this one (say `serviceName`), you'll need to add a comma to the end.

If you need to ignore certain URLs then change this to:

```
  "pluginConfig": {
    "home-office-kit": {
      "logData": {
        "ignoreUrlsStartingWith": ["/plugin-assets/", "/public/", "/manage-prototype/", "/plugin-routes/", "/other-url-to-ignore"]
      }
    }
  }
```

### Redirect with radio buttons

In the value part of the radio button add `~home-office-kit-redirect-to~` followed by the URL to redirect to.

For example:
```
  <div class="govuk-radios__item">
    <input class="govuk-radios__input" id="where-do-you-live" name="where-do-you-live" type="radio" value="england~home-office-kit-redirect-to~/new-page">
    <label class="govuk-label govuk-radios__label" for="where-do-you-live">
      England
    </label>
  </div>
```
or
```
  {
    value: "england~home-office-kit-redirect-to~/new-page",
    text: "England"
  }
```
### Get the current date

Sometimes you want to show a date to a user, and for usability testing keeping the dates relevant can be difficult. This lets you show dates relative to today:

- ` {{ homeOfficeKit.today.day }}` shows the day part of today
- ` {{ homeOfficeKit.today.month }}` shows the month part of today
- ` {{ homeOfficeKit.today.year }}` show the year part of today

- ` {{ homeOfficeKit.date() }} ` shows todays date in the format 5 May 2022
- ` {{ homeOfficeKit.date({day: 'numeric', month: 'numeric', year: 'numeric'}) }} ` is todays date in the format 05/05/2022
- ` {{ homeOfficeKit.date({day: 'numeric'}) }} ` shows the just the day of date 5
- ` {{ homeOfficeKit.date({day: 'numeric'}, {'day': -1}) }} ` shows just the date of yesterday
- ` {{ homeOfficeKit.date({weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}) }} ` shows todays date in the format Tuesday, 5 July 2022.

## Filters

There are some useful filters that are included automatically when you install the plugin. These include:

### Possessive
`homeOfficeKit.possessive` adds `'s` or `'`

For example, for an input with the name attribute `full-name`:
```
{{ data['full-name'] | homeOfficeKit.possessive }}
```

### Display month name
`homeOfficeKit.toMonth` - changes `1` to `Jan` and so on

For example, to replay a date input with `namePrefix` date:
```
{{ data['date-day'] + " " + data['date-month'] | homeOfficeKit.toMonth + " " + data['date-year'] }}
```

### Add zero to start of times
`homeOfficeKit.padZero` - adds a zero to single digits, change `1` to `01`

For example, to replay a times, with a separate hour and minute input:
```
{{ data['time-hour'] | homeOfficeKit.padZero + ":" + data['time-minute'] | homeOfficeKit.padZero }}
```

### Pluralise nouns
`homeOfficeKit.pluralise' - allows dynamic text for plural

For example:
```
"passenger" + data['numberPassengers'] | pluralise('','s')
data['numberRooves'] | pluralise('roof', 'rooves')
```

## Contributing

Read the [GOV.UK prototype kit plugin guidance](https://prototype-kit.service.gov.uk/docs/create-plugin).

Raise issues and pull requests to:
* add new filters, layouts and macros
* update the scss to match the Home Office design system

### Publishing

Before merging the pull request:
1. Update the version in `package.json`.
2. Update `CHANGELOG.md` with what has changed in this version.
3. Merge the pull request on GitHub.
4. Update your local version to the updated version of main.
5. Run `npm publish`. This updates the code on [npm](https://www.npmjs.com/package/home-office-kit).
6. On GitHub, [create a new release](https://github.com/UKHomeOffice/home-office-kit/releases/new).
