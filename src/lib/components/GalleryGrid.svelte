<script lang="ts">
  import buildingSide from '$lib/assets/Building Side.jpeg';
  import eveningPhoto from '$lib/assets/Evening Photo.jpeg';
  import frontageBuilding from '$lib/assets/Frontage Building.jpeg';
  import generatorBackup from '$lib/assets/Generator Backup.jpeg';
  import pamphlet from '$lib/assets/Pamphlet.jpeg';
  import premiumBuilding from '$lib/assets/Premium Building Photo.jpeg';

  interface GalleryImage {
    src: string;
    alt: string;
    label: string;
  }

  const images: GalleryImage[] = [
    { src: premiumBuilding, alt: 'Premium building front view', label: 'Premium Building' },
    { src: frontageBuilding, alt: 'Building frontage', label: 'Building Frontage' },
    { src: buildingSide, alt: 'Building side view', label: 'Side View' },
    { src: eveningPhoto, alt: 'Building in evening', label: 'Evening View' },
    { src: generatorBackup, alt: 'Generator backup system', label: 'Generator Backup' },
    { src: pamphlet, alt: 'Property pamphlet', label: 'Property Brochure' }
  ];

  let selectedIndex = $state<number | null>(null);

  let selectedImage = $derived(selectedIndex !== null ? images[selectedIndex] : null);

  function openLightbox(index: number) {
    selectedIndex = index;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    selectedIndex = null;
    document.body.style.overflow = '';
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
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  }

  $effect(() => {
    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeydown);
      return () => window.removeEventListener('keydown', handleKeydown);
    }
  });
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each images as image, i (image.src)}
    <button
      onclick={() => openLightbox(i)}
      class="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      <img
        src={image.src}
        alt={image.alt}
        class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
        <div class="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span class="text-white text-sm font-medium">{image.label}</span>
        </div>
      </div>
    </button>
  {/each}
</div>

{#if selectedImage}
  <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events a11y_interactive_supports_focus -->
  <div
    class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    onclick={closeLightbox}
    role="dialog"
    aria-label="Image lightbox"
  >
    <!-- svelte-ignore a11y_no_static_element_interactions a11y_click_events_have_key_events -->
    <div class="relative max-w-5xl w-full max-h-[90vh]" onclick={(e) => e.stopPropagation()}>
      <button
        onclick={closeLightbox}
        class="absolute -top-12 right-0 text-white/70 hover:text-white text-2xl transition-colors z-10"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      <button
        onclick={prev}
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl transition-colors z-10"
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        onclick={next}
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl transition-colors z-10"
        aria-label="Next image"
      >
        ›
      </button>

      <img
        src={selectedImage.src}
        alt={selectedImage.alt}
        class="w-full h-full max-h-[85vh] object-contain animate-scale-in rounded-lg"
      />

      <p class="text-white/80 text-center mt-4 text-sm font-medium">{selectedImage.label}</p>

      <div class="flex items-center justify-center gap-2 mt-4">
        {#each images as image, i (image.src)}
          <button
            onclick={() => (selectedIndex = i)}
            class="w-2 h-2 rounded-full transition-all duration-300 {i === selectedIndex ? 'bg-brand-400 w-6' : 'bg-white/40'}"
            aria-label="Go to image {i + 1}"
          ></button>
        {/each}
      </div>
    </div>
  </div>
{/if}
