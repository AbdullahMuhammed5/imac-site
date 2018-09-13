import React from 'react';

const FixedNav = () => {
	return (
		<div className='fixed-nav-container'>
			<div className='container fixed-nav'>
				<div>iMac</div>
				<div></div>
				<div>
					<ul className='nav fixed-nav-right'>
						<li>Overview</li>
						<li>macOS</li>
						<li>Tech Specs</li>
						<li id='btn'>
						<button type="button" className="btn btn-info">Buy</button></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FixedNav;