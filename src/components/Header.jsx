import Navigation from "./Navigation";

function Header(){
    return (
        <header>
        <nav class="shadow">
          <div class="flex justify-between items-center py-6 px-10 container mx-auto">
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-tr from-indigo-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
                Derek Sego
              </h1>
            </div>

            <div>
              <div class="hover:cursor-pointer sm:hidden">
                <span class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                <span class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
                <span class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
              </div>
              <div class="flex items-center">
                {/* Navigation links */}
                <Navigation />

                
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header;