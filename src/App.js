import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'

function App() {
    const [theme, setTheme] = useState({ nav: "bg-primary navbar-dark", button: ["btn-primary", {}], textArea: {} })
    const changeTheme = (event) => {
        if (event.target.value === "Theme1") {
            setTheme({ nav: "bg-primary navbar-dark", button: ["btn-primary", {}], textArea: {} })
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
        else if (event.target.value === "Theme2") {
            setTheme({ nav: "bg-dark navbar-dark", button: ["", { backgroundColor: "rgb(55, 21, 148)", color: "white" }], textArea: { backgroundColor: "rgb(94, 90, 117)", color: "white" } })
            document.body.style.backgroundColor = "rgb(14, 27, 59)"
            document.body.style.color = "white"
        }
        else if (event.target.value === "Theme3") {
            setTheme({ nav: "bg-warning navbar-dark", button: ["", { backgroundColor: "rgb(227, 202, 93)", color: "white" }], textArea: { backgroundColor: "rgb(225, 236, 184)" } })
            document.body.style.backgroundColor = "rgb(207, 57, 46)"
            document.body.style.color = "white"
        }
        else if (event.target.value === "Theme4") {
            setTheme({ nav: "navbar-dark", button: ["", { backgroundColor: "rgb(66, 25, 60)", color: "white" }], textArea: { backgroundColor: "rgb(236, 184, 227)" } })
            document.getElementById("nav").style.backgroundColor = "rgb(49, 14, 59)"
            document.body.style.backgroundColor = "rgb(108, 21, 132)"
            document.body.style.color = "white"
        }
    }
    return (

        <div>
            <Navbar title="TextUtils" theme={theme} changeTheme={changeTheme} />
            <TextForm theme={theme} />
        </div>



    );
}

export default App;
