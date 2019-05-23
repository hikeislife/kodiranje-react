import React, { Component } from "react";
import { getTopNav } from '../data/topNav';
//import { textAreaSizer } from '../helpers';

class TopNav extends Component {
	state = {
		mainNav: getTopNav(),
		selection: "mp",
		activeIndex: 0,
	};

	componentDidUpdate() {
		//textAreaSizer();
	}

	render() {
		return ( <nav>
			<ul>
				{ this.state.mainNav.map(t => 
					<li 
						key={t._id} 
						id={t._id} 
						onClick={() => this.props.onClick(t._id) } > 
						{ t.content } 
					</li> 
					) }
			</ul>
		</nav> )
	}
}

export default TopNav;