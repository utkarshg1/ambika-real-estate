<script lang="ts">
  import ambikaLogo from '$lib/assets/ambika_logo.png';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/amenities', label: 'Amenities' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/location', label: 'Location' }
  ];

  let mobileOpen = $state(false);
  let { currentPath = '/' }: { currentPath?: string } = $props();

  function isActive(href: string) {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }

  let navClass = 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm';

  let mobileMenuClass = $derived(
    `lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96 shadow-lg' : 'max-h-0'}`
  );
</script>

<nav class={navClass}>
  <div class="container-main flex items-center justify-between h-16 md:h-20">
    <a href="/" class="flex items-center gap-3 group">
      <img
        src={ambikaLogo}
        alt="Ambika Real Estate"
        class="h-10 w-10 md:h-12 md:w-12 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <div class="hidden sm:block">
        <span class="text-lg md:text-xl font-bold text-gray-900 tracking-tight">Ambika</span>
        <span class="text-lg md:text-xl font-bold text-brand-500 tracking-tight"> Real Estate</span>
      </div>
    </a>

    <div class="hidden lg:flex items-center gap-1">
      {#each navLinks as link (link.href)}
        <a
          href={link.href}
          class="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 {isActive(link.href) ? 'text-brand-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}"
        >
          {link.label}
          {#if isActive(link.href)}
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-500 rounded-full"></span>
          {/if}
        </a>
      {/each}
      <a
        href="/contact"
        class="ml-4 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5"
      >
        Enquire Now
      </a>
    </div>

    <button
      onclick={() => (mobileOpen = !mobileOpen)}
      class="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
      aria-label="Toggle menu"
    >
      <div class="w-5 h-4 relative">
        <span
          class="absolute left-0 w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 {mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}"
        ></span>
        <span
          class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 {mobileOpen ? 'opacity-0' : ''}"
        ></span>
        <span
          class="absolute left-0 w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 {mobileOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}"
        ></span>
      </div>
    </button>
  </div>

  <div class={mobileMenuClass}>
    <div class="container-main pb-4 space-y-1 bg-white/95 backdrop-blur-md rounded-b-2xl">
      {#each navLinks as link (link.href)}
        <a
          href={link.href}
          class="block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 {isActive(link.href) ? 'bg-brand-50 text-brand-600' : 'text-gray-600 hover:bg-gray-50'}"
          onclick={() => (mobileOpen = false)}
        >
          {link.label}
        </a>
      {/each}
      <a
        href="/contact"
        class="block px-4 py-3 mt-2 bg-brand-500 hover:bg-brand-600 text-white text-center font-semibold rounded-xl transition-all"
        onclick={() => (mobileOpen = false)}
      >
        Enquire Now
      </a>
    </div>
  </div>
</nav>
