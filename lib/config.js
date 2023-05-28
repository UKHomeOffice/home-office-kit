const config = require('govuk-prototype-kit/lib/config')

function getHomeOfficeKitConfig() {
  prototypeConfig = config.getConfig()
  homeOfficeKitConfig = prototypeConfig.pluginConfig ? (prototypeConfig.pluginConfig['home-office-kit'] || {}) : {}
  
  return {"prototypeConfig": prototypeConfig, "homeOfficeKitConfig": homeOfficeKitConfig}
}

module.exports = {
  getHomeOfficeKitConfig
}