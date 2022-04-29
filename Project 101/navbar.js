function toggleNav() {
  document.body.classList.toggle("poweron");
  button.preventDefault();
  button.stopPropagation();
}

class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
    <nav id="navi" >
     
      <div class="logo-div">
        <img class="left" src="logos/logot1.png" />
      </div>

       <input type="checkbox" id="check" />
      <label for="check" class="checkbtn" onclick="toggleNav()">
        <i class="fas fa-bars"></i>
      </label>
      
      <ul>
        <li><a class="home" href="home.html">Home</a></li>
        <li><a class="about" href="about.html">About</a></li>
        <li><a class="contact" href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>`;
  }
}

customElements.define("nav-bar", Navbar);
