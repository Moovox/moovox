const app = require('./app');
const config = require('./config/env');

const PORT = process.env.PORT || config.server.port;

app.listen(PORT, () => {
    if (config.isDevelopment) {
        console.log(`Server running on http://localhost:${PORT}`);
    }
});