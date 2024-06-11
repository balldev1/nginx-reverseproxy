import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Hello Dog ${process.env.SERVER_PORT}`);
})