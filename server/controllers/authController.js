import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import * as userModel from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req,res) => {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            message:"Email and password are required"
        });
    }

    try {
        userModel.findUserByEmail(email,async (err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"db error during registration"
                });
            }
            if(result.length > 0){
                return res.status(400).json({
                    message:"email already in use"
                })
            }

            const hashedPassword = await bcrypt.hash(password,10);

            userModel.createUser(email,hashedPassword,(err)=>{
                if(err){
                    return res.status(500).json({ 
                        message: 'Error registering user', error: err 
                    });   
                }
                res.status(201).json({ 
                    message: 'User registered successfully' 
                });
            });
        })
    } catch(err){
        res.status(500).json({
            message:"error during registration",
            error:err
        });
    }
}


// User Login Controller
export const login = (req,res)=>{
    const {email,password}=req.body;
    userModel.findUserByEmail(email, async (err, result)=>{
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
    
        if (result.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }
    
        const user = result[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION,
          });

          res.json({ message: 'Login successful', token });
    });
};