const config = require('govuk-prototype-kit/lib/config')

function getHomeOfficeKitConfig() {
  prototypeConfig = config.getConfig()

  if (prototypeConfig.pluginConfig) {
    homeOfficeKitConfig = prototypeConfig.pluginConfig['home-office-kit'] ? prototypeConfig.pluginConfig['home-office-kit'] : {}

    // If logging the prototype kit data, then by default ignore /plugin-assets/, /public/ and /manage-prorotype/page-found requests
    if (homeOfficeKitConfig.logData && !homeOfficeKitConfig.logData.ignoreUrlsStartingWith) {
      homeOfficeKitConfig.logData.ignoreUrlsStartingWith = ["/plugin-assets/", "/public/", "/manage-prototype/page-loaded"]
    }
  } else {
    homeOfficeKitConfig = {}
  }
  
  return {"prototypeConfig": prototypeConfig, "homeOfficeKitConfig": homeOfficeKitConfig}
}

module.exports = {
  getHomeOfficeKitConfig
}