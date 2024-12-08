//1
require('dotenv').config()
//2
const  express =require('express')
//6
const cors = require('cors')
//

const router = require('./Router/router.js');
const applicationMiddleware = require('./Middlewares/applicationMiddleware.js');
require('./db/connections.js')

// Load environment variables
// dotenv.config();

// 3
const pfServer = express();

//7 Apply middlewares
pfServer.use(cors());
pfServer.use(express.json());
pfServer.use(applicationMiddleware);
pfServer.use(router);
pfServer.use('/uploads',express.static('./uploads'))
// 4 Define the port
const PORT = process.env.PORT || 3001;

// 5 Start the server
pfServer.listen(PORT, () => {
    console.log(`pfServer listening on port ${PORT}`);
});

// Default route
pfServer.get('/', (req, res) => {
    res.send("Welcome to pfServer");
});
