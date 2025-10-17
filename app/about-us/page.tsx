import Head from 'next/head';
import AboutClient from './aboutClient';

const AboutUs = () => {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>About Us | Your Company Name</title>
        <meta
          name="description"
          content="We are a team of passionate engineers dedicated to solving complex problems with innovative technology."
        />
        <meta name="keywords" content="About us, Company, Mission, Vision" />
        <link rel="canonical" href="https://b8-website-revamp.vercel.app/about-us" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="About Us | Your Company Name" />
        <meta
          property="og:description"
          content="We are a team of passionate engineers dedicated to solving complex problems with innovative technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://b8-website-revamp.vercel.app/about-us" />
        <meta property="og:image" content="https://b8-website-revamp.vercel.app/logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Your Company Name" />
        <meta
          name="twitter:description"
          content="We are a team of passionate engineers dedicated to solving complex problems with innovative technology."
        />
        <meta name="twitter:image" content="https://b8-website-revamp.vercel.app/logo.png" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
      </Head>

      <main className="pt-[100px]">

        <section>
          <AboutClient />
        </section>
      </main>
    </>
  );
};

export default AboutUs;
