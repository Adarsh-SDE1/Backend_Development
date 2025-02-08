import dotenv from 'dotenv';
import  connectDB  from './db/db.js';

dotenv.config({
    path: './env'
})

connectDB();
// const app = express();
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is connected on port: ${process.env.PORT}`);
// })

