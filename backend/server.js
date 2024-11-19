import app from "./app.js";
import dotenv from 'dotenv';
dotenv.config();


app.listen(process.env.PORT, () => {
    console.log(`Server Runnimg On port ${process.env.PORT}`);
});