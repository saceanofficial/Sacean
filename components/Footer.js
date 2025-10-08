export default function Footer() {
  return (
    <footer style={{ background: 'black', borderTop: '1px solid white', padding: '1rem', textAlign: 'center' }}>
      <p style={{ color: 'white' }}>
        &copy; {new Date().getFullYear()} Sacean. All rights reserved.<br />
        <span>#Sacean #SaceanOfficial #SaceanMusic #AuralAnomalySacean</span>
      </p>
    </footer>
  );
}