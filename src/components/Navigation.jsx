function Navigation() {
    return (
        <ul class="sm:flex space-x-4 hidden items-center">
                  <li>
                    <a
                      href="/"
                      class="text-gray-700 hover:text-indigo-600 text-md "
                    >
                      About Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="/portfolio"
                      class="text-gray-700 hover:text-indigo-600 text-md "
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      class="text-gray-700 hover:text-indigo-600 text-md "
                    >
                      Contact Me
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume"
                      class="text-gray-700 hover:text-indigo-600 text-md "
                    >
                      Resume
                    </a>
                  </li>
                </ul>
    )
}

export default Navigation;