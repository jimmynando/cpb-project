const Finance = require('../models/Finance');
require('dotenv').config();
const secret = process.env.JWTTOKEN;
const jwt = require("jsonwebtoken");

const financeController = {}

financeController.financeList = (req, res) => {
    Finance.find((err, data) => {
        res.json(data);
    });
}

financeController.financeById = (req, res) => {
    const { idFinance } = req.params;

    Finance.find({ '_id': idFinance }, (err, data) => {
        res.json(data);
    });
}

financeController.financeAdd = (req, res) => {
    const { finance } = req.body;

    Finance.create(finance, err => {
        if (err) {
            console.log(err);
            return res.json({
                status: 500,
                message: err.message,
            });
        }
        return res.json({
            status: 200,
            message: "Registro inserido com sucesso.",
        });
    });
}

financeController.financeEdit = (req, res) => {
    const { idFinance } = req.params;
    const { finance } = req.body;

    Finance.findByIdAndUpdate(idFinance, finance, { new: true }, err => {
        if (err) return err;
        return res.status(200).send("Registro alterado com sucesso.");
    });
}

financeController.financeDel = (req, res) => {
    const { idFinance } = req.params;

    Finance.deleteOne({ '_id': idFinance }, err => {
        if (err) {
            console.log(err);
            return res.json({
                status: 500,
                message: err.message,
            });
        }
        return res.json({
            status: 200,
            message: "Registro removido com sucesso.",
        });
    });
}

financeController.financeToken = (req, res) => {
    const payload = {
        user: {
            id: 32132132121
        }
    };
    jwt.sign(
        payload,
        secret,
        { expiresIn: 360000000 },
        (err, token) => {
            if(err) throw err;
            res.json({ token });
        }
    )
}


module.exports = financeController;
