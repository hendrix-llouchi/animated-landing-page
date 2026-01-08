<template>
  <div ref="containerRef" class="relative h-[500vh]">
    <!-- Loading State -->
    <Transition name="fade">
      <div 
        v-if="!isLoaded" 
        class="fixed inset-0 z-50 bg-[#0a0f1a] flex flex-col items-center justify-center"
      >
        <div class="relative mb-12">
          <div class="w-24 h-24 rounded-full border-2 border-white/10 flex items-center justify-center">
            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center animate-pulse">
              <span class="text-white font-black text-2xl tracking-tighter">RB</span>
            </div>
          </div>
          <svg class="absolute inset-0 w-24 h-24 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50" cy="50" r="46"
              fill="none"
              stroke="#1e3a5f"
              stroke-width="4"
              stroke-linecap="round"
              :stroke-dasharray="289"
              :stroke-dashoffset="289 - (289 * loadProgress / 100)"
              class="transition-all duration-200"
            />
          </svg>
        </div>
        <p class="text-white/80 text-lg font-medium mb-2">Loading Experience</p>
        <p class="text-white/40 text-sm">{{ Math.round(loadProgress) }}%</p>
      </div>
    </Transition>

    <!-- Sticky Canvas Container -->
    <div class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0f1a]">
      <canvas 
        ref="canvasRef"
        class="max-w-full max-h-full object-contain"
      ></canvas>

      <!-- Text Overlays with Premium Animations -->
      
      <!-- 0% - Hero Title -->
      <div 
        class="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        :style="getHeroStyle()"
      >
        <div class="text-center">
          <p 
            class="text-sm md:text-base uppercase tracking-[0.3em] text-white/50 mb-4 font-medium"
            :style="{ opacity: getTextOpacity(0, 0.15), transform: `translateY(${getParallax(0, 0.15, 20)}px)` }"
          >
            Red Bull Energy
          </p>
          <h1 
            class="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6"
            :style="{ opacity: getTextOpacity(0, 0.18), transform: `translateY(${getParallax(0, 0.18, 40)}px) scale(${getScale(0, 0.18)})` }"
          >
            <span class="block">Unleash</span>
            <span class="block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-2xl">
              Your Wings
            </span>
          </h1>
          <p 
            class="text-lg md:text-xl text-white/50 max-w-md mx-auto font-light"
            :style="{ opacity: getTextOpacity(0, 0.12), transform: `translateY(${getParallax(0, 0.12, 30)}px)` }"
          >
            Experience the energy that fuels champions
          </p>
          
          <!-- Scroll Indicator -->
          <div 
            class="mt-16 flex flex-col items-center gap-2"
            :style="{ opacity: getTextOpacity(0, 0.1) }"
          >
            <span class="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
            <div class="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
              <div class="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 30% - Feature 1 (Left) -->
      <div 
        class="absolute inset-y-0 left-0 flex items-center px-6 md:px-12 lg:px-20 w-full md:w-1/2 pointer-events-none"
        :style="getFeature1Style()"
      >
        <div class="max-w-lg">
          <div 
            class="flex items-center gap-4 mb-6"
            :style="{ opacity: getTextOpacity(0.22, 0.42), transform: `translateX(${getSlideIn(0.22, 0.42, -80)}px)` }"
          >
            <div class="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <span class="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Ingredients</span>
          </div>
          <h2 
            class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-none"
            :style="{ opacity: getTextOpacity(0.24, 0.44), transform: `translateX(${getSlideIn(0.24, 0.44, -100)}px)` }"
          >
            Alpine Water
            <span class="block text-red-500">&amp; Caffeine</span>
          </h2>
          <p 
            class="text-base md:text-lg text-white/50 leading-relaxed font-light"
            :style="{ opacity: getTextOpacity(0.26, 0.40), transform: `translateX(${getSlideIn(0.26, 0.40, -60)}px)` }"
          >
            Pure alpine spring water meets precisely calibrated caffeine for the perfect energy boost.
          </p>
        </div>
      </div>

      <!-- 55% - Feature 2 (Right) -->
      <div 
        class="absolute inset-y-0 right-0 flex items-center justify-end px-6 md:px-12 lg:px-20 w-full md:w-1/2 pointer-events-none"
        :style="getFeature2Style()"
      >
        <div class="max-w-lg text-right">
          <div 
            class="flex items-center justify-end gap-4 mb-6"
            :style="{ opacity: getTextOpacity(0.48, 0.68), transform: `translateX(${getSlideIn(0.48, 0.68, 80, true)}px)` }"
          >
            <span class="text-blue-400 text-xs font-bold uppercase tracking-[0.2em]">Formula</span>
            <div class="w-12 h-[2px] bg-gradient-to-l from-blue-400 to-blue-600"></div>
          </div>
          <h2 
            class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-none"
            :style="{ opacity: getTextOpacity(0.50, 0.70), transform: `translateX(${getSlideIn(0.50, 0.70, 100, true)}px)` }"
          >
            <span class="text-red-500">Carbonated</span>
            <span class="block">Perfection</span>
          </h2>
          <p 
            class="text-base md:text-lg text-white/50 leading-relaxed font-light"
            :style="{ opacity: getTextOpacity(0.52, 0.66), transform: `translateX(${getSlideIn(0.52, 0.66, 60, true)}px)` }"
          >
            Billions of microscopic bubbles deliver the signature tingle that awakens every sense.
          </p>
        </div>
      </div>

      <!-- 85% - CTA -->
      <div 
        class="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none"
        :style="getCtaStyle()"
      >
        <div class="text-center">
          <h2 
            class="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white mb-6"
            :style="{ opacity: getTextOpacity(0.78, 1), transform: `translateY(${getParallax(0.78, 1, -40)}px) scale(${getScale(0.78, 1)})` }"
          >
            The Zenith of
            <span class="block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              Energy
            </span>
          </h2>
          <p 
            class="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 font-light"
            :style="{ opacity: getTextOpacity(0.80, 1), transform: `translateY(${getParallax(0.80, 1, -20)}px)` }"
          >
            More than a drink. It's a state of mind.
          </p>
          <div 
            class="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
            :style="{ opacity: getTextOpacity(0.82, 1), transform: `translateY(${getParallax(0.82, 1, -10)}px)` }"
          >
            <button class="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full shadow-lg shadow-red-600/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105">
              Get Your Wings
              <span class="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button class="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <!-- Scroll Progress Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <div class="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            class="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-100"
            :style="{ width: `${scrollProgress * 100}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref(null)
