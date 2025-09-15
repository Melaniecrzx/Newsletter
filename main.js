const email = document.getElementById('email');
const submitBtn = document.querySelector('.button-email-sumbmit');
const emailSuccess = document.getElementById('email-success');
const mainForm = document.querySelector('.main-form');
const mainSuccess = document.querySelector('.main-success-validation');
const buttonDissmiss = document.querySelector('.button-dissmiss');
const errorMessage = document.getElementById('error-message');
/*email.addEventListener('input', () => {
    if(email.validity.valid){
        submitBtn.classList.add('active');
    } else {
        submitBtn.classList.remove('active');
    }
});*/


email.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const emailValue = email.value;
    if(emailRegex.test(emailValue)) {
        submitBtn.classList.add('active');
    } else {
        submitBtn.classList.remove('active');
    }
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = email.value;
    if (emailRegex.test(emailValue)) { 
        emailSuccess.textContent = emailValue; 
        mainForm.style.display='none'; 
        mainSuccess.style.display='flex'; 
        email.style.border = '';
        email.style.backgroundColor = '';
        email.style.color = '';
        errorMessage.classList.add('hidden'); 

    } 
    else { 
        email.style.border = '1px solid var(--red)';             
        email.style.backgroundColor = '#FFE7E6'; 
        email.style.color = 'var(--red)'; 
        errorMessage.classList.remove('hidden'); 
        emailError.classList.remove('hidden'); 
        emailError.value = emailValue; 
    }
});

buttonDissmiss.addEventListener('click', (e) => {
    e.preventDefault();
    mainForm.style.display='flex';
    mainSuccess.style.display='none';
    email.value = '';
    submitBtn.classList.remove('active');
});