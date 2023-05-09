const {verifyToken}=require('../lib/token.js')
function isToken(req,res,next) {
    let token = req.headers.token
    var info = verifyToken(token)
    if (token) {
        if (Object.keys(info).length != 0) {
           next()
        }
        else {
            res.send({
                status: false,
                message:'token过期,请重新登录'
           })
        }
        
    } else {
        res.send({
            status: false,
            message:'请登录后操作'
       })
    }
}
module.exports ={isToken}