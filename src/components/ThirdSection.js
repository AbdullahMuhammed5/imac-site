import React from 'react';
import iMac from '../assets/iMac_Q317_2.png';

const ThirdSection = () => {
	return (
		<div id='third-section'>
			<div id='part-one'>
				<div id='block-one'>
					<div style={{marginBottom:'50px'}}>
						<h3>Graphics that render you speechless.</h3>
						<p>iMac features powerful new Radeon Pro 500 series graphics that make a spectacle of everything you see. The 27-inch iMac with Retina 5K display is loaded with up to 8GB of dedicated VRAM. And the 21.5-inch iMac with Retina 4K display ignites with up to 4GB. Both deliver visual effects and 3D graphics that exhibit raw power in its most polished form. On top of that, you get advanced video editing capabilities. Now you can edit multicam projects in Final Cut Pro X with up to five streams of full-resolution 4K video.</p>
					</div>
					<div>
						<span>21.5-inch<sup>1</sup></span>
						<span>21.5-inch 4K<sup>2</sup></span>
						<span>27-inch 5K<sup>3</sup></span>
					</div>
					<div style={{marginTop:'50px'}}>
						<p>1.8X <span>faster video editing</span></p>
						<hr className='orange-hr' align="left"/>
						<hr className='gray-hr' align="left"/>

						<p>1.7X <span>faster gaming</span></p>
						<hr className='orange-hr' align="left"/>
						<hr className='gray-hr' align="left"/>

						<p>1.7X <span>faster 3d graphics</span></p>
						<hr className='orange-hr' align="left"/>
						<hr className='gray-hr' align="left"/>
					</div>
				</div>
				<div id='block-two'>
				<img src={iMac} alt='imac' width='90%'/>
				</div>
			</div>
			<div id='part-two'>
				<div id='block-three'>
					<h3>Accelerate your every move.</h3>
					<p>An all-new seventh-generation Intel Core processor in every iMac. It’s more speed than iMac has ever reached before — taking the 27-inch model up to 4.2GHz, and the 21.5-inch model up to 3.6GHz. And Turbo Boost gives you even more power when you’re using processor-intensive applications like Logic Pro or Final Cut Pro. It all takes place behind the scenes, but you’ll see the difference in so many ways.</p>
					<hr align='left' width='50px' style={{backgroundColor: 'black', margin:'40px 0'}}/>
					<div className='row'>
					<div className='col-md-6'>Up to <h1>4.5GHz</h1><p>Turbo Boost on the 27-inch models</p></div>
					<div className='col-md-6'>Up to <h1>4.2GHz</h1><p>Turbo Boost on the 21.5-inch models</p>
					</div>
					</div>
				</div>
				<div id='block-four'>
					<h3>Storage that’s lightning fast. And whip smart.</h3>
					<p>Storage is about space. But it’s also about speed. A Fusion Drive gives you the best of both worlds. The apps and files you use the most are automatically stored on fast flash storage, while everything else moves to a high-capacity hard drive. From booting up to launching apps to importing photos, it’s faster and more efficient to do it all with Fusion Drive. And it’s now standard on all 27-inch models, and on the 21.5-inch model available at just $1499.</p>
					<hr align='left' width='50px' style={{backgroundColor: 'black', margin:'40px 0'}}/>
					<div className='row'>
					<div className='col-md-6'>Up to <h1>50<sup>%</sup></h1><p>faster SSDs4</p></div>
					<div className='col-md-6'>Up to <h1>3TB</h1><p>Fusion Drive5</p>
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThirdSection;