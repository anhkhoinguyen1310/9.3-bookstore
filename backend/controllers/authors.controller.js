
const Author = require("../models/Author");

const createAuthor = async (req, res) => {
    const author = new Author({ name: 'Treo Hi Foo Bar' });
    await author.save()
    res.json({
        data: author
    })
  };
  
  module.exports = {
    createAuthor,
  };
  