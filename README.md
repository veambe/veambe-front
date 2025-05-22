# veambe 

This is the frontend of **veambe**, a web platform dedicated to the visual artwork of **Beatriz Oliver**, known professionally as *veambe*. Visitors can explore her portfolio across various artistic fields, learn about her creative journey, and get in touch with her through a contact form.

> This frontend is built using **React 19** and consumes a Spring Boot REST API as its backend.

---
##  Public Features

- ✅ View a gallery of all artworks
- ✅ Filter artworks by category (e.g. Murales, Cerámica, Grabado...)
- ✅ Read details about each art piece
- ✅ Learn about the artist in the "About" section
- ✅ Contact the artist via a secure contact form

---
## Admin Features (Private Route)

Accessible only by the artist (or admin) at a separate, hidden route.

- ✏️ Add new artworks with title, description, category, and up to 10 images
- 🗑️ Delete existing artworks
- 🔁 Edit artwork details (title, description, category, and optionally upload new images)
- 📂 Manage artwork images individually

---
## Tech Stack

### Frontend

- **React 19**
- **React Router DOM v7** – for routing
- **Axios** – for communicating with the backend
- **React Icons** – for icons and UI elements
- **Vite** – for fast development and build

### Dev Tools

- **ESLint** – for code quality and linting
- **TypeScript-ready** (via `@types/react` if needed)

---
##  Installation

1. Clone the repository:
 ```bash
   git clone https://github.com/your-username/veambe-frontend.git
   cd veambe-frontend
`````
2. Install dependencies:
 ```bash
 npm install
`````
3. Start the development server:
 ```bash
npm run dev
`````
The app will run at http://localhost:5173/


🔗 Backend Connection
The frontend connects to a backend available at:
 ```bash
http://localhost:8080/api/v1/
`````
Make sure the backend Spring Boot server is running on port 8080.

🖼️ Credits
All artwork and content belongs to Beatriz Oliver (veambe)

Developed by Marta Ibarra as part of a personal project

📬 Contact

marta.ibarrac@gmail.com
