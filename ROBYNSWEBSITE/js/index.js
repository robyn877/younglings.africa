// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBsnhz42kA9h7rUqVzYA8uvMoV5MRIK7EM",
    authDomain: "contact-form-31427.firebaseapp.com",
    databaseURL: "https://contact-form-31427.firebaseio.com",
    projectId: "contact-form-31427",
    storageBucket: "contact-form-31427.appspot.com",
    messagingSenderId: "428507483725",
    appId: "1:428507483725:web:3938ebdfcc02159f5ed604",
    measurementId: "G-F3KFQH2C98"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var firstname = getInputVal('first name');
  var lastname= getInputVal('last name');
  var contactnumber = getInputVal('contact number');
  var message = getInputVal('message');
 
  // Save message
  saveMessage(firstname, lastname, contactnumber, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, contactnumber, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname:lastname,
    contactnumber :contactnumber,
    message:message
  
    
  });
}