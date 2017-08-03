// models/user.js

const users = [
  {username: 'will', password: '123'},
  {username: 'bob', email: '321'}
];

function getUser(username, password) {
    console.log('running get user');
    console.log(username);
    console.log(password);
     console.log('ending get user');
  return users.find(function (user, pass) {
    return user.username == username && user.password == password
  });
}

module.exports = {
  find: getUser,
  all: users
}

