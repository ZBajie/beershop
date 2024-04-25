import { z } from "zod"

const Ability2Schema = z
  .object({
    name: z.string().nullable(),
    url: z.string().nullable(),
  })
  .nullable()

const AbilitySchema = z
  .object({
    ability: Ability2Schema,
    is_hidden: z.boolean().nullable(),
    slot: z.number().nullable(),
  })
  .nullable()

const CriesSchema = z
  .object({
    latest: z.string().nullable(),
    legacy: z.string().nullable(),
  })
  .nullable()

const FormSchema = z
  .object({
    name: z.string().nullable(),
    url: z.string().nullable(),
  })
  .nullable()

const VersionSchema = z
  .object({
    name: z.string().nullable(),
    url: z.string().nullable(),
  })
  .nullable()

const MoveSchema = z
  .object({
    name: z.string().nullable(),
    url: z.string().nullable(),
  })
  .nullable()

const MoveLearnMethodSchema = z
  .object({
    name: z.string().nullable(),
    url: z.string().nullable(),
  })
  .nullable()

const VersionGroupSchema = z
  .object({
    name: z.string().nullable(),
    url: z.string().nullable(),
  })
  .nullable()

const SpeciesSchema = z
  .object({
    name: z.string().nullable(),
    url: z.string().nullable(),
  })
  .nullable()

const DreamWorldSchema = z
  .object({
    front_default: z.string().nullable(),
    front_female: z.string().nullable(),
  })
  .nullable()

const HomeSchema = z
  .object({
    front_default: z.string().nullable(),
    front_female: z.string().nullable(),
    front_shiny: z.string().nullable(),
    front_shiny_female: z.string().nullable(),
  })
  .nullable()

const OfficialArtworkSchema = z
  .object({
    front_default: z.string().nullable(),
    front_shiny: z.string().nullable(),
  })
  .nullable()

const ShowdownSchema = z
  .object({
    back_default: z.string().nullable(),
    back_female: z.string().nullable(),
    back_shiny: z.string().nullable(),
    back_shiny_female: z.string().nullable(),
    front_default: z.string().nullable(),
    front_female: z.string().nullable(),
    front_shiny: z.string().nullable(),
    front_shiny_female: z.string().nullable(),
  })
  .nullable()

const GenerationISchema = z
  .object({
    "red-blue": z
      .object({
        back_default: z.string().nullable(),
        back_gray: z.string().nullable(),
        back_transparent: z.string().nullable(),
        front_default: z.string().nullable(),
        front_gray: z.string().nullable(),
        front_transparent: z.string().nullable(),
      })
      .nullable(),
    yellow: z
      .object({
        back_default: z.string().nullable(),
        back_gray: z.string().nullable(),
        back_transparent: z.string().nullable(),
        front_default: z.string().nullable(),
        front_gray: z.string().nullable(),
        front_transparent: z.string().nullable(),
      })
      .nullable(),
  })
  .nullable()

const GenerationIISchema = z
  .object({
    crystal: z
      .object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_transparent: z.string().nullable(),
        back_transparent: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_transparent: z.string().nullable(),
        front_transparent: z.string().nullable(),
      })
      .nullable(),
    gold: z
      .object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_transparent: z.string().nullable(),
      })
      .nullable(),
    silver: z
      .object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_transparent: z.string().nullable(),
      })
      .nullable(),
  })
  .nullable()

const GenerationIIISchema = z
  .object({
    emerald: z
      .object({
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      })
      .nullable(),
    "firered-leafgreen": z
      .object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      })
      .nullable(),
    "ruby-sapphire": z
      .object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      })
      .nullable(),
  })
  .nullable()

const GenerationIVSchema = z
  .object({
    "diamond-pearl": z
      .object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      })
      .nullable(),
    "heartgold-soulsilver": z
      .object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      })
      .nullable(),
    platinum: z
      .object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      })
      .nullable(),
  })
  .nullable()

