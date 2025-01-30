const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = withNativeWind(
  (() => {
    const config = getDefaultConfig(__dirname);

    // Add support for SVG files
    config.transformer.babelTransformerPath = require.resolve(
      "react-native-svg-transformer"
    );
    config.resolver.assetExts = config.resolver.assetExts.filter(
      (ext) => ext !== "svg"
    );
    config.resolver.sourceExts.push("svg");

    return config;
  })(),
  { input: "./global.css" } // NativeWind configuration
);
