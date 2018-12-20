const db = require("../config/database");
const Gig = require("../models/Gig");

// Get gig list
const getGigsListPage = (req, res) => {
  Gig.findAll()
    .then(gigs => {
      res.render("gigs", {
        gigs
      });
    })
    .catch(err => console.log(err));
};

// Get add gig page
const getAddGigPage = (req, res) => {
  res.render("add");
};

// Add a gig
const addGig = (req, res) => {
  const data = {
    title: "Looking for wordpress website",
    technologies: "wordpress,php,html,css",
    budget: "$1000",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatibus atque recusandae excepturi perferendis doloribus, omnis aperiam ipsa aliquam quae eaque consequatur dignissimos inventore repellat ducimus nemo alias sapiente eligendi!",
    contact_email: "johnboe@gmail.com"
  };

  let { title, technologies, budget, description, contact_email } = data;

  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email
  })
    .then(() => res.redirect("/gigs"))
    .catch(err => console.log(err));
};

module.exports = {
  getGigsListPage,
  addGig,
  getAddGigPage
};
