const jwt = require('jsonwebtoken');
const session = require('express-session');

// Mock User for example
const MOCK_USER = { id: 1, username: 'admin', password: 'password123' };

/**
 * Stateful Strategy: Using Sessions
 */
const statefulStrategy = {
    setupMiddleware: (app) => {
        app.use(session({
            secret: process.env.SESSION_SECRET || 'stateful_secret',
            resave: false,
            saveUninitialized: false,
            cookie: { secure: false , httpOnly:true} // Set to true if using HTTPS
        }));
    },
    login: (req, res) => {
        const { username, password } = req.body;
        if (username === MOCK_USER.username && password === MOCK_USER.password) {
            req.session.user = { id: MOCK_USER.id, username: MOCK_USER.username };
            return res.json({ message: 'Logged in successfully (Stateful)', user: req.session.user });
        }
        res.status(401).json({ message: 'Invalid credentials' });
    },
    authenticate: (req, res, next) => {
        if (req.session && req.session.user) {
            return next();
        }
        res.status(401).json({ message: 'Unauthorized: No session found' });
    },
    logout: (req, res) => {
        req.session.destroy((err) => {
            if (err) return res.status(500).json({ message: 'Logout failed' });
            res.json({ message: 'Logged out successfully' });
        });
    },
    getProfile: (req, res) => {
        res.json({ strategy: 'stateful', user: req.session.user });
    }
};

/**
 * Stateless Strategy: Using JWT
 */
const statelessStrategy = {
    setupMiddleware: (app) => {
        // nothign to add 
    },
    login: (req, res) => {
        const { username, password } = req.body;
        if (username === MOCK_USER.username && password === MOCK_USER.password) {
            const token = jwt.sign(
                { id: MOCK_USER.id, username: MOCK_USER.username },
                process.env.JWT_SECRET || 'stateless_secret',
                { expiresIn: '1h' }
            );
            return res.json({ message: 'Logged in successfully (Stateless)', token });
        }
        res.status(401).json({ message: 'Invalid credentials' });
    },
    authenticate: (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).json({ message: 'Unauthorized: No token provided' });

        jwt.verify(token, process.env.JWT_SECRET || 'stateless_secret', (err, user) => {
            if (err) return res.status(403).json({ message: 'Forbidden: Invalid token' });
            req.user = user;
            next();
        });
    },
    logout: (req, res) => {
        // In pure stateless auth, logout is handled client-side by deleting the token.
        res.json({ message: 'Logged out (Client should discard the token)' });
    },
    getProfile: (req, res) => {
        res.json({ strategy: 'stateless', user: req.user });
    }
};

module.exports = {
    stateful: statefulStrategy,
    stateless: statelessStrategy
};
