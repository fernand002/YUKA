// Simulación de búsqueda de producto
const products = [
    { name: "Galletas de avena", description: "Galletas saludables con avena", healthScore: 85, ingredients: ["Avena", "Azúcar", "Aceite de coco"] },
    { name: "Cereal integral", description: "Cereal con ingredientes orgánicos", healthScore: 92, ingredients: ["Trigo integral", "Azúcar", "Frutos secos"] },
    { name: "Refresco de cola", description: "Bebida azucarada", healthScore: 40, ingredients: ["Agua", "Azúcar", "Caféina"] }
];

// Función para realizar la búsqueda de un producto
function searchProduct() {
    const searchQuery = document.getElementById("product-search").value.toLowerCase();
    const resultDiv = document.getElementById("product-result");

    // Limpiar resultados previos
    resultDiv.innerHTML = "";

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));

    if (filteredProducts.length === 0) {
        resultDiv.innerHTML = "<p>No se encontraron productos.</p>";
    } else {
        filteredProducts.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");

            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Calificación de salud:</strong> ${product.healthScore}%</p>
                <p><strong>Ingredientes:</strong> ${product.ingredients.join(", ")}</p>
            `;

            resultDiv.appendChild(productElement);
        });
    }
}

// Enviar formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulario enviado con éxito.");
});
