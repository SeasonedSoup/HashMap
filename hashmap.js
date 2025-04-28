class HashMap {
    constructor(loadFactor, capacity) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(capacity)
        this.curCapacity = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        //modulo in bounds
        const mod = this.capacity

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % mod;
        }
        return hashCode;
    }

    set(key, value) { 
        const index = this.hash(key)

        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
          }

        if (!this.buckets[index]) {
            this.buckets[index] = []; //null to array
        }

        if (this.buckets[index][0] === key) {
            this.buckets[index][1] = value;
        } else {
            this.buckets[index] = [key, value]
        }
        
       this.curCapacity++;
    }

    get(key) {
        index = this.hash(key) 

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        if(!this.buckets[index]) {
            return null;
        }
        return this.buckets[index][1];
    }

    has(key) {
        index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (this.buckets[index][0] === key) {
            return true;
        } else {
            return false;
        }
    }

    remove(key) {
        index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (this.buckets[index][0] === key) {
            this.buckets[index] = undefined
            return true;
        } else {
            return false;
        }
    }

    length() {
        return this.curCapacity
    }

    clear() {
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = undefined;
        }
        this.curCapacity = 0;
    }

    keys() {
        const values = [];
        for (let i = 0; i < this.capacity; i++) {
            //prevent empty bucket iteration
            if (this.buckets[i]) {
                values.push(this.buckets[i][0])   
            }
        }
        return values;
    }

    values() {
        const keys = [];
        for (let i = 0; i < this.capacity; i++) {
            //prevent empty bucket iteration
            if (this.buckets[i]) {
                values.push(this.buckets[i][1])   
            }
        }
        return keys;
    }

    entries() {
        const entries = [];
        for (let i = 0; i < this.capacity; i++) {
            if (this.buckets[i]) {
                entries.push([this.buckets[i][0],this.buckets[i][1]])   
            }
        }
        return entries
    }
}