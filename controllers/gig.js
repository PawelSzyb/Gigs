// const db = require("../config/database");
const Gig = require("../models/Gig");
const gigValidation = require("../validations/gigValidation");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get gig list
const getGigsListPage = (req, res) => {
  Gig.findAll()
    .then(gigs => {
      res.render("gigs", { gigs });
    })
    .catch(err => console.log(err));
};

// Get add gig page
const getAddGigPage = (req, res) => {
  res.render("add");
};

// Add a gig
const addGig = (req, res) => {
  let { title, technologies, description, contact_email } = req.body;

  const { budget, errors, isValid } = gigValidation(req.body);
  console.log(isValid);
  if (!isValid) {
    res.render("add", {
      errors,
      title,
      technologies,
      budget,
      description,
      contact_email
    });
  } else {
    technologies = technologies.toLowerCase().replace(/, /g, ",");

    Gig.create({
      title,
      technologies,
      budget,
      description,
      contact_email
    })
      .then(() => res.redirect("/gigs"))
      .catch(err => console.log(err));
  }
};

// Search for a gig
const searchGig = (req, res) => {
  let { term } = req.query;

  // Make sure term is lowercase
  term = term.toLowerCase();

  Gig.findAll({ where: { technologies: { [Op.like]: `%${term}%` } } })
    .then(gigs => res.render("gigs", { gigs }))
    .catch(err => console.log(err));
};

module.exports = {
  getGigsListPage,
  addGig,
  getAddGigPage,
  searchGig
};
