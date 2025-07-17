const express = require('express');
const router = express.Router();

const portfolioCtrl = require("../controllers/portfolio");
const { auth, isAdmin } = require("../middlewares/auth");

router.post('/createportfolio', auth, isAdmin, portfolioCtrl.createPortfolio);
router.get('/getallportfolios', auth, isAdmin, portfolioCtrl.getAllPortfolios);
router.get('/getportfoliobyid/:id', auth, isAdmin, portfolioCtrl.getPortfolioById);
router.put('/updateportfolio/:id', auth, isAdmin, portfolioCtrl.updatePortfolio);
router.delete('/deleteportfolio/:id', auth, isAdmin, portfolioCtrl.deletePortfolio);




module.exports = router;
