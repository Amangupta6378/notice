// auth, isCoordinator, isStudent
const jwt = require('jsonwebtoken');

exports.auth = async(req, res, next)=>{
    try{
        const token = req.body.token;
        if(!token){
            return res.status(401).json({
                success: false,
                message:"Token Missing."
            })
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
            next();
        } catch(err){
            return res.status(401).json({
                success: false,
                message:"Invalid Token."
            })
        }

        next();


    } catch(err){
        return res.status(401).json({
            success:false,
            message:"Something went wrong while verifying the token."
        })
    }
}

exports.isCoordinator = async (req, res, next)=>{
    
    try{
        if(req.user.role !== "teacher"){
            return res.status(401).json({
                success : false,
                message: "This is protected route for Coordinator."
            });
        }
        next();
    } catch(err){
        return res.status(401).json({
            success: false,
            message:"User role is not matching."
        })
    }
}

exports.isStudent = async(req, res, next)=>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success : false,
                message: "This is protected route for Student."
            })
        }
        next();
    } catch(err){
        return res.status(401).json({
            success: false,
            message:"User role is not matching."
        });
    }
};