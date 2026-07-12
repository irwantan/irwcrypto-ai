const { getDefaultConfig } = require("expo/metro-config");
const { withCSSInterop } = require("react-native-css-interop/metro");

const config = getDefaultConfig(__dirname);

module.exports = withCSSInterop(config);
