const View = require('./view');
const Model = require('./model');

class Controller {
  constructor(){
    this.view = new View
    this.model = new Model
  }
}


console.log(new Controller)
