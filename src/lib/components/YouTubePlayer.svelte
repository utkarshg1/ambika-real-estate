<script lang="ts">
  let { videoId, title, vertical = false, class: className = '', thumbnailSrc }: {
    videoId: string;
    title: string;
    vertical?: boolean;
    class?: string;
    thumbnailSrc?: string;
  } = $props();

  let playing = $state(false);

  function play() {
    playing = true;
  }

  let aspectClass = $derived(vertical ? 'aspect-[9/16] max-h-[80vh] mx-auto' : 'aspect-video');
  let thumbnailFit = $derived(vertical ? 'object-contain bg-gray-900' : 'object-cover');
  let thumbnailUrl = $derived(thumbnailSrc ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  let embedUrl = $derived(`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1`);
</script>

<div class="relative rounded-2xl overflow-hidden bg-gray-900 ring-2 ring-brand-500 {className} {aspectClass}">
  {#if playing}
    <iframe
      src={embedUrl}
      title={title}
      class="absolute inset-0 w-full h-full"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
      loading="lazy"
    ></iframe>
  {:else}
    <button
      onclick={play}
      class="group absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
      aria-label="Play {title}"
    >
      <img
        src={thumbnailUrl}
        alt="{title} thumbnail"
        class="absolute inset-0 w-full h-full {thumbnailFit}"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>

      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-16 h-16 md:w-20 md:h-20 bg-brand-500 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600">
          <svg class="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

      <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        <p class="text-white text-sm md:text-base font-semibold">{title}</p>
      </div>
    </button>
  {/if}
</div>
