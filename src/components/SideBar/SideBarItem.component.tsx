import React from 'react';
import { Item, Icon } from 'semantic-ui-react';
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';

import './SideBarItem.css';

interface ISideBarItem {
    icon: SemanticICONS;
    label: string;
    selected: boolean;
}

export const SideBarItem = (props: ISideBarItem) => {

    const highlightClass = props.selected ? 'hightlight-menu' : null;

    return (
        <Item className={["sidebar-item", highlightClass].join(' ')}>
            <div>
                <span><Icon size="large" name={props.icon}></Icon></span>
                <span>{props.label}</span>
            </div>
        </Item>
    )
}