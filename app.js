const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.use(express.urlencoded());

app.post('/registration', (req, res) => {

    // Por ahora lo dejamos asi, luego vamos a ver que es 
    // necesario realizar validaciones previas a esta 
    // asignacion ya que no podemos confiar en que 
    // los datos enviados sean correctos tanto en 
    // cuestion de nombre de variable como en contenido
    const firstName = req.body.firstName;
    const lastName = req. body.lastName;
    const age = req.body.age;
    const mobile = req.body.mobile;
    const countryBirth = req.body.countryBirth;
    const countryResidence = req.body.countryResidence;

    // Ecma6 incorpora el uso de comilla invertida para 
    // reemplazar ${<nombre-variable} por el valor de la variable
    // ademas permite strings con "enters" para que quede mas
    // prolijo el codigo.
    const respuesta = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Archivos estaticos</title>
        </head>
        <body>
            <h1>Muchas gracias por registrarse con nosotros</h1>
            <h2>Estos son sus datos de registracion:</h2>
            <p>Nombre: ${firstName}</p>
            <p>Apellido: ${lastName}</p>
            <p>Edad: ${age}</p>
            <p>Celular: ${mobile}</p>
            <p>Pais de nacimiento: ${countryBirth}</p>
            <p>Pais de residencia: ${countryResidence}</p>
            <br />
            <a href= "http://localhost:3000/static/index.html">Ingresar otro registro</a>
        </body>
        </html>    
    `; 
    
    res.status(200).send(respuesta);    

});


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});