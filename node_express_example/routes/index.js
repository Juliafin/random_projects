const mainRouter = require('express').Router();
const apiRouter = require('./apiRoutes');


mainRouter.use('/api', apiRouter)



module.exports = mainRouter;