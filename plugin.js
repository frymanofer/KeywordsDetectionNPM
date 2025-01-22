const { withAndroidManifest, withProjectBuildGradle } = require("@expo/config-plugins");

function withReactNativeWakeword(config) {
  // Add audio permission to AndroidManifest.xml
  config = withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;

    // Add RECORD_AUDIO permission if not already present
    if (!androidManifest.manifest["uses-permission"]) {
      androidManifest.manifest["uses-permission"] = [];
    }
    const permissions = androidManifest.manifest["uses-permission"];
    const hasPermission = permissions.some(
      (permission) => permission["$"]["android:name"] === "android.permission.RECORD_AUDIO"
    );
    if (!hasPermission) {
      permissions.push({ $: { "android:name": "android.permission.RECORD_AUDIO" } });
    }

    return config;
  });

  // Modify android/build.gradle
  config = withProjectBuildGradle(config, async (config) => {
    const buildGradle = config.modResults.contents;

    const wakewordMaven = `
        // react-native-wakeword added
        maven { url("${project(':react-native-wakeword').projectDir}/libs") }
        // End react-native-wakeword added
    `;

    if (!buildGradle.includes("react-native-wakeword added")) {
      config.modResults.contents = buildGradle.replace(
        /repositories\s*{/,
        `repositories {\n${wakewordMaven}`
      );
    }

    return config;
  });

  return config;
}

module.exports = withReactNativeWakeword;

