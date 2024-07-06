class Hashmap {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0 ; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
            return hash;
        }
    }

    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        console.log(this.data)
        return this.data;
    }

    get(key){
        let address = this._hash(key);
        let currentBucket = this.data[address];
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key){
                    console.log(currentBucket[i][1])
                    return currentBucket[i][1]

                }
                
            }
        }
        console.log(undefined)
        return undefined
    }

    keys(){
        const keysArray = [];
        for (let index = 0; index < this.data.length; index++) {
          if(this.data[index]){
            keysArray.push(this.data[index][0][0]);
          }
            
        }
        console.log(keysArray)
        return keysArray;
    }
}

const myHashMap = new Hashmap(50);
myHashMap.set('krrish',7);
myHashMap.get('krrish')
myHashMap.keys()