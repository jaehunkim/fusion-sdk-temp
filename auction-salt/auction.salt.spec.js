"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auction_salt_1 = require("./auction-salt");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
describe('Auction Salt', () => {
    jest.spyOn(crypto_1.default.webcrypto, 'getRandomValues').mockImplementation(() => new Int8Array([9, 10, 10, 10]));
    it('should create salt', () => {
        const salt = new auction_salt_1.AuctionSalt({
            duration: 180,
            auctionStartTime: 1673548149,
            initialRateBump: 50000,
            bankFee: '0'
        });
        expect(salt.build()).toBe('45118768841948961586167738353692277076075522015101619148498725069326976549864');
    });
    it('should create salt with non zero bank fee', () => {
        const salt = new auction_salt_1.AuctionSalt({
            duration: 180,
            auctionStartTime: 1673548149,
            initialRateBump: 50000,
            bankFee: '123123123'
        });
        expect(salt.build()).toBe('45118768841948961586167741099429671146420854337050268925130474518618971309032');
    });
    it('should fail to create salt due to wrong auction start time', () => {
        const salt = new auction_salt_1.AuctionSalt({
            duration: 180,
            auctionStartTime: 1673548149 * 1000,
            initialRateBump: 50000,
            bankFee: '123123123'
        });
        expect(() => salt.build()).toThrow('Some inputs were out of allowed ranges');
    });
    it('should fail to create salt due to initial rate bump out of range', () => {
        const salt = new auction_salt_1.AuctionSalt({
            duration: 180,
            auctionStartTime: 1673548149,
            initialRateBump: 16777215 + 1,
            bankFee: '123123123'
        });
        expect(() => salt.build()).toThrow('Some inputs were out of allowed ranges');
    });
    it('should fail to create salt due to wrong duration', () => {
        const salt = new auction_salt_1.AuctionSalt({
            duration: 16777215 + 1,
            auctionStartTime: 1673548149,
            initialRateBump: 50000,
            bankFee: '123123123'
        });
        expect(() => salt.build()).toThrow('Some inputs were out of allowed ranges');
    });
    it('should decode salt', () => {
        const encodedSalt = '45118768841948961586167741099429671146420854337050268925130474518618971309032';
        const salt = auction_salt_1.AuctionSalt.decode(encodedSalt);
        expect(salt.build()).toBe(encodedSalt);
    });
});
//# sourceMappingURL=auction.salt.spec.js.map