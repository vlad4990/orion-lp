<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <LazyDialog />
  <Teleport to="body">
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WMFZV82P"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
  </Teleport>
</template>

<script setup>
useSeoMeta({
  title: `ORION Partners`,
  description: `ORION Partners - worldwide affiliate network of direct gambling and betting offers with high conversion rate!
Rates up to $500 CPA and 60% RevShare. Register on service now.`,
});
useHead({
  bodyAttrs: {
    id: 'orion-partners',
  },
});
</script>
