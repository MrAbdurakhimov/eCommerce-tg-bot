const { User } = require('../models/');
const isRegistered = async (ctx) => {
  const user = await User.findOne({ user_id: ctx.from.id });

  if (user) {
    return true;
  } else {
    return false;
  }
};

module.exports = isRegistered;
