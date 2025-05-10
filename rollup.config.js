import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';


export default [
    {
    input: 'src/secp256k1.entry.js',
    output: {
      file: 'dist/secp256k1.min.js',
      format: 'umd',
      name: 'secp256k1'
    },
    plugins: [resolve(), commonjs()]
    },
    {
    input: 'src/sha256.entry.js',
    output: {
      file: 'dist/sha256.min.js',
      format: 'umd',
      name: 'sha256'
    },
    plugins: [resolve(), commonjs()]
    },
    {
    input: 'src/ripemd160.entry.js',
    output: {
      file: 'dist/ripemd160.min.js',
      format: 'umd',
      name: 'ripemd160'
    },
    plugins: [resolve(), commonjs()]
    },
    {
      input: 'src/scure-bip39.entry.js',
      output: {
        file: 'dist/bip39.min.js',
        format: 'umd',
        name: 'bip39'
      },
      plugins: [resolve(), commonjs()]
    },
    {
      input: 'src/scure-bip32.entry.js',
      output: {
        file: 'dist/bip32.min.js',
        format: 'umd',
        name: 'bip32'
      },
      plugins: [resolve(), commonjs()]
    },
    {
      input: 'src/keccak.entry.js',
      output: {
        file: 'dist/keccak.min.js',
        format: 'umd',
        name: 'keccak256'
      },
      plugins: [resolve(), commonjs()]
    }
];
