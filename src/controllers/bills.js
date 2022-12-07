const {
    data,
    bills
} = require('../dataBase'); 


const billsList = (req, res) => {
    const { senha_banco } = req.query;

    if(!senha_banco) return res.status(400).json({
        mensangem: "Digite uma senha!"
    });
    if(senha_banco !== data.password) return res.status(400).json({
        mensangem: "Senha do banco inválida!"
    });
    return res.status(201).json(bills);
}


module.exports ={
    billsList
}