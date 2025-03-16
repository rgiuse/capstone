import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import Head from './Head';
import HeroSection from './HeroSection';
import HighligthtsSection from './HighligthtsSection';
import TestimonialsSection from './TestimonialsSection';
import AboutSection from './AboutSection';
import './App.css';


function App() {
  return (
    <>
      <Head>
        <meta name="og:title" content="Little Lemon" />
        <meta name="og:image" content="/lemon-dessert.jpg" />
        <meta name="description" content="Little Lemon Restaurant Website" />
        <meta name="og:description" content="Little Lemon Restaurant Website Reservation" />
        <meta name="author" content="Giuseppe Ranieri" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Little Lemon</title>
      </Head>
      <Header>
        <Nav />
      </Header>
      <Main>
        <HeroSection title="Little Lemon" subtitle="Chicago" >
          <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </HeroSection>
        <HighligthtsSection title="This weeks specials!">
          <article></article>
          <article></article>
          <article></article>

        </HighligthtsSection>
        <TestimonialsSection title="What do our customers think?" />
        <AboutSection title="Little Lemon" subtitle="Chicago" >
        <p>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
        </p>
        </AboutSection>

      </Main>
      <Footer>

      </Footer>
    </>
  );
}


export default App;

