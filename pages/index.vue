<template>
  <div>
    <h1>Pokemon list</h1>
    <ul>
      <NuxtLink
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :to="`/pokemon/${pokemon.id}`"
      >
        <li>
          {{ pokemon.name.french }}
        </li>
      </NuxtLink>
    </ul>
  </div>
</template>

<script setup>
const { data: pokemons } = await useAsyncData("pokemons", () =>
  $fetch("/api/pokemon")
);
</script>
