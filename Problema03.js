// Problema III: Usuarios con propiedad dpi y método cambiarDireccion

class Usuario {
    constructor(nombre, apellido, email, password, dpi) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.dpi = dpi;
        this.direccion = {
            municipio: 'Jocotenango',
            calle: 'Calle ancha',
            numero: 25
        };
        this.estado = true;
    }

    recuperarClave() {
        console.log(`Recuperar clave para ${this.nombre} ${this.apellido}`);
    }

    cambiarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
        console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${JSON.stringify(this.direccion)}`);
    }
}

// Crear los usuarios con la nueva propiedad y método
let usuario0 = new Usuario('Paola', 'Ortiz', 'paola@company.ru', '1234', '1234567890');
let usuario1 = new Usuario('Paolo', 'Ortega', 'paolo@company.ru', '5678', '0987654321');
let usuario2 = new Usuario('Pedro', 'Pérez', 'pedro@company.ru', 'abcd', '1122334455');
let usuario3 = new Usuario('Pablo', 'Ramírez', 'pablo@company.ru', 'efgh', '5566778899');
let usuario4 = new Usuario('Patricia', 'Rodríguez', 'patricia@company.ru', 'ijkl', '6677889900');
let usuario5 = new Usuario('Pamela', 'Reyes', 'pamela@company.ru', 'mnop', '7788990011');

// Mostrar las características de los usuarios y ejecutar los métodos
console.log(usuario0);
usuario0.recuperarClave();
usuario0.cambiarDireccion({ municipio: 'Antigua', calle: 'Calle nueva', numero: 10 });

console.log(usuario1);
usuario1.recuperarClave();
usuario1.cambiarDireccion({ municipio: 'Antigua', calle: 'Calle nueva', numero: 11 });

console.log(usuario2);
usuario2.recuperarClave();
usuario2.cambiarDireccion({ municipio: 'Antigua', calle: 'Calle nueva', numero: 12 });

console.log(usuario3);
usuario3.recuperarClave();
usuario3.cambiarDireccion({ municipio: 'Antigua', calle: 'Calle nueva', numero: 13 });

console.log(usuario4);
usuario4.recuperarClave();
usuario4.cambiarDireccion({ municipio: 'Antigua', calle: 'Calle nueva', numero: 14 });

console.log(usuario5);
usuario5.recuperarClave();
usuario5.cambiarDireccion({ municipio: 'Antigua', calle: 'Calle nueva', numero: 15 });
