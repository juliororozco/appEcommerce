const router = require('express').Router();
const cartController = require('../controllers/cartController');
const {verifyToken} = require('../middlewares/verifyToken')

router.get('/find/',verifyToken, cartController.getCart);
router.post('/',verifyToken, cartController.addCart);
router.delete('/:cartItem',verifyToken, cartController.deleteItem);

module.exports =router;