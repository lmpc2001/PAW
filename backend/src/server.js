const express = require('express');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const { connectToCluster } = require('./database/connection');

const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require('./swaggerConfig.json');


const PORT = process.env.PORT || 3333;

const app = express();

// connectToCluster();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
app.use('/api/v1', routes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))