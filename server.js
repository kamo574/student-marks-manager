const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Student Marks API is running." });
});

app.get("/api/students", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, student_name, marks FROM students ORDER BY id"
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not retrieve students." });
  }
});

app.post("/api/students", async (req, res) => {
  const { student_name, marks } = req.body;
  const mark = Number(marks);

  if (!student_name || !student_name.trim()) {
    return res.status(400).json({ error: "Student name is required." });
  }

  if (!Number.isInteger(mark) || mark < 0 || mark > 100) {
    return res.status(400).json({ error: "Marks must be a whole number from 0 to 100." });
  }

  try {
    const [result] = await pool.execute(
      "INSERT INTO students (student_name, marks) VALUES (?, ?)",
      [student_name.trim(), mark]
    );

    const [rows] = await pool.execute(
      "SELECT id, student_name, marks FROM students WHERE id = ?",
      [result.insertId]
    );

    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not insert student." });
  }
});

app.put("/api/students/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { student_name, marks } = req.body;
  const mark = Number(marks);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Invalid student ID." });
  }

  if (!student_name || !student_name.trim()) {
    return res.status(400).json({ error: "Student name is required." });
  }

  if (!Number.isInteger(mark) || mark < 0 || mark > 100) {
    return res.status(400).json({ error: "Marks must be a whole number from 0 to 100." });
  }

  try {
    const [result] = await pool.execute(
      "UPDATE students SET student_name = ?, marks = ? WHERE id = ?",
      [student_name.trim(), mark, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Student not found." });
    }

    const [rows] = await pool.execute(
      "SELECT id, student_name, marks FROM students WHERE id = ?",
      [id]
    );

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Could not update student." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
