import React from 'react';
import iMac from '../assets/iMac_Q317.png';

const FirstSection = () => {
	return (
		<div className='first-section'>
			<div>
				<p>iMac</p>
				<h1>The vision is brighter than ever.</h1>
			</div>
			<img src={iMac} alt='imac' width='100%'/>
			<p>A desktop experience that draws you in and keeps you there. This is the idea behind today’s iMac. And now that idea is more powerful than ever. The new iMac is packed with all-new processors, the latest graphics technologies, innovative storage, and higher-bandwidth connectivity. And it all comes to life on the brightest and most colorful Retina display iMac has ever seen. So you get an even more immersive experience — and a scintillating new way to take it all in.
			</p>
			<p>21.5-inch iMac with Retina 4K display</p>
			<p>Now starting at $1299</p>
		</div>
	)
}

export default FirstSection;