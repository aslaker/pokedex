export type Pokemon = {
  id: number;
  name: string;
  order: number;
  past_types: any[];
  base_experience: 240;
  height: number;
  weight: number;
  species: {
    name: string;
    url: string;
  };
  types: Type[];
  stats: Stat[];
  held_items: any[];
  is_default: boolean;
  location_area_encounters: string;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndex[];
  moves: Move[];
  sprites: {
    front_default: string;
  };
};

type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidde: boolean;
  slot: number;
};

type Form = {
  name: string;
  url: string;
};

type GameIndex = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

type Move = {
  move: {
    name: string;
    url: string;
  };
  version_group_details: VersionGroupDetail[];
};

type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
};

type Stat = {
  base_stat: 78;
  effor: number;
  stat: {
    name: string;
    url: string;
  };
};
