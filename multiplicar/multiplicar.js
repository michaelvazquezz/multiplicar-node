const fs = require('fs');
const color = require('colors');
//const fs = require('express');
//const fs =requiere ('./fs);

let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ base * i}`)
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            /* mult = i * base;
             console.log(mult);*/
            data += `${ base } * ${ i } = ${ base * i} \n`;
            console.log(`${ base } * ${ i } = ${ base * i}`)
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) rejects(err)
            else
                resolve(`tabla-${base}-all-${limite}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}