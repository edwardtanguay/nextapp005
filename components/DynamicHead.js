import Head from 'next/head';

export const DynamicHead = ({title = "Edward's Tech Site", description = "Howtos and code examples on the latest tech tools", icon = 'globe.ico'}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content={description}
            />
            <link rel="icon" href={`/${icon}`} />
        </Head>
    );
};
