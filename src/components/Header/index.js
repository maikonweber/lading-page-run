const Header = () => {
  return <header className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-lg"> Mutter Corp </div>
      <nav className="hidden md:block space-x-4"> {/* Hide on mobile, show from medium breakpoint and above */}
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">About</a>
        <a href="#" className="text-white"> Services </a>
        <a href="#" className="text-white"> Contact </a>
      </nav>
    </div>
  </header>
}

export default Header;