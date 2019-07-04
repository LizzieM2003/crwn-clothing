import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { sections } from './directory.data';
import './directory.styles.scss';

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = { sections };
  }
  render() {
    const menuItems = this.state.sections.map(item => (
      <MenuItem key={item.id} {...item} />
    ));
    return (
      <div className="directory-menu">
        {menuItems}
      </div>
    );
  }
}

export default Directory;
