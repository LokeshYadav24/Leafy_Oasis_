import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Pages/Search';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Foot from './Components/Footer';

(function (d, m) {
  var kommunicateSettings = { "appId": "241d28984c4094d76743d6bb49c085435", "popupWidget": true, "automaticChatOpenOnNavigation": true };
  var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <Search/> */}

    {/* <LandingPage/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* <Route path="/home" element={<App />}/> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>



    <Foot />

  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
