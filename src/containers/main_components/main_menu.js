import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MainMenu extends Component {

  renderMenu() {
    return this.props.menu.map((menuItem) => {
      return(
          <li key={ menuItem.id } className="list-group-item">
            <Link to={`/${menuItem.url}`}>
              <h3>{menuItem.title}</h3>
            </Link>
          </li>
      );
    });
  }

  render() {
    return(
        <div>
          <ul className='col-md-4'>
            { this.renderMenu() }
          </ul>
        </div>
    );
  };
}

function mapStateToProps(state) {
  return{
    menu : state.menu
  }
}

export default connect(mapStateToProps)(MainMenu)
