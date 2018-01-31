const expres = require('express');
const bp = require('body-parser');
const morgan = require('morgan');
const server = express();
server.use(morgan('tiny'));
server.use(bp.json());


export default server;