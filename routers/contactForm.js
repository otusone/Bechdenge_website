const express = require("express");
const router = express.Router();

const contactCtrl = require("../controllers/contactForm");
const { auth } = require("../middlewares/auth");



router.post('/create', contactCtrl.createContactForm);
router.get('/all', auth, contactCtrl.getAllContacts);
router.put('/update/:id', auth, contactCtrl.updateContactById);
router.delete('/delete/:id', auth, contactCtrl.deleteContactById);


module.exports = router;