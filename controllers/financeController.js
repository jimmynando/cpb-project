const Finance = require('../models/Finance');

exports.financeList = (req, res) => {
    Finance.find( (err, data) => {
        res.json(data);
    });
}

exports.financeById = (req, res) => {
    const { idFinance } = req.params;

    Finance.find({'_id': idFinance}, (err, data) => {
        res.json(data);
    });
}

exports.financeAdd = (req, res) => {
    const { finance } = req.body;

    Finance.create(finance, err => {
        if (err) return err;
        return res.status(200).send("Registro inserido com sucesso.");
    }); 
}

exports.financeEdit = (req, res) => {
    const { idFinance } = req.params;
    const { finance } = req.body;

    Finance.findByIdAndUpdate(idFinance, finance, {new: true}, err => {
        if (err) return err;
        return res.status(200).send("Registro alterado com sucesso.");
    });
}

exports.financeDel = (req, res) => {
    const { idFinance } = req.params;
    
    Finance.deleteOne({'_id': idFinance}, err => {
        if (err) return err;
        return res.status(200).send("Registro removido com sucesso.");
    });
}
