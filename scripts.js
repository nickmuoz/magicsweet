console.log("Este es archivo de js");

let dataMail = new Object({
  html: null,
  to: null,
  about: null,
  contacBy:null,
  customerName:null,
  movil:null
})

// let dataMail = new Object();
// let html = null;
// let to = null;
// let about = null;
// let contacBy = null;
// let customerName = null;
// let movil = null;

function validateEmail() {
  console.log("Validate Mail")
  var to = document.getElementById("email").value;
  var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!pattern.test(to)) {
    alert("Por favor ingresa un correo electrónico válido");
    return false;
  }
  return true;
}

//Contact Send Info
function setValue(e) {
  dataMail.html = document.getElementById("Message").value;
  dataMail.to = document.getElementById("email").value;
  dataMail.about = "Pagina MagicSweet";
  dataMail.contacBy = document.getElementById("contacBy").value;
  dataMail.customerName = document.getElementById("customerName").value;
  dataMail.movil = document.getElementById("celular").value;
}

async function sendMail() {
  if(Object.keys(dataMail).length === 0){
    alert("llena los campos por favor")
  }else{
  // validateEmail(to) 
  const myheaders = new Headers();
  myheaders.append("Content-Type", "application/x-www-form-urlencoded");
  var urlencoded = new URLSearchParams();
  urlencoded.append("to", "nicolasmuoz@gmail.com");
  urlencoded.append(
    "html",
    `
<div class="card">
    <h1>Bienvenido ${dataMail.customerName}</h1>
    <p class="title">Para Nosotros es muy importante tu opinion</p>
    <p>Mi Celuar es: ${dataMail.movil}</p>
    <p>Mi Correo es: ${dataMail.to}</p>
    <p>Los Encontre en: ${dataMail.contacBy}</p>
    <p>Estoy Interesado en: ${dataMail.html}</p>
</div>`
  );
  urlencoded.append("name", dataMail.customerName)
  urlencoded.append("text", dataMail.contacBy);
  urlencoded.append("subject", dataMail.about);
  urlencoded.append("from", "negocioscol@interactivebytes.co");

  var requestOptions = {
    method: "POST",
    headers: myheaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://magicsweetapi.fly.dev/mail/send-mail", requestOptions)
    .then((response) => response.json())
  .then( response => {
    var contacUs = JSON.stringify(response);
    console.log(customerName)
    alert (`gracias ${ contacUs} por tu opinion` );
    window.location.href="#home";
  })
 .catch((error) => console.log("error", error));
}}
