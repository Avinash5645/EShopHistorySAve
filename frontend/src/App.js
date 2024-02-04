import React, { useEffect } from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LoginPage,SignupPage,ActivationPage,HomePage} from "./Routes.js";
//import {LoginPage} from "./routes/Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from './reducx/store.js';
import { loadUser } from './reducx/actions/user.js';

const App = () => {
  useEffect(() => {
    //  axios.get(`${server}/user/getuser`,{withCredentials:true}).then((res)=>{
    //   toast.success(res.data.message);
    //   //console.log(res.data);
    //  }).catch((err) =>{
    //   toast.error(err.response.data.message);
    //  })
     Store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/sign-up" element={<SignupPage />} />
    <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
    </Routes>
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  )
}

export default App
