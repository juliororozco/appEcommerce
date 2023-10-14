const router = require('express').Router();
const orderController = require('../controllers/orderController');
const {verifyToken} = require('../middlewares/verifyToken')

router.post('/',verifyToken, orderController.getUserOrders);

module.exports =router;