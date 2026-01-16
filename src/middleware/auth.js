import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => { 
  const token = req.header("Authorization");

  if(!token){
    return res.status(401).json({ msg: "Acceso denegado. No hay token." });
  }

  try { 
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET); 
    req.user = decoded; 
    next();
  }catch(error){
    res.status(401).json({ msg: "Token inválido" });
  }
}

export default authMiddleware;
