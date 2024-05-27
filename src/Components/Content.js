
import React from 'react';

function Content({ list, handleCheck, handleDelete }) {
    return (
        <ul className="Content">
            {list.map((item) => (
                <li key={item.id}>
                    <span
                        className={item.checked ? "checked" : ""}
                        onClick={() => handleCheck(item.id)}
                    >
                        {item.item}
                    </span>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default Content;
