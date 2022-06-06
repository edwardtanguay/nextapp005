import Head from 'next/head';

export const DynamicHead = ({title: description}) => {
    return (
        <Head>
            <title>Edward&apos;s Info Site</title>
            <meta
                name="description"
                content="Edward's info site with code examples and howtos."
            />
            <link rel="icon" href="/globe.ico" />
        </Head>
    );
};
