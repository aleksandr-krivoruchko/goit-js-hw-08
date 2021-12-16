import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form")
const input = form.querySelector("input");
const textarea = form.querySelector("textarea");
const STORAGE_KEY = "feedback-form-state";
const formData = {};

form.addEventListener("input", throttle(onTextInput, 0));
form.addEventListener("submit", onFormSubmit);
populateTextInput();

function onTextInput(e) {
	e.preventDefault();
  const {
    elements: { email, message }
  } = e.currentTarget;

  const feedback = {
    email: email.value,
    message: message.value,
}
   localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}



function onFormSubmit(e) {
e.preventDefault();

  console.log(localStorage.getItem(STORAGE_KEY));
   localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
	
}

function populateTextInput() {
	const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));

	if(userData){
		input.value = userData.email;
		textarea.value = userData.message;
	}
}




// function onTextInput(e) {
// 	e.preventDefault();
// 		const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//      if(userData){
// 		formData[e.target.name] = userData.name;

// 	} else{formData[e.target.name] = e.currentTarget.value;
// }
  
//    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
// }
