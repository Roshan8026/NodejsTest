const { User } = require('../models');

const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUser = async (req, res) => {
  // Implement update logic here
};

const deleteUser = async (req, res) => {
  // Implement delete logic here
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
};
