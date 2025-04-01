import { connectToDatabase } from "@/utils/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req,res) {
    await connectToDatabase();
  try { 
    const { name, email, password } = req.body;

    console.log(name, email, password);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    return res.json({ error: "Registration failed" }, { status: 500 });
  }
}
