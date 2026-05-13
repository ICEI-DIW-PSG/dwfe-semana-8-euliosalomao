const catalogo = [
    {
        id: 1,
        titulo: "The Dangers in My Heart",
        tipo: "serie",
        ano: 2023,
        generos: ["Romance", "Escola", "Comédia"],
        nota: 9.5,
        assistido: true,
        img: "\\imgs\\Boku-no-Kokoro-no-Yabai-Yatsu.jpg"
    },
    {
        id: 2,
        titulo: "Witch Hat Atelier",
        tipo: "serie",
        ano: 2025,
        generos: ["Fantasia", "Aventura", "Magia"],
        nota: 10,
        assistido: false,
        img: "\\imgs\\witchhatatelier.jpg"
    },
    {
        id: 3,
        titulo: "Spice and Wolf: Merchant Meets the Wise Wolf",
        tipo: "serie",
        ano: 2024,
        generos: ["Aventura", "Fantasia", "Romance"],
        nota: 8.8,
        assistido: true,
        img: "\\imgs\\spicyandwolf.jpg"
    },
    {
        id: 4,
        titulo: "Horimiya",
        tipo: "serie",
        ano: 2021,
        generos: ["Romance", "Escola", "Slice of Life"],
        nota: 9.2,
        assistido: true,
        img: "\\imgs\\horimiya.webp"
    },
    {
        id: 5,
        titulo: "I Made Friends with the Second Prettiest Girl in My Class",
        tipo: "serie",
        ano: 2024,
        generos: ["Romance", "Escola"],
        nota: 8,
        assistido: false,
        img: "\\imgs\\i-made-friends-with-the-second-prettiest-girl-in-my-class-vol-2.jpg"
    },
    {
        id: 6,
        titulo: "Your Name (Kimi no Na wa)",
        tipo: "filme",
        ano: 2016,
        generos: ["Drama", "Romance", "Sobrenatural"],
        nota: 8.9,
        assistido: true,
        img: "\\imgs\\kiminowa.jpg"
    }
];

const listaCatalogos = document.querySelector("#lista-catalogos");

function renderizarLista(lista) {
  listaCatalogos.innerHTML = "";

  lista.forEach((catalogo) => {
    listaCatalogos.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${catalogo.img}" alt="${catalogo.titulo}"class="card-img-top">
        
        <div class="card-body">
          <h5 class="card-title">${catalogo.titulo}</h5>
          
          <p class="card-text">
            Tipo: ${catalogo.tipo} <br>
            Ano: ${catalogo.ano} <br>
            Gêneros: ${catalogo.generos} <br>
            Nota: ${catalogo.nota}
          </p>
        </div>
      </div>
    `;
  });
}

renderizarLista(catalogo);