import React, { useState } from 'react';
import { Menu, Item, Icon, Form, Input } from 'semantic-ui-react';

import './TopNav.css';

export const TopNav = () => {
    const [searchInputState, setSearchState] = useState("");

    const onSearchChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        let value: string = event.currentTarget.value;
        setSearchState(() => value);
    }
    
    return (
        <Menu borderless fixed="top" className="top-nav">
            <Item className="top-nav__icon">
                <span><Icon size="large" name="youtube"></Icon></span>
                <span>YouTube</span>
            </Item>
            <Menu.Menu className="top-nav__container">
                <Item className="search-input">
                    <Form>
                        <Form.Field>
                            <Input
                                placeholder="Поиск"
                                value={searchInputState}
                                action={{ icon: 'search' }}
                                onChange={onSearchChange}
                            />
                        </Form.Field>
                    </Form>
                </Item>
            </Menu.Menu>
            <Menu.Menu>
                <Item><Icon className="menu-icon" name="video camera" size="large" /></Item>
                <Item><Icon className="menu-icon" name="grid layout" size="large" /></Item>
                <Item><Icon className="menu-icon" name="ellipsis vertical" size="large" /></Item>
            </Menu.Menu>
        </Menu>
    );
}