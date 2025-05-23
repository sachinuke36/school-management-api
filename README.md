
# 🏫 School Management API

This project is a simple Node.js + Express + MySQL API for managing schools. It allows adding new schools and retrieving a list of nearby schools sorted by proximity to a given location.

---

## 📚 Features

- Add new schools with name, address, and geographic coordinates
- Fetch schools sorted by proximity using the Haversine formula
- Input validation and error handling
- Hosted using [Railway](https://railway.app/)
- Ready-to-test via Postman

---

## 🔧 Tech Stack

- Node.js
- Express.js
- TypeScript
- MySQL (Railway hosted)
- dotenv for environment configuration

---

## 📁 Project Structure

```
src/
├── config/
│   └── db.ts
├── controllers/
│   └── school.controller.ts
├── routes/
│   └── school.routes.ts
├── server.ts
```

---

## 📄 API Endpoints

### POST `/api/school/addschool`

Add a new school.

**Request Body:**
```json
{
  "name": "Greenwood High",
  "address": "123 Elm Street",
  "latitude": 12.935,
  "longitude": 77.619
}
```

**Success Response:**
```json
{
  "message": "School added successfully"
}
```

---

### GET `/api/school/listschools?latitude=12.935&longitude=77.619`

Get a list of schools sorted by proximity.

**Sample Response:**
```json
[
  {
    "id": 1,
    "name": "Greenwood High",
    "address": "123 Elm Street",
    "latitude": 12.935,
    "longitude": 77.619,
    "distance": 0
  },
  {
    "id": 2,
    "name": "Hillview Academy",
    "address": "456 Oak Avenue, Hillside",
    "latitude": 12.9716,
    "longitude": 77.5946,
    "distance": 4.85
  },
  {
    "id": 3,
    "name": "Lakeside Public School",
    "address": "789 Lake Road, Rivertown",
    "latitude": 13.001,
    "longitude": 77.658,
    "distance": 8.47
  }
]
```

---

## 🌐 Postman Collection

Test the API using this Postman collection:  
🔗 [School Management Collection](https://www.postman.com/lunar-module-engineer-35533092/workspace/school-management/collection/36336800-7d596602-79a7-4e45-94f7-2b8102765bd7?action=share&creator=36336800)

---

## 🛠️ Setup Instructions

1. Clone the repo
```bash
git clone https://github.com/your-username/school-management-api.git
cd school-management-api
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with the following:

```env
DB_HOST=mainline.proxy.rlwy.net
DB_PORT=17481
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=railway
```

4. Start the development server
```bash
npm run dev
```

Server runs at: `http://localhost:8000`

---

## 🗃️ Database Schema

Table name: `schoolInfo`

| Column     | Type   | Constraints     |
|------------|--------|-----------------|
| `id`       | SERIAL | PRIMARY KEY     |
| `name`     | TEXT   | NOT NULL        |
| `address`  | TEXT   | NOT NULL        |
| `latitude` | REAL   | NOT NULL        |
| `longitude`| REAL   | NOT NULL        |

---

## 📬 Contact

For queries or feedback, feel free to contact:

**Email:** sachinuke36@gmail.com



