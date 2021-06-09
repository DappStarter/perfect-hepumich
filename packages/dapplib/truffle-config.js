require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth pave puppy install hero flee special'; 
let testAccounts = [
"0x97eed38d2bed32643780d99697a35e2174d8d04326125951a5bc0728f64590b5",
"0x678fb89d33f4a710339feee7f9aba122d8d063b3334b2c098d337639017b0e00",
"0xe13ec08cabf0c54e61fa34578a5ec9079f5d237678ab166e3ec08b4974563988",
"0x5a1aae503ccaddc01a0eaa99f8942bcce8495355acc013e09938b0dc7b2e35e0",
"0x3ec17f53d04c9cb699378d5abffcd1116856f758bee5c4083bac42cfaa20d3f8",
"0x99da391b32bccb2004898327a975c211a0f2d6af25aa9278526a6e5ee3e9a661",
"0xa1ed483c7e009523386eef30ccd5b6d86090316a0de7305da5afcc2fc5c8af9c",
"0x51db258521805766d25722000aee166e2d3b693db77ddaffb4ad8bb30d87c6da",
"0xc063f2fc1243a7ec42709ffe7ed16c08798a4b5fe32de31e117288efcd36a3a9",
"0x7ca1ab6f47c52904cf36e735977647248304af5da4322726e0a88c749163c523"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

