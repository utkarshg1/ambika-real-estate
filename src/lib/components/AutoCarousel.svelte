<script lang="ts">
  import eveningPhoto from '$lib/assets/Evening Photo.jpeg';
  import frontageBuilding from '$lib/assets/Frontage Building.jpeg';
  import generatorBackup from '$lib/assets/Generator Backup.jpeg';
  import buildingSide from '$lib/assets/Building Side.jpeg';

  interface CarouselImage {
    src: string;
    alt: string;
    label: string;
  }

  const images: CarouselImage[] = [
    { src: frontageBuilding, alt: 'Building frontage', label: 'Building Frontage' },
    { src: buildingSide, alt: 'Building side view', label: 'Side View' },
    { src: eveningPhoto, alt: 'Building in evening', label: 'Evening View' },
    { src: generatorBackup, alt: 'Generator backup system', label: 'Generator Backup' }
  ];

  let current = $state(0);
  let hovering = $state(false);
  let touchStartX = $state(0);
  let touchEndX = $state(0);

  let total = $derived(images.length);

  function next() {
    current = (current + 1) % total;
  }

  function prev() {
    current = (current - 1 + total) % total;
  }

  function goTo(index: number) {
    current = index;
  }

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e: TouchEvent) {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  }

  $effect(() => {
    if (hovering) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  });
</script>

<div
  class="relative w-full overflow-hidden rounded-2xl bg-gray-100 select-none aspect-[16/9]"
  role="region"
  aria-label="Image carousel"
  onmouseenter={() => (hovering = true)}
  onmouseleave={() => (hovering = false)}
  ontouchstart={handleTouchStart}
  ontouchend={handleTouchEnd}
>
  {#each images as image, i (image.src)}
    <div
      class="absolute inset-0 transition-all duration-500 ease-out"
      style="transform: translateX({(i - current) * 100}%);"
    >
      <img
        src={image.src}
        alt={image.alt}
        class="w-full h-full object-cover"
        loading={i === 0 ? 'eager' : 'lazy'}
      />
      <div class="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        <p class="text-white text-sm md:text-base font-semibold">{image.label}</p>
        <p class="text-white/60 text-xs mt-0.5">{i + 1} / {total}</p>
      </div>
    </div>
  {/each}

  <button
    onclick={prev}
    class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 z-10"
    aria-label="Previous image"
  >
    <svg class="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
    </svg>
  </button>

  <button
    onclick={next}
    class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 z-10"
    aria-label="Next image"
  >
    <svg class="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
    </svg>
  </button>

  <div class="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
    {#each images as image, i (image.src)}
      <button
        onclick={() => goTo(i)}
        class="rounded-full transition-all duration-300 bg-white/90 w-2.5 h-2.5 shadow-sm {i === current ? 'w-7 bg-brand-400' : 'hover:bg-white'}"
        aria-label="Go to slide {i + 1}"
      ></button>
    {/each}
  </div>
</div>
