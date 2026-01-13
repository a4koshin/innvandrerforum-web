import jwt from "jsonwebtoken";

export function signToken(payload: object) {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    // ❌ DO NOT THROW
    console.error("JWT_SECRET is missing");
    return null;
  }

  return jwt.sign(payload, secret, {
    expiresIn: "1d",
  });
}

export function verifyToken(token: string) {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    console.error("JWT_SECRET is missing");
    return null;
  }

  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}
