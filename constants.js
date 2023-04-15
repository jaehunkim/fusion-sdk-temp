"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONE_INCH_ROUTER_V5 = exports.SETTLEMENT_CONTRACT_ADDRESS_MAP = exports.UNWRAPPER_CONTRACT_ADDRESS_MAP = exports.WRAPPER_ADDRESS_MAP = exports.NetworkEnum = exports.ZX = exports.ZERO_NUMBER = exports.ZERO_ADDRESS = exports.NATIVE_CURRENCY = void 0;
exports.NATIVE_CURRENCY = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
exports.ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
exports.ZERO_NUMBER = '0';
exports.ZX = '0x';
var NetworkEnum;
(function (NetworkEnum) {
    NetworkEnum[NetworkEnum["ETHEREUM"] = 1] = "ETHEREUM";
    NetworkEnum[NetworkEnum["POLYGON"] = 137] = "POLYGON";
    NetworkEnum[NetworkEnum["BINANCE"] = 56] = "BINANCE";
})(NetworkEnum = exports.NetworkEnum || (exports.NetworkEnum = {}));
exports.WRAPPER_ADDRESS_MAP = {
    [NetworkEnum.ETHEREUM]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [NetworkEnum.BINANCE]: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    [NetworkEnum.POLYGON]: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
};
exports.UNWRAPPER_CONTRACT_ADDRESS_MAP = {
    [NetworkEnum.ETHEREUM]: '0x08b067ad41e45babe5bbb52fc2fe7f692f628b06',
    [NetworkEnum.BINANCE]: '0x0eee00137d807a461702e9e0640c599de663e7e4',
    [NetworkEnum.POLYGON]: '0x18d410f651289bb978fc32f90d2d7e608f4f4560'
};
exports.SETTLEMENT_CONTRACT_ADDRESS_MAP = {
    [NetworkEnum.ETHEREUM]: '0xa88800cd213da5ae406ce248380802bd53b47647',
    [NetworkEnum.BINANCE]: '0x1d0ae300eec4093cee4367c00b228d10a5c7ac63',
    [NetworkEnum.POLYGON]: '0x1e8ae092651e7b14e4d0f93611267c5be19b8b9f'
};
exports.ONE_INCH_ROUTER_V5 = '0x1111111254eeb25477b68fb85ed929f73a960582';
//# sourceMappingURL=constants.js.map