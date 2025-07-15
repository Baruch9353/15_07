import express from "express";
import usersR from "./routes/usersR.js";
import {config} from 'dotenv'
config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', usersR)


app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () =>{
    console.log(`Lisening on port ${PORT}`);
})