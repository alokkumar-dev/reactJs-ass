import { useState } from "react";
import { List } from "./List";
import "./Styles/Main.css"


export const Forms = () => {
  const [text, setText] = useState("");
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = event => {
    // event.preventDefault();
    console.log(text);

    let obj = { status: "false", date: Time(), data: text };

    let arr =
      JSON.parse(localStorage.getItem("TodoData")) || [];
    arr.push(obj);
    console.log(arr);
    localStorage.setItem("TodoData", JSON.stringify(arr));
  };
  const Time = () => {
    let date = new Date();
    let d = date.getDate();
    let day = d < 10 ? "0" + d : d;
    let m = date.getMonth() + 1;
    let month = m < 10 ? "0" + m : m;
    let year = date.getFullYear();
    let h = date.getHours();
    let hour = h < 10 ? "0" + h : h;
    let mi = date.getMinutes();
    let minute = mi < 10 ? "0" + mi : mi;
    let loctime =
      hour +
      ":" +
      minute +
      "," +
      day +
      "/" +
      month +
      "/" +
      year;
    return loctime;
  };

  return (
    <div className="container">
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Task Name</label><br />
          <input
            type="text"
            id="name"
            placeholder="enter task name"
            onChange={handleChange} 
            className="task"
            required
          /><br />
          <input type="submit" value={"Submit"} className="submitBtn" />
        </form>
      </div>
      <div className="listDiv">
        <List />
      </div>
    </div>
  );
};
