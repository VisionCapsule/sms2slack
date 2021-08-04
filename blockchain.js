const Block = require('./block.js');

class Blockchain {
    constructor(){
        this.chain=[this.createGenesisBlock()];//creates a new chain with a block set by out createGenesisBlock method
    }

    createGenesisBlock(){
        return new Block(0, Date.now(), "Genesis block", "0")
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    