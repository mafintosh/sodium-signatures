var tweetnacl = require('tweetnacl')

exports.keyPair = function () {
  var publicKey = Buffer(tweetnacl.lowlevel.crypto_sign_PUBLICKEYBYTES)
  var secretKey = Buffer(tweetnacl.lowlevel.crypto_sign_SECRETKEYBYTES)
  tweetnacl.lowlevel.crypto_sign_keypair(publicKey, secretKey)
  return {publicKey: publicKey, secretKey: secretKey}
}

exports.verify = function (message, signature, publicKey) {
  return tweetnacl.sign.detached.verify(message, signature, publicKey)
}

exports.sign = function (message, secretKey) {
  return Buffer(tweetnacl.sign.detached(message, secretKey))
}
