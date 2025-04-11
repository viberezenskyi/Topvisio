<template>
  <section class="hero" id="home">
    <img src="/images/bg_photo/planet.svg" alt="planet" class="bg" />
    <div class="content">
      <h1 class="title">
        <div class="row">
          <span class="word">SUSTAINABLE <br> DIGITAL</span>
        </div>
        <div class="row">
          <span class="word_bus">BUSINESS</span>
        </div>
        <div class="row">
          <span class="word_tran">TRANSFORMATION</span>
        </div>
      </h1>
      <div class="scroll">Scroll to discover</div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: black;
}

.bg {
  position: absolute;
  top: -130px;
  width: 94%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transform: scale(0.9);
}

.content {
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 116px 600px 1.14px 60px;
}

.title {
  font-family: 'Alumni Sans', sans-serif;
  font-weight: 900;
  font-size: 200px;
  line-height: 0.8;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: -180px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.word {
  display: inline-block;
  background: linear-gradient(to bottom, #ffffff, #999999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;
}
.word_bus {
  margin-left: 740px;
  margin-top: -180px;
  font-weight: 900;
  position: relative;
  z-index: 2;
  background: linear-gradient(to bottom, #ffffff, #999999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.word_tran{
  margin-left: 90px;
  margin-top: -50px;
  background: linear-gradient(to bottom, #ffffff, #999999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.scroll {
  margin-left: 1220px;
  margin-top: -40px;
  font-size: 20px;
  color: white;
  font-weight: 600;
}

@media (max-width: 1440px) {
  .title {
    font-size: 160px;
  }
}

@media (max-width: 1024px) {
  .title {
    font-size: 100px;
  }

  .row {
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 64px;
    line-height: 1;
  }

  .row {
    flex-direction: column;
    align-items: center;
  }

  .scroll {
    right: 10px;
    bottom: 10px;
    font-size: 12px;
  }
}
</style>