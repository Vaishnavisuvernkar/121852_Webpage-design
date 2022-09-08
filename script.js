const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const city = document.querySelector("#city");
const dob = document.querySelector("#dob");
const address = document.querySelector("#address");
const mobilenumber = document.querySelector("#mobilenumber");
const submit = document.querySelector("button[type = 'submit'");
const reset = document.querySelector("button[type = 'reset'");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    alert("form submitted successfully!!!");
  }
});

reset.addEventListener("click", () => {
  resetFrom();
});

const validateForm = () => {
  requiredValidaion();
  const age = calculateAge(new Date(dob.value));

  if (firstname.value.length < 10 || firstname.value.length > 25) {
    return alert("Please provide firstname in between 10 to 25 characters");
  }

  if (lastname.value.length < 10 || lastname.value.length > 25) {
    return alert("Please provide lastname in between 10 to 25 characters");
  }

  if (age < 18 || age > 50) {
    return alert(
      `your age is ${age} which doesn't match our requiremnts. Need to be in between 18 to 50`
    );
  }

  if (validateMobileNumber(mobilenumber.value.toString())) {
    return alert("Please provide a valid mobile number");
  }

  if (address.value.length >= 150) {
    return alert("Please provide only 150 characters");
  }
  return true;
};

const calculateAge = (dob) => {
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);

  return age;
};

const validateMobileNumber = (mobile) => {
  if (
    (mobile.length == 10 && mobile.startsWith("6")) ||
    mobile.startsWith("7") ||
    mobile.startsWith("8") ||
    mobile.startsWith("9")
  ) {
    return false;
  }
  return true;
};

const requiredValidaion = () => {
  firstname.required = true;
  lastname.required = true;
  dob.required = true;
  address.required = true;
  city.required = true;
  mobilenumber.required = true;
};

const resetFrom = () => {
  firstname.value = "";
  lastname.value = "";
  dob.value = "";
  city.value = "";
  mobilenumber.value = "";
  address.value = "";
};
