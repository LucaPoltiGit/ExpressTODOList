import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const createAdminIfMissing = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    const adminExists = await User.findOne({ email: adminEmail });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      await User.create({
        username: "admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin"
      });

      console.log("✅ Usuario admin creado automáticamente");
    }
  } catch (error) {
    console.error("❌ Error creando admin:", error.message);
  }
};
