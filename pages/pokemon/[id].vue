<template>
  <div>
    <NuxtLink to="/"> back </NuxtLink>
    <h1>{{ pokemon.name.french }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();

const pokemonId = route.params.id;
const { data: pokemon } = await useAsyncData(`pokemon-${pokemonId}`, () =>
  $fetch(`/api/pokemon/${pokemonId}`)
);
</script>
