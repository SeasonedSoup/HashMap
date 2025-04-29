import { LinkedList } from "./linkedList.js";

export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity)
        this.curCapacity = 0;
    }

    repopulate() {
        const oldBuckets = this.buckets
        this.buckets = new Array(this.capacity)

        for (let i = 0; i < oldBuckets.length; i++) {
            if(!oldBuckets[i]) continue

            const pairs = oldBuckets[i].getPairs();

            for(let j = 0; j < pairs.length; j++) {
                this.set(pairs[j][0], pairs[j][1])
            }
        }
    }
    doubleCapacity() {
        this.capacity *= 2;
        this.curCapacity = 0;
        this.repopulate()
    }
    capacityExceeded() {
        if (this.capacity * this.loadFactor < this.curCapacity) {
            this.doubleCapacity();
        } else {
            return;
        }
    }
     //returns an hashed Index based on key.
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        const mod = this.capacity
        //loop mods each character and gets the hashcode leading hashcode to not go out of bounds 0-15 for example if capacity is 16
        //still add if statements for cases still where it does go out of bounds
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % mod;
        }
        return hashCode;
    }
    //creates a bucket
    set(key, value) { 
        const index = this.hash(key)

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        //check if its a empty bucket create a linked list and increase curCapacity by 1
        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedList(); //the current Index now has LinkedList Properties
            this.buckets[index].prepend(key, value)
            this.curCapacity++;
            
            //each time after setting check if curCapacity has exceeded the loadFactor
            this.capacityExceeded(); 

        } else { // replaces the val itself if key exists, if it does not return false and just append a new linked node
            if(!this.buckets[index].findKeyReplaceVal(key, value)){
                this.buckets[index].append(key, value)
            }
        }
    }

    get(key) {
        //find the index where the key exist
        index = this.hash(key) 

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        //does it exist then null or false depends
        if(!this.buckets[index]) {
            return null;
        }
        return this.buckets[index].returnKey(key) //returns the value corresponding to the key
    }

    has(key) { //got lazy explaining should be the same
        index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (!this,buckets[index]) {
            return false
        } else {
            return this.buckets[index].findKey(key)
        }
    }

    remove(key) {
        const index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (!this.buckets[index]) {
            return false
        }

        if (this.buckets[index].findKey(key)) {
           const keyIndex = this.buckets[index].findKeyIndex(key)
           this.buckets[index].removeAt(keyIndex)
           return keyIndex
        }
    }

    length() {
        return this.curCapacity
    }

    clear() {
        for (let i = 0; i < this.capacity; i++) {
            if (!this.buckets[i]) continue;
            if (this.buckets[i]) {
                this.buckets[i].clear();
            }
            this.buckets[i] = undefined;
        }
        this.curCapacity = 0;
    }

    keys() {
        const keys = [];
        
        for (let i = 0; i < this.capacity; i++) {
            if (!this.buckets[i]) continue;
            keys.push(this.buckets[i].getKeys())
        }

        return keys;
    }

    values() {
        const values = [];
        
        for (let i = 0; i < this.capacity; i++) {
            if (!this.buckets[i]) continue;
            values.push(this.buckets[i].getVals())
        }
        
        return values;
    }

    entries() {
        const entries = [];
        
        for (let i = 0; i < this.capacity; i++) {
            if (!this.buckets[i]) continue;
            entries.push(this.buckets[i].getPairs())
        }

        return entries;
    }
}