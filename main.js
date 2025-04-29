import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.has('hat'));

console.log(test.length())

console.log(test.keys());

console.log(test.clear())

console.log(test.values());

console.log(test.entries());

console.log(test.capacity)




let addMore = () => {
test.set('moon', 'silver')
test.set('jacket', 'green')
test.set('balls', 'deep')
test.set('galactic', 'baseballer');
test.set('hollow', 'knight');
test.set('among', 'us');
test.set('why', 'me');
test.set('love', 'yourself');
test.set('baby', 'shark');

console.log(test.capacity)

console.log(test.entries());
}