import { SiteHeader } from '../components/SiteHeader';
import { Nav } from '../components/Nav';
import styles from '../styles/PageWelcome.module.css';
import { DynamicHead } from '../components/DynamicHead';

export default function Home() {
	return (
		<>
			<DynamicHead />
			<SiteHeader />
			<Nav />
			<p>Welcome to this site.</p>
			<p className={styles.highlight}>More changes coming soon...</p>
		</>
	);
}
