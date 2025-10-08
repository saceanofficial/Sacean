import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Sacean</h1>
        <p>
          Sagor, known professionally as Sacean, hails from a musically inclined family and is trained in music knowledge.
          Sacean developed a deep love and understanding of music from an early age. As a South Asia EDM artist, DJ, remixer, and music producer,
          Sacean is the owner of Rogax Records. Fascinated by the boundless possibilities of electronic sounds and production,
          he embarked on a journey to create his own unique style of EDM music. Sacean's music transcends traditional genre boundaries with a focus on
          progressive house, trance, future bass, bigroom, and techno.
        </p>
      </main>
      <Footer />
    </div>
  );
}