import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <DarkModeProvider>
        <Header filter={filter} filters={filters} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </>
  );
}

export default App;
