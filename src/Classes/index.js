import React from 'react';
import './index.css';
import User from './Images/User.png'
import { FaUserAlt, FaCog } from "react-icons/fa";

class ClassesPage extends React.Component {

    handleClasses = () => {
        this.props.history.push('/Classes')
    }
    render() {
        return (
            <div>
                <div className="Heading">
                    <h1>E-Grading REEEEEE</h1>
                    <span className="Settings">
                        <FaCog />
                        Settings
                    </span>
                    <span className="EditProfile">
                        <FaUserAlt />
                        Profile
                    </span>
                </div>
                <div className="SideColor">
                    <div>
                        <img className="ProfilePic" src={User} alt="Profile Pic" />
                    </div>
                    <div className="Sidebar">
                        <p>Name: Whatever</p>
                        <div className="Links">
                            <p onClick={this.handleClasses}>Classes</p>
                            <p>Tests</p>
                            <p>Students</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassesPage