// KeyWordRNBridge.js
import { NativeModules, NativeEventEmitter, Platform } from 'react-native';

const { KeyWordRNBridge } = NativeModules;
const keywordRNBridgeEmitter = new NativeEventEmitter(KeyWordRNBridge);

if (KeyWordRNBridge) {
    console.log("KeyWordRNBridge is loaded:", KeyWordRNBridge);
  } else {
    console.error("KeyWordRNBridge is not linked correctly.");
  }
  
export class KeyWordRNBridgeInstance {
    instanceId;
    listeners = [];
    isFirstInstance = false;
  
    constructor(instanceId, isSticky) {
      this.instanceId = instanceId;
      this.isSticky = isSticky;
    }
  
    async createInstanceMulti(modelNames, thresholds, bufferCnts, msBetweenCallbacks) {
        const instance = await KeyWordRNBridge.createInstanceMulti(
            this.instanceId,
            modelNames,
            thresholds,
            bufferCnts,
            msBetweenCallbacks
        );

        if (instance && this.isFirstInstance) {
            this.isFirstInstance = false;
            await KeyWordRNBridge.startForegroundService(this.instanceId);
        }

        return instance;
    }

    async createInstance(modelName, threshold, bufferCnt) {
      instance = await KeyWordRNBridge.createInstance(
        this.instanceId,
        modelName,
        threshold,
        bufferCnt);
      if (instance && this.isFirstInstance)
      {
        this.isFirstInstance = false;
        await KeyWordRNBridge.startForegroundService(this.instanceId); 
      }
      return instance;
    }

    async setKeywordDetectionLicense(license) {
        return await KeyWordRNBridge.setKeywordDetectionLicense(this.instanceId, license);
    }

    async replaceKeywordDetectionModel(modelName, threshold, bufferCnt) {
        return KeyWordRNBridge.replaceKeywordDetectionModel(this.instanceId, modelName, threshold, bufferCnt);
    }
    /*startForegroundService() {
        return KeyWordRNBridge.startForegroundService(this.instanceId);
    }

    stopForegroundService() {
        return KeyWordRNBridge.stopForegroundService(this.instanceId);
    }*/
    async setKeywordLicense(license) {
        return KeyWordRNBridge.setKeywordLicense(this.instanceId, license);
    }

    async startKeywordDetection(threshold,
        setActive = true,
        duckOthers = false,
        mixWithOthers = true,
        defaultToSpeaker = true) {
    
        if (Platform.OS === 'ios') {
            return KeyWordRNBridge.startKeywordDetection(
                this.instanceId,
                threshold,
                setActive,
                duckOthers,
                mixWithOthers,
                defaultToSpeaker
              );
        } else {
            return KeyWordRNBridge.startKeywordDetection(this.instanceId, threshold);
        }
    }

    async stopKeywordDetection() {
        return KeyWordRNBridge.stopKeywordDetection(this.instanceId);
    }

    async destroyInstance() {
        return KeyWordRNBridge.destroyInstance(this.instanceId);
    }

    onKeywordDetectionEvent(callback) {
        const listener = keywordRNBridgeEmitter.addListener('onKeywordDetectionEvent', (event) => {
            if (event.instanceId === this.instanceId) {
                console.log("event == .", event);
                if (Platform.OS === 'ios') {
                    console.log("event == .", event);
                    callback(event.info);
                } else {
                    callback(event.phrase);
                }
            }
        });
        this.listeners.push(listener);
        return listener;
    }

    removeListeners() {
        this.listeners.forEach((listener) => listener.remove());
        this.listeners = [];
    }
}

export const removeAllRNBridgeListeners = async () => {
    keywordRNBridgeEmitter.removeAllListeners('onKeywordDetectionEvent');
}

export const createKeyWordRNBridgeInstance = async (instanceId, isSticky) => {
    return await new KeyWordRNBridgeInstance(instanceId, isSticky);
};

export const enableDucking = async () => {
    if (Platform.OS === 'ios') {
        await KeyWordRNBridge.enableAggressiveDucking();
    }
}

export const disableDucking = async () => {
    if (Platform.OS === 'ios') {
        await KeyWordRNBridge.disableDucking();
    }
}

export const restartListeningAfterDucking = async () => {
    if (Platform.OS === 'ios') {
        await KeyWordRNBridge.restartListeningAfterDucking();
    }
}

export const initAudioSessAndDuckManage = async () => {
    if (Platform.OS === 'ios') {
        await KeyWordRNBridge.initAudioSessAndDuckManage();
    }
}

export const disableDuckingAndCleanup = async () => {
    if (Platform.OS === 'ios') {
        await KeyWordRNBridge.disableDuckingAndCleanup();
    }
}

