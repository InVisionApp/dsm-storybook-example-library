import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './_nav.scss';

/**
 * The Nav is used for site navigation.
 */
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: props.initialActiveTab };
  }

  static propTypes = {
    /**
     * An array of the items to be displayed in the Nav.
     */
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ),
    /**
     * The active tab Id to initialize the Nav component
     */
    initialActiveTab: PropTypes.string
  };

  selectTab = (tabId) => {
    this.setState({ activeTab: tabId });
  };

  render() {
    const { tabs } = this.props;
    const { activeTab } = this.state;

    return (
      <ul className="c-nav">
        {tabs.map((tab) => (
          <Tab key={tab.id} title={tab.title} active={tab.id === activeTab} onClick={() => this.selectTab(tab.id)} />
        ))}
      </ul>
    );
  }
}

const Tab = ({ title, active, onClick }) => {
  return (
    <li className={`c-nav__tab`} onClick={onClick}>
      <div className={`c-nav__tab-content ${active ? 'c-nav__tab--active' : ''}`}>{title}</div>
    </li>
  );
};

export default Nav;
