// const Content = ({ list, handleCheck, handleDelete }) => {
//     return (
//       <main className="content">
//         {list.length ? (
//           <ul>
//             {list.map((item) => {
//               return (
//                 <li className="list" key={item.id}>
//                   <input
//                     onChange={() => handleCheck(item.id)}
//                     type="checkbox"
//                     checked={item.checked}
//                   />
  
//                   <label onDoubleClick={() => handleCheck(item.id)}>
//                     <h3>{item.item}</h3>
//                   </label>
  
//                   <button onClick={() => handleDelete(item.id)}>X</button>
//                 </li>
//               );
//             })}
//           </ul>
//         ) : (
//           <h3
//             style={{
//               marginTop: "2rem",
//             }}
//           >
//             {" "}
//             Empty List{" "}
//           </h3>
//         )}
//       </main>
//     );
//   };
//   export default Content;
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
