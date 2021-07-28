require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain comic hunt kitchen suspect team'; 
let testAccounts = [
"0xaeecc5b47dcdb6bfaed7691d1cb3099d96dc971ddd25ad84d1bcddf94b5a48c1",
"0xbf8d1f60745a9f72798cce1f5648876614cbb59b9bfe291c502b121cd4777d93",
"0xf5eda9ec9663cdcab2c959fa46db1119eaa7bc662afd5442cbf12c9be19bd369",
"0x636d4222e25353a9867675cb7bab769bd1e64ed8723ead840c513cbff93feaf2",
"0x7b14c0d8a448d7b5b57ccd4f2070b3909641448956ca8df4ca4e049813fc7379",
"0xc092c9305a30931cda99892c586729fa725915f00245172dfa88fed6019669c9",
"0x1f4af1ce6d8b9a5796619b5814f7c1d91c5e0644be5addbc8e264e0d0354663e",
"0xa51632b55ac405883f575b924db1f96bd92357d7365260b6d713a24cf64facf3",
"0x6f13aef16a7befb689749ac51ad2e2cc2b4aae05494841fdb6d1949995e7fd24",
"0xe088f5693e46e086a73ad797cc8849f104348a7a52520a4ecdbbc01d22b1f703"
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

