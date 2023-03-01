/*https://randomuser.me/api*/

const foto = document.querySelector("#foto");
const country = document.querySelector("#country");
const celular = document.querySelector("#celular");
const fijo = document.querySelector("#fijo");
const age = document.querySelector("#age");
const city = document.querySelector("#city");
const adress = document.querySelector("#adress");
const dni = document.querySelector("#dni");
const carnet = document.querySelector("#carnet");
const email = document.querySelector("#email");
const nombre = document.querySelector("#nombre");
const civil = document.querySelector("#estado-civil");
var random_boolean = Math.random() < 0.5;
var estado_civil = ["Married", "Single", "Divorced", "Windower"]


function numero_random(min,max) {
  return Math.random() * (max - min) + min;
}


function random_si_no(boleano) {
  if (boleano) {
    boleano = "Sí"
  } else{
    boleano = "No"
  }
  return boleano
}


const UserGenerator = async() => {
  try {

    const url = "https://randomuser.me/api";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const data = results[0];

    foto.src = data.picture.large;
    country.textContent = data.nat;
    nombre.textContent = data.name.first + " " + data.name.last;
    age.textContent = data.dob.age
    city.textContent = data.location.city + " / " + data.location.state + " / " + data.location.country;
    adress.textContent = data.location.street.number + " " + data.location.street.name;
    celular.textContent = data.cell
    email.textContent = data.email
    fijo.textContent = data.phone
    carnet.textContent = random_si_no(random_boolean)
    civil.textContent = estado_civil[Math.round(numero_random(0,3))]
    dni.textContent = Math.round(numero_random(1000000,99999999))

  } catch(error) {
    console.log(error)
  }
}

document.addEventListener('DOMContentLoaded', UserGenerator)
