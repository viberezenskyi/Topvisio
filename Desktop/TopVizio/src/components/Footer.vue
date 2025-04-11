<template>
  <footer class="footer" id="contacts">
    <div class="footer-container">

      <div class="footer-column">
        <div class="block">
          <h4 class="gray">Socials</h4>
          <div class="icons">
            <img src="/images/inst/Instagram.svg" alt="Instagram" />
            <img src="/images/inst/FB.svg" alt="Facebook" />
            <img src="/images/inst/linkedin.svg" alt="LinkedIn" />
            <img src="/images/inst/Behance.svg" alt="Behance" />
            <img src="/images/inst/whatsapp.svg" alt="WhatsApp" />
          </div>
        </div>
        <div class="block bottom-text">
          <p class="tight">TOPVIZIO ©2025</p>
          <p class="tight">ALL RIGHTS RESERVED</p>
        </div>
      </div>

      <div class="footer-column center">
        <div style="	transform: translateX(25px);" class="block">
          <h4 class="gray">Contacts</h4>
          <p class="big tight">info@topvizio.com</p>
          <p class="big tight">+1 437 339 9418</p>
        </div>
        <div class="block bottom-text">
          <p class="tight">PRIVACY POLICY</p>
          <p class="tight">COOKIE POLICY</p>
        </div>
      </div>

      <div class="footer-column right">
        <div style="	transform: translateX(-25px);"  class="block nav">
          <a class="tight" href="#home">Home</a>
          <a class="tight" href="#projects">Projects</a>
          <a class="tight" href="#blog">Blog</a>
          <a class="tight" href="#about">About Us</a>
        </div>
        <div class="block bottom-text">
          <p class="tight">KYIV</p>
          <p class="tight">BIRMINGHAM</p>
        </div>
      </div>
    </div>

    <div class="divider"></div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--black);
  color: var(--white);
  padding: 60px 20px;
  font-size: 20px;
  word-spacing: 0px;
}

.footer-container {
  max-width: 1340px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
  width: 33.333%;
}

.center {
  align-items: center;
  text-align: left;
}

.right {
  align-items: flex-end;
  text-align: left;
}

.block {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.gray {
  color: var(--gray);
  font-weight: 600;
  font-size: 20px;
}

.big {
  font-size: 24px;
  font-weight: 800;
}

.icons {
  display: flex;
  gap: 12px;
  margin-top: 10px;
}

.icons img {
  width: 38px;
  height: 38px;
}

.bottom-text {
  margin-top: 50px;
  gap: 5px;
}

.nav a {
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  line-height: 1.6;
  text-align: left;
}

.tight {
  letter-spacing: normal;
  word-spacing: 0;
  margin: 0;
}

.divider {
  border-top: 2px solid white;
  opacity: 0.8;
  margin: 40px auto 0;
  width: 100%;
  max-width: 1340px;
}

@media (max-width: 1024px) {
  .footer-container {
    flex-direction: column;
    gap: 40px;
    text-align: center;
    align-items: center;
  }

  .footer-column,
  .right,
  .center {
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .nav a {
    text-align: center;
  }
}
</style>