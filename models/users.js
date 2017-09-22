var User = require('../lib/mongo').User;

module.exports = {
  // 注册一个用户
  create: function create(user) {
    return User.create(user).exec();
  },

  // 通过用户名获取用户信息
  getUserByName: function getUserByName(name) {
    return User
      .findOne({ name: name })
      .addCreatedAt()
      .exec();
  },

 // 通过用户名获取用户信息
  getUserList: function getUserList(name) {
    return User
      .find()
      .exec();
  },


  //根据用户id删除用户
  delUserById:function delUserById(id) {
    return User.remove({  _id: id }).exec();
  }

};