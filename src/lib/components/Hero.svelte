<script lang="ts">
  import premiumPhoto from '$lib/assets/Premium Building Photo.jpeg';

  let { children }: { children: import('svelte').Snippet } = $props();
</script>

<section class="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
  <div class="absolute inset-0">
    <img
      src={premiumPhoto}
      alt="Premium commercial building in Chakan MIDC"
      class="w-full h-full object-cover"
      style="object-position: center 30%;"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
  </div>

  <div class="relative container-main z-10 pt-24 pb-16 md:pt-32 md:pb-24">
    <div class="max-w-2xl">
      <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in">
        <span class="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></span>
        Premium Commercial Space Available
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight animate-fade-in-up">
        Ambika
        <span class="text-brand-400">Real Estate</span>
      </h1>

      <p class="mt-4 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed animate-fade-in-up animation-delay-100">
        Premium 3400 sq ft commercial space on the 2nd floor available for lease in the heart of Chakan MIDC.
      </p>

      <div class="mt-8 flex flex-wrap gap-4 animate-fade-in-up animation-delay-200">
        <a
          href="/contact"
          class="px-6 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 text-base"
        >
          Schedule a Visit
        </a>
        <a
          href="/gallery"
          class="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 text-base"
        >
          View Gallery
        </a>
      </div>

      {#if children}
        <div class="mt-12 animate-fade-in-up animation-delay-300">
          {@render children()}
        </div>
      {/if}
    </div>
  </div>

  <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
</section>
