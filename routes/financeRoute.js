const express = require('express');
const router = express.Router();

const financeController = require('../controllers/financeController');

router.get('/', financeController.financeList);
router.get('/token', financeController.financeToken);
router.get('/:idFinance', financeController.financeById);
router.post('/', financeController.financeAdd);
router.put('/:idFinance', financeController.financeEdit);
router.delete('/:idFinance', financeController.financeDel);

module.exports = router;
