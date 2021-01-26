class Block{
    constructor(timestamp,lastHash,hash,data){
        this.timestamp =timestamp;
        this.lastHash =lastHash;
        this.hash     = hash;
        this.data     = data;
    }
    toString() {
        return ` Block -
            TimeStamp   : ${this.timestamp}
            Last Hash   : ${this.lastHash.substring(0,10)}
            Hash        : ${this.hash.substring(0,10)}
            Data        : ${this.data}
        `;

    }

    static genesis(){
        return new this('genesis time','------------','QD000000',[]);
    }

}
module.exports = Block;