import useModel from './useModel';
import {
    createKeyWordRNBridgeInstance,
    removeAllRNBridgeListeners,
    KeyWordRNBridgeInstance,
    enableDucking,
    disableDucking,
    initAudioSessAndDuckManage,
    restartListeningAfterDucking,
  } from './KeyWordRNBridge';


export { enableDucking }
export { disableDucking }
export { initAudioSessAndDuckManage }
export { restartListeningAfterDucking }
export { removeAllRNBridgeListeners }
export { createKeyWordRNBridgeInstance }
export { KeyWordRNBridgeInstance }
export { useModel }; // Export only useModel
export default useModel; // Allow default import
