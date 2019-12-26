const express = require('express');
const path = require('path');
require('do')

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/AngularCartApp'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/AngularCartApp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);