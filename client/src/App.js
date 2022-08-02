import './App.css';
import Dashboard from "./components/Dashboard";
import AddBookContainer from "./components/AddBookContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditBook from "./components/EditBook";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/addbook" element={<AddBookContainer/>}/>
                    <Route path="/editbook/:bookId" element={<EditBook/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
