const domain = "https://fercharicastillo.github.io/chari/";
const enterfolder = "visor_pdfs/web/viewer.html?file=pdfs/";
const namefolder = "pdfs_repositorio_libros/algebra_lineal/";

const nombresArchivos = [
  "Axler_Sheldon_Lineal_Algebra_Done_Right.pdf",
  "Kunze_and_Hoffman_Lineal_Algebra.pdf",
  "Jeronimo_Sabia_y_Tesauria_Algebra_Lineal.pdf",
  "Grossman_Stanley_Algebra_Lineal.pdf",
  "Nunez_Juan_y_Sandoval_Ivan_Algebra_Lineal.pdf",
  "David_C_Lay_Algebra_Lineal_y_sus_aplicaciones.pdf"
];

const nombresimagenes = [
  "Algebra Lineal│Axler Sheldon.jpg",
  "Algebra Lineal│David C Lay.jpg",
  "Algebra Lineal│Escuela Politeciona Nacional.jpg",
  "Algebra Lineal│Grossman.jpg",
  "Algebra Lineal│Jeronimo, Sabia y Tesauria.jpg",
  "Algebra Lineal│Kunze y Hoffman.jpg"
];

const contenedor = document.getElementById('home-toc-container');

nombresArchivos.forEach((nombre, index) => {
    const divCard = document.createElement('div');
    divCard.classList.add('home-toc-card');

    const enlace = document.createElement('a');
    enlace.href = domain + enterfolder + namefolder + nombresArchivos[index];
    enlace.addEventListener('click', function(event) {
        event.preventDefault();
        var pdfSrc = domain + enterfolder + namefolder + nombresArchivos[index]; 
        if (pdfSrc) {
            // Guardar el valor de data-pdf
            setPdfSrcAndRedirect(pdfSrc);
        }
    });

    const imagen = document.createElement('img');
    imagen.src = '../../img/repositoriolibros/' + nombresimagenes[index];
    imagen.alt = nombre;

    const spanNombre = document.createElement('span');
    spanNombre.classList.add('home-toc-chapter-name');
    spanNombre.textContent = nombre;

    enlace.appendChild(imagen);
    enlace.appendChild(spanNombre);
    divCard.appendChild(enlace);

    contenedor.appendChild(divCard);
});

function setPdfSrcAndRedirect(pdfSrc) {
    // Guardar el valor de data-pdf
    sessionStorage.setItem('pdfSrc', pdfSrc);
    // Redirigir a la plantilla
    window.location.href = "templatepdfs_libros.html";
}

// Estructura para extraer los pdfs '?file=pdfs/pdfs_repositorio_libros/algebra_lineal/'

