import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Music() {
  return (
    <div style={{ background: 'black', color: 'white', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Music</h1>
        <p>
          Stream Sacean’s releases on your favorite platform:
        </p>
        <ul>
          <li><a href="https://open.spotify.com/artist/4YgnwDKTVYILUBIOli6EqP" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>Spotify</a></li>
          <li><a href="https://itunes.apple.com/album/id/1752730279" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>Apple Music</a></li>
          <li><a href="https://www.deezer.com/album/603453192" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>Deezer</a></li>
          <li><a href="https://music.amazon.co.uk/artists/B0BZZZGJVQ/sacean" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>Amazon Music</a></li>
          <li><a href="https://soundcloud.com/sacean" target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>SoundCloud</a></li>
        </ul>
        {/* Embed SoundCloud Player */}
        <iframe width="100%" height="166" scrolling="no" frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sacean"></iframe>
      </main>
      <Footer />
    </div>
  );
}