require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authStrategies = require('./authStrategies');

const app = express();
const PORT = process.env.PORT || 4010;

// Middleware
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

// Select Authentication Strategy based on ENV
const AUTH_MODE = process.env.AUTH_MODE || 'stateless';
const auth = authStrategies[AUTH_MODE];

if (!auth) {
    console.error(`Invalid AUTH_MODE: ${AUTH_MODE}. Please use 'stateful' or 'stateless'.`);
    process.exit(1);
}

console.log(`Using ${AUTH_MODE.toUpperCase()} authentication mode.`);

// Setup Strategy-Specific Middleware (like sessions)
auth.setupMiddleware(app);
 
// Authentication Routes
app.post('/login', auth.login);
app.post('/logout', auth.logout);

/**
 * Protected Route Example
 */
app.get('/profile', auth.authenticate, auth.getProfile);

// Public Route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Authentication Example API',
        mode: AUTH_MODE,
        endpoints: {
            login: 'POST /login (username: admin, password: password123)',
            profile: 'GET /profile (Protected)',
            logout: 'POST /logout' 
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log(`Current Mode: ${AUTH_MODE}`);
});
