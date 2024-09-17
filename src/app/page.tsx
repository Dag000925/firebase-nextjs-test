import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-3xl'>Welcome to the Viewer App</h1>
      <Link href="/about">Go to About Page</Link>
      <br />
      <Link href="/contact">Go to Contact Page</Link>
    </div>
  );
};

export default HomePage;