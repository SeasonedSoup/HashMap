export class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    
    append(key, value) {
        if (this.head === null) {
            this.prepend(value);
        } else {
            let tmp = this.head
            while(tmp.next != null) tmp = tmp.next
            
            tmp.next = new Node(key, value, null)
        }
    }
    prepend(key, value) {
        this.head = new Node(key, value, this.head)
    }

    size() {
        let count = 0;
        let tmp = this.head
        while(tmp != null) {
            count++ 
            tmp = tmp.next
        }
        return count;
    }

    head() {
        if (this.head === null) {
            return null
        } else {
            return this.head
        }
    }

    tail() {
        if (this.head === null) {
            return null
        } else {
            let tmp = this.head
            while (tmp.next != null) tmp = tmp.next

            return tmp
        }
    }

    at(index) {
        if (this.head === null || index > size() - 1 || index < 0) {
            return null
        } else {
            let tmp = this.head 
            let curIndex = 0
           
            while (tmp.next != null) {
                if (index === curIndex) {
                    return tmp.value
                }
                tmp = tmp.next
                curIndex++;
            }
            return null;
        }
    }

    pop() {
        if (this.head === null) {
            return;
        } 
        let tmp = this.head 
        if (tmp.next === null) {
            this.head = null
        }
        while(tmp.next && tmp.next.next != null) {
            tmp = tmp.next
        }
        const value = tmp.next.value
        tmp.next = null
        return value
    }

    clear() {
        this.head = null;
    }
    
    returnKey(key) {
        if (this.head === null) {
            return null;
        } 

        let tmp = this.head 
        while (tmp != null) {
            if (tmp.key === key) return tmp.value;
            tmp = tmp.next
        }
        return null;
    }

    findKeyReplaceVal(key, value) {
        if (this.head === null) {
            return false;
        }
        let tmp = this.head

        while (tmp != null) {
            if (tmp.key === key) {
                tmp.value = value
                return true;
            }
            tmp = tmp.next
        }
        return false;
    }

    findKey(key) {
        if (this.head === null) {
            return false;
        } 
        let tmp = this.head

        while (tmp != null) {
            if (tmp.key === key) return true;
            tmp = tmp.next
        }
        return false;
    }

    findKeyIndex(key) {
        if (this.head === null) {
            return -1;
        } 
        let tmp = this.head
        let index = 0

        while (tmp != null) {
            if (tmp.key === key) return index;
            tmp = tmp.next
            index++
        }
        return -1;
    }

    removeAt(index) {  
        if (index >= this.size() || index < 0) {
            throw new Error('not valid index');
        } else {
            let tmp = this.head; 

            if (index === 0) {
                this.head = this.head.next
            }
            let curIndex = 0;

            while(index - 1 > curIndex) {
                tmp = tmp.next
                curIndex++
            } 
            tmp.next = tmp.next.next
        }
    }

    toString() {
        let res = ''
        let tmp = this.head 

        while(tmp!= null) {
            res += `( [${tmp.key}, ${tmp.value}] ) -> `
            tmp = tmp.next
        }
        res += 'null'
        return res;
    }

    getKeys() {
        const keys = []
        let tmp = this.head 

        while(tmp) {
            keys.push(tmp.key)
            tmp = tmp.next
        }

        return keys
    }

    getVals() {
        const values = []
        let tmp = this.head
        
        while(tmp) {
            values.push(tmp.value)
            tmp = tmp.next
        }

        return values
    }

    getPairs() {
        const pairs = []
        let tmp = this.head
        
        while (tmp) {
            pairs.push([tmp.key, tmp.value])
            tmp = tmp.next
        } 

        return pairs
    }
}


class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

