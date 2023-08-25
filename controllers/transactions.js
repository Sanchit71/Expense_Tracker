// get all transactions

exports.getTransactions = (req,res,next)=>{
    res.send('GET Transactions');
}

// add transaction
exports.addTransactions = (req,res,next)=>{
    res.send('POST Transactions');
}

// delete transaction
exports.deleteTransactions = (req,res,next)=>{
    res.send('Delete Transactions');
}