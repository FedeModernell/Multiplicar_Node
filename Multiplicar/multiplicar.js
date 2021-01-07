//required
const fs = require('fs');


let creararchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            let resultado = i * base;
            let retorno = base + '*' + i + ' = ' + resultado;
            data += retorno + '\n'
        };

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, 'utf8', (err) => {
            if (err) reject('Error ' + err)
            resolve('el archvio ah sido creado')
        });


    });
}






module.exports = {
    creararchivo
}