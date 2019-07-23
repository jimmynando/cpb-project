var express = require('express');
var router = express.Router();

finances = [
    { desc: "despesa um", value: "2300", date: "2019/07/23", category: 1, closed: 0 },
    { desc: "despesa um", value: "2300", date: "2019/07/23", category: 1, closed: 0 },
    { desc: "despesa um", value: "2300", date: "2019/07/23", category: 1, closed: 0 },
    { desc: "despesa um", value: "2300", date: "2019/07/23", category: 1, closed: 0 },
    { desc: "despesa um", value: "2300", date: "2019/07/23", category: 1, closed: 0 },
    { desc: "despesa um", value: "2300", date: "2019/07/23", category: 1, closed: 0 },
    { desc: "despesa um", value: "2300", date: "2019/07/23", category: 1, closed: 0 }
];

router.get('/', (req, res) => {
    res.send(finances);
});

module.exports = router;