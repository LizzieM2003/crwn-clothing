import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => {
  const menuItems = sections.map(item => <MenuItem key={item.id} {...item} />);
  return <div className="directory-menu">{menuItems}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