const GenerationVSchema = z
  .object({
    "black-white": z
      .object({
        animated: z
          .object({
            back_default: z.string().nullable(),
            back_female: z.string().nullable(),
            back_shiny: z.string().nullable(),
            back_shiny_female: z.string().nullable(),
            front_default: z.string().nullable(),
            front_female: z.string().nullable(),
            front_shiny: z.string().nullable(),
            front_shiny_female: z.string().nullable(),
          })
          .nullable(),
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      })
      .nullable(),
  })
  .nullable()

const GenerationVISchema = z
  .object({
    "omegaruby-alphasapphire": z
      .object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      })
      .nullable(),
    "x-y": z
      .object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      })
      .nullable(),
  })
  .nullable()

const GenerationVIISchema = z
  .object({
    icons: z
      .object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
      })
      .nullable(),
    "ultra-sun-ultra-moon": z
      .object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      })
      .nullable(),
  })
  .nullable()

const Icons2Schema = z
  .object({
    front_default: z.string().nullable(),
    front_female: z.string().nullable(),
  })
  .nullable()

const Stat2Schema = z
  .object({
    name: z.string().nullable(),
    url: z.string().nullable(),
  })
  .nullable()

const Type2Schema = z
  .object({
    name: z.string().nullable(),
    url: z.string().nullable(),
  })
  .nullable()

const OtherSchema = z
  .object({
    dream_world: DreamWorldSchema,
    home: HomeSchema,
    "official-artwork": OfficialArtworkSchema,
    showdown: ShowdownSchema,
  })
  .nullable()

const VersionsSchema = z
  .object({
    "generation-i": GenerationISchema,
    "generation-ii": GenerationIISchema,
    "generation-iii": GenerationIIISchema,
    "generation-iv": GenerationIVSchema,
    "generation-v": GenerationVSchema,
    "generation-vi": GenerationVISchema,
    "generation-vii": GenerationVIISchema,
    "generation-viii": z
      .object({
        icons: Icons2Schema,
      })
      .nullable(),
  })
  .nullable()

const StatSchema = z
  .object({
    base_stat: z.number().nullable(),
    effort: z.number().nullable(),
    stat: Stat2Schema,
  })
  .nullable()

const TypeSchema = z
  .object({
    slot: z.number().nullable(),
    type: Type2Schema,
  })
  .nullable()

export const PokemonSchema = z
  .object({
    abilities: z.array(AbilitySchema),
    base_experience: z.number().nullable(),
    cries: CriesSchema,
    forms: z.array(FormSchema),
    game_indices: z.array(
      z.object({
        game_index: z.number().nullable(),
        version: VersionSchema,
      })
    ),
    height: z.number().nullable(),
    held_items: z.array(z.string().nullable()),
    id: z.number().nullable(),
    is_default: z.boolean().nullable(),
    location_area_encounters: z.string().nullable(),
    moves: z.array(
      z.object({
        move: MoveSchema,
        version_group_details: z.array(
          z.object({
            level_learned_at: z.number().nullable(),
            move_learn_method: MoveLearnMethodSchema,
            version_group: VersionGroupSchema,
          })
        ),
      })
    ),
    name: z.string().nullable(),
    order: z.number().nullable(),
    past_abilities: z.array(z.string().nullable()),
    past_types: z.array(z.string().nullable()),
    species: SpeciesSchema,
    sprites: z.object({
      back_default: z.string().nullable(),
      back_female: z.string().nullable(),
      back_shiny: z.string().nullable(),
      back_shiny_female: z.string().nullable(),
      front_default: z.string().nullable(),
      front_female: z.string().nullable(),
      front_shiny: z.string().nullable(),
      front_shiny_female: z.string().nullable(),
      other: OtherSchema,
      versions: VersionsSchema,
    }),
    stats: z.array(StatSchema),
    types: z.array(TypeSchema),
    weight: z.number().nullable(),
  })
  .nullable()
