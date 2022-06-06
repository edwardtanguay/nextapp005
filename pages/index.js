import Head from 'next/head';
import { Header } from '../components/Header';
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
			<Header/>
      <Nav/>
      <h2>Welcome</h2>
      <p>Welcome to this site.</p>
      <p className={styles.highlight}>More changes coming soon...</p>
		</>
	);
}
