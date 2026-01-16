import User from "../models/User.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";

export const registerUser = async ({ username, email, password, firstName, lastName, age }) => {
    const existeUser = await User.findOne({ email });
     if (existeUser) throw new Error("El email ya está registrado");

     const hashedPassword = await bcrypt.hash(password, 10);

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
        {expiresIn: "1h"}
    );

    return {User: newUser, token};
};

export const loginUser = async ({ email, password }) => {
    if (!email || !password) throw new Error("Faltan email o contraseña");

    const user = await User.findOne({ email }); 
    if (!user) throw new Error("Usuario no encontrado");

    const isMatch = await bcrypt.compare(password, user.password); 
    if (!isMatch) throw new Error("Contraseña incorrecta");

    const token = jwt.sign( 
        { id: user._id, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" } );

    return { user, token };
};

export const getUserProfile = async (userId) =>{
    const user = await User.findById(userId).select("-password");

    if (!user) { 
        throw new Error("Usuario no encontrado"); 
    } 
    
    return user;
};