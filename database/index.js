const path = require('path');
const example_data = require(path.join(__dirname, '../data.json'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: String,
  full_name: String,
  owner_login: String,
  html_url: String,
  owner_avatar_url: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;