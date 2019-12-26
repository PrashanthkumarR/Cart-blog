const express = require('express');
const path = require('path');
const PORT = 8080

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/AngularCartApp'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/AngularCartApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || PORT , ()=>{
    console.log('Listening on port' +" " + PORT);
});