import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form")
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");
const STORAGE_KEY = "feedback-form-state";


form.addEventListener("input", throttle(onTextInput, 0));
form.addEventListener("submit", onFormSubmit);
const formData = {};


populateTextInput();

function populateTextInput() {
  const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));

	if(userData && Object.values(userData) !== []){

    form.email.value = userData.email;
    form.message.value = userData.message;
    formData.email = userData.email;
    formData.message = userData.message;

	}
}


function onTextInput(e) {
	e.preventDefault();

  formData[e.target.name] = e.target.value;

   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(e) {
e.preventDefault();

  console.log(formData);

   localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
}

