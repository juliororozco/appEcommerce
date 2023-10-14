const User = require("../models/User");
const   CryptoJS= require('crypto-js');
const jwt= require("jsonwebtoken");

module.exports ={
    createUser: async (req, res) => {
        const NewUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString(),
            city: req.body.city,
            department: req.body.department,
            direction: req.body.direction,
        });
    
        try {
            await NewUser.save(); // Guardar el nuevo usuario en la base de datos
            res.status(201).json({ message: "Usuario creado con éxito" });
        } catch (error) {
            res.status(500).json({ message: error });
        }
    },
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            // Si el email no está registrado
            if (!user) {
                return res.status(401).json("Email no registrado.");
            }
            const descryptedpass = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
            const thepassword = descryptedpass.toString(CryptoJS.enc.Utf8);
            // Si la contraseña no coincide
            if (thepassword !== req.body.password) {
                return res.status(401).json("Contraseña incorrecta");
            }
            // Generar Token
            const userToken = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: "21d" }
            );
    
            const { password, __v, createAt, ...others } = user._doc;
            res.status(200).json({ ...others, token: userToken });
        } catch (error) {
            res.status(500).json("Error al iniciar sesión");
        }
    }
    
}