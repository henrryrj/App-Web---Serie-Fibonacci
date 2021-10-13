const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();


// configuraciones
app.set('port', process.env.PORT || 3000);
// middelwares
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // para soportar formatos json

//coniguracion de las vistas
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: {
        // Function to do basic mathematical operation in handlebar
        math: function(lvalue, operator, rvalue) {
            lvalue = parseFloat(lvalue);
            rvalue = parseFloat(rvalue);
            return {
                "+": lvalue + rvalue,
                "-": lvalue - rvalue,
                "*": lvalue * rvalue,
                "/": lvalue / rvalue,
                "%": lvalue % rvalue
            }[operator];
        }
    }
}));
app.set('view engine', '.hbs');
//routers
app.use(require('./routers/rutas'));

//iniciacion del servidor
app.listen(app.get('port'), () => {
    console.log(` Server on port ${3000}`);
});