// - Grass: South Province (Area One), The Pokémon League, South Province (Area Two), South Province (Area Four), South Province (Area Five), South Province (Area Three), West Province (Area One), Asado Desert, West Province (Area Two), West Province (Area Three), East Province (Area Three), East Province (Area One), East Province (Area Two), North Province (Area Three), The Great Crater of Paldea
// - Forest: South Province (Area One), South Province (Area Two), South Province (Area Four), West Province (Area Three), Tagtree Thicket, East Province (Area One), East Province (Area Two), Casseroya Lake, North Province (Area One), North Province (Area Two)
// - Town: South Province (Area One), The Pokémon League, South Province (Area Two), South Province (Area Six), South Province (Area Three), West Province (Area Two), West Province (Area Three), East Province (Area Three), East Province (Area One), East Province (Area Two), Glaseado Mountain [2]
// - Desert: Asado Desert, West Province (Area Two)
// - Mountain: South Province (Area Two), South Province (Area Four), South Province (Area Six), South Province (Area Five), West Province (Area One), East Province (Area One), Glaseado Mountain [1], Glaseado Mountain [2], North Province (Area One)
// - Snow: Glaseado Mountain [1], Casseroya Lake, Glaseado Mountain [2], North Province (Area Three), North Province (Area One)
// - Swamp: South Province (Area Five)
// - Lake: South Province (Area One), South Province (Area Four), South Province (Area Six), South Province (Area Five), West Province (Area Three), Tagtree Thicket, East Province (Area Three), Casseroya Lake, Glaseado Mountain [2], North Province (Area One), North Province (Area Two)
// - River: South Province (Area One), South Province (Area Two), South Province (Area Four), South Province (Area Six), South Province (Area Five), West Province (Area One), Asado Desert, West Province (Area Two), West Province (Area Three), Tagtree Thicket, East Province (Area Three), East Province (Area One), East Province (Area Two), Glaseado Mountain [1], Casseroya Lake, Glaseado Mountain [2], North Province (Area Three), North Province (Area One), The Great Crater of Paldea, South Paldean Sea
// - Ocean: South Province (Area One), South Province (Area Four), South Province (Area Six), South Province (Area Five), West Province (Area One), West Province (Area Two), East Province (Area Three), East Province (Area One), East Province (Area Two), Casseroya Lake, Glaseado Mountain [2], North Province (Area Three), North Province (Area One), South Paldean Sea, West Paldean Sea, East Paldean Sea, North Paldean Sea
// - Underground: The Great Crater of Paldea
// - Rocky: The Pokémon League, South Province (Area Two), South Province (Area Four), South Province (Area Six), South Province (Area Five), South Province (Area Three), West Province (Area One), Asado Desert, West Province (Area Two), West Province (Area Three), East Province (Area Three), East Province (Area One), East Province (Area Two), Glaseado Mountain [1], Casseroya Lake, Glaseado Mountain [2], North Province (Area Three), North Province (Area One), North Province (Area Two), The Great Crater of Paldea
// - Cave: South Province (Area One), South Province (Area Six), West Province (Area One), West Province (Area Two), West Province (Area Three), East Province (Area Three), East Province (Area One), Glaseado Mountain [1], Glaseado Mountain [2], North Province (Area Three), North Province (Area One), North Province (Area Two), The Great Crater of Paldea
// - Beach: South Province (Area One), South Province (Area Five), West Province (Area One), West Province (Area Two), East Province (Area One), East Province (Area Two), Casseroya Lake, North Province (Area Three), North Province (Area One), East Paldean Sea
// - Flower: South Province (Area One), The Pokémon League, South Province (Area Two), South Province (Area Four), South Province (Area Six), South Province (Area Five), West Province (Area One), Asado Desert, Tagtree Thicket, Glaseado Mountain [2], North Province (Area Three), North Province (Area One), North Province (Area Two), East Paldean Sea
// - Bamboo: North Province (Area One), North Province (Area Two)
// - Mine: East Province (Area Three)
// - Olive: South Province (Area Two)
// - Ruins: South Province (Area One), South Province (Area Two), South Province (Area Four), South Province (Area Six), South Province (Area Five), South Province (Area Three), West Province (Area One), Asado Desert, West Province (Area Three), East Province (Area Two), Glaseado Mountain [1], Casseroya Lake, Glaseado Mountain [2], North Province (Area One), The Great Crater of Paldea
//
// const bla = biomesToAreas.split('-').map(a => {
//     return a.trim().split(": ")
// }).filter(a => a != '').map(([biome, areas]) => [biome, areas.split(", ")])
// 
// console.log(Object.fromEntries(bla))
const biomesToAreas = {
    Grass: [
      'South Province (Area One)',
      'The Pokémon League',
      'South Province (Area Two)',
      'South Province (Area Four)',
      'South Province (Area Five)',
      'South Province (Area Three)',
      'West Province (Area One)',
      'Asado Desert',
      'West Province (Area Two)',
      'West Province (Area Three)',
      'East Province (Area Three)',
      'East Province (Area One)',
      'East Province (Area Two)',
      'North Province (Area Three)',
      'The Great Crater of Paldea'
    ],
    Forest: [
      'South Province (Area One)',
      'South Province (Area Two)',
      'South Province (Area Four)',
      'West Province (Area Three)',
      'Tagtree Thicket',
      'East Province (Area One)',
      'East Province (Area Two)',
      'Casseroya Lake',
      'North Province (Area One)',
      'North Province (Area Two)'
    ],
    Town: [
      'South Province (Area One)',
      'The Pokémon League',
      'South Province (Area Two)',
      'South Province (Area Six)',
      'South Province (Area Three)',
      'West Province (Area Two)',
      'West Province (Area Three)',
      'East Province (Area Three)',
      'East Province (Area One)',
      'East Province (Area Two)',
      'Glaseado Mountain [2]'
    ],
    Desert: [ 'Asado Desert', 'West Province (Area Two)' ],
    Mountain: [
      'South Province (Area Two)',
      'South Province (Area Four)',
      'South Province (Area Six)',
      'South Province (Area Five)',
      'West Province (Area One)',
      'East Province (Area One)',
      'Glaseado Mountain [1]',
      'Glaseado Mountain [2]',
      'North Province (Area One)'
    ],
    Snow: [
      'Glaseado Mountain [1]',
      'Casseroya Lake',
      'Glaseado Mountain [2]',
      'North Province (Area Three)',
      'North Province (Area One)'
    ],
    Swamp: [ 'South Province (Area Five)' ],
    Lake: [
      'South Province (Area One)',
      'South Province (Area Four)',
      'South Province (Area Six)',
      'South Province (Area Five)',
      'West Province (Area Three)',
      'Tagtree Thicket',
      'East Province (Area Three)',
      'Casseroya Lake',
      'Glaseado Mountain [2]',
      'North Province (Area One)',
      'North Province (Area Two)'
    ],
    River: [
      'South Province (Area One)',
      'South Province (Area Two)',
      'South Province (Area Four)',
      'South Province (Area Six)',
      'South Province (Area Five)',
      'West Province (Area One)',
      'Asado Desert',
      'West Province (Area Two)',
      'West Province (Area Three)',
      'Tagtree Thicket',
      'East Province (Area Three)',
      'East Province (Area One)',
      'East Province (Area Two)',
      'Glaseado Mountain [1]',
      'Casseroya Lake',
      'Glaseado Mountain [2]',
      'North Province (Area Three)',
      'North Province (Area One)',
      'The Great Crater of Paldea',
      'South Paldean Sea'
    ],
    Ocean: [
      'South Province (Area One)',
      'South Province (Area Four)',
      'South Province (Area Six)',
      'South Province (Area Five)',
      'West Province (Area One)',
      'West Province (Area Two)',
      'East Province (Area Three)',
      'East Province (Area One)',
      'East Province (Area Two)',
      'Casseroya Lake',
      'Glaseado Mountain [2]',
      'North Province (Area Three)',
      'North Province (Area One)',
      'South Paldean Sea',
      'West Paldean Sea',
      'East Paldean Sea',
      'North Paldean Sea'
    ],
    Underground: [ 'The Great Crater of Paldea' ],
    Rocky: [
      'The Pokémon League',
      'South Province (Area Two)',
      'South Province (Area Four)',
      'South Province (Area Six)',
      'South Province (Area Five)',
      'South Province (Area Three)',
      'West Province (Area One)',
      'Asado Desert',
      'West Province (Area Two)',
      'West Province (Area Three)',
      'East Province (Area Three)',
      'East Province (Area One)',
      'East Province (Area Two)',
      'Glaseado Mountain [1]',
      'Casseroya Lake',
      'Glaseado Mountain [2]',
      'North Province (Area Three)',
      'North Province (Area One)',
      'North Province (Area Two)',
      'The Great Crater of Paldea'
    ],
    Cave: [
      'South Province (Area One)',
      'South Province (Area Six)',
      'West Province (Area One)',
      'West Province (Area Two)',
      'West Province (Area Three)',
      'East Province (Area Three)',
      'East Province (Area One)',
      'Glaseado Mountain [1]',
      'Glaseado Mountain [2]',
      'North Province (Area Three)',
      'North Province (Area One)',
      'North Province (Area Two)',
      'The Great Crater of Paldea'
    ],
    Beach: [
      'South Province (Area One)',
      'South Province (Area Five)',
      'West Province (Area One)',
      'West Province (Area Two)',
      'East Province (Area One)',
      'East Province (Area Two)',
      'Casseroya Lake',
      'North Province (Area Three)',
      'North Province (Area One)',
      'East Paldean Sea'
    ],
    Flower: [
      'South Province (Area One)',
      'The Pokémon League',
      'South Province (Area Two)',
      'South Province (Area Four)',
      'South Province (Area Six)',
      'South Province (Area Five)',
      'West Province (Area One)',
      'Asado Desert',
      'Tagtree Thicket',
      'Glaseado Mountain [2]',
      'North Province (Area Three)',
      'North Province (Area One)',
      'North Province (Area Two)',
      'East Paldean Sea'
    ],
    Bamboo: [ 'North Province (Area One)', 'North Province (Area Two)' ],
    Mine: [ 'East Province (Area Three)' ],
    Olive: [ 'South Province (Area Two)' ],
    Ruins: [
      'South Province (Area One)',
      'South Province (Area Two)',
      'South Province (Area Four)',
      'South Province (Area Six)',
      'South Province (Area Five)',
      'South Province (Area Three)',
      'West Province (Area One)',
      'Asado Desert',
      'West Province (Area Three)',
      'East Province (Area Two)',
      'Glaseado Mountain [1]',
      'Casseroya Lake',
      'Glaseado Mountain [2]',
      'North Province (Area One)',
      'The Great Crater of Paldea'
    ]
  }

