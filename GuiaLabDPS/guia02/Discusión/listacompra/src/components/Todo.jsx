import React from 'react';

const Todo = ({lista, index, deleteTodo}) => {
    return (
        <>
            <div className="list">
                <h3>{lista.cantidad}</h3>-<h3>{lista.compra}</h3> <button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
            </div>
        </>
    )
}
export default Todo;