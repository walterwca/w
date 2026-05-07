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
                ${p.stock === "true" ? "En stock" : "Sin stock"}
              </div>

            </div>

          </div>

        </article>

      `;

    });

  });