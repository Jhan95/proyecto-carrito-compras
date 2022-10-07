//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

//Eventos
eventListeners();
function eventListeners() {
     listaCursos.addEventListener('click', agregarCurso);
}


//Funciones
function agregarCurso(e) {
     e.preventDefault();

     if( e.target.classList.contains('agregar-carrito') ) {
          const cursoSeleccionado = e.target.parentElement.parentElement;

          leerDatosCursos(cursoSeleccionado);
     }

}

function leerDatosCursos(curso) {
     console.log(curso);

     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio span').textContent,
          id: curso.querySelector('a').getAttribute('data-id'),
          cantidad: 1,

     }

     console.log(infoCurso);
}

