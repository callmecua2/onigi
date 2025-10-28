import jwt, { JwtPayload } from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET;

export function generateToken (payload: object) {

   if(!SECRET_KEY) {
        throw new Error("JWT_SECRET environment variable is not defined.");
   }

   return jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"})
    
}


export function verifyToken (token: string): JwtPayload | null {

    if(!SECRET_KEY) {
        throw new Error("JWT_SECRET environment variable is not defined.");  
    }

    try {
        return jwt.verify(token, SECRET_KEY) as JwtPayload
    } catch (error) {
        return null
    }
}



