const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



var id = '5ac2e8b1dbe0521c82a122ec';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id //mongoose allows us to pass objectID as string
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id //mongoose allows us to pass objectID as string
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));



User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
