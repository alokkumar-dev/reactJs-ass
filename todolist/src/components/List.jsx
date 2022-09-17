import "./Styles/Main.css";

export const List = () => {
  let data =
    JSON.parse(localStorage.getItem("TodoData")) || [];

  const delete_task = (index) => {
    data.splice(index, 1); //  splice() function is a remove element
    localStorage.setItem("TodoData", JSON.stringify(data));
  };


  // for toggle task status use property here..
  const toggle_task = (element) =>{
        element.status = !element.status      // if statur true then change False, and if false then true
        localStorage.setItem("TodoData", JSON.stringify(data));    // for change satus in Local storage 

    }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Change Status</th>
            <th>Delete Task</th>
          </tr>
        </thead>

        <tbody>
          {data.map((el, index) => (
            <tr key={index}>
              <td>{el.data}</td>
              <td>{el.status}</td>
              <td>{el.date}</td>
              <td onChange={()=>toggle_task(el)} className="green">Change</td>
              <td
                onClick={() => delete_task(index)}
                className="deleteBtn"
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
