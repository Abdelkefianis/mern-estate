import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()
//connect to database
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch((err) => {
        console.log(err);
    })

const app = express();

//allow server to recieve .json requests
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

/*app.get('/test', (req, res) => {
    res.send("Hello World");
});*/

//creating and testing first api
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//middleware error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});