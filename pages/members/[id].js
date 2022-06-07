/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import { SiteHeader } from '../../components/SiteHeader';
import { Nav } from '../../components/Nav';
import { useRouter } from 'next/router';
import axios from 'axios';
import { DynamicHead } from '../../components/DynamicHead';

const url = 'https://edwardtanguay.netlify.app/share/employees.json';

export async function getStaticProps() {
	const members = (await axios.get(url)).data;
	return {
		props: {
			members,
		},
		revalidate: 600
	};
}

export async function getStaticPaths() {
	const members = (await axios.get(url)).data;
	const paths = members.map((m) => ({
		params: { id: String(m.employeeID) },
	}));
	return {
		paths,
		fallback: true,
	};
}

const Members = ({ members }) => {
	const router = useRouter();
	const id = router.query['id'];
	const member = members.find((m) => m.employeeID === Number(id));
	const paths = members.map((m) => ({ id: String(m.employeeID) }));
	console.log('paths', paths);
	return (
		<div className="page_member">
			<DynamicHead />
			<SiteHeader />
			<Nav />
			<code>
				The data on this page is loaded via getStaticProps() and so is{' '}
				<a href="https://nextjs.org/docs/basic-features/data-fetching/overview">
					static-site generation (SSG)
				</a>. Note also that we use the "revalidate: 600" property which means that every 10 minutes the static data will be regenerated on the server.
				.
			</code>
			<div className="singleMember">
				<img
					src={`https://edwardtanguay.netlify.app/share/images/employees/employee_${member.employeeID}.jpg`}
					alt={`member: ${member.firstName} ${member.lastName}`}
				/>
				<div className="info">
					<div className="name">
						{member.firstName} {member.lastName}
					</div>
					<div className="notes">
						{member.notes}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Members;
