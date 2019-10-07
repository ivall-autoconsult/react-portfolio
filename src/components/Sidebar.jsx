import React, { Component } from 'react';
import '../css/Sidebar.css'
import SidebarItem from './SidebarItem';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div class="menu" tabindex="0">
                        <header class="avatar">
                            <img src="https://thestudioexec.com/wp-content/uploads/2018/11/dwryzi6umaixy35.jpg" alt="tom ivall.png"/>
                            <h2>Thomas Ivall</h2>
                        </header>
                    <ul>
                        <SidebarItem path="about" name="About" className="icon-dashboard"/>
                        <SidebarItem path="education" name="Education" className="icon-education"/>
                        <SidebarItem path="projects" name="Projects" className="icon-projects"/>
                    </ul>


                </div>
            </div>

        );
    }
}

export default Sidebar;