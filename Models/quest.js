const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Quest = new Schema ({
  title:{
      type: String ,
      required : [true, 'Name is required']
      },
    quetioon:[{type: String},{type: String},{type: String},
      {type: String},{type: String},{type: String},
      {type: String},{type: String},{type: String},
      {type: String}
    ],

    answer :[{type: String},{type: String},{type: String},
      {type: String},{type: String},{type: String},
      {type: String},{type: String},{type: String},
      {type: String}

    ],
  options : [
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}],
      [{type: String},{type: String},{type: String},{type: String}]
  ]  

});

const Group = mongoose.model('group',Quest);

module.exports = Group;