var sodium = require('sodium-prebuilt').api

var SEED_BYTES = sodium.crypto_sign_SEEDBYTES || 32

exports.keyPair = function (seed) {
  if (seed) {
    if (seed.length !== SEED_BYTES) throw new Error('Seed must be ' + SEED_BYTES + ' bytes long')
    return sodium.crypto_sign_seed_keypair(seed)
  }
  return sodium.crypto_sign_keypair()
}

exports.verify = function (message, signature, publicKey) {
  return sodium.crypto_sign_verify_detached(signature, message, publicKey)
}

exports.sign = function (message, secretKey) {
  return sodium.crypto_sign_detached(message, secretKey)
}
