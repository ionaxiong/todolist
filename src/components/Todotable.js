import React from 'react';
import Todolist from './Todolist';


function Todotable(props) {
    return(
        <div>
             <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                        {
                            props.todos.map((todo, index)=> 
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.description}</td>
                                <td><button onClick={(e) => props.deleteTodos(e, index)}>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
    );
}

export default Todotable;