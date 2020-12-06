const Block = require('./block.js');

class Blockchain {
    constructor(){
        this.chain=[this.createGenesisBl