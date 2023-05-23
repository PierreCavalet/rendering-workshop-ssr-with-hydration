import pokemons from "../../pokemon";
import { wait } from "../../wait";

export default defineEventHandler(async (event) => {
  await wait(2500);
  const id = Number(event?.context?.params?.id) || 0;
  const pokemon = pokemons.find((pokemon) => id === pokemon.id);
  return pokemon;
});
