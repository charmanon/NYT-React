// Require mongoose
const mongoose = require('mongoose');

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
const articleSchema = new Schema({
  // headline, a string, must be entered
  headline: {
    type: String,
    required: true,
    unique: true
  },
  // summary, a string, must be entered
  summary: {
    type: String,
    required: true
  },
  // date is just a string
  date: String,
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model using the articleSchema
var Article = mongoose.model("Article", articleSchema);

// Export the Headline model
module.exports = Article;
