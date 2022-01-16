function init(type) {
  var id = 0;
  return (name) => {
    id += 1;
    return { id: id, type: type, name: name };
  };
}
const createUser = init('user');
const createBook = init('book');
const dave = createUser('Dave');
const annie = createUser('Annie');
const ncb = createBook('Node Cookbook');
console.log(dave); //prints {id: 1, type: 'user', name: 'Dave'}
console.log(annie); //prints {id: 2, type: 'user', name: 'Annie'}
console.log(ncb); //prints {id: 1, type: 'book', name: 'Node Cookbook'}

console.log(init('car')('bmw')); // different scope
console.log(init('number')('1')); // different scope
