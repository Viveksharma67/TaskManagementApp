// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import ShowTask from "./pages/ShowTask";
import Signup from "./components/Signup";
import Login from "./components/Login";

export default function App() {
  return (
    
    <Routes >
      
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

  
      <Route path="/app" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="task-list" element={<TaskListPage />} />
        <Route path="show-task/:taskid" element={<ShowTask />} />
      </Route>
    </Routes>
  );
}
