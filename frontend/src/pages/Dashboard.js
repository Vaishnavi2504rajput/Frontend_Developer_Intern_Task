import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (token) fetchTasks();
  }, [token]);

  const fetchTasks = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/tasks",
      authHeader
    );
    setTasks(res.data);
  };

  const addOrUpdateTask = async () => {
    if (!title.trim()) return;

    if (editId) {
      // 🔁 UPDATE
      await axios.put(
        `http://localhost:5000/api/tasks/${editId}`,
        { title },
        authHeader
      );
      setEditId(null);
    } else {
      // ➕ CREATE
      await axios.post(
        "http://localhost:5000/api/tasks",
        { title },
        authHeader
      );
    }

    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/tasks/${id}`,
      authHeader
    );
    fetchTasks();
  };

  const toggleTask = async (task) => {
    await axios.put(
      `http://localhost:5000/api/tasks/${task._id}`,
      { completed: !task.completed },
      authHeader
    );
    fetchTasks();
  };

  const startEdit = (task) => {
    setTitle(task.title);
    setEditId(task._id);
  };

  return (
    <div className="dashboard-container">
      <h1>Task Dashboard</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addOrUpdateTask}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className={task.completed ? "done" : ""}>
            <span onClick={() => toggleTask(task)}>
              {task.title}
            </span>

            <div className="actions">
              <button
                className="edit-btn"
                onClick={() => startEdit(task)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
