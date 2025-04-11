<template>
  <header class="header">
    <div class="left">
      <img src="/images/Logo 1.svg" alt="Logo" class="logo" />
    </div>
    <div class="center">
      <div class="time">
        <span class="city">Birmingham</span> <span class="time-value">&#123;{{ timeBirmingham }}&#125;</span><br />
        <span class="city">Kyiv</span> <span class="time-value">&#123;{{ timeKyiv }}&#125;</span>
      </div>
    </div>
    <div class="right">
      <nav class="nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
        <a href="#about">About Us</a>
      </nav>
      <a href="#contacts" class="contacts-link">
        Contacts
        <img src="/images/bg_photo/Arrow.png" alt="arrow" class="arrow" />
      </a>
      <div class="menu-container">
        <span class="menu-label">Menu</span>
        <div class="menu-icon">☰</div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const timeBirmingham = ref('')
const timeKyiv = ref('')

function updateTimes() {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const kyiv = new Date(utc + 3 * 3600000)
  const birmingham = new Date(utc + 1 * 3600000)

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }

  timeKyiv.value = kyiv.toLocaleTimeString('en-US', options)
  timeBirmingham.value = birmingham.toLocaleTimeString('en-US', options)
}

onMounted(() => {
  updateTimes()
  setInterval(updateTimes, 60000)
})
</script>



<style scoped>
.header {
  background-color: black;
  color: white;
  padding: 28px 96px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  flex-wrap: wrap;
  font-family: 'Alumni Sans', sans-serif;
}

.logo {
  height: 48px;
  object-fit: contain;
  max-width: 88%;

}

.center {
  text-align: left;
  line-height: 1.2;
  font-size:20px;
  margin-left: 90px;

}

.center .city {
  display: inline-block;
  text-transform: capitalize;
  min-width: 100px;
}

.right {
  display: flex;
  align-items: flex-start;
  gap: 48px;
}

.nav {
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: -10px;
}

.nav a {
  color: white;
  font-weight: 600;
  text-decoration: none;
  font-size: 20px;
  line-height: 1.4;
}

.nav a:hover {
  color: #999;
}

.contacts-link {
  color: white;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}

.arrow {
  width: 12px;
  height: 12px;
  display: inline-block;
}

.menu-container {
  display: flex;
  align-items: center;
  gap: 6px;
}

.menu-label {
  font-size: 20px;
  font-weight: 600;
}

.menu-icon {
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 20px;
    padding: 32px 24px;
  }

  .nav {
    align-items: center;
  }
}
</style>
