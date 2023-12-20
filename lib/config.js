const config = require('govuk-prototype-kit/lib/config')

function getHomeOfficeKitConfig() {
  prototypeConfig = config.getConfig()

  if (prototypeConfig.pluginConfig) {
    homeOfficeKitConfig = prototypeConfig.pluginConfig['home-office-kit'] ? prototypeConfig.pluginConfig['home-office-kit'] : {}

    // If logging the prototype kit data, then by default ignore /plugin-assets/, /public/, /manage-prorotype/ and /plugin-routes/ requests
    if (homeOfficeKitConfig.logData && !homeOfficeKitConfig.logData.ignoreUrlsStartingWith) {
      if (homeOfficeKitConfig.logData === true) {
        homeOfficeKitConfig.logData = {}
      }
      homeOfficeKitConfig.logData.ignoreUrlsStartingWith = ["/plugin-assets/", "/public/", "/manage-prototype/", "/plugin-routes/"]
    }
  } else {
    homeOfficeKitConfig = {}
  }
  
  return {"prototypeConfig": prototypeConfig, "homeOfficeKitConfig": homeOfficeKitConfig}
}

module.exports = {
  getHomeOfficeKitConfig
}