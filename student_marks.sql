CREATE DATABASE IF NOT EXISTS student_marks_db;

USE student_marks_db;

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    marks INT NOT NULL,
    CHECK (marks >= 0 AND marks <= 100)
);

INSERT INTO students (student_name, marks)
SELECT 'Teboho', 20
WHERE NOT EXISTS (
    SELECT 1 FROM students WHERE student_name = 'Teboho'
);

INSERT INTO students (student_name, marks)
SELECT 'Relebohile', 12
WHERE NOT EXISTS (
    SELECT 1 FROM students WHERE student_name = 'Relebohile'
);

INSERT INTO students (student_name, marks)
SELECT 'Ntsoaki', 80
WHERE NOT EXISTS (
    SELECT 1 FROM students WHERE student_name = 'Ntsoaki'
);

INSERT INTO students (student_name, marks)
SELECT 'Reaboka', 73
WHERE NOT EXISTS (
    SELECT 1 FROM students WHERE student_name = 'Reaboka'
);
