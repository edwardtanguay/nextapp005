import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import { NavLink } from '../../components/NavLink';

const About = () => {
	return (
		<>
			<SiteHeader />
			<Nav />
			<p>This is the about page with three links:</p>
			<ul>
				<li><NavLink href="about/background">Background</NavLink></li>
				<li>Contents</li>
				<li>Coming Soon</li>
			</ul>
		</>
	);
};

export default About;
