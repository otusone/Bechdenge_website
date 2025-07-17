const express = require('express');
const router = express.Router();

const portfolioCtrl = require("../controllers/portfolio");



router.post('/createportfolio', portfolioCtrl.createPortfolio);
router.get('/getallportfolios', portfolioCtrl.getAllPortfolios);
router.get('/getportfoliobyid/:id', portfolioCtrl.getPortfolioById);
router.put('/updateportfolio/:id', portfolioCtrl.updatePortfolio);
router.delete('/deleteportfolio/:id', portfolioCtrl.deletePortfolio);




module.exports = router;
