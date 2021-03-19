cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "monaca-plugin-monaca-core.monaca",
      "file": "plugins/monaca-plugin-monaca-core/www/monaca.js",
      "pluginId": "monaca-plugin-monaca-core",
      "merges": [
        "monaca"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-splashscreen": "6.0.0",
    "cordova-plugin-whitelist": "1.3.4",
    "monaca-plugin-monaca-core": "3.3.1"
  };
});