import React from 'react';
import iMac from '../assets/imac-27-color.png';

const SectionFive = () => {
	return (
		<div className='section-five'>
			<div>
				<img src={iMac} alt='imac' width='100%'/>
			</div>
			<div>
				<span>43<sup>%</sup></span>
				<p>brighter than previous model</p>
				<span>1billion</span>
				<p>colors</p>
				<hr align='left' width='50px' style={{backgroundColor: 'black', margin:'40px 0'}}/>
				<h3>The color you shoot is the color you see.</h3>
				<p>The world is full of spectacular colors, and iMac brings more of them to your screen. The Retina display uses P3 color that shifts away from standard white LEDs to advanced red-green phosphor LEDs. So all three colors — red, green, and blue — are more equally represented and show off real-world color with more balance and precision.</p>
			</div>
		</div>
	)
}

export default SectionFive;