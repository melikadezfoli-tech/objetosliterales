/*Prácticas Objetos Literales
1. Crear un objeto Persona
propiedades: nombre, edad, y ciudad. Luego, imprime cada propiedad por separado en la consola.*/

const persona={nombre:'Martin',edad:'50',ciudad:'Valencia'};
console.log(persona)

/*2. Modificar propiedades
A partir del objeto persona anterior, cambia el valor de la propiedad ciudad y 
añade una nueva propiedad llamada profesión. Luego, imprime el objeto actualizado 
en la consola.*/

persona.ciudad="Oviedo";
persona.profesion="pintor";
console.log(persona)

/*3. Objeto Libro
Enunciado:Crea un objeto llamado libro con las propiedades titulo, autor, y añoPublicacion.
Añade un método llamado resumen que devuelva una cadena con un resumen del libro. 
Ejemplo de salida: "El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967."*/

const libro={titulo:'Cien años de Soledad', autor:'Gabriel Garía Márquez', aniopublicacion:'1967'};
libro.resumen="narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo, explorando temas de soledad, amor y el ciclo eterno de la vida"
console.log(libro)

/*4. Array de objetos
Enunciado: Crea un array llamado estudiantes que contenga tres objetos. Cada objeto debe representar un 
estudiante con las propiedades: nombre, edad, y notaFinal. Luego, recorre el array e imprime el nombre y 
la nota final de cada estudiante.*/

var est1={nombre:'alberto',edad:'25',notaFinal:'9'};
var est2={nombre:'Juan',edad:'23',notaFinal:'7'};
var est3={nombre:'Ana',edad:'36',notaFinal:'6'};
const estudiante=[est1,est2,est3];
estudiante.forEach(element => console.log (element));

/*5. Método para calcular la edad
Enunciado: Crea un objeto persona con las propiedades nombre, anioNacimiento, 
y un método llamado calcularEdad que devuelva la edad actual de la persona basado en el año de nacimiento.*/

const perSona={nombre:'Manuela',anioNacimiento:'1966'};
let anio= new Date();
const calcularEdad= anio.getFullYear() - perSona.anioNacimiento;
console.log(calcularEdad);

/*7. Recorrer un objeto
Enunciado: Crea un objeto producto con las propiedades nombre, precio, cantidad. 
Usa un ciclo for...in para imprimir todas las propiedades y sus valores.*/

const producto={nombre:'lápiz', precio:'0.45',cantidad:'2'};

for (const dato in producto) {
    if (!Object.hasOwn(producto, dato)) continue;
    const element = producto[dato];console.log (element)
        
}

/*6. Objeto Coche
Enunciado:
Crea un objeto llamado coche con las propiedades marca, modelo, año y velocidadActual. 
Añade un método acelerar que incremente la velocidad actual en 10 unidades y otro método 
frenar que disminuya la velocidad actual en 10 unidades. Asegúrate de que la velocidad no sea negativa.*/

const coche={marca:'toyota',modelo:'chr',año:'2021',velocidadActual:120};
const acelerar= coche.velocidadActual+10;
console.log(acelerar);
if (coche.velocidadActual>=0) {let frenar=coche.velocidadActual-10;console.log (frenar)};


