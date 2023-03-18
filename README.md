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

To use some helpful routes in your prototype, add `require('home-office-kit/routes/all.js')` to your `app/routes.js` file.

This includes:

* logging data from the prototype
* redirecting radio buttons
* getting the current date

## Filters

There are some useful filters that are included automatically when you install the plugin. These include:

* possessive - adding `'s` or `'`
* toMonth - change `1` to `Jan` and so on
* padZero - adds a zero to single digits, change `1` to `01`

## Font

This changes your font from GDS Transport to Roboto, the font used in the Home Office design system.