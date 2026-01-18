import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../database/prisma.js";

const SALT_ROUNDS = 10;

const register = async (name, email, password, role) => {
  const existingUser = await prisma.users.findUnique({
    where: { email },
  });
  if (existingUser) {
    throw new Error("user already exists");
  }
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const users = await prisma.users.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: role,
    },
  });
  return users;
};

const login = async (email, password) => {
  const user = await prisma.users.findUnique({
    where: { email },
  });
  if (!user) {
    throw new Error("Invalid Credentials");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Wrong Password");
  }
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};
export default { register, login };
