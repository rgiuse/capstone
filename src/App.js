import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import Head from './Head';

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
      <Main />
      <Footer>

      </Footer>
    </>
  );
}


export default App;

