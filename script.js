fetch("https://opensheet.elk.sh/1ki6YFZemS5bg1jZu0EPQt8gI4fFoSZ4paxTcDCZ_wDY/Hoja%201")
  .then(res => res.json())
  .then(data => {

    const products = document.querySelector(".products");

    products.innerHTML = "";

    data.forEach(p => {

      products.innerHTML += `
      
        <article class="card">

          <div class="card-img-wrap">
            <img src="${p.imagen}" alt="${p.nombre}">
          </div>

          <div class="card-body">

            <div class="card-tag">
              ${p.categoria}
            </div>

            <div class="card-name">
              ${p.nombre}
            </div>

            <div class="card-desc">
              ${p.descripcion}
            </div>

            <div class="card-footer">

              <div class="card-price">
                ${p.precio}
              </div>

              <div class="card-stock">
                ${p.stock >= "1" ? "En stock" : "Sin stock"}
              </div>

            </div>

          </div>

        </article>

      `;

    });

  });

/*     FUNCIONES PARA MODAL DE DIGITALIZACION      */
  const btnDigitalizacion = document.getElementById("btnDigitalizacion");
  const modalDigitalizacion = document.getElementById("modalDigitalizacion");
  const cerrarModalDigital = document.getElementById("cerrarModalDigital");

  /* abrir */
  btnDigitalizacion.addEventListener("click", () => {

    modalDigitalizacion.style.display = "flex";

  });

  /* cerrar */
  cerrarModalDigital.addEventListener("click", () => {

    modalDigitalizacion.style.display = "none";

  });

  /* cerrar clic afuera */
  window.addEventListener("click", (e) => {

    if(e.target === modalDigitalizacion){

      modalDigitalizacion.style.display = "none";

    }

  });

/*     FUNCIONES PARA MODAL DE SERVICIOS      */
  const btnServicios = document.getElementById("btnServicios");
  const modalServicios = document.getElementById("modalServicios");
  const cerrarModalServicios = document.getElementById("cerrarModalServicios");

  /* abrir */
  btnServicios.addEventListener("click", () => {

    modalServicios.style.display = "flex";

  });

  /* cerrar */
  cerrarModalServicios.addEventListener("click", () => {

    modalServicios.style.display = "none";

  });

  /* cerrar clic afuera */
  window.addEventListener("click", (e) => {

    if(e.target === modalServicios){

      modalServicios.style.display = "none";

    }

  });


const btnStock = document.getElementById("btnStock");

btnStock.addEventListener("click", (e) => {

  e.preventDefault();

  document.querySelector("#productos").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

});