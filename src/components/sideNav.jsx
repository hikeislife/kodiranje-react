import React, { Component } from "react";
import { getMenu } from '../data/menu';

class SideNav extends Component {
	state = {
		//current: this.props.id,
		current: "js",
		};

	renderSideMenu(current) {
		let links = getMenu(this.state.current);
		var menu = links.map(item => <a href={ item.urls } key={ item._id }><li key={item._id}>{ item.items }</li></a>)
		return menu;
	};

	render() {
		return ( <div className="sideNav">
			<ul>
				{ this.renderSideMenu(this.state.current) }
			</ul>
		</div> )
	};
}

export default SideNav;