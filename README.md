# React-Native "wake word" by Davoice

## React-Native "wake word" also known as "react-native hotword", "react-native trigger word”, "react-native phrase spotting” and more...

By [DaVoice.io](https://davoice.io)

[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDaVoiceAI)](https://twitter.com/DaVoiceAI)

Welcome to **Davoice React-Native Wake Word / hotword / Keywords Detection** – Wake words and keyword detection solution designed by **DaVoice.io**.

## New:
Fix IOS issue with static Podfile linkage.

## About this package:

This is a **"wake word"** package for React Native. A "wake word" is a keyword that activates your device, like "Hey Siri" or "OK Google". "Wake Word" is also known as "keyword detection", "Phrase Recognition", "Phrase Spotting", “Voice triggered”, “hot word”, “trigger word”

It also provide **Voice Commands** AKA **Speech to Intent**. **Voice Commands** refers to the ability to recognize a spoken word or phrase
and directly associate it with a specific action or operation within an application. Unlike a **"wake word"**, which typically serves to activate or wake up the application,
Speech to Intent goes further by enabling complex interactions and functionalities based on the recognized intent behind the speech.

For example, a wake word like "Hey App" might activate the application, while Speech
to Intent could process a phrase like "Play my favorite song" or "Order a coffee" to
execute corresponding tasks within the app.
Speech to Intent is often triggered after a wake word activates the app, making it a key
component of more advanced voice-controlled applications. This layered approach allows for
seamless and intuitive voice-driven user experiences.

More questions? - Contact us at info@DaVoice.io

## Features

- **High Accuracy:** We have succesfully reached over 99% accurary for all our models. **Here is on of our customer's benchmarks**:

```
MODEL         DETECTION RATE
===========================
DaVoice        0.992481
Top Player     0.874812
Third          0.626567
```

Please check this link for an official benchmake by lookdeep.health:
https://www.reddit.com/r/Python/comments/1ioo4yd/bulletproof_wakewordkeyword_spotting/

- **Easy to deploy wake word with React Native:** Check out our example: "rn_example/DetectingKeyWords.js". With a few simple lines of code, you have your own keyword detecting enabled app.
- **Cross-Platform Support:** Integrate Davoice KeywordsDetection into React-Native Framework. Both iOS and Android are supported.
- **Low Latency:** Experience near-instantaneous keyword detection.

## Platforms and Supported Languages

- **React-Native wake word Android:** React Native Wrapper for Android.
- **React-Native wake word iOS:** React Native Wrapper for iOS.

# Wake word generator

## Create your "custom wake word""

In order to generate your custom wake word you will need to:

- **Create wake word mode:**
    Contact us at info@davoice.io with a list of your desired **"custom wake words"**.

    We will send you corresponding models typically your **wake word phrase .onnx** for example:

    A wake word ***"hey sky"** will correspond to **hey_sky.onnx**.

- **Add wake words to Android:**
    Simply copy the new onnx files to:

    android/app/src/main/assets/*.onnx

- **Add Wake word to IOS**
    Copy new models somewhere under ios/YourProjectName.

    You can create a folder ios/YourProjectName/models/ and copy there there.

    Now add each onnx file to xcode making sure you opt-in “copy if needed”.

- **In React/JS code add the new onnx files to your configuration**
  
    Change:

```
    // Create an array of instance configurations

    const instanceConfigs:instanceConfig[] = [
  
      { id: 'need_help_now', modelName: 'need_help_now.onnx', threshold: 0.9999, bufferCnt: 3 , sticky: false },
  
    ];
  
    To:
  
    // Create an array of instance configurations
  
    const instanceConfigs:instanceConfig[] = [
  
      { id: 'my_wake_word', modelName: 'my_wake_word.onnx', threshold: 0.9999, bufferCnt: 3 , sticky: false },
  
    ];
  
    For example if your generated custom wake word" is "hey sky":
  
    // Create an array of instance configurations
  
    const instanceConfigs:instanceConfig[] = [
  
      { id: 'hey sky', modelName: 'hey_sky.onnx', threshold: 0.9999, bufferCnt: 3 , sticky: false },
  
    ];
```

- **Last step - Rebuild your project**

## Contact

For any questions, requirements, or more support for React-Native, please contact us at info@davoice.io.

# IOS and Android Package

## Installation
npm install react-native-wakeword

## Android:
Add this to your android/build.gradle file:

allprojects {

    repositories {

        // react-native-wakeword added

	    maven { url "${project(":react-native-wakeword").projectDir}/libs" }
        
        maven { url("${project(':react-native-wakeword').projectDir}/libs") } 
        
        maven {
            url("${project(':react-native-wakeword').projectDir}/libs")
        }
        
        // End react-native-wakeword added
        
        ... your other lines...

## Githhub examples:

### Checkout examples on:
https://github.com/frymanofer/ReactNative_WakeWordDetection

https://github.com/frymanofer/ReactNative_WakeWordDetection/example_npm

## FAQ:

### What is a wake word?

A **"wake word"** is a keyword or phrase that activates your device, like "Hey Siri" or "OK Google". "Wake Word" is also known as "keyword detection", "Phrase Recognition", "Phrase Spotting", “Voice triggered”, “hot word”, “trigger word”...

### What is a Speech to Intent?

**"Speech to Intent"** refers to the ability to recognize a spoken word or phrase
and directly associate it with a specific action or operation within an application.

Unlike a **"wake word"**, which typically serves to activate or wake up the application,
Speech to Intent goes further by enabling complex interactions and functionalities
based on the recognized intent behind the speech.

For example, a wake word like "Hey App" might activate the application, while Speech
to Intent could process a phrase like "Play my favorite song" or "Order a coffee" to
execute corresponding tasks within the app.
Speech to Intent is often triggered after a wake word activates the app, making it a key
component of more advanced voice-controlled applications. This layered approach allows for
seamless and intuitive voice-driven user experiences.

### How accurate is the platform?

We have succesfully reached over 99% "wake word" accurary for all our models. **Here is on of our customer's benchmarks**:

```
MODEL         DETECTION RATE
===========================
DaVoice        0.992481
Top Player     0.874812
Third          0.626567
```

### Key words

"DaVoice.io" 
"Voice commands"
"Wake word detection github"
“Voice triggered”
“hot word”
“react-native trigger word”
“react-native Voice triggered”
“react-native hot word”
"react-native wake word",
"Wake word generator",
"hot word generator",
"trigger word generator",
"Custom wake word generator",
"Custom hot word",
"Custom trigger word",
"Custom wake word",
"voice commands",
"wake word",
"wakeword",
"wake words",
"keyword detection",
"keyword spotting",
"speech to intent",
"voice commands",
"voice to intent",
"phrase spotting",
"react native wake word",
"Davoice.io wake word",
"Davoice wake word",
"Davoice react native wake word",
"Davoice react-native wake word",
"wake",
"word",
"Voice Commands Recognition",
"lightweight Voice Commands Recognition",
"customized lightweight Voice Commands Recognition",
"rn wake word"
"Davoice.io",
"voice commands",
"wake word",
"wakeword",
"wake words",
"keyword detection",
"keyword spotting",
"Wake word detection github"
"Wake Word" 
"keyword detection"
"Phrase Recognition"
"Phrase Spotting"
"react-native wake word",
"Custom wake word",
"voice commands",
"wake word",
"wakeword",
"wake words",
"keyword detection",
"keyword spotting",
"speech to intent",
"voice to intent",
"phrase spotting",
"react native wake word",
"Davoice.io wake word",
"Davoice wake word",
"Davoice wake word",
"Davoice react native wake word",
"Davoice.io react-native wake word",
"wake",
"word",
"Voice Commands Recognition",
"lightweight Voice Commands Recognition",
"customized lightweight Voice Commands Recognition",
"rn wake word"
"speech to intent",
"voice to intent",
"phrase spotting",
"react native wake word",
"Davoice.io wake word",
"Davoice wake word",
"Davoice react native wake word",
"Davoice react-native wake word",
"wake",
"word",
"Voice Commands Recognition",
"lightweight Voice Commands Recognition",
"customized lightweight Voice Commands Recognition",
"Custom wake word",
"rn wake word"



