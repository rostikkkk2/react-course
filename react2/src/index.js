let user = require('./user.js');

let auth = {
  generateNewPassword: (user) => {
    user.password = user.password + '1'
  }
}
auth.generateNewPassword(user);
console.log(user.password);
