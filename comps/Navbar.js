import Link from 'next/link';
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h1>Tweek List</h1>
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/tweeklist'>Tweeklist</Link>
    </nav>
  );
};

export default Navbar;
