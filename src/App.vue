<template>
  <div class="bg-[#0a0f1a] min-h-screen text-white selection:bg-red-500 selection:text-white">
    <!-- Navbar -->
    <nav 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      :class="{ 'py-4 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-white/5': isScrolled, 'py-8': !isScrolled }"
    >
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div class="flex items-center gap-3">
           <div class="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
             <span class="font-black text-[10px]">RB</span>
           </div>
           <span class="font-bold tracking-tight">Red Bull</span>
        </div>
        <div class="hidden md:flex items-center gap-8">
          <a href="#" class="text-sm font-medium text-white/60 hover:text-white transition-colors">Products</a>
          <a href="#" class="text-sm font-medium text-white/60 hover:text-white transition-colors">World</a>
          <button class="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
            Shop
          </button>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main>
      <TheHero />
      <TheFeatures />
      
      <!-- The Optimized Can Experience -->
      <div class="relative">
        <RedBullScroll /> 
        <!-- RedBullScroll handles its own text overlays internally, 
             so we just place it here as a major section -->
      </div>

      <TheLifestyle />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import TheHero from './components/TheHero.vue'
import TheFeatures from './components/TheFeatures.vue'
import TheLifestyle from './components/TheLifestyle.vue'
import TheFooter from './components/TheFooter.vue'
import RedBullScroll from './components/RedBullScroll.vue'

const isScrolled = ref(false)
let lenis

onMounted(() => {
  // Initialize Smooth Scroll
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Navbar scroll listener
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
})
</script>

<style>
html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
