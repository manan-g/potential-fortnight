const express = require('express');
const dotenv = require('dotenv');
const app = express();
const shortnerRoutes = require('./src/routes/shortner');
const mongoose = require("mongoose")
const cors = require('cors');
app.use(cors());

dotenv.config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//database
mongoose
  .connect(process.env.DBSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((err) => {
    next(err);
  });

app.use('/api', shortnerRoutes);

app.get('/', (req, res) => {
  res.send('h-llo');
});

app.use(function(err, req,res, next)
{
  res.status(500).send("Error! Kindly Reload the page");
})

app.listen(
  process.env.PORT,
  console.log(`Server running at ${process.env.PORT}`)
);
