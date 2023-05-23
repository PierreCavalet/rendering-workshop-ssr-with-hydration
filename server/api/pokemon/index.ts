import pokemons from "../../pokemon";
import { wait } from "../../wait";

export default defineEventHandler(async () => {
  await wait(2500);
  return pokemons;
});
