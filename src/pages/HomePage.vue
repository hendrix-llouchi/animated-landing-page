<template>
  <div>
    <TheHero />
    <TheFeatures />
    
    <!-- The Optimized Can Experience -->
    <div class="relative">
      <RedBullScroll /> 
      <!-- RedBullScroll handles its own text overlays internally, 
            so we just place it here as a major section -->
    </div>

    <TheLifestyle />
  </div>
</template>

<script setup>
import TheHero from '../components/TheHero.vue'
import TheFeatures from '../components/TheFeatures.vue'
import TheLifestyle from '../components/TheLifestyle.vue'
import RedBullScroll from '../components/RedBullScroll.vue'
</script>
