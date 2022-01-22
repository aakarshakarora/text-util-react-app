import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, {useState} from "react";
import Alert from "./components/Alert";
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {

    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);


    function toggleMode() {

        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#02194a';
            showAlert("Dark Mode is Enabled", "success");
            document.title = 'TextUtil - Dark Mode';
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode is Enabled", "success");
            document.title = 'TextUtil - Light Mode';


        }

    }

    function showAlert(message, type) {
        setAlert({
            message: message,
            type: type,
        })
        setTimeout(() => {
            setAlert(null);
        }, 1450);

    }


    return (
        <div>
            <BrowserRouter>
                <Navbar title='Text Utils' about='About Us' mode={mode} toggleMode={toggleMode}/>
                <Alert alert={alert}/>
                <Switch>
                    <Route exact path='/about'>
                        <About mode={mode}/>
                    </Route>
                    <Route exact path='/'>
                        <TextForm heading='Enter the text below' mode={mode} showAlert={showAlert}/>
                    </Route>
                </Switch>


            </BrowserRouter>


        </div>
    );
}

export default App;