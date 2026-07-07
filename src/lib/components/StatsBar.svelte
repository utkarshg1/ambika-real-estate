<script lang="ts">
  let visible = $state(false);
  let ref: HTMLElement | undefined = $state();
  let counted = $state(false);

  const stats = [
    { value: 3400, suffix: 'sq ft', label: 'Premium Space', icon: '📐' },
    { value: 2, suffix: 'nd Floor', label: 'Floor Level', icon: '🏢' },
    { value: 1, suffix: 'Ton Lift', label: 'Cargo + Passenger Lift', icon: '⬆️' },
    { value: 1, suffix: '', label: 'Generator Backup', icon: '🔋' },
    { value: 100, suffix: 'kVA', label: 'Substation', icon: '⚡' },
    { value: 2, suffix: 'Road', label: 'Dual Frontage', icon: '🛣️' }
  ];

  let animated = $state(stats.map(() => 0));

  $effect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  });

  $effect(() => {
    if (!visible || counted) return;
    counted = true;

    const durations = [2000, 1500, 1200, 1000, 1800, 1500];

    stats.forEach((stat, i) => {
      const start = performance.now();
      const duration = durations[i];

      function update(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        animated[i] = Math.round(eased * stat.value);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  });
</script>

<div
  bind:this={ref}
  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8"
>
  {#each stats as stat, i (i)}
    <div
      class="relative bg-white rounded-2xl p-4 md:p-6 lg:p-8 text-center shadow-lg shadow-gray-200/50 border border-gray-100 transition-all duration-500 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
      style="transition-delay: {i * 100}ms"
    >
      <span class="text-2xl md:text-3xl mb-2 block">{stat.icon}</span>
      <div class="text-2xl md:text-3xl font-bold text-gray-900">
        {animated[i]}
        <span class="text-brand-500">{stat.suffix}</span>
      </div>
      <p class="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
    </div>
  {/each}
</div>
