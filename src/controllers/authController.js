import { registerUser, loginUser, getUserProfile  } from "../services/authService.js";

const register = async (req, res) => {
    try {
          const{username, email, password, firstName, lastName, age} = req.body
          const { user, token } = await registerUser({ username, email, password, firstName, lastName, age });
          
          res.status(201).json({ msg: "Usuario registrado correctamente", token, user });
    } catch (error) {
          console.error("❌ Error en el registro:", error.message); 
          res.status(500).json({ msg: "Error en el servidor", error: error.message });
    } 
}


const login = async (req, res) => {
     try {
          const {email, password}= req.body
          const { user, token } = await loginUser({ email, password });

          res.json({ msg: "Login exitoso", token, user });
     } catch (error) {
          console.error("❌ Error en login:", error.message); 
          res.status(500).json({ msg: "Error en el servidor", error: error.message });
     }
}; 
const profile = async(req, res) => {
    try {
     const user = await getUserProfile(req.user.id);

     res.json({ msg: "Perfil del usuario", user });
    } catch (error) {
     console.error("❌ Error en profile:", error.message); 
     res.status(400).json({ msg: error.message });
    }
};

export {register, login, profile}