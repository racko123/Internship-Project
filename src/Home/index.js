import React from 'react';
import './index.css';
import User from './Images/User.png'
import Dropdown from 'react-dropdown';


class HomePage extends React.Component {
    handleClasses = () => {
        this.props.history.push('/Classes')
    }
    render() {
        const options = [
            'one', 'two', 'three'
        ];
        return (
            <div>
                <div className="Heading">
                    <h1>E-Grading</h1>
                    <span className="Settings">
                        <Dropdown className="Dropdown" options={options} onChange={this._onSelect} placeholder="Settings" />
                    </span>
                    <span className="EditProfile">
                        <i class="fa fa-user">Profile</i>
                        <i class="fa fa-sort-down"></i>
                    </span>
                </div>
                <div className="SideColor">
                    <div>
                        <img className="ProfilePic" src={User} alt="Profile Pic" />
                    </div>
                    <div className="Sidebar">
                        <p>Name: User's Name</p>
                        <div className="Links">
                            <p onClick={this.handleClasses}>Classes</p>
                            <p>Tests</p>
                            <p>Students</p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default HomePage
