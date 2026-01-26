const API_KEY = "#"; // Due to the restdb can only have 1 API key as it needs premium, this have to leave it blank
const API_URL = "https://bloodbrewstudiodb-4049.restdb.io/rest/contactform";

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const selectedReasons = Array.from(document.querySelectorAll('input[name="reason"]:checked')).map(cb => cb.parentNode.textContent.trim());

    const formData = {
      "Name": document.getElementById("name").value,
      "Contactnumber": document.getElementById("contact-number").value,
      "Email": document.getElementById("email").value,
      "Reasonofcontact": selectedReasons, 
      "Comments": document.getElementById("comments").value
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": API_KEY,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    })
    .catch(error => {
      console.error("Error:", error);
      alert("There was an error sending your message.");
    });
  });