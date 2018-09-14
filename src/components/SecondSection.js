import React from 'react';
import iMac from '../assets/imac-is-fast.png';

const SecondSection = () => {
	return (
		<div className='second-section'>
			<div className='container'>
				<p>Performance</p>
				<h1>Think fast. We did.</h1>
			</div>
			<img src={iMac} alt='imac' width='100%'/>
			<div className='container'>
			<h3>Performance boosts across the board.</h3>
			<p>Faster and more powerful than ever, iMac is now equipped with seventh-generation Intel Core i5 and i7 processors and the latest high-performance graphics. Storage kicks into high gear as well, with the speedy and spacious Fusion Drive now available in standard configurations of both the 27-inch and 21.5-inch Retina models. So you can do everything you love to do on iMac. All at maximum velocity.</p>
			</div>
		</div>
	)
}

export default SecondSection;