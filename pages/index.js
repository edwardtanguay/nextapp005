/* eslint-disable @next/next/no-img-element */
import { SiteHeader } from '../components/SiteHeader';
import { Nav } from '../components/Nav';
import { DynamicHead } from '../components/DynamicHead';
import Image from 'next/image';
import mainImage from '../public/images/screenWithCode.jpg';

export default function Home() {
	return (
		<>
			<DynamicHead />
			<SiteHeader />
			<Nav />
			<p>Welcome to this site.</p>
			<Image src={mainImage} width={700} alt="code on screen"/>
			<img src="images/screenWithCode.jpg" alt="code on screen"/>
		</>
	);
}
