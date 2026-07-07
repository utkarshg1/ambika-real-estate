<script lang="ts">
  let { children, class: className = '', threshold = 0.15 }: {
    children: import('svelte').Snippet;
    class?: string;
    threshold?: number;
  } = $props();

  let ref: HTMLElement | undefined = $state();
  let visible = $state(false);

  $effect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={ref}
  class="{className} transition-all duration-700 ease-out"
  class:opacity-0={!visible}
  class:translate-y-8={!visible}
  class:opacity-100={visible}
  class:translate-y-0={visible}
>
  {@render children()}
</div>
