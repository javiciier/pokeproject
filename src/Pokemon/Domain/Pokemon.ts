export interface Pokemon {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  isDefault: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Species[];
  gameIndices: GameIndex[];
  heldItems: HeldItem[];
  locationAreaEncounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  pastTypes: PastType[];
}

export interface Ability {
  isHidden: boolean;
  slot: number;
  ability: Species;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  gameIndex: number;
  version: Species;
}

export interface HeldItem {
  item: Species;
  versionDetails: VersionDetail[];
}

export interface VersionDetail {
  rarity: number;
  version: Species;
}

export interface Move {
  move: Species;
  versionGroupDetails: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  levelLearnedAt: number;
  versionGroup: Species;
  moveLearnMethod: Species;
}

export interface PastType {
  generation: Species;
  types: Type[];
}

export interface Type {
  slot: number;
  type: Species;
}

export interface GenerationV {
  blackWhite: Sprites;
}

export interface GenerationIv {
  diamondPearl: Sprites;
  heartgoldSoulsilver: Sprites;
  platinum: Sprites;
}

export interface Versions {
  generationI: GenerationI;
  generationIi: GenerationIi;
  generationIii: GenerationIii;
  generationIv: GenerationIv;
  generationV: GenerationV;
  generationVi: Record<string, Home>;
  generationVii: GenerationVii;
  generationViii: GenerationViii;
}

export interface Sprites {
  backDefault: string;
  backFemale: null;
  backShiny: string;
  backShinyFemale: null;
  frontDefault: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface GenerationI {
  redBlue: RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  backDefault: string;
  backGray: string;
  frontDefault: string;
  frontGray: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
}

export interface Crystal {
  backDefault: string;
  backShiny: string;
  frontDefault: string;
  frontShiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  fireredLeafgreen: Crystal;
  rubySapphire: Crystal;
}

export interface Emerald {
  frontDefault: string;
  frontShiny: string;
}

export interface Home {
  frontDefault: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  ultraSunUltraMoon: Home;
}

export interface DreamWorld {
  frontDefault: string;
  frontFemale: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dreamWorld: DreamWorld;
  home: Home;
  officialArtwork: OfficialArtwork;
}

export interface OfficialArtwork {
  frontDefault: string;
}

export interface Stat {
  baseStat: number;
  effort: number;
  stat: Species;
}
