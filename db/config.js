const Sequelize = require('sequelize');

const db = new Sequelize('Blockbuster', 'root', '1111', {
  dialect: 'mysql'
});

db
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const Movies = db.define('movie', {
  title: Sequelize.STRING,
  numOfCopies: Sequelize.INTEGER,
  IMDB_Rating: Sequelize.INTEGER
})

Movies.sync();

module.exports = {
  Movies : Movies
};

