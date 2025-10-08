import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Events() {
  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Events & Tour</h1>
        <p>
          Upcoming events and tour dates will appear here.
        </p>
      </main>
      <Footer />
    </div>
  );
}