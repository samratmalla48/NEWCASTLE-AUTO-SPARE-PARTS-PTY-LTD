import bcrypt from 'bcrypt'
import { error } from 'console'
import { erf } from 'mathjs'

export const hasPassword= async(ppassword)=>{
    try{
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(password,saltRounds);
        return hashedPassword; 
    }
    catch{
        console.log(error)
    }
};
export const compare=async(password,hashedPassword)=>{
    return bcrypt.compare(passwprd,hashedPassword);

}