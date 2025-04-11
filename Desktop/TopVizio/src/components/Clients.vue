<template>
  <section class="client-showcase">
    <div class="brand-section">
      <div class="client-title">
        <p class="text-in-block">
          <span class="bull"></span>OUR SATISFIED CLIENTS
        </p>
      </div>
      <div class="brand-scroller">
        <div class="brand-track">
          <img
            v-for="n in 12"
            :key="n"
            :src="`/images/clients/brand${(n - 1) % 6 + 1}.svg`"
            :alt="`Brand ${n}`"
          />
        </div>
      </div>
    </div>

    <div class="cta-banner">
      <div class="cta-content">
        <h2 class="cta-title">
          LET US IMPLEMENT BEST<br />DIGITAL SOLUTION FOR<br />YOUR BUSINESS
        </h2>
        <button class="cta-button">
          SUBMIT AN APPLICATION
          <div class="arrow-container">
            <img
              src="/images/bg_photo/Arrow.png"
              alt="arrow"
              class="arrow arrow-default"
            />
            <img
              src="/images/bg_photo/Arrow_black.png"
              alt="arrow"
              class="arrow arrow-hover"
            />
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.client-showcase {
  background-color: black;
  color: white;
  overflow: hidden;
  width: 100%;
}

.brand-section {
  background: black;
  padding-bottom: 60px;
}

.client-title {
  padding: 60px 0px 10px;
  border-bottom: 3px solid white;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
}

.text-in-block {
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  color: white;
}

.bull {
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  margin-right: 12px;
}

.brand-scroller {
  overflow: hidden;
  position: relative;
  padding: 30px 0;
  height: 90px;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 100px;

}

.brand-track {
  display: flex;
  gap: 60px;
  animation: brand-scroll 20s linear infinite;
  width: max-content;
  box-sizing: border-box;
}

.brand-track img {
  height: 40px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s, transform 0.3s;
}

.brand-track img:hover {
  filter: grayscale(0%);
  transform: scale(1.05);
}

@keyframes brand-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.cta-banner {
  background: url('/images/bg_photo/Dunes@1-1680x904 1.svg') center/cover no-repeat;
  width: 100%;
  max-width: 1460px;
  height: 774px;
  display: flex;
  justify-content: flex-start;
  padding: 70px;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.cta-banner::before {
  content: '';
  display: block;
  height: 60px;
  background: black;
  width: 100%;
  position: absolute;
  top: -60px;
  left: 0;
  
}

.cta-content {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cta-title {
  font-size: 48px;
  font-weight: 800px;
  line-height: 1.2;
  text-transform: uppercase;
  color: white;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 400;
  color: white;
  border: 1px solid white;
  background: transparent;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
}

.cta-button:hover {
  background: white;
  color: black;
}

.arrow-container {
  position: relative;
  width: 14px;
  height: 14px;
}

.arrow {
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  object-fit: contain;
  transition: opacity 0.3s ease;
}

.arrow-hover {
  opacity: 0;
}

.cta-button:hover .arrow-hover {
  opacity: 1;
}

.cta-button:hover .arrow-default {
  opacity: 0;
}

@media (max-width: 768px) {
  .brand-track img {
    height: 40px;
  }

  .cta-title {
    font-size: 24px;
  }

  .cta-banner {
    padding: 40px;
    height: auto;
  }
}
</style>
