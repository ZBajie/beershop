import { z } from "zod"

export const PokemonSchema = z.object({
  abilities: z.array(
    z.object({
      ability: z.object({ name: z.string(), url: z.string() }),
      is_hidden: z.boolean(),
      slot: z.number(),
    })
  ),
  base_experience: z.number(),
  cries: z.object({ latest: z.string(), legacy: z.string() }),
  forms: z.array(z.object({ name: z.string(), url: z.string() })),
  game_indices: z.array(
    z.object({
      game_index: z.number(),
      version: z.object({ name: z.string(), url: z.string() }),
    })
  ),
  height: z.number(),
  held_items: z.array(z.unknown()),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string(),
  moves: z.array(
    z.object({
      move: z.object({ name: z.string(), url: z.string() }),
      version_group_details: z.array(
        z.object({
          level_learned_at: z.number(),
          move_learn_method: z.object({ name: z.string(), url: z.string() }),
          version_group: z.object({ name: z.string(), url: z.string() }),
        })
      ),
    })
  ),
  name: z.string(),
  order: z.number(),
  past_abilities: z.array(z.unknown()),
  past_types: z.array(z.unknown()),
  species: z.object({ name: z.string(), url: z.string() }),
  sprites: z.object({
    back_default: z.string(),
    back_female: z.null(),
    back_shiny: z.string(),
    back_shiny_female: z.null(),
    front_default: z.string(),
    front_female: z.null(),
    front_shiny: z.string(),
    front_shiny_female: z.null(),
    other: z.object({
      dream_world: z.object({
        front_default: z.string(),
        front_female: z.null(),
      }),
      home: z.object({
        front_default: z.string(),
        front_female: z.null(),
        front_shiny: z.string(),
        front_shiny_female: z.null(),
      }),
      "official-artwork": z.object({
        front_default: z.string(),
        front_shiny: z.string(),
      }),
      showdown: z.object({
        back_default: z.string(),
        back_female: z.null(),
        back_shiny: z.string(),
        back_shiny_female: z.null(),
        front_default: z.string(),
        front_female: z.null(),
        front_shiny: z.string(),
        front_shiny_female: z.null(),
      }),
    }),
    versions: z.object({
      "generation-i": z.object({
        "red-blue": z.object({
          back_default: z.string(),
          back_gray: z.string(),
          back_transparent: z.string(),
          front_default: z.string(),
          front_gray: z.string(),
          front_transparent: z.string(),
        }),
        yellow: z.object({
          back_default: z.string(),
          back_gray: z.string(),
          back_transparent: z.string(),
          front_default: z.string(),
          front_gray: z.string(),
          front_transparent: z.string(),
        }),
      }),
      "generation-ii": z.object({
        crystal: z.object({
          back_default: z.string(),
          back_shiny: z.string(),
          back_shiny_transparent: z.string(),
          back_transparent: z.string(),
          front_default: z.string(),
          front_shiny: z.string(),
          front_shiny_transparent: z.string(),
          front_transparent: z.string(),
        }),
        gold: z.object({
          back_default: z.string(),
          back_shiny: z.string(),
          front_default: z.string(),
          front_shiny: z.string(),
          front_transparent: z.string(),
        }),
        silver: z.object({
          back_default: z.string(),
          back_shiny: z.string(),
          front_default: z.string(),
          front_shiny: z.string(),
          front_transparent: z.string(),
        }),
      }),
      "generation-iii": z.object({
        emerald: z.object({
          front_default: z.string(),
          front_shiny: z.string(),
        }),
        "firered-leafgreen": z.object({
          back_default: z.string(),
          back_shiny: z.string(),
          front_default: z.string(),
          front_shiny: z.string(),
        }),
        "ruby-sapphire": z.object({
          back_default: z.string(),
          back_shiny: z.string(),
          front_default: z.string(),
          front_shiny: z.string(),
        }),
      }),
      "generation-iv": z.object({
        "diamond-pearl": z.object({
          back_default: z.string(),
          back_female: z.null(),
          back_shiny: z.string(),
          back_shiny_female: z.null(),
          front_default: z.string(),
          front_female: z.null(),
          front_shiny: z.string(),
          front_shiny_female: z.null(),
        }),
        "heartgold-soulsilver": z.object({
          back_default: z.string(),
          back_female: z.null(),
          back_shiny: z.string(),
          back_shiny_female: z.null(),
          front_default: z.string(),
          front_female: z.null(),
          front_shiny: z.string(),
          front_shiny_female: z.null(),
        }),
        platinum: z.object({
          back_default: z.string(),
          back_female: z.null(),
          back_shiny: z.string(),
          back_shiny_female: z.null(),
          front_default: z.string(),
          front_female: z.null(),
          front_shiny: z.string(),
          front_shiny_female: z.null(),
        }),
      }),
      "generation-v": z.object({
        "black-white": z.object({
          animated: z.object({
            back_default: z.string(),
            back_female: z.null(),
            back_shiny: z.string(),
            back_shiny_female: z.null(),
            front_default: z.string(),
            front_female: z.null(),
            front_shiny: z.string(),
            front_shiny_female: z.null(),
          }),
          back_default: z.string(),
          back_female: z.null(),
          back_shiny: z.string(),
          back_shiny_female: z.null(),
          front_default: z.string(),
          front_female: z.null(),
          front_shiny: z.string(),
          front_shiny_female: z.null(),
        }),
      }),
      "generation-vi": z.object({
        "omegaruby-alphasapphire": z.object({
          front_default: z.string(),
          front_female: z.null(),
          front_shiny: z.string(),
          front_shiny_female: z.null(),
        }),
        "x-y": z.object({
          front_default: z.string(),
          front_female: z.null(),
          front_shiny: z.string(),
          front_shiny_female: z.null(),
        }),
      }),
      "generation-vii": z.object({
        icons: z.object({ front_default: z.string(), front_female: z.null() }),
        "ultra-sun-ultra-moon": z.object({
          front_default: z.string(),
          front_female: z.null(),
          front_shiny: z.string(),
          front_shiny_female: z.null(),
        }),
      }),
      "generation-viii": z.object({
        icons: z.object({ front_default: z.string(), front_female: z.null() }),
      }),
    }),
  }),
  stats: z.array(
    z.object({
      base_stat: z.number(),
      effort: z.number(),
      stat: z.object({ name: z.string(), url: z.string() }),
    })
  ),
  types: z.array(
    z.object({
      slot: z.number(),
      type: z.object({ name: z.string(), url: z.string() }),
    })
  ),
  weight: z.number(),
})
