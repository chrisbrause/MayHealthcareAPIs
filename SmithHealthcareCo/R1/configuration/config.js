var config = {
            username: 'chris.brause@cedrus.digital',
    password: 'Spring18!',
        serverPort: process.env.PORT || 2002,
    MOCK_SERVER_PORT: 2202,
    swaggerRouterOptions: {
        swaggerUi: __dirname + '/../' + '/swagger.json',
        controllers: __dirname + '/../' + './controllers/v1',
        useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
    }
    };
module.exports = config;