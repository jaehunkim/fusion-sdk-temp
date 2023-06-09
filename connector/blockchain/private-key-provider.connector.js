"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateKeyProviderConnector = void 0;
const eth_sig_util_1 = require("@metamask/eth-sig-util");
class PrivateKeyProviderConnector {
    constructor(privateKey, web3Provider) {
        this.privateKey = privateKey;
        this.web3Provider = web3Provider;
        this.privateKeyBuffer = Buffer.from(privateKey.replace('0x', ''), 'hex');
    }
    signTypedData(_walletAddress, typedData) {
        const result = (0, eth_sig_util_1.signTypedData)({
            privateKey: this.privateKeyBuffer,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            data: typedData,
            version: eth_sig_util_1.SignTypedDataVersion.V4
        });
        return Promise.resolve(result);
    }
    ethCall(contractAddress, callData) {
        return this.web3Provider.eth.call({
            to: contractAddress,
            data: callData
        });
    }
}
exports.PrivateKeyProviderConnector = PrivateKeyProviderConnector;
//# sourceMappingURL=private-key-provider.connector.js.map