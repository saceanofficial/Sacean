import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Contact</h1>
        <p>
          For bookings or management, contact via social media:
        </p>
        <ul>
          <li><a href="https://instagram.com/SaceanOfficial" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>Instagram</a></li>
          <li><a href="https://twitter.com/SaceanOfficial" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>Twitter</a></li>
          <li><a href="https://facebook.com/sacean" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>Facebook</a></li>
          <li><a href="https://www.tiktok.com/@saceanofficial" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>TikTok</a></li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}