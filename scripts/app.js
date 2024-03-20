const submit = document.getElementById("button-submit");
const calificaciones = document.querySelectorAll(".score-button");
const divRating = document.getElementById("rating-div");
let nota = 0;

document.addEventListener("DOMContentLoaded", () => {
  calificaciones.forEach((calificacion) => {
    calificacion.addEventListener("click", () => {
      nota = calificacion.value;
      if (calificacion.classList.contains("selectioned")) {
        calificacion.classList.remove("selectioned");
        return;
      }

      calificacion.classList.add("selectioned");

      calificaciones.forEach((otraCalificacion) => {
        if (otraCalificacion !== calificacion) {
          otraCalificacion.classList.remove("selectioned");
        }
      });
    });
  });

  submit.addEventListener("click", () => {
    if (nota === 0) {
      alert("Please select a rating");
      return;
    }

    limpiarHTML(divRating);

    mostrarGracias(nota);
  });
});

function limpiarHTML(div) {
  if (div.firstChild) {
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }
}

function mostrarGracias(calificacion) {
  const contenedor = document.createElement("div");
  contenedor.id = "div-thank";

  const img = document.createElement("img");
  img.src = "../images/illustration-thank-you.svg";
  img.alt = "Thank you";

  const div = document.createElement("div");
  div.textContent = `You selected ${calificacion} out of 5`;
  div.id = "div-response";

  const h1 = document.createElement("h1");
  h1.textContent = "Thank you!";

  const p = document.createElement("p");
  p.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  contenedor.appendChild(img);
  contenedor.appendChild(div);
  contenedor.appendChild(h1);
  contenedor.appendChild(p);

  divRating.appendChild(contenedor);
}
