import iMask from "imask";
import pristine from "pristinejs";

// const form = new pristine(document.getElementById("form-mask"));

window.onload = function () {
  var form = document.getElementById("form-mask");

  // create the pristine instance
  var pristine = new Pristine(form);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // check if the form is valid
    var valid = pristine.validate(); // returns true or false
  });
};

document.addEventListener("submit", (event) => {
  if (!form.validate()) {
    event.preventDefault();
  }
});

const maskOptions = {
  mask: "80000000000",
};

iMask(document.querySelector("#phone-mask"), maskOptions);
