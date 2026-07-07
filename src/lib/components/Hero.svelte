<script lang="ts">
  let { children }: { children: import('svelte').Snippet } = $props();
</script>

<section class="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-500 to-primary-600">
    <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent"></div>
    <div
      class="absolute inset-0 opacity-20"
      style="background-image: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 0%, transparent 50%);"
    ></div>
  </div>

  <div class="relative container-main z-10 pt-24 pb-16 md:pt-32 md:pb-24">
    <div class="max-w-2xl">
      <div class="flex flex-wrap items-center gap-2 mb-5 animate-fade-in">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400/20 backdrop-blur-md rounded-full text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-400/20">
          <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
          Limited Offer — 1 Month Rent Free!
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-xs font-medium">
          Premium Commercial Space
        </span>
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight animate-fade-in-up" style="text-shadow: 0 2px 16px rgba(0,0,0,0.5);">
        Ambika
        <span class="text-amber-300">Real Estate</span>
      </h1>

      <p class="mt-4 text-lg md:text-xl text-white/90 max-w-xl leading-relaxed animate-fade-in-up animation-delay-100" style="text-shadow: 0 1px 8px rgba(0,0,0,0.4);">
        Premium 3400 sq ft commercial space on the 2nd floor available for rent in the heart of Chakan MIDC.
      </p>

      <p class="mt-3 text-base md:text-lg font-semibold text-amber-300 animate-fade-in-up animation-delay-150" style="text-shadow: 0 1px 8px rgba(0,0,0,0.4);">
        Book a site visit today and get 1 month rent absolutely free!
      </p>

      <p class="mt-1.5 text-sm text-amber-300/80 animate-fade-in-up animation-delay-175" style="text-shadow: 0 1px 6px rgba(0,0,0,0.3);">
        ⏰ Limited time offer — valid for 1 week only
      </p>

      <div class="mt-6 flex flex-wrap gap-4 animate-fade-in-up animation-delay-200">
        <a
          href="/contact"
          class="group relative px-6 py-3.5 bg-white text-brand-600 hover:bg-white/90 font-semibold rounded-xl transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5 text-base overflow-hidden"
        >
          <span class="relative z-10">📅 Book Site Visit — Claim Offer</span>
          <span class="absolute inset-0 bg-amber-100 opacity-0 group-hover:opacity-20 transition-opacity"></span>
        </a>
        <a
          href="/gallery"
          class="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 text-base"
          style="text-shadow: 0 1px 4px rgba(0,0,0,0.3);"
        >
          View Gallery
        </a>
      </div>
    </div>

    {#if children}
      <div class="mt-12 animate-fade-in-up animation-delay-300">
        {@render children()}
      </div>
    {/if}
  </div>

  <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
</section>
