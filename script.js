// ===== Part 1: Event Handling =====
// Click button event
const clickBtn = document.getElementById('clickBtn');
const clickMsg = document.getElementById('clickMsg');

clickBtn.addEventListener('click', () => {
  clickMsg.textContent = "Button clicked! 🎉";
});

// ===== Part 2: Interactive Elements =====

// Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter Game
let count = 0;
const incrementBtn = document.getElementById('incrementBtn');
const counter = document.getElementById('counter');

incrementBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

// Collapsible FAQ
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ===== Part 3: Form Validation =====
const signupForm = document.getElementById('signupForm');
const formMsg = document.getElementById('formMsg');

signupForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission
  let isValid = true;

  // Clear previous messages
  formMsg.textContent = '';
  const errors = document.querySelectorAll('.error-msg');
  errors.forEach(err => err.textContent = '');

  // Name validation
  const name = document.getElementById('name');
  if(name.value.trim() === '') {
    isValid = false;
    name.nextElementSibling.textContent = "Name cannot be empty";
  }

  // Email validation using regex
  const email = document.getElementById('email');
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.value.match(emailPattern)) {
    isValid = false;
    email.nextElementSibling.textContent = "Please enter a valid email";
  }

  // Password validation
  const password = document.getElementById('password');
  if(password.value.length < 6) {
    isValid = false;
    password.nextElementSibling.textContent = "Password must be at least 6 characters";
  }

  if(isValid) {
    formMsg.textContent = "Form submitted successfully! ✅";
    formMsg.classList.add('success');
    signupForm.reset();
  }
});
