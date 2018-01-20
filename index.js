var sodium = require('sodium-universal')
var alloc = require('buffer-alloc-unsafe')

exports.keyPair = function (seed) {
  var publicKey = alloc(sodium.crypto_sign_PUBLICKEYBYTES)
  var secretKey = alloc(sodium.crypto_sign_SECRETKEYBYTES)

  if (seed) sodium.crypto_sign_seed_keypair(publicKey, secretKey, seed)
  else sodium.crypto_sign_keypair(publicKey, secretKey)

  return {
    publicKey: publicKey,
    secretKey: secretKey
  }
}

exports.sign = function (message, secretKey) {
  var signature = alloc(sodium.crypto_sign_BYTES)
  sodium.crypto_sign_detached(signature, message, secretKey)
  return signature
}

exports.verify = function (message, signature, publicKey) {
  return sodium.crypto_sign_verify_detached(signature, message, publicKey)
}
