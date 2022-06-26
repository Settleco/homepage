<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
    background-color: rgba(20, 20, 20);
    font-family: 'Inter', sans-serif;
}

</style>

<script>
const description = "A tiny development company in Turkey, Izmir."
export default {
  head: {
    title: "Settleco.",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      /* Open-Graph */
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Settleco.',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'settleco.net',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: "https://settleco.net/meta/banner_pride.png",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: description,
      },
      /* Others */
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/ico/logo_transparant_pride.ico' }]
  }
}
</script>
