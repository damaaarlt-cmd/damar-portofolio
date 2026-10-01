import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import { About, Contact, Experience, Footer, Intro, Process, Skills } from './components/Sections';

export default function App() {
  return (
    <>
      <Navbar />
      <main><Hero /><Intro /><Work /><About /><Skills /><Experience /><Process /><Contact /></main>
      <Footer />
    </>
  );
}
