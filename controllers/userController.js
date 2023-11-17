const User = require('../models/User');

module.exports = {
  getUser: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        res.status(404).json("Usuario no encontrado");
      } else {
        const { password, __v, createdAt, ...userData } = user._doc;
        res.status(200).json(userData);
      }
    } catch (error) {
      res.status(500).json("Error al obtener el usuario");
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.user.id);
      if (!deletedUser) {
        res.status(404).json("Usuario no encontrado");
      } else {
        res.status(200).json("Usuario eliminado exitosamente");
      }
    } catch (error) {
      res.status(500).json("Error al eliminar el usuario");
    }
  }
};
