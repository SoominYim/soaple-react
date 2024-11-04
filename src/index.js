import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotificationList from "./chapter_06/NotificationList";

const root = ReactDOM.createRoot(document.getElementById("root"));

// chapter_03

/* import Library from "./chapter_03/Library.jsx";
root.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>
    ); */

// chapter_04

/*import Clock from "./chapter_04/Clock";
    setInterval(() => {
      root.render(
        <React.StrictMode>
        <Clock />
        </React.StrictMode>
        );
        }, 1000);
        */

// chapter_05

/* import CommentList from "./chapter_05/CommentList";
       
       root.render( 
        <React.StrictMode>
        <CommentList></CommentList>
        </React.StrictMode>
        )
        */

// chapter_05_01
/*
// import Welcome from "./chapter_05_01/Welcome";
const App = (props) => {
  return (
    <div>
      <Welcome name="Mike" />
      <Welcome name="Steve" />
      <Welcome name="Jane" />
    </div>
  );
};
*/

// root.render(<React.StrictMode></React.StrictMode>);

root.render(<NotificationList />);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
