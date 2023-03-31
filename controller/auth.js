import Authentication from "../models/authModel.js";

//Register auth
export const registerUser = async (req,res,next) => {
    const user = new Authentication(req.body);
    try {
        const userAdd = await user.save();
        res.status(200).json({message: "User successfully registered."});
    } catch(err) {
        next(err);
    }

}

//Login auth
export const loginUser = async (req,res,next) => {
    const {email, password} = req.body;
    try {
        const giveUser = await Authentication.findOne({email: email})
        if (giveUser.password === password)
            res.status(200).json(giveUser);
        else {
            res.status(200).json({message: "Invalid Password"})
        }
    } catch(err) {
        // next(err);
        res.status(200).json({message: "Email not found, Please register"});
    }
} 

