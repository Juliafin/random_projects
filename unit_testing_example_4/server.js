const express = require('express');
const expressJWT = require('express-jwt');
const jsonWebToken = require('jsonwebtoken');
const { PORT, SECRET } = require('./config');
const server = express();

server.use(express.json());


server.get('/heartbeat', (req, res) => {
  res.json({
    message: 'Success',
    ok: true
  })
} )


const authRouter = express.Router();

server.use('/auth', authRouter)

authRouter.get('/getToken', (req, res) => {
  const {userName, password} = req.body;
  const token = jsonWebToken.sign({userName, password}, SECRET, {algorithm: 'HS256'});
  res.json({
    token
  })
})

authRouter.get(
  '/login',
  expressJWT({secret: SECRET, algorithms: ['HS256']}),
  (req, res) => {
    console.log('req.user', req.user);
    res.json({
      user: req.user
    })
  }
  
  ) 




// console.log('require main', require.main, 'module', module);
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}




module.exports = server;