
import './App.css';
import Button from './Components/Button';
import ClassComp from './Components/ClassComp';
import FuncComp from './Components/FuncComp';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listsandkeys from './Components/Listsandkeys';
import ContactUs from './Components/ContactUs';
import Pagination from './Components/pagination';
import Homepage from './Homepage';
import { Routes, router, Route } from 'react-router-dom';
import Todolist from './Components/Todolist';
import CounterFuncComp from './Components/CounterFuncComp';
import TodoListFunc from './Components/Hooks/TodoListFunc';


function App() {
  return (
    <div className="App">
      <Homepage />
      <Routes >
        <Route path="/Pagination" element={<Pagination />} />
        <Route path="/ContactUS" element={<ContactUs />} />
        <Route path="/Todolist" element={<Todolist />} />
        <Route path="/Counter" element={< CounterFuncComp />} />
        <Route path="/TodoListFunc" element={<TodoListFunc />} />

      </Routes>

      {/* < Button value="button" />
      < Button value="button" />
      < FuncComp />
      <ClassComp />
      <Header />
      <Listsandkeys />

      <Pagination />
      <ContactUs />
      <Todolist />
      <CounterFuncComp />
      <TodoListFunc /> */}



    </div>
  );
}

export default App;
