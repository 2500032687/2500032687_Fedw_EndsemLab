
import "./App.css";

function App() {
  const students = [
    { id: 1, name: "Rahul", marks: 85 },
    { id: 2, name: "Arun", marks: 45 },
    { id: 3, name: "Priya", marks: 90 },
    { id: 4, name: "Kiran", marks: 30 },
    { id: 5, name: "Sneha", marks: 65 }
  ];

  return (
    <div>
      <header>
        <h1>Student Management System</h1>
      </header>

      <h2>Student List</h2>

      {students.map((s) => (
        <div className="student" key={s.id}>
          <h3>{s.name}</h3>
          <p>Marks: {s.marks}</p>
          <p>{s.marks >= 40 ? "Pass" : "Fail"}</p>
        </div>
      ))}

      <footer>Student Management System</footer>
    </div>
  );
}

export default App;
