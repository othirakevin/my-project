body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 10px 0;
}

.profile-img {
    border-radius: 50%;
    width: 150px;
}

main {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

section {
    margin-bottom: 20px;
}

.skills ul, .projects ul {
    list-style-type: none;
    padding: 0;
}

footer {
    text-align: center;
    padding: 10px 0;
    background-color: #4CAF50;
    color: white;
    position: relative;
}

button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.error-message {
    color: red;
}
3. JavaScript Interactivity (script.js)
CopyReplit
document.getElementById("toggleBio").addEventListener("click", function() {
    const bioSection = document.getElementById("moreBio");
    if (bioSection.style.display === "none") {
        bioSection.style.display = "block";
        this.textContent = "Read Less";
    } else {
        bioSection.style.display = "none";
        this.textContent = "Read More";
    }
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");

    if (!name || !email) {
        errorMessage.textContent = "Please fill out all fields.";
        errorMessage.style.display = "block";
        return false;
    }
    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return false;
    }

    alert(`Thank you for subscribing, ${name}!`);
    return true;
}
