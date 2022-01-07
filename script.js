function getAdmins(map) {
    let admins = [];
    for ([key,value] of map) {
    if (value === 'Admin') {
        admins.push(key);
    }
}
     return admins;
}

const usuarios = new Map();

usuarios.set('luiz' , 'Admin');
usuarios.set('Cleverton' , 'Admin');
usuarios.set('Jorge' , 'user');
usuarios.set('Natalia' , 'Admin');

console.log(getAdmins(usuarios));


