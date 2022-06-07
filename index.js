const express = require("express"); // importing express

const app = express(); // initialising it

const server = app.listen(4494, () => {
    console.log("Server started on", server.address().port);
});