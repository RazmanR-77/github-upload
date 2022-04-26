import React from 'react';
 
import './index.css';
// import App from './App';

import reportWebVitals from './reportWebVitals';



///// added   aa----imports
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
 import NameForm from './pages/NameForm';

// todo
// import NameForm from "./pages/NameForm";

 


// import Blogs from "./pages/Blogs";

// import NoPage from "./pages/NoPage";




 


// -
// TODOOO TODO
//    web pages todo
// -
// Layout.js
// Home.js

// Contact.js



////rOUTING Router---MAIN() APP CALL

export default function App() {


// return(
//   this.NameForm.render()
// );


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="contact" element={<Contact />} />

          {/* todo */}
          {/* <Route path="nameform" element={<NameForm />} /> */}


          {/* <Route path="*" element={<NoPage />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}

        



        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.render(<App />,   <NameForm />,

ReactDOM.render(<App />, 
document.getElementById("root"));

  // ReactDOM.render(  <NameForm />,
  // document.getElementById("root"));


//render ----original

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
