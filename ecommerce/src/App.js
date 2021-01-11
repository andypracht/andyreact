import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >

        <
        Nav className = "justify-content-end"
        activeKey = "/home" >
        <
        Nav.Item >
        <
        Nav.Link href = "/home" > Active < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "link-1" > Link < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "link-2" > Link < /Nav.Link> <
        /Nav.Item> <
        Nav.Item >
        <
        Nav.Link eventKey = "disabled"
        disabled >
        Disabled <
        /Nav.Link> <
        /Nav.Item> <
        /Nav> <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> < /
        header > <
        /div>
    );
}

export default App;