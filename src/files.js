const fs = require('fs');
module.exports = {
    readFile,
};
//funcion para leer el archivo products.json del proyecto
function readFile(name) {
    try{
        let data = fs.readFileSync(name, 'utf8');
        data = JSON.parse(data);
        return data;
    }catch(err){
        console.error(err);
        return [];
    }
}