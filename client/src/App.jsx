import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import Navigation from './components/Navigation';
import TasksFormPage from './pages/TasksFormPage';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={ <Navigate  to="/tasks" /> }  /> 
          <Route path="/tasks" element={<TasksPage/>} />
          <Route path="/tasks_create" element={<TasksFormPage/>} />
          <Route path="/tasks:id" element={<TasksFormPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
