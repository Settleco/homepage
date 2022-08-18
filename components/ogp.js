import Head from 'next/head'



export default function Ogp({title}) {
        if (!title) {
                title = "SettleCo."
        } else {
                title = title + " | SettleCo."
        }
        return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="A tiny development company from Turkey, Izmir." />
            <link rel="icon" href="/logo_transparant.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="title" content={title}/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://settleco.net"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content="A tiny development company from Turkey, Izmir."/>
            <meta property="og:image" content="/banner_pride.png"/>
            <meta property="theme-color" content="#141414"/>
            <meta property="twitter:card" content="summary_large_image"/>

            <meta property="twitter:url" content="https://settleco.net"/>
            <meta property="twitter:title" content="settleco.net"/>
            <meta property="twitter:description" content="A tiny development company from Turkey, Izmir." />
            <meta property="twitter:image" content="/banner_pride.png"/>
            <meta property="twitter:domain" content="settleco.net"/>
        </Head>
    )

}