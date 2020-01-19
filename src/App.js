import React, { useState } from 'react';
import uuid from 'uuid';
import { Dashboard } from './components/wrapper';
import { Body } from './components/body';
import {
    Navbar,
    NavbarSection,
    NavbarItem
} from './components/navbar';
import {
    Sidebar,
    SidebarBody,
    SidebarBodySection,
    SidebarBodySectionItem,
    SidebarBodySectionTitle,
    SidebarHeader
} from './components/sidebar';
import profileImg from './profile-pic.jpg';
import {
    Tabs,
    Tab
} from './components/tabs';

const App = () => {

    const [navActive, setNavActive] = useState('social');
    const [activeTab, setActiveTab] = useState('');
    const [ids] = useState({
        tab1: uuid(),
        tab2: uuid(),
        tab3: uuid()
    })

    const toggleNav = name => setNavActive(name);
    const toggleTab = id => { console.log(activeTab); setActiveTab(id); }

    return (
        <Dashboard>
            <Navbar>
                <NavbarSection>
                    <NavbarItem onClick={toggleNav} active={navActive} icon='fa-user' name='social' />
                    <NavbarItem onClick={toggleNav} active={navActive} icon='fa-umbrella-beach' name='sandboxes' />
                </NavbarSection>
                <NavbarSection>
                    <NavbarItem onClick={toggleNav} active={navActive} icon='fa-cogs' name='settings' />
                </NavbarSection>
            </Navbar>
            <Sidebar>
                <SidebarHeader username='Alec Mather' img={profileImg} />
                <SidebarBody>
                    <SidebarBodySection>
                        <SidebarBodySectionTitle name='Sandboxes' />
                        <SidebarBodySectionItem name='Grossing Artist Revenue' />
                        <SidebarBodySectionItem name='Pop Trends in 2019' />
                        <SidebarBodySectionItem name='Grateful Dead Deal' />
                        <SidebarBodySectionItem name='Testing Data' />
                    </SidebarBodySection>
                    <SidebarBodySection>
                        <SidebarBodySectionTitle name='Sandboxes' />
                        <SidebarBodySectionItem name='Grossing Artist Revenue' />
                        <SidebarBodySectionItem name='Pop Trends in 2019' />
                        <SidebarBodySectionItem name='Grateful Dead Deal' />
                        <SidebarBodySectionItem name='Testing Data' />
                    </SidebarBodySection>
                    <SidebarBodySection>
                        <SidebarBodySectionTitle name='Sandboxes' />
                        <SidebarBodySectionItem name='Grossing Artist Revenue' />
                        <SidebarBodySectionItem name='Pop Trends in 2019' />
                        <SidebarBodySectionItem name='Grateful Dead Deal' />
                        <SidebarBodySectionItem name='Testing Data' />
                    </SidebarBodySection>
                </SidebarBody>
            </Sidebar>
            <Tabs>
                <Tab name='Tab 1' active={activeTab} onClick={toggleTab} id={ids.tab1} />
                <Tab name='Tab 2' active={activeTab} onClick={toggleTab} id={ids.tab2} />
                <Tab name='Tab 3' active={activeTab} onClick={toggleTab} id={ids.tab3} />
            </Tabs>
            <Body></Body>
        </Dashboard>
    )
}

export default App;