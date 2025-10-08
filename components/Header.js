import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ background: 'black', borderBottom: '1px solid white', padding: '1rem 0', textAlign: 'center' }}>
      <nav>
        <Link href="/"><a style={{ color: 'white', margin: '0 1rem' }}>Home</a></Link>
        <Link href="/about"><a style={{ color: 'white', margin: '0 1rem' }}>About</a></Link>
        <Link href="/music"><a style={{ color: 'white', margin: '0 1rem' }}>Music</a></Link>
        <Link href="/events"><a style={{ color: 'white', margin: '0 1rem' }}>Events</a></Link>
        <Link href="/gallery"><a style={{ color: 'white', margin: '0 1rem' }}>Gallery</a></Link>
        <Link href="/contact"><a style={{ color: 'white', margin: '0 1rem' }}>Contact</a></Link>
      </nav>
    </header>
  );
}