// Problema II: Usuarios con funcionalidad recuperarClave

let usuario0 = {
    nombre: 'Paola',
    apellido: 'Ortiz',
    email: 'paola@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    recuperarClave: function() {
        console.log(`Recuperar clave para ${this.nombre} ${this.apellido}`);
    }
};

let usuario1 = {
    nombre: 'Paolo',
    apellido: 'Ortega',
    email: 'paolo@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    recuperarClave: function() {
        console.log(`Recuperar clave para ${this.nombre} ${this.apellido}`);
    }
};

let usuario2 = {
    nombre: 'Pedro',
    apellido: 'Pérez',
    email: 'pedro@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    recuperarClave: function() {
        console.log(`Recuperar clave para ${this.nombre} ${this.apellido}`);
    }
};

let usuario3 = {
    nombre: 'Pablo',
    apellido: 'Ramírez',
    email: 'pablo@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    recuperarClave: function() {
        console.log(`Recuperar clave para ${this.nombre} ${this.apellido}`);
    }
};

let usuario4 = {
    nombre: 'Patricia',
    apellido: 'Rodríguez',
    email: 'patricia@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    recuperarClave: function() {
        console.log(`Recuperar clave para ${this.nombre} ${this.apellido}`);
    }
};

let usuario5 = {
    nombre: 'Pamela',
    apellido: 'Reyes',
    email: 'pamela@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25
    },
    estado: true,
    recuperarClave: function() {
        console.log(`Recuperar clave para ${this.nombre} ${this.apellido}`);
    }
};

// Mostrar las características de los usuarios y ejecutar el método recuperarClave
console.log(usuario0);
usuario0.recuperarClave();

console.log(usuario1);
usuario1.recuperarClave();

console.log(usuario2);
usuario2.recuperarClave();

console.log(usuario3);
usuario3.recuperarClave();

console.log(usuario4);
usuario4.recuperarClave();

console.log(usuario5);
usuario5.recuperarClave();
