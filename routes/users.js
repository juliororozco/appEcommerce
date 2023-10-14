const router = require('express').Router();
const userController = require('../controllers/userController');
const {verifyToken} = require('../middlewares/verifyToken')

router.get('/', verifyToken, userController.getUser);
router.post('/',verifyToken, userController.deleteUser);

module.exports =router;