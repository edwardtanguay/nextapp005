import Head from 'next/head';
import { SiteHeader } from '../components/SiteHeader';
import { Nav } from '../components/Nav';
import styles from '../styles/PageWelcome.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Edward&apos;s Info Site</title>
				<meta
					name="description"
					content="Edward's info site with code examples and howtos."
				/>
				<link rel="icon" href="/globe.ico" />
			</Head>
			<SiteHeader/>
      <Nav/>
      <p>Welcome to this site.</p>
      <p className={styles.highlight}>More changes coming soon...</p>
		</>
	);
}
