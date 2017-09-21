module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    //如果没有登录，则跳转到登录页面
    if (!req.session.user) {
      req.flash('error', '未登录'); 
      return res.redirect('/signin');
    }
    next();
  },

  checkNotLogin: function checkNotLogin(req, res, next) {
    //如果已经登录了，则返回之前的页面
    if (req.session.user) {
      req.flash('error', '已登录'); 
      return res.redirect('back');//返回之前的页面
    }
    next();
  }
};