const fs = require("fs");
const colors = require('colors');
const crearArchivo = async (base = 5, listar, tope) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= tope; i++) {
      salida += `${base} x ${i} = ${base * i}\n`
      consola += `${colors.brightCyan(base)} ${colors.brightBlue('x')} ${i} ${colors.brightBlue('=')} ${colors.brightYellow(base * i)}\n`;
    }

    salida = salida.trimEnd();
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    if (listar) {
      console.log('=========================================='.rainbow);
      console.log(`      Tabla del ${colors.brightCyan(base)} con limite en ${colors.brightYellow(tope)}`)
      console.log('=========================================='.rainbow);
      console.log(consola);
    }
    return `tabla-${base}.txt`;


  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};

