var sodium = require('sodium-prebuilt').api

exports.keyPair = function (seed) {
  if (seed) return sodium.crypto_sign_seed_keypair(seed)
  return sodium.crypto_sign_keypair()
}

exports.verify = function (message, signature, publicKey) {
  return sodium.crypto_sign_verify_detached(signature, message, publicKey)
}

exports.sign = function (message, secretKey) {
  return sodium.crypto_sign_detached(message, secretKey)
}
