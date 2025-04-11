<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <Solutions />
    <Projects />
    <Clients />
         <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from'./components/About.vue'
import Solutions from './components/Solutions.vue'
import Projects from './components/Projects.vue'
import Clients from './components/Clients.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import './assets/styles.css';
</style>
