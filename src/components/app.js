import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Checkboxmain from './Checkboxmain';
import Select from './Select';


class Tabs extends React.Component {
    constructor() {
        super();
        this.state = {
            activeIndex : 0
        };
    }

    handleOnClick(key, event) {
        event.preventDefault();
        this.setState({
            activeIndex : key
        });
    }

    renderNavItem(key) {
        let tab = this.props.children[key];
        return (
            <li key={ key } className={ this.state.activeIndex == key ? 'active' : ''}>
                <a href="#" onClick={ this.handleOnClick.bind(this, key) }>{ tab.props.title }</a>
            </li>
        );
    }

    render() {
        let index = 0;
        let active = this.state.activeIndex;
        let tabs = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                active : child.props.active === true ? true : (active == index++)
            });
        });

        return (
            <div className={ this.props.className }>
                <ul className="tabs-nav">
                    { Object.keys(this.props.children).map(this.renderNavItem.bind(this)) }
                </ul>
                <div className="tabs-content">
                    { tabs }
                </div>
            </div>
        )
    }
}

class Tab extends React.Component {
    render() {
        return (
            <div className={ "tab-panel" + (this.props.active ? ' active' : '') }>
                { this.props.children }
            </div>
        )
    }
}

Tab.defaultProps = {
    active : false
};


export default class App extends Component {
  render() {
    return (
      <div>
      <h1>Select Patient Self-Monitoring Schedule*</h1>
      <Tabs className="tabs-wrapper">
        <Tab active="true" title="By Time Slot">
          <div><Checkboxmain /></div>
        </Tab>
        <Tab title="By Frequency">
          <div><Select /></div>
        </Tab>
      </Tabs>
      </div>
    );
  }
}
