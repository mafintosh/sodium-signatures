var sodium = require('sodium-prebuilt').api

exports.keyPair = function (seed) {
  if (seed) {
    if (seed.length !== sodium.crypto_sign_SEEDBYTES) {
      throw new Error('Seed must be ' + sodium.crypto_sign_SEEDBYTES + ' bytes long')
    }

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
