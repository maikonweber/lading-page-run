const Header = () => {
    return <header class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white font-bold text-lg">Your Logo</div>
      <nav class="space-x-4">
        <a href="#" class="text-white">Home</a>
        <a href="#" class="text-white">About</a>
        <a href="#" class="text-white">Services</a>
        <a href="#" class="text-white">Contact</a>
      </nav>
    </div>
  </header>
}

export default Header;