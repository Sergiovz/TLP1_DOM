const seccion = document.getElementById("cartas")

const cards = [
    {
        imagen: "https://www.rlocman.ru/i/Image/2015/11/10/JavaScript_Logo.gif",
        titulo: "JavaScript",
        descripcion: "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,​ basado en prototipos, imperativo, débilmente tipado y dinámico"
    },
    {
        imagen: "https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com001.jpg",
        titulo: "Python",
        descripcion: "Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo."
    },
    {
        imagen: "https://th.bing.com/th/id/OIP.YZz0PNXG5c-Rtc_Alj8b7gHaHD?pid=ImgDet&w=206&h=196&c=7",
        titulo: "C++",
        descripcion: "C++ es un lenguaje de programación diseñado en 1979 por Bjarne Stroustrup. La intención de su creación fue extender al lenguaje de programación C y añadir mecanismos que permiten la manipulación de objetos."
    },
    {
        imagen: "https://th.bing.com/th/id/OIP.0hPgbqCFRKl6H2kfrWjGWwHaH9?pid=ImgDet&w=558&h=600&rs=1",
        titulo: "C#",
        descripcion: "C# (pronunciado cii sharp en inglés) es un lenguaje de programación multiparadigma desarrollado y estandarizado por la empresa Microsoft como parte de su plataforma"
    }
]

seccion.innerHTML+=cards.map((cards)=>{
    return `
    <div class="card col-sm-6 m-5 border border-black" style="width: 18rem;">
    <img src="${cards.imagen}" class="card-img-top p-3 rounded-circle" alt="${cards.titulo}">
    <hr>
    <div class="card-body">
      <h5 class="card-title">${cards.titulo}</h5>
      <p class="card-text">${cards.descripcion}</p>
    </div>
    </div>`
}).join("");


const ejemplo = [{},{},{}]

const persona = {}