const canvasRef = ref(null)
const scrollProgress = ref(0)
const isLoaded = ref(false)
const loadProgress = ref(0)

const TOTAL_FRAMES = 40
const images = ref([])
let currentFrameIndex = -1
let cachedWidth = 0
let cachedHeight = 0

// Optimized image preloader
const preloadImages = async () => {
  const loadPromises = []
  const loadedImages = new Array(TOTAL_FRAMES)
  
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const frameNumber = String(i).padStart(3, '0')
    const img = new Image()
    img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`
    
    const promise = new Promise((resolve) => {
      img.onload = () => {
        loadedImages[i - 1] = img
        loadProgress.value = (loadPromises.filter((_, idx) => loadedImages[idx]).length / TOTAL_FRAMES) * 100
        resolve()
      }
      img.onerror = resolve
    })
    
    loadPromises.push(promise)
  }
  
  await Promise.all(loadPromises)
  images.value = loadedImages
  
  // Small delay for smooth transition
  await new Promise(r => setTimeout(r, 300))
  isLoaded.value = true
  
  // Initial setup
  resizeCanvas()
  drawFrame(true)
}

// Throttled scroll handler
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScrollProgress()
      ticking = false
    })
    ticking = true
  }
}

const updateScrollProgress = () => {
  if (!containerRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  const scrollHeight = rect.height - window.innerHeight
  const scrolled = -rect.top
  
  const newProgress = Math.max(0, Math.min(1, scrolled / scrollHeight))
  
  if (scrollProgress.value !== newProgress) {
    scrollProgress.value = newProgress
    drawFrame()
  }
}

// Separate resize logic - EXPENSIVE, only run on resize
const resizeCanvas = () => {
  if (!canvasRef.value || images.value.length === 0) return
  
  const canvas = canvasRef.value
  const img = images.value[0] // Use first image for aspect ratio
  
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const imgAspect = img.width / img.height
  const viewportAspect = viewportWidth / viewportHeight
  
  let renderWidth, renderHeight
  
  if (viewportAspect > imgAspect) {
    renderHeight = viewportHeight
    renderWidth = renderHeight * imgAspect
  } else {
    renderWidth = viewportWidth
    renderHeight = renderWidth / imgAspect
  }
  
  // Only update if changed to avoid clearing canvas unnecessarily
  if (canvas.width !== renderWidth || canvas.height !== renderHeight) {
    canvas.width = renderWidth
    canvas.height = renderHeight
    cachedWidth = renderWidth
    cachedHeight = renderHeight
    
    // Redraw immediately after resize
    drawFrame(true)
  }
}

// Optimized draw loop - FAST, runs on scroll
const drawFrame = (force = false) => {
  if (!canvasRef.value || images.value.length === 0) return
  
  const frameIndex = Math.min(
    Math.floor(scrollProgress.value * TOTAL_FRAMES),
    TOTAL_FRAMES - 1
  )
  
  // Skip if frame hasn't changed (unless forced)
  if (!force && frameIndex === currentFrameIndex) return
  
  const img = images.value[frameIndex]
  if (!img) return
  
  currentFrameIndex = frameIndex
  
  const ctx = canvasRef.value.getContext('2d', { alpha: false })
  
  // Use cached dimensions
  ctx.drawImage(img, 0, 0, cachedWidth, cachedHeight)
}

// Animation helper functions
const getTextOpacity = (start, end) => {
  const progress = scrollProgress.value
  const fadeIn = 0.06
  const fadeOut = 0.06
  
  if (progress < start - fadeIn) return 0
  if (progress > end + fadeOut) return 0
  if (progress < start + fadeIn) {
    return Math.pow((progress - (start - fadeIn)) / (fadeIn * 2), 0.8)
  }
  if (progress > end - fadeOut) {
    return Math.pow(1 - (progress - (end - fadeOut)) / (fadeOut * 2), 0.8)
  }
  return 1
}

const getParallax = (start, end, distance) => {
  const progress = scrollProgress.value
  const center = (start + end) / 2
  const diff = progress - center
  return diff * distance * 10
}

const getScale = (start, end) => {
  const opacity = getTextOpacity(start, end)
  return 0.9 + (opacity * 0.1)
}

const getSlideIn = (start, end, distance, reverse = false) => {
  const opacity = getTextOpacity(start, end)
  const slideAmount = (1 - opacity) * distance
  return reverse ? -slideAmount : slideAmount
}

// Style getters for each section
const getHeroStyle = () => ({
  opacity: getTextOpacity(0, 0.2),
  willChange: 'opacity, transform', // Optimizes rendering
  pointerEvents: getTextOpacity(0, 0.2) > 0.5 ? 'auto' : 'none'
})

const getFeature1Style = () => ({
  opacity: getTextOpacity(0.22, 0.45),
  willChange: 'opacity, transform',
  pointerEvents: getTextOpacity(0.22, 0.45) > 0.5 ? 'auto' : 'none'
})

const getFeature2Style = () => ({
  opacity: getTextOpacity(0.48, 0.72),
  willChange: 'opacity, transform',
  pointerEvents: getTextOpacity(0.48, 0.72) > 0.5 ? 'auto' : 'none'
})

const getCtaStyle = () => ({
  opacity: getTextOpacity(0.78, 1),
  willChange: 'opacity, transform',
  pointerEvents: getTextOpacity(0.78, 1) > 0.5 ? 'auto' : 'none'
})

onMounted(async () => {
  await preloadImages()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', resizeCanvas)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
