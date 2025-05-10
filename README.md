# Cosmos & Ethereum Offline Wallet Generator

This project provides an offline, browser-based tool to derive both Cosmos-style Bech32 addresses and Ethereum-style addresses from a BIP39 mnemonic.

## Features

- Pure HTML/JS - works entirely in the browser, no backend required
- Derives both Cosmos-compatible Bech32 addresses and Ethereum-compatible addresses
- Custom derivation path and Bech32 prefix support
- Pre-built UMD bundles for immediate use
- Built with audited cryptographic libraries

## How It Works

This tool uses minimal UMD bundles of cryptographic primitives from `@noble` and `@scure` libraries.

### Process

1. **Mnemonic input** - User provides a BIP39 mnemonic phrase
2. **Seed derivation** - Uses `@scure/bip39` to derive a BIP32 seed
3. **HD wallet derivation** - BIP32 root is derived using `@scure/bip32`, then child key is derived using the provided path
4. **Public key calculation** - Private key is passed to `@noble/secp256k1.getPublicKey()` to generate both compressed and uncompressed public keys
5. **Address Encoding**:
   - Cosmos: `sha256(compressed_pubkey) → ripemd160 → bech32_encode(prefix, words)`
   - Ethereum: `keccak256(uncompressed_pubkey) → last 20 bytes → 0x-prefixed`

## Why These Libraries and Methods?

**There are no existing high-level packages that can derive both address types from a single mnemonic.** Standard wallet libraries are typically built for a specific network, and none allow setting a full custom HDpath. This requires building from low-level primitives.

**Important Note:**
Cosmos uses the compressed pubkey for address derivation, while Ethereum uses the full uncompressed pubkey. The wallet addresses will *not* match what the chain expects if this is not done properly.

## Quick Start

### Using Pre-built Release

1. Download files from `releases/v1.0.0/`
2. Verify checksums:
   ```bash
   sha256sum -c checksums.txt
   ```
3. Open `index.html` in your browser
4. Start generating wallets offline

### Building from Source

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build UMD bundles:
   ```bash
   npm run build
   ```

3. Verify build:
   ```bash
   npm run verify
   ```

## Usage

1. Open `index.html` in your browser
2. Enter your BIP39 mnemonic phrase
3. Configure derivation path (e.g., `m/44'/118'/0'/0/0` for Cosmos)
4. Set Bech32 prefix (e.g., `cosmos`, `osmo`, `genesis`)
5. Click "Derive"
6. Copy your generated addresses and keys

## Security

- **Always verify checksums** before using pre-built files
- This tool is designed for offline use - disconnect from network before entering sensitive data
- Never share private keys or mnemonics
- Use only in trusted environments
- For maximum security, build from source and verify all dependencies

## Verification

```bash
# Verify pre-built release
cd releases/v1.0.0
sha256sum -c checksums.txt

# Or build and verify from source
npm run verify
```

## Credits

- [@noble/hashes](https://github.com/paulmillr/noble-hashes)
- [@noble/secp256k1](https://github.com/paulmillr/noble-secp256k1)
- [@scure/bip39](https://github.com/paulmillr/scure-bip39)
- [@scure/bip32](https://github.com/paulmillr/scure-bip32)

## License

MIT - See LICENSE file for details
