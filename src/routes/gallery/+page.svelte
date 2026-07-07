<script lang="ts">
  import GalleryGrid from '$lib/components/GalleryGrid.svelte';
  import ScrollReveal from '$lib/components/ScrollReveal.svelte';
</script>

<svelte:head>
  <title>Gallery | Ambika Real Estate</title>
  <meta name="description" content="View photos of our premium commercial space in Chakan MIDC." />
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
          Take a visual tour of our premium commercial space. Click on any image to view in full screen.
        </p>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <GalleryGrid />
    </ScrollReveal>
  </div>
</section>
