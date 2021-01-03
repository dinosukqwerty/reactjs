//import logo from './logo.svg';
//import './App.css';
//import Home from './Component/Fungsional/Home';
import NavbarComponent from './Component/Fungsional/NavbarComponent';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import HomePage from "./Component/Fungsional/HomePage"
import About from "./Component/Fungsional/About"
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import { makeStyles } from '@material-ui/styles';
 
//import BootstrapClass from "./Component/Class/BootstrapClass";

//import Parent from "./Component/Class/Parent";

const useStyles = makeStyles((theme)=>({
  root: {
    minHeight : '100vh',
    backgroundImage : `url(${process.env.PUBLIC_URL + '/assets/daun.jpg'})`
  },
}));


const App = () => {
  return (

    <div>
      <BrowserRouter>    
      <NavbarComponent/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/About" component={About} />
        <Route exact path="/detail/:id" component={DetailComp} />
        <Route exact path="/daftarpemain" component={ListComp} />
        <Route exact path="/daftarpemain/tambah" component={TambahComp}/>
      </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;

// import React, { useState } from "react";

// export default function Contact() {
//     const [formData, setFormData] = useState({});
//     const [message, setMessage] = useState("");

//     const handleInput = e => {
//         const copyFormData = { ...formData };
//         copyFormData[e.target.name] = e.target.value;
//         setFormData(copyFormData);
//     };

//     const sendData = async e => {
//         e.preventDefault();
//         const {name, email, message, a} = formData
//         try {
//             const response = await fetch(
//                 "https://v1.nocodeapi.com/reactapi/google_sheets/cCnkarEpcUOJoIMx?tabId=Sheet1",
//                 {
//                     method: "post",
//                     body: JSON.stringify([[name, email, message, a]]),
//                     headers: {
//                         "Content-Type": "application/json"
//                     }
//                 }
//             );
//             const json = await response.json();
//             console.log("Success:", JSON.stringify(json));
//             setMessage("Success");
//         } catch (error) {
//             console.error("Error:", error);
//             setMessage("Error");
//         }
//     };

//     return (
        // <div className="App">
        //     <form
        //         className="input-form"
        //         id="contact"
        //         name="contact"
        //         required
        //         onSubmit={sendData}
        //     >
        //         <input
        //             name="name" 
        //             type="text"
        //             placeholder="Name"
        //             required
        //             onChange={handleInput}
        //         />
        //         <input
        //             name="email"
        //             type="email"
        //             placeholder="Email"
        //             required
        //             onChange={handleInput}
        //         />
        //         <input
        //             name="a"
        //             type="text"
        //             placeholder="A"
        //             required
        //             onChange={handleInput}
        //         />
        //         <textarea
        //             name="message"
        //             placeholder="Message"
        //             onChange={handleInput}
        //         />
        //         <input name="submit" type="submit" value="Send" />
        //         {message}
        //     </form>
        // </div>
//     );
// }
