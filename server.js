const express = require('express')
const routes = require('./routes')
const sequelize = require('./config/connection');

//const Users = require('./models/User')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes)

sequelize.sync({ force: false }).then(() => {
  // { force: true } means that everytime the server starts it drops and recreates the tables
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`))
});

//TODO: Run database before starting server