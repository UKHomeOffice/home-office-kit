# Changelog

## Unreleased

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
