// app.plugin.js
const { withAndroidManifest, withProjectBuildGradle } = require('@expo/config-plugins');

function withReactNativeWakeword(config) {
  //
  // 1. Add necessary permissions to AndroidManifest (if needed).
  //    For example, if `react-native-wakeword` needs RECORD_AUDIO.
  //
  config = withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults;

    // Ensure 'uses-permission' array exists
    if (!androidManifest.manifest['uses-permission']) {
      androidManifest.manifest['uses-permission'] = [];
    }

    const permissions = androidManifest.manifest['uses-permission'];
    const hasRecordAudio = permissions.some(
      (permission) => permission.$['android:name'] === 'android.permission.RECORD_AUDIO'
    );

    // Add RECORD_AUDIO permission if not present
    if (!hasRecordAudio) {
      permissions.push({ $: { 'android:name': 'android.permission.RECORD_AUDIO' } });
    }

    return config;
  });

  //
  // 2. Insert Maven repository or other Gradle config in the project's
  //    top-level build.gradle (only if your library requires custom artifacts).
  //
  config = withProjectBuildGradle(config, (config) => {
    const buildGradle = config.modResults.contents;

    // This snippet references a local "libs" folder inside your library package.
    // Adjust the path if your artifacts are elsewhere or not needed.
    const wakewordMaven = `
        // react-native-wakeword added
        maven { url("$rootDir/../node_modules/react-native-wakeword/libs") }
        // End react-native-wakeword added
    `;

    // Only add the snippet once
    if (!buildGradle.includes('react-native-wakeword added')) {
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

