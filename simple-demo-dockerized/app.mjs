import express from 'express';
import connectDB from './helper.mjs';

const app = express();

app.get('/', (req, res) => {
    res.send('<h2>Hello World</h2>');
});

await connectDB();
app.listen(3000);