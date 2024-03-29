import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Form from "./component/Form";
import TodoList from "./component/TodoList";

/////////////////////////////////////////////////////////////////////////////
//////////////////////BELOW WORKS FINE AS IS/////////////////////////////////
function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="App">
			<header>
				<h1>My Todo List</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
}
/////////////////////////////////////////////////////////////////////////////
export default App;
