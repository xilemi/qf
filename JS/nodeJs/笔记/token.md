## token的流程 
### token作用
后端传递给前端请求的一个令牌，请求资源时的一种验证机制
使用jsonwebtoken 包  
使用sign方法生成token，参数需要被生成的data，秘钥，用于加密token，{expiresIn}过期时间
使用verity方法进行解包，参数为加密的token和秘钥，能够被解密的，表示token存在或者有效，
### 生成token，并存储
一般是在登录接口等位置进行生成token
#### 后端
登录成功，根据用户名等信息生成token，并将token携带在登录成功返回的数据中
#### 前端
前端收到登录成功的数据后，取出token数据，使用localStroage存储在本地
### 读取token，并解析验证
一般是删除，添加，修改等接口需要验证token，token存在，并且能被解析出内容，才是进行后续的操作，这是这些接口需要进行的验证
#### 前端
首先要对ajax进行修改，在发送请求时，要携带token在请求头内，对ajax进行改造，添加一个setRequestHeader()的操作，以键值对的形式传递。这是准备工作。
前端再在localStroage内取到token，传入ajax，随请求一起发送。
#### 后端
前端发送的token在请求头内，后端通过req.headers可以取到token的内容，再通过varity内token进行解密。根据解密后的数据判断是否已经登录。