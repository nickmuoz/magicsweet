console.log("Este es archivo de js");

let dataMail = new Object();
let html = null;
let to = null;
let about = null;
let contacBy = null;
let customerName = null;
let movil = null;

//Contact Send Info
function setValue(e) {
  html = document.getElementById("Message").value;
  to = document.getElementById("email").value;
  about = "Pagina MagicSweet";
  contacBy = document.getElementById("contacBy").value;
  customerName = document.getElementById("customerName").value;
  movil = document.getElementById("celular").value;
}

async function sendMail() {
  if(Object.keys(dataMail).length === 0){
    alert("llena los campos por favor")
  }else{
  const myheaders = new Headers();
  myheaders.append("Content-Type", "application/x-www-form-urlencoded");
  var urlencoded = new URLSearchParams();
  urlencoded.append("to", "nicolasmuoz@gmail.com");
  urlencoded.append(
    "html",
    `
<div class="card">
    <h1>Bienvenido ${ customerName}</h1>
    <p class="title">Para Nosotros es muy importante tu opinion</p>
    <p>Mi Celuar es: ${movil}</p>
    <p>Mi Correo es: ${to}</p>
    <p>Los Encontre en: ${contacBy}</p>
    <p>Estoy Interesado en: ${html}</p>
</div>`
  );
  urlencoded.append("name", customerName)
  urlencoded.append("text", contacBy);
  urlencoded.append("subject", about);
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
