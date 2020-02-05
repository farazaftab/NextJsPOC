import Link from 'next/link';

export default function About() {
    return (
      <div>
        <p>This is about us page</p>
        <Link title="About Page" href="/" > 
        <a > goto home </a>
        </Link>
        
      </div>
    );
  }