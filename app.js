const express = require('express');
const app = express();
const cors = require("cors");

const jobRoute = require('./routes/jobs');

app.use(cors());
app.use("/", jobRoute);

const PORT = 3001;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server started on port: ${PORT}`)
})
