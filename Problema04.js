// Factory function para crear usuarios
function createUser(nombre, apellido, email, password, dpi) {
    return {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        dpi: dpi,
        direccion: {
            municipio: 'Jocotenango',
            calle: 'Calle ancha',
            numero: 25
        },
        estado: true,
        recuperarClave: function() {
            console.log(`Recuperar clave para ${this.nombre} ${this.apellido}`);
        },
        cambiarDireccion: function(nuevaDireccion) {
            this.direccion = nuevaDireccion;
            console.log(`La dirección de ${this.nombre} ${this.apellido} ha sido cambiada a ${JSON.stringify(this.direccion)}`);
        }
    };
}

// Crear los usuarios usando la factory function
let usuario0 = createUser('Paola', 'Ortiz', 'paola@company.ru', '1234', '1234567890');
let usuario1 = createUser('Paolo', 'Ortega', 'paolo@company.ru', '5678', '0987654321');
let usuario2 = createUser('Pedro', 'Pérez', 'pedro@company.ru', 'abcd', '1122334455');
let usuario3 = createUser('Pablo', 'Ramírez', 'pablo@company.ru', 'efgh', '5566778899');
let usuario4 = createUser('Patricia', 'Rodríguez', 'patricia@company.ru', 'ijkl', '6677889900');
let usuario5 = createUser('Pamela', 'Reyes', 'pamela@company.ru', 'mnop', '7788990011');

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
