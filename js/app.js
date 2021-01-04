document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // get input Values
  let fname = document.querySelector(".fname").value;
  let lname = document.querySelector(".lname").value;
  let phone = document.querySelector(".phone").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".subject").value;

  if (fname && lname && phone && email && message) {
    sendEmail(fname, lname, phone, email, message);
  } else {
    alert("Please fill up all the fields.")
  }

  document.querySelector(".contact-form").reset();

}

function sendEmail(fname, lname, phone, email, message) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "amritgurungfilms@gmail.com",
      Password: "ylxincwdaoeddejg",
      To: "mayhem_46@hotmail.com",
      From: "amritgurungfilms@gmail.com",
      Subject: `${fname} ${lname} send you a message`,
      Body: `Name: ${fname} ${lname} <br/> Phone: ${phone} </br> Email: ${email} </br> message: ${message}`
    }).then((message) => alert("Mail Send Successfully"))
}
