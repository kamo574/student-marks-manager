# Student Test 1 Marks Manager

This project is based on the assignment paper:

- Create a React project
- Format a form
- Create a MySQL database
- Connect React to the database
- Insert student marks
- Retrieve student marks
- Update student marks

The starting students are:
- Tebohо — 20
- Relebohile — 12
- Ntsoaki — 80
- Reaboka — 73

## Folder structure

```text
student-marks-manager/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node/Express backend
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── .env.example
├── database/
│   └── student_marks.sql
└── README.md
```

## 1. Create the MySQL database

Open MySQL (or MySQL Workbench) and run all the SQL in:

`database/student_marks.sql`

It creates:
- database: `student_marks_db`
- table: `students`
- the four students from the assignment

## 2. Set the database password

Go into the `server` folder.

Copy `.env.example` and rename the copy to `.env`.

Open `.env` and put your MySQL details there.

Example:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=student_marks_db
PORT=5000
```

Do NOT upload `.env` to GitHub if it contains your real password.

## 3. Install the server packages

Open a terminal in the `server` folder:

```bash
npm install
```

Then start the backend:

```bash
npm start
```

You should see:

`Server running on http://localhost:5000`

## 4. Install and run React

Open another terminal in the `client` folder:

```bash
npm install
npm run dev
```

Open the localhost address shown by Vite, normally:

`http://localhost:5173`

## What the application can do

### Insert
Enter a student name and mark, then click **Add Student**.

### Retrieve
Click **Refresh Students** to load all students from MySQL.

### Update
Change the mark in the table and click **Update**.

The form checks that:
- student name is not empty
- mark is a whole number from 0 to 100

## GitHub submission

From the project root:

```bash
git init
git add .
git commit -m "Student marks manager"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_LINK
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_LINK` with your own GitHub repository link.

Do not upload `server/.env`.
