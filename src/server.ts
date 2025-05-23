import express from 'express'
import dotenv from 'dotenv'
import router from './routes/router';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
app.use(bodyParser.json());

const PORT =  process.env.PORT || 8000;


app.use('/api',router());

app.listen(PORT,()=>{
    console.log(`server is running on Port:${PORT}`)
})
