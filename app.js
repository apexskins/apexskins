const express = require('express');
const app     = express();

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});


// ========= Run server ==========
app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on Port " + (process.env.PORT || 8000));
});