use employeesDB;
INSERT INTO department (name)
VALUES
  ("Cloud"),
  ("UX/UI"),
  ("Developer"),
  ("Marketing");
INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Cloud Dev", 200000, 1),
    ("UI Designer", 80000, 1),
    ("Lead Software Engineer", 350000, 2),
    ("Product Marketer", 120000, 2),
    ("Full Stack Developer", 250000, 4),
    ("Backend Developer", 190000, 4);
INSERT INTO employees
  (first_name, last_name, role_id, manager_id)
VALUES
  ("Kaze", "Cloudchaser", 1, NULL),
  ("Ril", "Hylia", 2, 1),
  ("Akira", "Yuuki", 3, NULL),
  ("Eirika", "Riener", 4, 3),
  ("Emphraim", "Guilles", 5, NULL),
  ("Fhrey", "Woodwick", 6, 5)