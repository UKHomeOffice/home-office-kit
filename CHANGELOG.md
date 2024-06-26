# Changelog

## Unpublished

* add templates and contribution guidance to README
* add new show password template for GOV.UK Frontend v5.3.0 or later
* updated page styling to prevent inccorectly changing to the grey background

## 1.1.0

* status message styles on button wrapping
* secondary button style when on the Home Office design system background*

## 1.0.5

* added additional log lines for HTTP requests to ignore by default
* generalised ReadMe for extends line

## 1.0.4

* further fixes to the Home Office kit radio redirect

## 1.0.3

* removed log lines from Home Office kit radio redirect, which fixed an error caused by structured data

## 1.0.2

* added more examples to the read me for filters and routes
* restructed read me
* fixed radio button redirects

## 1.0.2

* fixes to allow logData to just take the value 'true'
* updated read me for logging data

## 1.0.1

* fixes to the config and logging of routes

## 1.0.0

* breaking change - logging prototype data is off by default, added ability to ignore URLs that start with particular strings

## 0.9.1

* fix to fatal issue in routes file

## 0.9.0
This version is broken, do not use.

* added homeOfficeKitLegacyAccordion macro for the old GOV.UK frontend v3.14.0 accordion
* now allows in the config.json to turn off data logging, by:
```
{
  "pluginConfig": {
    "home-office-kit": {
      "logData": false
    }
  }
}
```
* added homeOfficeKitPagination macro to help with pagination

## 0.8.0

## 0.8.0

* added accordion template that looks like the old GOV.UK frontend v3.14.0 accordion

## 0.7.0

### Features

* started the change log
* allowed on page styling with {% block homeOfficeKit_style %}
* added pagination template

### Fixes

Fixed the styles for:

* expandable banner
* pagination
