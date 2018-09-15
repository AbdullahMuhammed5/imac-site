import React from 'react';
import iMac from '../assets/Imac.png';

const Footer = () => {
	return (
		<div className='footer'>
			<div id='buy-imac'>
				<div>
					<img src={iMac} alt='imac' width='70%'/>
				</div>
				<div>
					<h2>iMac</h2>
					<p>iMac starting at $1099</p>
					<p>iMac with Retina 4K display starting at $1299</p>
					<a href='#'>Compare iMac models</a>
				</div>
			</div>
			<div>
				<div>
					<i className=""></i>
					<h3>Fast, free delivery</h3><br />
					<p>Choose free delivery or pick up available items at an Apple Store.</p>
					<a href='#'>Learn More</a>
				</div>
				<div>
					<i className=""></i>
					<h3>Special financing</h3><br />
					<p>Apply for special financing and earn rewards.</p>
					<a href='#'>Learn More</a>
				</div>
				<div>
					<i className=""></i>
					<h3>Get help buying</h3><br />
					<p>Have a question? Call a Specialist or chat online.</p>
					<a href='#'>Learn More</a>
				</div>
				<div>
					<i className=""></i>
					<h3>Personal Setup</h3><br />
					<p>We will show you how to get the most out of your new Mac, online or in store.</p>
					<a href='#'>Learn More</a>
				</div>
			</div>
			<hr/>
			<div>
				<ol>
					<li>Testing conducted by Apple in May 2017 using preproduction 2.3GHz dual-core Intel Core i5-based 21.5-inch iMac systems with Intel Iris Plus Graphics 640, 16GB of RAM, and a 256GB SSD, and shipping 1.6GHz dual-core Intel Core i5-based 21.5-inch iMac units with Intel HD Graphics 6000, 16GB of RAM, and a 256GB SSD. Prerelease Final Cut Pro 10.3.4 tested using a 4096x2160 30p project. Total War: WARHAMMER v1.6.0 tested using the built-in benchmark, at 1920x1080 resolution, with low quality settings. Autodesk Maya 2017 tested using a 658MB scene. Performance tests are conducted using specific computer systems and reflect the approximate performance of iMac.</li>
					<li>Testing conducted by Apple in May 2017 using preproduction 3.6GHz quad-core Intel Core i7-based 21.5-inch iMac systems with Radeon Pro 560 graphics, 4GB graphics memory, 32GB of RAM, and a 1TB SSD, and shipping 3.3GHz quad-core Intel Core i7-based 21.5-inch iMac units with Intel Iris Pro Graphics 6200, 16GB of RAM, and a 512GB SSD. F1 2016 v1.0 tested using the built-in benchmark, at 2048x1152 resolution, with high quality settings. Autodesk Maya 2017 tested using a 1.9GB scene. Prerelease Final Cut Pro 10.3.4 tested using a 4096x2160 30p project. Performance tests are conducted using specific computer systems and reflect the approximate performance of iMac.</li>
					<li>Testing conducted by Apple in May 2017 using preproduction 4.2GHz quad-core Intel Core i7-based 27-inch iMac systems with Radeon Pro 580 graphics, 8GB graphics memory, 64GB of RAM, and a 2TB SSD, and shipping 4.0GHz quad-core Intel Core i7-based 27-inch iMac units with AMD Radeon R9 M395X graphics, 4GB graphics memory, 32GB of RAM, and a 1TB SSD. F1 2016 v1.0 tested using the built-in benchmark, at 2560x1440 resolution, with ultra high quality settings. Autodesk Maya 2017 tested using a 3.81GB scene. Prerelease Final Cut Pro 10.3.4 tested using a 4096x2160 30p project. Performance tests are conducted using specific computer systems and reflect the approximate performance of iMac.</li>
					<li>Testing conducted by Apple in May 2017 using preproduction 4.2GHz quad-core Intel Core i7-based 27-inch iMac systems with 64GB of RAM and a 2TB SSD, and shipping 4.0GHz quad-core Intel Core i7-based 27-inch iMac units with 32GB of RAM and a 1TB SSD. Tested with FIO-2.17, 1024KB request size, 150GB test file and IO depth=8. Performance tests are conducted using specific computer systems and reflect the approximate performance of iMac.</li>
					<li>1 TB = 1 trillion bytes; actual formatted capacity less.</li>
					<li>Requires macOS High Sierra 10.13. 27-inch iMac with Radeon Pro 580 graphics recommended for 3D VR content creation and 360° video editing. Final Cut Pro X will add support for 360° video editing later this year.</li>
				</ol>
				<p>Content is sold separately. Title availability is subject to change.</p>
			</div>
			<hr/>
			Copyright © 2018 Apple Inc. All rights reserved
		</div>
	)
}

export default Footer;