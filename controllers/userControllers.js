const { User } = require('../models')

const getAllUser = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: ['id', 'email', 'createdAt']
    })
    res.status(200).json({ status: 200, message: 'success get all data user', data: user })
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error' });
  }
}

module.exports = { getAllUser }