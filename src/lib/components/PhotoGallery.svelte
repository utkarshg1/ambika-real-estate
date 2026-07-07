<script lang="ts">
  import eveningPhoto from '$lib/assets/Evening Photo.jpeg';
  import frontageBuilding from '$lib/assets/Frontage Building.jpeg';
  import generatorBackup from '$lib/assets/Generator Backup.jpeg';
  import buildingSide from '$lib/assets/Building Side.jpeg';

  interface GalleryImage {
    src: string;
    alt: string;
    label: string;
  }

  const images: GalleryImage[] = [
    { src: frontageBuilding, alt: 'Building frontage', label: 'Building Frontage' },
    { src: buildingSide, alt: 'Building side view', label: 'Side View' },
    { src: eveningPhoto, alt: 'Building in evening', label: 'Evening View' },
    { src: generatorBackup, alt: 'Generator backup system', label: 'Generator Backup' },
  ];

  let selectedIndex = $state<number | null>(null);

  function open(index: number) {
    selectedIndex = index;
  }

  function close() {
    selectedIndex = null;
  }

  function next() {
    if (selectedIndex !== null) {
      selectedIndex = (selectedIndex + 1) % images.length;
    }
  }

  function prev() {
    if (selectedIndex !== null) {
      selectedIndex = (selectedIndex - 1 + images.length) % images.length;
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (selectedIndex === null) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  }

</script>

<svelte:window onkeydown={handleKeydown} />

<div class="grid grid-cols-2 gap-3 md:gap-4">
  {#each images as image, i (image.src)}
    <button
      onclick={() => open(i)}
      class="overflow-hidden rounded-xl bg-gray-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 aspect-square"
      aria-label="View {image.label}"
    >
      <img
        src={image.src}
        alt={image.alt}
        class="w-full h-full object-cover block transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </button>
  {/each}
</div>

{#if selectedIndex !== null}
  {@const image = images[selectedIndex]}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    tabindex="-1"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg"
    onclick={close}
    role="dialog"
    aria-modal="true"
    aria-label="Photo viewer"
  >
    <button
      onclick={(e) => { e.stopPropagation(); close(); }}
      class="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white z-10 transition-colors"
      aria-label="Close"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <button
      onclick={(e) => { e.stopPropagation(); prev(); }}
      class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-500 hover:bg-brand-600 rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-colors"
      aria-label="Previous photo"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <div class="flex items-center justify-center w-full h-full" onclick={(e) => e.stopPropagation()}>
      <img
        src={image.src}
        alt={image.alt}
        class="max-h-[85vh] w-auto max-w-full object-contain px-4"
      />
    </div>

    <button
      onclick={(e) => { e.stopPropagation(); next(); }}
      class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-500 hover:bg-brand-600 rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-colors"
      aria-label="Next photo"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-lg z-10">
      <p class="text-white text-sm font-semibold">{image.label}</p>
      <p class="text-white/60 text-xs text-center">{selectedIndex + 1} / {images.length}</p>
    </div>
  </div>
{/if}
