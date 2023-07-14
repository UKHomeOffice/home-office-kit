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

* redirecting radio buttons
* getting the current date

## Filters

There are some useful filters that are included automatically when you install the plugin. These include:

* homeOfficeKit.possessive - adding `'s` or `'`
* homeOfficeKit.toMonth - change `1` to `Jan` and so on
* homeOfficeKit.padZero - adds a zero to single digits, change `1` to `01`

## Styling

### Header, footer and page background
To change your prototype to by default use the Home Office styling:
1. In `app/views/layouts/main.html` change `{% extends "govuk-prototype-kit/layouts/main.html %}` to `{% extends "home-office-kit-layout.html" %}`

### Font

In `app/assets/sass` create `settings.scss` and add `@import "node_modules/home-office-kit/sass/settings"`

This changes your font from GDS Transport to Roboto, the font used in the Home Office design system.