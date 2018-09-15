import React from 'react';
import iMac from '../assets/imac-hero.png';

const SectionFour = () => {
	return (
		<div className='section-four'>
			<div className='container'>
				<p>Retina Display</p>
				<h1>Retina at its most brilliant.</h1>
			</div>
			<img src={iMac} alt='imac' width='100%'/>
			<div className='container'>
			<h3>Brighter than ever. More colors than ever.</h3>
			<p>The Retina display shines even more vividly on the new iMac. With one billion colors and 500 nits of brightness, graphics leap off the screen in a whole new light. And the pixel density is so high that you won’t detect a single one. Text is so clear and sharp, your email and documents will look smarter than ever. It’s simply the best Mac Retina display yet.
			</p>
			</div>
		</div>
	)
}

export default SectionFour;