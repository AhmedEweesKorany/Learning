# Node.js Authentication Examples

This project demonstrates both **Stateful** (Session-based) and **Stateless** (JWT-based) authentication.

## Switch Authentication Mode

You can switch between authentication modes by changing the `AUTH_MODE` variable in the `.env` file:

```env
AUTH_MODE=stateless # Use 'stateless' for JWT
# OR
AUTH_MODE=stateful # Use 'stateful' for Sessions
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### 1. Login
- **URL:** `/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
      "username": "admin",
      "password": "password123"
  }
  ```
- **Response (Stateless):** Returns a JWT token.
- **Response (Stateful):** Sets a session cookie.

### 2. Profile (Protected)
- **URL:** `/profile`
- **Method:** `GET`
- **Headers (Stateless):** `Authorization: Bearer <token>`
- **Headers (Stateful):** (Cookie handled automatically by browser/Postman)

### 3. Logout
- **URL:** `/logout`
- **Method:** `POST`

## Implementation Details

- **Stateless:** Uses `jsonwebtoken` to issue and verify tokens.
- **Stateful:** Uses `express-session` to manage server-side user sessions.
- **Switching Logic:** Located in `index.js`, dynamically selecting strategies from `authStrategies.js`.
