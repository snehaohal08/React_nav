import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarApp.css";
class Navbar extends Component {
    state = { clicked: false };
    handlecliick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="logo">React<i className="fab fa-react"></i></h1>
                <div className="menue-icons" onClick={this.handlecliick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menue active":"nav-menue"}>
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cname}>
                                    <i className={item.icons}>
                                    </i>{item.title}</a></li>
                        )
                    })}

                </ul>
            </nav>
        );
    }
}

export default Navbar;
