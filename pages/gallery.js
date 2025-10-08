import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Gallery() {
  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Gallery</h1>
        <p>
          Media, photos, and videos will be featured here.
        </p>
      </main>
      <Footer />
    </div>
  );
}