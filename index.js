const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

app.get('/', function(req, res){
    res.json('LÊ HẢI TRIỀU THIẾU NỢ 7 TRIỆU')
});
app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
module.exports = app;