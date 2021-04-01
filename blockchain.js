const Block = require('./block.js');

class Blockchain {
    constructor(){
        this.chain=[this.createGenesisBlock()];//creates a new chain with a block set by out createGenesisBlock me