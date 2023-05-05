const jwt = require('jsonwebtoken')
const secretKey = '2302'
function genToken(data, expiresIn = 10000) {
    return jwt.sign(data,secretKey,{expiresIn})
}
function verifyToken(token) {
    try {
        let {iat, exp,...info}=jwt.verify(token, secretKey)
        return info
    }
    catch(err) {
        return false
    }
}
module.exports = {
    genToken,verifyToken
}
