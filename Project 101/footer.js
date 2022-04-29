class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
      <div class="foot1">
        <div id="foot1-1">
          <h2>INTERESTED IN STARTING OFF?</h2>
          <a href="contact.html">
            <h3>GET IN TOUCH</h3>
          </a>
        </div>
        <div class="social">
          <a href="#" class="fa fa-instagram" id="insta"></a>
          <a href="#" class="fa fa-linkedin" id="linkedin"></a>
           <a href="#" class="fa fa-facebook" id="facebook"></a>
          <a href="#" class="fa fa-twitter" id="twitter"></a>
        </div>
      </div>

      <div class="foot2">
        <div id="mail">
          <a href="mailto:info@trymemes.com" target="_blank">
            <i class="fas fa-envelope"></i> info@trymemes.com</a
          >
        </div>
        <div id="call">
          <a href="tel:9404462706" target="_blank"
            ><i class="fas fa-phone-alt"></i> +91-9284578981</a
          >
        <!-- </div>
        <a href="https://wa.me/9284578981" target="_blank">
          <h3>Whatsapp now <i class="fa fa-comment"></i></h3>
        </a>
      </div> -->
    </footer>`;
  }
}

customElements.define("foot-er", Footer);
