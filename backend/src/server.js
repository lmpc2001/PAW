const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const path = require('path');
const routes = require('./routes/index');

const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require('./swaggerConfig.json');

const PORT = process.env.PORT || 3333;

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(cookieParser());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', cors(), express.static(path.join(__dirname, '..', 'uploads')));
app.use(routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
app.use('/api/v1', routes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))