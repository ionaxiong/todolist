import React, {useState} from 'react';

function Delete_Todolist() {
    const [inputs, setInputs] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);
    const [isReady, setReady] = useState(false);

    const inputChanged = (event) => {
        setInputs({...inputs,[event.target.name]:event.target.value});
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, inputs]);
        setReady(true);
    }
    
    const update = (event, index) => {
        event.preventDefault();
        setTodos(todos.filter((todo, i) => i !== index));
    }

    return(
        <div>
            <h3>Simple Todolist</h3>
            <form onSubmit={addTodo}>
                <label>Description:</label>
                <input type='text' name='description' value={inputs.description} onChange={inputChanged}></input>
                <label>Date:</label>
                <input type='text' name='date' value={inputs.date} onChange={inputChanged}></input>
                <input type='submit' value='Add'></input>
            </form>
            {isReady&&
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                        {
                            todos.map((todo, index)=> 
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.description}</td>
                                <td><button onClick={(e) => update(e, index)}>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    )

}
export default Delete_Todolist;