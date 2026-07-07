<script lang="ts">
  import AutoCarousel from '$lib/components/AutoCarousel.svelte';
  import YouTubePlayer from '$lib/components/YouTubePlayer.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
  <title>Gallery | Ambika Real Estate</title>
  <meta name="description" content="View photos and videos of our premium commercial space in Chakan MIDC." />
</svelte:head>

<section class="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
  <div class="container-main">
    <ScrollReveal>
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-brand-500 font-semibold text-sm uppercase tracking-wider">Gallery</span>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
          Our <span class="text-brand-500">Property</span>
        </h1>
        <p class="text-gray-500 text-lg leading-relaxed">
          Take a visual tour of our premium commercial space. Browse photos and watch walkthrough videos.
        </p>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        <YouTubePlayer
          videoId="WPxrUGJySt8"
          title="Quick Tour - Premium Commercial Space"
          vertical
          class="shadow-xl"
        />
        <YouTubePlayer
          videoId="7vkUAOLeE7Y"
          title="Full Walkthrough - 3400 Sq Ft Space"
          class="shadow-xl"
        />
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="mb-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
          Photo <span class="text-brand-500">Gallery</span>
        </h2>
        <p class="text-gray-500 mt-2">Browse through our property photos using the arrows or swipe on mobile.</p>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <AutoCarousel />
    </ScrollReveal>
  </div>
</section>
