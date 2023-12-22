import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';


//function test for route
export const test = (req, res) => {
    res.json({
        message: 'Hello World'
    })
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        console.log(req.user.id + "  " + req.params.id)
        return next(errorHandler(401, "You can only update your own account !"))
    }
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        //update user profile data 
        const updateUser = await User.findByIdAndUpdate(req.params.id, {

            //to prevent user from becomming an admin
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, { new: true })

        const { password, ...rest } = updateUser._doc
        return res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};