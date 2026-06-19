<div align="center">

# 👥 Employee Data Management API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![REST API](https://img.shields.io/badge/REST-API-blue?style=for-the-badge)]()

> **A lightweight Node.js REST API for managing employee data — CRUD operations with JSON file-based persistence.**

</div>

---

## ✨ Features

- 📋 **Full CRUD** — Create, Read, Update, Delete employees
- 💾 **JSON Persistence** — Flat-file data storage (no DB required)
- 🔍 **Search & Filter** — Query employees by name, department, role
- ✅ **Input Validation** — Request body validation on all endpoints
- 📊 **Bulk Operations** — Manage multiple employee records efficiently

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime |
| Express.js | HTTP routing |
| JSON files | Data persistence |

## 🚀 Getting Started

```bash
git clone https://github.com/HiteshChugh-2006/Employee-Data-Management-API.git
cd Employee-Data-Management-API
npm install
node index.js
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/employees` | Get all employees |
| `GET` | `/employees/:id` | Get employee by ID |
| `POST` | `/employees` | Create new employee |
| `PUT` | `/employees/:id` | Update employee |
| `DELETE` | `/employees/:id` | Delete employee |

## 📋 Sample Request

```json
POST /employees
{
  "name": "Hitesh Chugh",
  "department": "Engineering",
  "role": "Full Stack Developer",
  "salary": 75000
}
```

---

<div align="center">
Made with ❤️ by <a href="https://github.com/HiteshChugh-2006">Hitesh Chugh</a>
</div>