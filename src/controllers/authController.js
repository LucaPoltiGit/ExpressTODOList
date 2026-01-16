import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    try {
          const{username, email, password, firstName, lastName, age} = req.body

          const existeUser = await User.findOne({email});
          if(existeUser){
               return res.status(400).json({msg: "El email ya esta registrado"});
          }

          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);

          const newUser = new User({
               username,
               email,
               password: hashedPassword,
               firstName,
               lastName,
               age
          });

          await newUser.save();

          const token = jwt.sign(
               {id: newUser._id, role: newUser.role},
               process.env.JWT_SECRET,
               {expiresIn:"1h"}
          );

          res.status(201).json({ msg: "Usuario registrado correctamente", token });
    } catch (error) {
          console.error("❌ Error en el registro:", error.message); 
          res.status(500).json({ msg: "Error en el servidor", error: error.message });
    } 
}


const login = async (req, res) => {
     try {
          const {email, password}= req.body
          if(!email || !password){
               return res.status(400).json({ msg: "Faltan email o contraseña" });
          };

          const user = await User.findOne({ email });
          if(!user){
               return res.status(400).json({msg: "Usuario no encontrado"});
          };

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) { 
               return res.status(400).json({ msg: "Contraseña incorrecta" });
          };

          const token = jwt.sign( 
               { id: user._id, role: user.role }, 
               process.env.JWT_SECRET, 
               { expiresIn: "1h" }
           );

          res.json({
               msg:"Login exitoso",
               token
          });

     } catch (error) {
          console.error("❌ Error en login:", error.message); 
          res.status(500).json({ msg: "Error en el servidor", error: error.message });
     }
}; 
const profile = (req, res) => {
     res.json({ message: "Perfil de usuario (pendiente de implementar)" });
};

export {register, login, profile}