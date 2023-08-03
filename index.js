const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1800,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 2000,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 3000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 2900,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];
let contendorRender = document.getElementById("render");
let storageIdPizza = localStorage.getItem("idPizza");
if (storageIdPizza) {
  let pizzaEncontrada = buscarPizzaPorId(storageIdPizza);
  mostrarPizza(pizzaEncontrada);
}

const formPizza = document.getElementById("formulario");
console.log(formPizza);
formPizza.addEventListener("submit", function (e) {
  e.preventDefault();
  let idPizza = e.target.elements.numero.value;
  let pizzaEncontrada = buscarPizzaPorId(idPizza);
  if (!idPizza) {
    contendorRender.innerHTML = "No se ingresó un número";
  } else if (!pizzaEncontrada) {
    contendorRender.innerHTML = "El número ingresado no coincide con ningún id";
  } else {
    mostrarPizza(pizzaEncontrada);
    localStorage.setItem("idPizza", idPizza);
  }
});

function buscarPizzaPorId(id) {
  let pizzaEncontrada = null;
  pizzas.forEach(function (pizza) {
    if (pizza.id == id) {
      pizzaEncontrada = pizza;
    }
  });
  return pizzaEncontrada;
}

function mostrarPizza(pizza) {
  console.log(pizza.nombre, pizza.precio);
  contendorRender.innerHTML = `El nombre de la pizza es ${pizza.nombre} y su precio es ${pizza.precio} <img src="${pizza.imagen}">`;
}

//buscarPizzaPorId(idPizza);
/* console.log(buscarPizzaPorId(idPizza)); */

/* const otronombre = document.getElementById("boton-de-prueba");

otronombre.addEventListener("click", function (e) {
  console.log(e);
  console.log("hola");
});
 */
