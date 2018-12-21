const isEmpty = require("./is-empty");

const gigValidation = data => {
  let errors = [];
  let budget = "";

  if (!data.title) {
    errors.push({ text: "Please add a title" });
  }
  if (!data.technologies) {
    errors.push({ text: "Please add a technologies" });
  }
  if (!data.description) {
    errors.push({ text: "Please add a description" });
  }
  if (!data.contact_email) {
    errors.push({ text: "Please add a email" });
  }
  if (!data.budget) {
    budget = "Unknown";
  } else {
    budget = `$${data.budget}`;
  }

  return {
    budget,
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = gigValidation;
