const form = document.querySelector('.feedback-form');
const KEY_FORM_INPUT = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input',onInputData);

shouData();

const onFormData = {
  email: "",
  message:"",
};
function onInputData() {
  onFormData.email = form.elements.email.value.trim();
    onFormData.message = form.elements.message.value.trim();
    localStorage.setItem(KEY_FORM_INPUT, JSON.stringify(onFormData))
}


function shouData() {
  let dataForm = JSON.parse(localStorage.getItem(KEY_FORM_INPUT));
    if (dataForm) {
      
    form.elements.email.value = dataForm.email;
    form.elements.message.value = dataForm.message;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (evt.currentTarget.elements.email.value === '' ||
    evt.currentTarget.elements.message.value === '')
    return alert('Заповніть всі поля');
  
  
    console.log({
        email: evt.currentTarget.elements.email.value,
        message: evt.currentTarget.elements.message.value,
    });

  evt.currentTarget.reset();
  localStorage.removeItem(KEY_FORM_INPUT);
}