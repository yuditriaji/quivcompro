class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
  
    <title>Quiv Indonesia - Home</title>
    <meta content="" name="description">
    <meta content="" name="keywords">
  
    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">
  
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  
    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  
    <!-- Template Main CSS File -->
    <link href="assets/css/main.css" rel="stylesheet">
  
  </head>
  
      <footer id="footer" class="footer">

      <div class="footer-content">
        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-5 col-md-12 footer-info">
              <a href="index.html" class="logo d-flex align-items-center">
                <span>Quiv</span>
              </a>
              <p>Empowering success through innovation and personalized solutions. We're dedicated to driving efficiency, fostering growth, and ensuring your success in the dynamic landscape of the digital era.</p>
              <div class="social-links d-flex  mt-3">
                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
    
            <div class="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bi bi-dash"></i> <a href="#">Home</a></li>
                <li><i class="bi bi-dash"></i> <a href="#">About us</a></li>
                <li><i class="bi bi-dash"></i> <a href="#">Services</a></li>
                <li><i class="bi bi-dash"></i> <a href="#">Terms of service</a></li>
                <li><i class="bi bi-dash"></i> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
    
            <div class="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i class="bi bi-dash"></i> <a href="#">Web Design</a></li>
                <li><i class="bi bi-dash"></i> <a href="#">Web Development</a></li>
                <li><i class="bi bi-dash"></i> <a href="#">Product Management</a></li>
                <li><i class="bi bi-dash"></i> <a href="#">Marketing</a></li>
                <li><i class="bi bi-dash"></i> <a href="#">Graphic Design</a></li>
              </ul>
            </div>
    
            <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <strong>PT. Sinar Aji Mandiri</strong>
              <p>
                Halim Perdana Kusuma. Makasar<br>
                Kota Adm. Jakarta Timur. DKI Jakarta, No. 18, 13610<br>
                Indonesia<br><br>
                <strong>Phone:</strong> +62 878 3406 6458<br>
                <strong>Email:</strong> quivindonesia@gmail.com<br>
              </p>
    
            </div>
    
          </div>
        </div>
      </div>
    
      <div class="footer-legal">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Quiv Indonesia</span></strong>. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);