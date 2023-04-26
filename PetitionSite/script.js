// Add your query for the sign now button here

const addSignature = () => {
  const name = document.getElementById("name").value;
  const hometown = document.getElementById("hometown").value;
  // Not using for now...
  // const email = document.getElementById("email").value;

  const existingSignatures = document.getElementsByClassName('petition-container')[0];
  const signatures = existingSignatures.getElementsByClassName('signatures')[0];
  const newSignature = document.createElement("p");


  newSignature.innerHTML = `
    🖊️ ${name} from ${hometown} supports this.
  `;

  signatures.appendChild(newSignature);

  // Clear form for next signature
  document.getElementById("name").value = "";
  document.getElementById("hometown").value = "";
  document.getElementById("email").value = "";
}

// Add a click event listener to the sign now button here
function darkMode() {
  var element = document.body;
  element.classList.toggle("darkmode");
}