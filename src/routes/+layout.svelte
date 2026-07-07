<script lang="ts">
  import { page } from '$app/stores';
  import './layout.css';
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children }: { children: import('svelte').Snippet } = $props();

  let currentPath = $derived($page.url.pathname);
</script>

<svelte:head>
  <title>Ambika Real Estate | Premium Commercial Space in Chakan MIDC</title>
  <meta name="description" content="3400 sq ft premium commercial space on 2nd floor available for lease in Chakan MIDC. Modern amenities including lift, power backup, and 100kVA substation." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<Header currentPath={currentPath} />

<main class="min-h-screen">
  {@render children()}
</main>

<Footer />
