import Head from "next/head";

const NextHead = ({ title = "The Personal Portfolio of Marco Fernandez" }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Web developer with over 25 years of experience working with a variety of different languages and platforms."
      />
      <link rel="icon" href="/favicon-dark.png" />
    </Head>
  );
};

export default NextHead;
