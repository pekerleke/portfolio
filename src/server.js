const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/app/dist/portfolio'));
app.get('/',function(req,res){
    res.sendFile(path.join('/app/dist/portfolio/index.html'));
});

app.listen(process.env.PORT || 8080);