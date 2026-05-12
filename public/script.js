const catalogo = [
    {
        id: 1,
        titulo: "The Dangers in My Heart",
        tipo: "serie",
        ano: 2023,
        generos: ["Romance", "Escola", "Comédia"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "Witch Hat Atelier",
        tipo: "serie",
        ano: 2025,
        generos: ["Fantasia", "Aventura", "Magia"],
        nota: 10,
        assistido: false
    },
    {
        id: 3,
        titulo: "Spice and Wolf: Merchant Meets the Wise Wolf",
        tipo: "serie",
        ano: 2024,
        generos: ["Aventura", "Fantasia", "Romance"],
        nota: 8.8,
        assistido: true
    },
    {
        id: 4,
        titulo: "Horimiya",
        tipo: "serie",
        ano: 2021,
        generos: ["Romance", "Escola", "Slice of Life"],
        nota: 9.2,
        assistido: true
    },
    {
        id: 5,
        titulo: "I Made Friends with the Second Prettiest Girl in My Class",
        tipo: "serie",
        ano: 2024,
        generos: ["Romance", "Escola"],
        nota: 8,
        assistido: false
    },
    {
        id: 6,
        titulo: "Your Name (Kimi no Na wa)",
        tipo: "filme",
        ano: 2016,
        generos: ["Drama", "Romance", "Sobrenatural"],
        nota: 8.9,
        assistido: true
    }
];

console.log("Catálogo Completo:", catalogo); // [cite: 5]

console.log("Primeiro item:", catalogo[0].titulo);

console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiroItem = catalogo[2];
if (terceiroItem.generos && terceiroItem.generos.length >= 2) {
    console.log("Segundo gênero do terceiro item:", terceiroItem.generos[1]);
} else {
    console.log("Este item não possui um segundo gênero cadastrado.");
}
const outputDiv = document.getElementById('output'); // Seleciona a div que criamos no HTML [cite: 2]