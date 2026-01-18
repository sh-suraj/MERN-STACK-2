import authServices from "../services/authService.js";


const register = async(req, res)=>{
    try{
    const {name, email, password, role} = req.body;

    if(!name || !email ||!password || !role){
        return res.status(400).json({
            message: "all fields are required!",
        });
    }
    const user = await authServices.register(
        name,
        email,
        password,
        role
    );
    return res.status(201).json({
        message: "user registered successfully",
        ...user
    });
    }
    catch(error){
    return res.status(400).json({
        message:error.message,
    });
}
};


const login = async(req, res)=>
{
    try{
        const {email, password}= req.body;
        if(!email||!password){
            res.status(400).json({
                message:"Please enter all fields",
            });
        }
        const data = await authServices.login(
            email, 
            password,
        );
        return res.status(200).json({
            message:"user logged in!",
            ...data,
        });
    }
    catch(error){
        return res.status(400).json({
            message:error.message,
        });
    }
}

export default {login, register};