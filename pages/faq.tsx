import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";

const Faq = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Friday Pics</title>
        </Head>
        <Container>
          Hello! You are probably wondering what the hell is this site for. The
          idea was based on <a href="http://bildschirmarbeiter.com">Bildschirmarbeiter</a>, which is a german website of
          general humor. They have a weekly picdump that I used to scroll every
          Friday while drinking my morning coffee. Images are pulled from
          Reddit, from the following subreddit list (You want another? Make a
          PR!): CrappyDesign nocontextpics funny funnysigns Funnypics
          AdviceAnimals pics hmmm Eyebleach memes Original posters (OPs) are
          credited. If you are the creator of one of these images and want it
          removed, please contact me, and I'll gladly take it down. If you want
          to take a look at the scrapper, you can do so on this repository:
          https://github.com/berrutti/friday-pics-bot. Thanks and have fun!
        </Container>
      </Layout>
    </>
  );
};

export default Faq;
