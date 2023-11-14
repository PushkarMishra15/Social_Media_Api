import User from "../model/User.js";

export const getUser = async(req, res, next) =>{
    let users;
 
    try{
       
        users = await User.find();

    }catch(err){
        console.log(err);
    }
    if(!users){
        
        return res.status(404).json({message: "No User Found"});
    }

    const userData = users.map(user => ({ email: user.email, name: user.name }));
    res.json(userData);

};

export const signup = async (req,res,next)=>{

    const {name, email, password} = req.body;

    let existingUser;

    try{
      
    existingUser = await User.findOne({email})

    }catch(err){
        console.log(err);
    }

    if(existingUser){
           return res.status(400).json({message:"User Already Exists! Login Instead"})
    }
   
    const user = new User({
            name , 
            email,
            password
    });
    
    try{
       await user.save();
    }catch(err){
        console.log(err);
    }

    return res.status(201).json({user});
};

export const login = async(req, res, next)=>{
    const { email, password} = req.body;

    let existingUser;

    try{
 
        existingUser = await User.findOne({email})
    
        }catch(err){
            console.log(err);
        }
    
        if(!existingUser){
               return res.status(404).json({message:"Could not find user by this email"});
        }

        if(password == existingUser.password){
            return res.status(200).json({message:"Login Successful"});

        }
        else{
            return res.status(400).json({message:"Incorrect Password"});
        }
}