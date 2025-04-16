export class KeyWordRNBridgeInstance {
    constructor(instanceId: any, isSticky: any);
    instanceId: any;
    listeners: any[];
    isFirstInstance: boolean;
    isSticky: any;
    createInstance(modelName: any, threshold: any, bufferCnt: any): Promise<any>;
    setKeywordDetectionLicense(license: any): Promise<any>;
    replaceKeywordDetectionModel(modelName: any, threshold: any, bufferCnt: any): Promise<any>;
    setKeywordLicense(license: any): Promise<any>;
    startKeywordDetection(threshold: any, setActive?: boolean, duckOthers?: boolean, mixWithOthers?: boolean, defaultToSpeaker?: boolean): Promise<any>;
    stopKeywordDetection(): Promise<any>;
    destroyInstance(): Promise<any>;
    onKeywordDetectionEvent(callback: any): import("react-native").EmitterSubscription;
    removeListeners(): void;
}
export function removeAllRNBridgeListeners(): Promise<void>;
export function createKeyWordRNBridgeInstance(instanceId: any, isSticky: any): Promise<KeyWordRNBridgeInstance>;
export function enableDucking(): Promise<void>;
export function disableDucking(): Promise<void>;
export function restartListeningAfterDucking(): Promise<void>;
export function initAudioSessAndDuckManage(): Promise<void>;
export function disableDuckingAndCleanup(): Promise<void>;
