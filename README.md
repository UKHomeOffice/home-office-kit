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
* [expandable banner](https://design.homeoffice.gov.uk/components?name=Expandable%20banner)
* [footer](https://design.homeoffice.gov.uk/components?name=Footer)
* [header](https://design.homeoffice.gov.uk/components?name=Header)
* [pagination](https://design.homeoffice.gov.uk/components?name=Pagination)
* [status message](https://design.homeoffice.gov.uk/components?name=Status%20message)
* [timeline](https://design.homeoffice.gov.uk/components?name=Timeline)

## Styling

### Header, footer and page background
To change your prototype to by default use the Home Office styling:
1. In `app/views/layouts/main.html` change `{% extends "govuk-prototype-kit/layouts/main.html %}` to `{% extends "home-office-kit-layout.html" %}`

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
        "ignoreUrlsStartingWith": ["/plugin-assets/", "/other-url-to-ignore"]
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

- ` {{ date() }} ` shows todays date in the format 5 May 2022
- ` {{ date({day: 'numeric', month: 'numeric', year: 'numeric'}) }} ` is todays date in the format 05/05/2022
- ` {{ date({day: 'numeric'}) }} ` shows the just the day of date 5
- ` {{ date({day: 'numeric'}, {'day': -1}) }} ` shows just the date of yesterday
- ` {{ date({weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}) }} ` shows todays date in the format Tuesday, 5 July 2022.

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
