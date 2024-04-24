import { z } from "zod"

const Ability2Schema = z.object({
  name: z.string(),
  url: z.string(),
})

const AbilitySchema = z.object({
  ability: Ability2Schema,
  is_hidden: z.boolean(),
  slot: z.number(),
})

const CriesSchema = z.object({
  latest: z.string(),
  legacy: z.string(),
})

const FormSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const VersionSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const MoveSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const MoveLearnMethodSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const VersionGroupSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const SpeciesSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const DreamWorldSchema = z.object({
  front_default: z.string(),
  front_female: z.string(),
})

const HomeSchema = z.object({
  front_default: z.string(),
  front_female: z.string(),
  front_shiny: z.string(),
  front_shiny_female: z.string(),
})

const OfficialArtworkSchema = z.object({
  front_default: z.string(),
  front_shiny: z.string(),
})

const ShowdownSchema = z.object({
  back_default: z.string(),
  back_female: z.string(),
  back_shiny: z.string(),
  back_shiny_female: z.string(),
  front_default: z.string(),
  front_female: z.string(),
  front_shiny: z.string(),
  front_shiny_female: z.string(),
})

const GenerationISchema = z.object({
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
})

const GenerationIISchema = z.object({
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
})

const GenerationIIISchema = z.object({
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
})

const GenerationIVSchema = z.object({
  "diamond-pearl": z.object({
    back_default: z.string(),
    back_female: z.string(),
    back_shiny: z.string(),
    back_shiny_female: z.string(),
    front_default: z.string(),
    front_female: z.string(),
    front_shiny: z.string(),
    front_shiny_female: z.string(),
  }),
  "heartgold-soulsilver": z.object({
    back_default: z.string(),
    back_female: z.string(),
    back_shiny: z.string(),
    back_shiny_female: z.string(),
    front_default: z.string(),
    front_female: z.string(),
    front_shiny: z.string(),
    front_shiny_female: z.string(),
  }),
  platinum: z.object({
    back_default: z.string(),
    back_female: z.string(),
    back_shiny: z.string(),
    back_shiny_female: z.string(),
    front_default: z.string(),
    front_female: z.string(),
    front_shiny: z.string(),
    front_shiny_female: z.string(),
  }),
})

const GenerationVSchema = z.object({
  "black-white": z.object({
    animated: z.object({
      back_default: z.string(),
      back_female: z.string(),
      back_shiny: z.string(),
      back_shiny_female: z.string(),
      front_default: z.string(),
      front_female: z.string(),
      front_shiny: z.string(),
      front_shiny_female: z.string(),
    }),
    back_default: z.string(),
    back_female: z.string(),
    back_shiny: z.string(),
    back_shiny_female: z.string(),
    front_default: z.string(),
    front_female: z.string(),
    front_shiny: z.string(),
    front_shiny_female: z.string(),
  }),
})

const GenerationVISchema = z.object({
  "omegaruby-alphasapphire": z.object({
    front_default: z.string(),
    front_female: z.string(),
    front_shiny: z.string(),
    front_shiny_female: z.string(),
  }),
  "x-y": z.object({
    front_default: z.string(),
    front_female: z.string(),
    front_shiny: z.string(),
    front_shiny_female: z.string(),
  }),
})

const GenerationVIISchema = z.object({
  icons: z.object({
    front_default: z.string(),
    front_female: z.string(),
  }),
  "ultra-sun-ultra-moon": z.object({
    front_default: z.string(),
    front_female: z.string(),
    front_shiny: z.string(),
    front_shiny_female: z.string(),
  }),
})

const Icons2Schema = z.object({
  front_default: z.string(),
  front_female: z.string(),
})

const Stat2Schema = z.object({
  name: z.string(),
  url: z.string(),
})

const Type2Schema = z.object({
  name: z.string(),
  url: z.string(),
})

const OtherSchema = z.object({
  dream_world: DreamWorldSchema,
  home: HomeSchema,
  "official-artwork": OfficialArtworkSchema,
  showdown: ShowdownSchema,
})

const VersionsSchema = z.object({
  "generation-i": GenerationISchema,
  "generation-ii": GenerationIISchema,
  "generation-iii": GenerationIIISchema,
  "generation-iv": GenerationIVSchema,
  "generation-v": GenerationVSchema,
  "generation-vi": GenerationVISchema,
  "generation-vii": GenerationVIISchema,
  "generation-viii": z.object({
    icons: Icons2Schema,
  }),
})

const StatSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: Stat2Schema,
})

const TypeSchema = z.object({
  slot: z.number(),
  type: Type2Schema,
})

export const PokemonSchema = z.object({
  abilities: z.array(AbilitySchema),
  base_experience: z.number(),
  cries: CriesSchema,
  forms: z.array(FormSchema),
  game_indices: z.array(
    z.object({
      game_index: z.number(),
      version: VersionSchema,
    })
  ),
  height: z.number(),
  held_items: z.array(z.string()),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string(),
  moves: z.array(
    z.object({
      move: MoveSchema,
      version_group_details: z.array(
        z.object({
          level_learned_at: z.number(),
          move_learn_method: MoveLearnMethodSchema,
          version_group: VersionGroupSchema,
        })
      ),
    })
  ),
  name: z.string(),
  order: z.number(),
  past_abilities: z.array(z.string()),
  past_types: z.array(z.string()),
  species: SpeciesSchema,
  sprites: z.object({
    back_default: z.string(),
    back_female: z.string(),
    back_shiny: z.string(),
    back_shiny_female: z.string(),
    front_default: z.string(),
    front_female: z.string(),
    front_shiny: z.string(),
    front_shiny_female: z.string(),
    other: OtherSchema,
    versions: VersionsSchema,
  }),
  stats: z.array(StatSchema),
  types: z.array(TypeSchema),
  weight: z.number(),
})
