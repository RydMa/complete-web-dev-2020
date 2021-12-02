import React from 'react';

import './directory.styles.scss' 

import MenuItem from '../menu-item/menu-item.component';

import sectionData from './sections.data';
class Directory extends React.Component {
    constructor() {
        super();
    
        this.state = {
            sections: sectionData
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(item => (
                    <MenuItem key={item.id} title={item.title} imageUrl={item.imageUrl} size={item.size} />
                ))}           
            </div>
        )
    }
}

export default Directory;