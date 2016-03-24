'use strict';

const Todo = require('../models/todomodel');

class TodoService {

  static list(){
    return Todo.find({}).exec();
  }



}

function get(id){
  return Todo.findById(id).exce();
}

module.exports = TodoService;