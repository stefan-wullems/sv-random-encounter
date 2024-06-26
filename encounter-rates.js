const _ = require('lodash') 
const fs = require('fs')

const encounterRates = `
-++ Pikachu:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 30
    Biome: Forest (10%)
    Area: South Province (Area Two), South Province (Area Four), West Province (Area Three), East Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Light Ball (5%)
-++ Raichu:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 40
    Maximum Level: 60
    Biome: Forest (5%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Raichu:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 40
    Maximum Level: 60
    Biome: Grass (10%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Jigglypuff:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 29
    Biome: Town (60%)
    Area: South Province (Area Two), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Wigglytuff:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 40
    Maximum Level: 60
    Biome: Mountain (5%)
    Area: North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Venonat:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 17
    Maximum Level: 25
    Biome: Forest (40%)
    Area: Tagtree Thicket, East Province (Area One), East Province (Area Two), North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Venomoth:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 31
    Maximum Level: 50
    Biome: Forest (20%), Bamboo (20%)
    Area: Tagtree Thicket, East Province (Area One), East Province (Area Two), Casseroya Lake, North Province (Area One), North Province (Area Two)
    Time: Night
    Version: Scarlet, Violet
    Held Item: None
-++ Venomoth:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 31
    Maximum Level: 60
    Biome: Grass (30%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Diglett:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 2
    Maximum Level: 24
    Biome: Mine (40%), Cave (20%), Olive (50%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dugtrio:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 26
    Maximum Level: 60
    Biome: Mine (40%), Cave (20%), Underground (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Meowth:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 14
    Maximum Level: 32
    Biome: Grass (30%), Town (60%), Mine (15%)
    Area: West Province (Area Two), West Province (Area Three), East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Persian:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 28
    Maximum Level: 47
    Biome: Grass (30%), Town (30%)
    Area: West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Psyduck:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 5
    Maximum Level: 37
    Biome: Lake (60%), River (60%), Swamp (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Golduck:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 33
    Maximum Level: 56
    Biome: Lake (20%), River (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Mankey:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 19
    Biome: Grass (60%), Mountain (20%)
    Area: South Province (Area Five), West Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Primeape:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 28
    Maximum Level: 47
    Biome: Rocky (10%), Forest (20%), Bamboo (20%)
    Area: West Province (Area Three), North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Growlithe:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 17
    Maximum Level: 23
    Biome: Mine (10%), Rocky (20%)
    Area: South Province (Area Three), East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Arcanine:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 47
    Maximum Level: 65
    Biome: Bamboo (2%), Rocky (2%)
    Area: North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Slowpoke:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 23
    Maximum Level: 56
    Biome: Lake (60%), River (30%), Beach (30%)
    Area: South Province (Area Five), West Province (Area Two), East Province (Area One), East Province (Area Two), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Slowbro:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 37
    Maximum Level: 56
    Biome: Lake (15%), River (15%), Beach (25%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Magnemite:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 34
    Biome: Grass (50%), Town (20%)
    Area: East Province (Area Three), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Magneton:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 30
    Maximum Level: 60
    Biome: Snow (3%), Mountain (20%)
    Area: Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Grimer:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 19
    Maximum Level: 42
    Biome: Town (80%)
    Area: West Province (Area Two), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Muk:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 38
    Maximum Level: 57
    Biome: Town (3%)
    Area: West Province (Area Two), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Shellder:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Ocean (60%), Beach (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Cloyster:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Ocean (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gastly:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 2
    Maximum Level: 24
    Biome: Mountain (50%), Mine (30%)
    Area: Matching Biome
    Time: Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gastly:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 2
    Maximum Level: 24
    Biome: Ruins (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Haunter:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 25
    Maximum Level: 54
    Biome: Mountain (40%), Snow (50%), Ruins (50%)
    Area: Glaseado Mountain, North Province (Area One)
    Time: Night
    Version: Scarlet, Violet
    Held Item: None
-++ Drowzee:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 2
    Maximum Level: 12
    Biome: Ruins (40%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Hypno:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 28
    Maximum Level: 45
    Biome: Ruins (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Hypno:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 28
    Maximum Level: 60
    Biome: Underground (30%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Voltorb:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 26
    Maximum Level: 29
    Biome: Mine (30%), Town (30%)
    Area: West Province (Area Three), East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Electrode:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 32
    Maximum Level: 49
    Biome: Town (10%)
    Area: West Province (Area Three), East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Chansey:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 25
    Maximum Level: 55
    Biome: Grass (1%), Flower (1%), Mountain (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Oval Stone (30%)
-++ Scyther:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 55
    Biome: Lake (30%), Bamboo (50%)
    Area: South Province (Area Four), West Province (Area Three), Casseroya Lake, North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Scyther:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Forest (5%), Grass (3%)
    Area: West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tauros-1:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 22
    Maximum Level: 50
    Biome: Grass (40%)
    Area: West Province (Area Two), East Province (Area One), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tauros-2:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 25
    Maximum Level: 50
    Biome: Grass (3%)
    Area: West Province (Area Two), East Province (Area One), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Tauros-3:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 25
    Maximum Level: 50
    Biome: Grass (3%)
    Area: West Province (Area Two), East Province (Area One), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Magikarp:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 2
    Maximum Level: 39
    Biome: Lake (60%), Ocean (60%), River (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gyarados:
    Gender: Default
    Encounter Rate: 5%
    Minimum Level: 20
    Maximum Level: 59
    Biome: Ocean (5%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gyarados:
    Gender: Default
    Encounter Rate: 5%
    Minimum Level: 20
    Maximum Level: 59
    Biome: Lake (150%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Ditto:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 28
    Maximum Level: 35
    Biome: Grass (10%), Town (30%)
    Area: West Province (Area Two), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Eevee:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 11
    Maximum Level: 30
    Biome: Olive (5%), Town (10%)
    Area: South Province (Area Two), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Vaporeon:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Lake (1%), River (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Jolteon:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Forest (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Flareon:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Mountain (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dratini:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 20
    Maximum Level: 52
    Biome: Lake (40%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dratini:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 20
    Maximum Level: 52
    Biome: Lake (15%)
    Area: North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dratini:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 20
    Maximum Level: 52
    Biome: River (20%)
    Area: South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dragonair:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 50
    Maximum Level: 54
    Biome: Lake (10%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pichu:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 5
    Maximum Level: 10
    Biome: Forest (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Igglybuff:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 5
    Maximum Level: 9
    Biome: Town (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Mareep:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 9
    Maximum Level: 19
    Biome: Grass (60%), Olive (30%)
    Area: South Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Flaaffy:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 22
    Maximum Level: 29
    Biome: Grass (30%)
    Area: West Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Flaaffy:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 37
    Maximum Level: 40
    Biome: Mountain (20%)
    Area: South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Ampharos:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 42
    Maximum Level: 60
    Biome: Mountain (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Marill:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 19
    Maximum Level: 22
    Biome: Lake (60%), River (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Marill:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 19
    Maximum Level: 24
    Biome: Grass (80%), Beach (30%)
    Area: East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Azumarill:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 28
    Maximum Level: 50
    Biome: Lake (30%), River (30%)
    Area: West Province (Area Two), West Province (Area Three), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sudowoodo:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 60
    Biome: Forest (60%)
    Area: West Province (Area Three), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Hoppip:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 2
    Maximum Level: 8
    Biome: Grass (60%)
    Area: South Province (Area One), South Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Skiploom:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 18
    Maximum Level: 27
    Biome: Grass (40%), Flower (20%)
    Area: South Province (Area Five), East Province (Area One), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Jumpluff:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 33
    Maximum Level: 50
    Biome: Grass (30%), Flower (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Jumpluff:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 33
    Maximum Level: 60
    Biome: Grass (30%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sunkern:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 5
    Maximum Level: 12
    Biome: Flower (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Sunflora:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 25
    Maximum Level: 47
    Biome: Flower (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Wooper-1:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 5
    Maximum Level: 24
    Biome: Lake (60%), Swamp (80%)
    Area: South Province (Area One), South Province (Area Four), South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Espeon:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Grass (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Umbreon:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Cave (1%)
    Area: Matching Biome
    Time: Night
    Version: Scarlet, Violet
    Held Item: None
-++ Murkrow:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Forest (20%), Town (60%), Grass (40%)
    Area: Matching Biome
    Time: Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Misdreavus:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 40
    Biome: Lake (60%), Mountain (15%)
    Area: Matching Biome
    Time: Night
    Version: Violet
    Held Item: None
-++ Girafarig:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Grass (50%), Forest (30%)
    Area: West Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Girafarig:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 60
    Biome: Grass (30%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pineco:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 17
    Maximum Level: 35
    Biome: Forest (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Forretress:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 45
    Maximum Level: 56
    Biome: Forest (20%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dunsparce:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Grass (2%), Forest (4%), Cave (5%), Lake (5%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dunsparce:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Grass (8%), Lake (10%)
    Area: South Province (Area Four)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dunsparce:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 60
    Biome: Underground (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Qwilfish:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Ocean (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Heracross:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 45
    Maximum Level: 65
    Biome: Forest (30%), Bamboo (10%)
    Area: Casseroya Lake, North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sneasel:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Snow (60%), Mountain (60%)
    Area: Glaseado Mountain, North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sneasel:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 60
    Biome: Cave (50%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Teddiursa:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 28
    Biome: Forest (60%)
    Area: South Province (Area Five), East Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Honey (5%)
-++ Ursaring:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 30
    Maximum Level: 59
    Biome: Forest (20%), Mountain (20%), Bamboo (20%)
    Area: Glaseado Mountain, North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Delibird:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Snow (10%), Town (30%)
    Area: Glaseado Mountain, North Province (Area Three), North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Houndour:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 2
    Maximum Level: 20
    Biome: Rocky (60%), Cave (60%)
    Area: South Province (Area One), South Province (Area Four)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Houndoom:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 24
    Maximum Level: 60
    Biome: Rocky (20%), Cave (20%)
    Area: North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Phanpy:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 11
    Maximum Level: 22
    Biome: Desert (20%), Mountain (20%), Lake (40%)
    Area: South Province (Area Four), West Province (Area One), Asado Desert
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Donphan:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 25
    Maximum Level: 44
    Biome: Desert (20%), Grass (30%)
    Area: Asado Desert, West Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Donphan:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 25
    Maximum Level: 44
    Biome: Mountain (10%)
    Area: South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Donphan:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 25
    Maximum Level: 60
    Biome: Rocky (30%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Stantler:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Rocky (60%), Grass (20%)
    Area: South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Blissey:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 45
    Maximum Level: 65
    Biome: Flower (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Oval Stone (30%)
-++ Larvitar:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 28
    Biome: Cave (290%)
    Area: Unknown (a_d1108)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Larvitar:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 38
    Biome: Cave (10%), Mine (3%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Larvitar:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 28
    Biome: Mountain (50%)
    Area: South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Pupitar:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 42
    Maximum Level: 58
    Biome: Cave (10%)
    Area: South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Wingull:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 2
    Maximum Level: 29
    Biome: Ocean (80%), Beach (60%)
    Area: South Province (Area One), West Province (Area One), West Province (Area Two), South Paldean Sea, West Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pelipper:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 32
    Maximum Level: 44
    Biome: Ocean (40%), Beach (30%)
    Area: South Province (Area One), West Province (Area One), West Province (Area Two), Casseroya Lake, South Paldean Sea, West Paldean Sea, North Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Ralts:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 5
    Maximum Level: 10
    Biome: Town (5%)
    Area: South Province (Area One)
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Kirlia:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 20
    Maximum Level: 36
    Biome: Town (50%)
    Area: West Province (Area Two), East Province (Area Two), Glaseado Mountain
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Gardevoir:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 36
    Maximum Level: 49
    Biome: Snow (10%)
    Area: Glaseado Mountain
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Surskit:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 8
    Maximum Level: 23
    Biome: Lake (60%), River (60%)
    Area: South Province (Area One), Unknown (4.5), South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Honey (5%)
-++ Masquerain:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 23
    Maximum Level: 56
    Biome: Lake (20%), River (20%)
    Area: South Province (Area Four), South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Masquerain:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 23
    Maximum Level: 60
    Biome: River (30%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Shroomish:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 9
    Maximum Level: 29
    Biome: Forest (60%), Grass (30%)
    Area: South Province (Area Five), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Tiny Mushroom (5%)
-++ Breloom:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 32
    Maximum Level: 42
    Biome: Forest (30%), Bamboo (30%)
    Area: West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Tiny Mushroom (30%)
-++ Slakoth:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 7
    Maximum Level: 22
    Biome: Grass (10%)
    Area: South Province (Area Five), South Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Vigoroth:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 22
    Maximum Level: 55
    Biome: Mountain (20%), Grass (20%)
    Area: South Province (Area Five), West Province (Area Three), Glaseado Mountain, Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Slaking:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 52
    Maximum Level: 56
    Biome: Forest (5%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Makuhita:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 25
    Biome: Mine (10%), Rocky (30%), Cave (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Hariyama:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 27
    Maximum Level: 43
    Biome: Mine (40%), Rocky (15%), Cave (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Azurill:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 5
    Maximum Level: 8
    Biome: Lake (60%), River (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sableye:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 15
    Maximum Level: 55
    Biome: Cave (20%), Underground (40%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Meditite:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 20
    Maximum Level: 39
    Biome: Mountain (60%), Cave (60%)
    Area: South Province (Area Four), South Province (Area Six), West Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Medicham:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 40
    Maximum Level: 56
    Biome: Mountain (20%), Cave (20%)
    Area: South Province (Area Four), South Province (Area Six), West Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Medicham:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 40
    Maximum Level: 56
    Biome: Grass (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gulpin:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 12
    Maximum Level: 17
    Biome: Town (60%), Grass (20%)
    Area: South Province (Area Three), East Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: Oran Berry (30%)
-++ Swalot:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 45
    Maximum Level: 55
    Biome: Lake (30%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: Sitrus Berry (5%)
-++ Numel:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 18
    Maximum Level: 31
    Biome: Mountain (60%)
    Area: West Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Camerupt:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 33
    Maximum Level: 55
    Biome: Rocky (20%)
    Area: North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Camerupt:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 33
    Maximum Level: 60
    Biome: Rocky (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Torkoal:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 28
    Maximum Level: 50
    Biome: Mine (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Spoink:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 30
    Biome: Rocky (20%), Mountain (20%)
    Area: South Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Grumpig:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 32
    Maximum Level: 51
    Biome: Rocky (20%), Mountain (20%)
    Area: Glaseado Mountain, North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Cacnea:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 18
    Maximum Level: 36
    Biome: Desert (90%)
    Area: Asado Desert
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Cacturne:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 32
    Maximum Level: 51
    Biome: Desert (20%)
    Area: Asado Desert
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Swablu:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 18
    Maximum Level: 32
    Biome: Mountain (70%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Altaria:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 40
    Maximum Level: 56
    Biome: Mountain (20%), Lake (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Altaria:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 40
    Maximum Level: 60
    Biome: River (30%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Zangoose:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Grass (5%), Lake (40%)
    Area: South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Seviper:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Grass (15%), Lake (15%)
    Area: South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Barboach:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 34
    Biome: Lake (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Whiscash:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 30
    Maximum Level: 48
    Biome: Lake (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Shuppet:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 35
    Biome: Town (70%)
    Area: South Province (Area Three), East Province (Area Three), East Province (Area One), East Province (Area Two)
    Time: Night
    Version: Scarlet, Violet
    Held Item: None
-++ Banette:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 37
    Maximum Level: 50
    Biome: Town (70%)
    Area: South Province (Area Six), Glaseado Mountain
    Time: Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tropius:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Forest (30%), Grass (10%), Lake (30%)
    Area: West Province (Area Three), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Snorunt:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 39
    Biome: Snow (20%), Mountain (10%), Cave (70%)
    Area: Glaseado Mountain, North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Glalie:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 42
    Maximum Level: 61
    Biome: Snow (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Luvdisc:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 15
    Maximum Level: 25
    Biome: Ocean (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bagon:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 28
    Biome: Cave (290%)
    Area: Unknown (a_d1108)
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Bagon:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 38
    Biome: Cave (10%), Mine (3%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Bagon:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 28
    Biome: Mountain (50%)
    Area: South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Shelgon:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 42
    Maximum Level: 58
    Biome: Cave (10%)
    Area: South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Starly:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 7
    Maximum Level: 18
    Biome: Grass (20%), Olive (30%)
    Area: South Province (Area Two), South Province (Area Four), West Province (Area Two), West Province (Area Three), Casseroya Lake
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Staravia:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 22
    Maximum Level: 52
    Biome: Grass (30%)
    Area: South Province (Area Two), South Province (Area Four), West Province (Area Two), West Province (Area Three), Casseroya Lake
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Staraptor:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 49
    Maximum Level: 53
    Biome: Grass (7%), Lake (10%)
    Area: South Province (Area Two), South Province (Area Four), West Province (Area Two), West Province (Area Three), Casseroya Lake
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Kricketot:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 5
    Maximum Level: 14
    Biome: Olive (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Kricketune:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 14
    Maximum Level: 54
    Biome: Olive (5%), Bamboo (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Shinx:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 7
    Maximum Level: 12
    Biome: Rocky (60%)
    Area: South Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Luxio:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 20
    Maximum Level: 30
    Biome: Grass (20%)
    Area: South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Luxray:
    Gender: Male
    Encounter Rate: 1%
    Minimum Level: 49
    Maximum Level: 56
    Biome: Rocky (5%), Bamboo (20%)
    Area: North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Luxray:
    Gender: Female
    Encounter Rate: 1%
    Minimum Level: 49
    Maximum Level: 56
    Biome: Rocky (5%), Bamboo (20%)
    Area: North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Combee:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 5
    Maximum Level: 25
    Biome: Flower (40%), Olive (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Honey (30%)
-++ Vespiquen:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 30
    Maximum Level: 50
    Biome: Flower (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pachirisu:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 18
    Maximum Level: 28
    Biome: Forest (40%), Grass (10%)
    Area: South Province (Area Four), South Province (Area Five), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Buizel:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 2
    Maximum Level: 30
    Biome: Beach (20%), River (20%), Ocean (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floatzel:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 28
    Maximum Level: 60
    Biome: Beach (10%), River (10%), Ocean (40%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Shellos:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 34
    Biome: Beach (60%)
    Area: South Province (Area Four), South Province (Area Six), West Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Shellos-1:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 34
    Biome: Beach (60%)
    Area: South Province (Area Five), East Province (Area One), North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gastrodon:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 30
    Maximum Level: 55
    Biome: Beach (20%)
    Area: South Province (Area Four), South Province (Area Six), West Province (Area Two), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gastrodon-1:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 30
    Maximum Level: 49
    Biome: Beach (20%)
    Area: South Province (Area Five), East Province (Area One), North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Drifloon:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 14
    Maximum Level: 32
    Biome: Mountain (30%), Town (40%)
    Area: Matching Biome
    Time: Evening, Night
    Version: Scarlet
    Held Item: None
-++ Drifblim:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 28
    Maximum Level: 47
    Biome: Mountain (30%), Town (20%)
    Area: Matching Biome
    Time: Evening, Night
    Version: Scarlet
    Held Item: None
-++ Mismagius:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 40
    Maximum Level: 60
    Biome: Lake (3%)
    Area: Matching Biome
    Time: Night
    Version: Violet
    Held Item: None
-++ Honchkrow:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Forest (20%), Rocky (20%), Mountain (20%)
    Area: Matching Biome
    Time: Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Stunky:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 20
    Maximum Level: 38
    Biome: Grass (30%), Lake (30%)
    Area: South Province (Area Five), West Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Skuntank:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 40
    Maximum Level: 53
    Biome: Forest (20%), Lake (30%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Bronzor:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 9
    Maximum Level: 25
    Biome: Ruins (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bronzong:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 33
    Maximum Level: 52
    Biome: Ruins (20%), Snow (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bonsly:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 5
    Maximum Level: 12
    Biome: Forest (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Happiny:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 5
    Maximum Level: 15
    Biome: Grass (1%), Flower (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Oval Stone (5%)
-++ Gible:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 10
    Maximum Level: 29
    Biome: Cave (15%)
    Area: South Province (Area Six), West Province (Area One), West Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gabite:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 32
    Maximum Level: 60
    Biome: Cave (10%), Underground (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Riolu:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 12
    Maximum Level: 40
    Biome: Mountain (20%), Grass (5%)
    Area: South Province (Area Four)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Lucario:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 45
    Maximum Level: 65
    Biome: Rocky (3%), Mountain (3%)
    Area: South Province (Area Four), South Province (Area Six), North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Hippopotas:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 20
    Maximum Level: 38
    Biome: Desert (60%)
    Area: Asado Desert
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Hippowdon:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 34
    Maximum Level: 53
    Biome: Desert (20%)
    Area: Asado Desert
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Croagunk:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 41
    Biome: Swamp (60%), River (20%), Lake (30%)
    Area: South Province (Area Five), West Province (Area Two), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Toxicroak:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 37
    Maximum Level: 56
    Biome: Swamp (20%), River (20%), Lake (30%)
    Area: South Province (Area Five), West Province (Area Two), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Finneon:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 17
    Maximum Level: 35
    Biome: Ocean (60%)
    Area: West Paldean Sea, North Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Lumineon:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 31
    Maximum Level: 50
    Biome: Ocean (30%)
    Area: West Paldean Sea, North Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Snover:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 26
    Maximum Level: 39
    Biome: Snow (60%), Town (50%)
    Area: Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Abomasnow:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 40
    Maximum Level: 59
    Biome: Snow (20%)
    Area: Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Weavile:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 37
    Maximum Level: 65
    Biome: Snow (15%)
    Area: North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Weavile:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 37
    Maximum Level: 65
    Biome: Cave (3%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Leafeon:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Forest (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Glaceon:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Snow (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gallade:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Mountain (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Froslass:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 39
    Maximum Level: 60
    Biome: Snow (2%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Rotom:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Town (10%)
    Area: West Province (Area Two), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Petilil:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 13
    Maximum Level: 35
    Biome: Flower (40%)
    Area: South Province (Area Two), South Province (Area Four), South Province (Area Six), West Province (Area One), West Province (Area Two), West Province (Area Three), Casseroya Lake, North Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Lilligant:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 30
    Maximum Level: 60
    Biome: Flower (5%)
    Area: South Province (Area Two), South Province (Area Four), South Province (Area Six), West Province (Area One), West Province (Area Two), West Province (Area Three), Casseroya Lake, North Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Basculin:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Lake (60%), River (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Basculin-1:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 40
    Biome: Lake (60%), River (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sandile:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 15
    Maximum Level: 33
    Biome: Desert (100%)
    Area: Asado Desert
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Krokorok:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 29
    Maximum Level: 40
    Biome: Desert (30%)
    Area: Asado Desert
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Zorua:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 16
    Maximum Level: 31
    Biome: Forest (30%), Grass (15%)
    Area: West Province (Area Three), Tagtree Thicket
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Zoroark:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 45
    Maximum Level: 56
    Biome: Forest (10%)
    Area: West Province (Area Three), Tagtree Thicket, Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gothita:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 18
    Maximum Level: 36
    Biome: Town (30%)
    Area: East Province (Area Three), Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gothorita:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 32
    Maximum Level: 41
    Biome: Town (30%)
    Area: South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gothitelle:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 41
    Maximum Level: 60
    Biome: Town (1%)
    Area: South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Deerling:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 32
    Biome: Grass (40%)
    Area: South Province (Area One), South Province (Area Four), South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Deerling-1:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 32
    Biome: Grass (70%)
    Area: East Province (Area One), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Deerling-2:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 35
    Biome: Grass (70%)
    Area: West Province (Area Two), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Deerling-3:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 40
    Biome: Mountain (90%)
    Area: Glaseado Mountain, North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sawsbuck:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 34
    Maximum Level: 55
    Biome: Grass (50%)
    Area: South Province (Area One), South Province (Area Four), South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sawsbuck-1:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 34
    Maximum Level: 55
    Biome: Grass (50%)
    Area: East Province (Area One), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sawsbuck-2:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 34
    Maximum Level: 55
    Biome: Grass (10%), Forest (50%)
    Area: West Province (Area Two), West Province (Area Three), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sawsbuck-3:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 34
    Maximum Level: 55
    Biome: Snow (30%), Mountain (60%)
    Area: Glaseado Mountain, North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Foongus:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 25
    Maximum Level: 49
    Biome: Forest (60%), Bamboo (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Tiny Mushroom (5%)
-++ Amoonguss:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 51
    Maximum Level: 58
    Biome: Forest (30%), Bamboo (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Tiny Mushroom (30%)
-++ Alomomola:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Ocean (20%)
    Area: North Province (Area Three), North Province (Area One), North Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tynamo:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 25
    Maximum Level: 43
    Biome: Ocean (60%), River (60%)
    Area: South Province (Area Four), South Province (Area Six), West Province (Area One), South Paldean Sea, West Paldean Sea, North Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Eelektrik:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 39
    Maximum Level: 65
    Biome: Ocean (30%), River (30%)
    Area: South Province (Area Four), South Province (Area Six), West Province (Area One), South Paldean Sea, West Paldean Sea, North Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Axew:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 42
    Biome: Mountain (60%), River (20%)
    Area: South Province (Area Five), Glaseado Mountain, North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Fraxure:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 38
    Maximum Level: 50
    Biome: Mountain (20%), River (5%)
    Area: South Province (Area Five), Glaseado Mountain, North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Cubchoo:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 23
    Maximum Level: 40
    Biome: Snow (60%), Mountain (10%)
    Area: Glaseado Mountain, North Province (Area Three), North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Beartic:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 40
    Maximum Level: 56
    Biome: Snow (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Cryogonal:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 30
    Maximum Level: 65
    Biome: Snow (100%)
    Area: Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pawniard:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 22
    Maximum Level: 47
    Biome: River (60%), Rocky (30%)
    Area: South Province (Area Five), Tagtree Thicket, East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bisharp:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 52
    Maximum Level: 65
    Biome: River (10%), Rocky (10%), Bamboo (15%)
    Area: North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Leaderâ€™s Crest (100%)
-++ Bisharp:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 52
    Maximum Level: 65
    Biome: River (20%), Rocky (20%), Bamboo (20%)
    Area: North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bisharp:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 52
    Maximum Level: 65
    Biome: River (10%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Leaderâ€™s Crest (100%)
-++ Bisharp:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 52
    Maximum Level: 65
    Biome: River (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Rufflet:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 21
    Maximum Level: 58
    Biome: Desert (60%), Mountain (25%), Mine (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Braviary:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 54
    Maximum Level: 65
    Biome: Desert (10%), Mountain (20%), Rocky (20%)
    Area: North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Braviary:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 54
    Maximum Level: 65
    Biome: Grass (15%), Rocky (15%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Deino:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 36
    Maximum Level: 54
    Biome: Cave (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Zweilous:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 50
    Maximum Level: 64
    Biome: Cave (10%), Underground (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Larvesta:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 24
    Maximum Level: 63
    Biome: Desert (5%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Volcarona:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 59
    Maximum Level: 65
    Biome: Grass (1%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Fletchling:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 2
    Maximum Level: 14
    Biome: Grass (60%)
    Area: South Province (Area One), South Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Fletchinder:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 17
    Maximum Level: 35
    Biome: Grass (30%)
    Area: South Province (Area Four), South Province (Area Five), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Talonflame:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 17
    Maximum Level: 60
    Biome: Rocky (30%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Scatterbug-18:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 4
    Maximum Level: 6
    Biome: Grass (60%)
    Area: South Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Spewpa-18:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 8
    Maximum Level: 20
    Biome: Flower (30%)
    Area: South Province (Area One), South Province (Area Four), South Province (Area Five)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Vivillon-18:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 25
    Maximum Level: 50
    Biome: Flower (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Litleo:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 18
    Maximum Level: 32
    Biome: Grass (60%), Rocky (50%), Mountain (30%)
    Area: South Province (Area Five), East Province (Area One), Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pyroar:
    Gender: Male
    Encounter Rate: 10%
    Minimum Level: 35
    Maximum Level: 54
    Biome: Grass (20%), Rocky (30%), Mountain (30%)
    Area: South Province (Area Five), East Province (Area One), Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pyroar:
    Gender: Male
    Encounter Rate: 10%
    Minimum Level: 35
    Maximum Level: 54
    Biome: Grass (20%), Rocky (30%), Mountain (30%)
    Area: South Province (Area Five), East Province (Area One), Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pyroar:
    Gender: Female
    Encounter Rate: 20%
    Minimum Level: 35
    Maximum Level: 54
    Biome: Grass (20%), Rocky (30%), Mountain (30%)
    Area: South Province (Area Five), East Province (Area One), Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ FlabÃ©bÃ©:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 10
    Maximum Level: 23
    Biome: Flower (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ FlabÃ©bÃ©-1:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 10
    Maximum Level: 23
    Biome: Flower (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ FlabÃ©bÃ©-2:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 10
    Maximum Level: 23
    Biome: Flower (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ FlabÃ©bÃ©-3:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 10
    Maximum Level: 23
    Biome: Flower (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ FlabÃ©bÃ©-4:
    Gender: Default
    Encounter Rate: 5%
    Minimum Level: 10
    Maximum Level: 23
    Biome: Flower (6%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 55
    Biome: Flower (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette-1:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 55
    Biome: Flower (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette-2:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 55
    Biome: Flower (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette-3:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 55
    Biome: Flower (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette-4:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 55
    Biome: Flower (3%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 60
    Biome: Flower (25%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette-1:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 60
    Biome: Flower (25%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette-2:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 60
    Biome: Flower (25%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette-3:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 60
    Biome: Flower (25%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Floette-4:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 19
    Maximum Level: 60
    Biome: Grass (15%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Florges:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 46
    Maximum Level: 65
    Biome: Flower (1%)
    Area: North Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Florges-1:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 46
    Maximum Level: 65
    Biome: Flower (1%)
    Area: North Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Florges-2:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 46
    Maximum Level: 65
    Biome: Flower (1%)
    Area: North Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Florges-3:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 46
    Maximum Level: 65
    Biome: Flower (1%)
    Area: North Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Florges-4:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 46
    Maximum Level: 65
    Biome: Flower (1%)
    Area: North Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Skiddo:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 14
    Maximum Level: 29
    Biome: Mountain (30%), Rocky (50%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Gogoat:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 32
    Maximum Level: 60
    Biome: Mountain (40%), Rocky (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Skrelp:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 34
    Maximum Level: 52
    Biome: Ocean (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Dragalge:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 48
    Maximum Level: 65
    Biome: Ocean (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Clauncher:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 23
    Maximum Level: 41
    Biome: Ocean (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Clawitzer:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 37
    Maximum Level: 56
    Biome: Ocean (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Sylveon:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Town (1%)
    Area: South Province (Area Six), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Hawlucha:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 45
    Maximum Level: 65
    Biome: Mountain (60%), Rocky (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dedenne:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Flower (10%), Town (20%)
    Area: West Province (Area Three), North Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Goomy:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 15
    Maximum Level: 39
    Biome: Swamp (60%), Lake (40%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sliggoo:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 40
    Maximum Level: 50
    Biome: Swamp (30%), Lake (50%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Klefki:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 36
    Maximum Level: 50
    Biome: Town (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bergmite:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 23
    Maximum Level: 56
    Biome: Snow (60%), Ocean (60%)
    Area: Glaseado Mountain, North Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bergmite:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 23
    Maximum Level: 56
    Biome: Lake (150%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Avalugg:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 37
    Maximum Level: 59
    Biome: Snow (20%), Ocean (20%)
    Area: Glaseado Mountain, North Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Avalugg:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 37
    Maximum Level: 59
    Biome: Lake (100%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Noibat:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 35
    Biome: Cave (70%)
    Area: West Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Noibat:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 34
    Maximum Level: 52
    Biome: Cave (60%), Rocky (10%)
    Area: North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Noivern:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 48
    Maximum Level: 65
    Biome: Cave (30%), Rocky (20%)
    Area: North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Yungoos:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 2
    Maximum Level: 24
    Biome: Cave (60%), Rocky (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Pecha Berry (5%)
-++ Gumshoos:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 20
    Maximum Level: 39
    Biome: Cave (30%), Rocky (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Pecha Berry (5%)
-++ Crabrawler:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 40
    Biome: Beach (30%), Snow (2%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Aspear Berry (5%)
-++ Crabominable:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 38
    Maximum Level: 60
    Biome: Snow (10%)
    Area: Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Cheri Berry (5%)
-++ Oricorio:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 10
    Maximum Level: 50
    Biome: Flower (20%), Town (40%)
    Area: South Province (Area Three), East Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Red Nectar (5%)
-++ Oricorio-1:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 5
    Maximum Level: 50
    Biome: Flower (20%)
    Area: South Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Yellow Nectar (5%)
-++ Rockruff:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 6
    Maximum Level: 17
    Biome: Mountain (40%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Rockruff-1:
    Gender: Default
    Encounter Rate: 6%
    Minimum Level: 6
    Maximum Level: 17
    Biome: Mountain (2%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Lycanroc:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 34
    Maximum Level: 56
    Biome: Mountain (20%)
    Area: Matching Biome
    Time: Morning, Noon
    Version: Scarlet, Violet
    Held Item: None
-++ Lycanroc-1:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 34
    Maximum Level: 56
    Biome: Mountain (20%)
    Area: Matching Biome
    Time: Night
    Version: Scarlet, Violet
    Held Item: None
-++ Lycanroc-2:
    Gender: Default
    Encounter Rate: 4%
    Minimum Level: 46
    Maximum Level: 56
    Biome: Mountain (1%)
    Area: North Province (Area One)
    Time: Evening
    Version: Scarlet, Violet
    Held Item: None
-++ Lycanroc:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 34
    Maximum Level: 60
    Biome: Rocky (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Lycanroc-1:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 34
    Maximum Level: 60
    Biome: Cave (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Mareanie:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 42
    Biome: Ocean (60%), Beach (80%)
    Area: East Province (Area One), East Province (Area Two), East Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Toxapex:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 38
    Maximum Level: 57
    Biome: Ocean (3%), Beach (3%)
    Area: East Province (Area One), East Province (Area Two), East Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Mudbray:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 34
    Biome: Mountain (60%), Swamp (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Mudsdale:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 30
    Maximum Level: 49
    Biome: Mountain (12%), Swamp (4%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Fomantis:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 38
    Biome: Flower (60%)
    Area: South Province (Area Five), Tagtree Thicket, East Province (Area One), East Province (Area Two), Glaseado Mountain, North Province (Area Three), North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Lurantis:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 34
    Maximum Level: 56
    Biome: Flower (30%)
    Area: South Province (Area Five), Tagtree Thicket, East Province (Area One), East Province (Area Two), Glaseado Mountain, North Province (Area Three), North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Lurantis:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 34
    Maximum Level: 56
    Biome: Forest (30%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Salandit:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 40
    Biome: Cave (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Salazzle:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 33
    Maximum Level: 52
    Biome: Cave (5%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bounsweet:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 5
    Maximum Level: 17
    Biome: Forest (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Steenee:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 21
    Maximum Level: 47
    Biome: Forest (30%), Grass (10%)
    Area: East Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Oranguru:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 25
    Maximum Level: 50
    Biome: Forest (15%), Bamboo (15%)
    Area: Tagtree Thicket, Casseroya Lake, North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Passimian:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 25
    Maximum Level: 50
    Biome: Forest (15%), Bamboo (15%)
    Area: Tagtree Thicket, Casseroya Lake, North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Sandygast:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 16
    Maximum Level: 46
    Biome: Beach (60%)
    Area: South Province (Area Five), West Province (Area Two), East Province (Area One), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Palossand:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 42
    Maximum Level: 61
    Biome: Beach (20%)
    Area: South Province (Area Five), West Province (Area Two), East Province (Area One), East Province (Area Two), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Komala:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Forest (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Mimikyu:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 19
    Maximum Level: 50
    Biome: Ruins (10%)
    Area: East Province (Area Two), Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Chesto Berry (5%)
-++ Mimikyu:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 31
    Maximum Level: 50
    Biome: Forest (30%)
    Area: Tagtree Thicket
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Chesto Berry (5%)
-++ Bruxish:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Ocean (30%)
    Area: South Paldean Sea, West Paldean Sea, East Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Skwovet:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 5
    Maximum Level: 14
    Biome: Forest (50%), Olive (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Oran Berry (5%)
-++ Greedent:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 24
    Maximum Level: 43
    Biome: Forest (30%), Mountain (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Sitrus Berry (5%)
-++ Rookidee:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 5
    Maximum Level: 29
    Biome: Mountain (30%), Grass (30%), Town (30%), Rocky (30%)
    Area: South Province (Area Five), South Province (Area Three), East Province (Area Three), East Province (Area One), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Corvisquire:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 18
    Maximum Level: 38
    Biome: Mountain (30%), Grass (20%), Town (30%), Rocky (30%)
    Area: South Province (Area Five), East Province (Area Three), East Province (Area One), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Corviknight:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 18
    Maximum Level: 60
    Biome: Grass (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Chewtle:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 26
    Biome: Swamp (60%), Lake (10%), River (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Chewtle:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 5
    Maximum Level: 9
    Biome: Lake (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Drednaw:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 22
    Maximum Level: 41
    Biome: Swamp (10%), Lake (10%), River (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Drednaw:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 49
    Maximum Level: 56
    Biome: Lake (20%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Rolycoly:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 5
    Maximum Level: 23
    Biome: Mine (60%), Cave (20%)
    Area: East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Carkol:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 25
    Maximum Level: 34
    Biome: Mine (60%)
    Area: East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Applin:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 35
    Biome: Forest (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Silicobra:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 22
    Maximum Level: 40
    Biome: Desert (30%), Mine (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sandaconda:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 36
    Maximum Level: 55
    Biome: Desert (20%), Mine (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Arrokuda:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 2
    Maximum Level: 30
    Biome: Ocean (60%), River (40%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Barraskewda:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 26
    Maximum Level: 45
    Biome: Ocean (20%), River (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Toxel:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 25
    Biome: Mountain (40%), Cave (25%), Grass (60%)
    Area: South Province (Area Four), South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Toxtricity:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 30
    Maximum Level: 49
    Biome: Mountain (15%), Cave (15%)
    Area: South Province (Area Four), South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Toxtricity-1:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 30
    Maximum Level: 49
    Biome: Mountain (15%), Cave (15%)
    Area: South Province (Area Four), South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sinistea:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 28
    Maximum Level: 44
    Biome: Ruins (60%), Town (30%)
    Area: South Province (Area Six), East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Sinistea-1:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 28
    Maximum Level: 44
    Biome: Town (1%)
    Area: South Province (Area Six)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Hatenna:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 36
    Biome: Lake (40%)
    Area: South Province (Area Four), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Hattrem:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 32
    Maximum Level: 42
    Biome: Lake (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Impidimp:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 16
    Maximum Level: 36
    Biome: Forest (40%)
    Area: Tagtree Thicket
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Morgrem:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 32
    Maximum Level: 42
    Biome: Forest (20%)
    Area: Tagtree Thicket
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Falinks:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 13
    Maximum Level: 55
    Biome: Ruins (40%), Bamboo (20%)
    Area: West Province (Area One), Asado Desert, North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pincurchin:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Beach (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Snom:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 40
    Biome: Snow (60%), Mountain (30%)
    Area: Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Frosmoth:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 42
    Maximum Level: 60
    Biome: Snow (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Frosmoth:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 42
    Maximum Level: 60
    Biome: Grass (5%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Stonjourner:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Ruins (15%), Desert (5%)
    Area: Asado Desert
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Eiscue:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 50
    Biome: Ocean (50%), Beach (40%)
    Area: North Province (Area Three), North Province (Area One), North Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Indeedee:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 40
    Maximum Level: 50
    Biome: Grass (40%), Mountain (30%)
    Area: North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Indeedee-1:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 40
    Maximum Level: 50
    Biome: Grass (40%), Mountain (30%)
    Area: North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Cufant:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 17
    Maximum Level: 28
    Biome: Mine (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Copperajah:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 40
    Maximum Level: 53
    Biome: Rocky (20%), Mine (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dreepy:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 20
    Maximum Level: 40
    Biome: Lake (15%), River (5%), Swamp (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Drakloak:
    Gender: Default
    Encounter Rate: 30%
    Minimum Level: 50
    Maximum Level: 60
    Biome: Lake (25%), River (5%), Underground (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Lechonk:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 2
    Maximum Level: 18
    Biome: Grass (80%), Forest (60%)
    Area: South Province (Area One), The Pokémon League, South Province (Area Four), South Province (Area Five), West Province (Area Two), West Province (Area Three), Tagtree Thicket, East Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Oinkologne:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 18
    Maximum Level: 35
    Biome: Grass (20%), Forest (20%)
    Area: South Province (Area One), The Pokémon League, South Province (Area Five), West Province (Area Two), West Province (Area Three), Tagtree Thicket, East Province (Area One), East Province (Area Two), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Oinkologne-1:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 18
    Maximum Level: 35
    Biome: Grass (20%), Forest (20%)
    Area: South Province (Area One), The Pokémon League, South Province (Area Five), West Province (Area Two), West Province (Area Three), Tagtree Thicket, East Province (Area One), East Province (Area Two), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dudunsparce:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 60
    Biome: Underground (2%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tarountula:
    Gender: Default
    Encounter Rate: 70%
    Minimum Level: 2
    Maximum Level: 18
    Biome: Grass (50%), Forest (60%)
    Area: South Province (Area One), The Pokémon League, South Province (Area Four), South Province (Area Five), West Province (Area Two), West Province (Area Three), Tagtree Thicket, Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Spidops:
    Gender: Default
    Encounter Rate: 40%
    Minimum Level: 20
    Maximum Level: 55
    Biome: Forest (30%), Bamboo (20%)
    Area: South Province (Area One), The Pokémon League, South Province (Area Five), West Province (Area Two), West Province (Area Three), Tagtree Thicket, East Province (Area One), East Province (Area Two), Casseroya Lake, North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Nymble:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 14
    Maximum Level: 22
    Biome: Mountain (30%), Grass (60%)
    Area: South Province (Area Three), West Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Lokix:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 24
    Maximum Level: 55
    Biome: Mountain (20%), Rocky (30%), Bamboo (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Rellor:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 26
    Maximum Level: 40
    Biome: Desert (80%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Rabsca:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 35
    Maximum Level: 65
    Biome: Desert (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Greavard:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 22
    Maximum Level: 34
    Biome: Ruins (40%)
    Area: West Province (Area Three), Glaseado Mountain, North Province (Area Three), North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Greavard:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 25
    Maximum Level: 40
    Biome: Mountain (30%), Snow (25%)
    Area: Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Houndstone:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 42
    Maximum Level: 56
    Biome: Ruins (5%), Mountain (15%), Snow (10%), Underground (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Flittle:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 17
    Maximum Level: 38
    Biome: Mountain (60%), Desert (40%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Espathra:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 35
    Maximum Level: 60
    Biome: Mountain (20%), Desert (20%), Underground (5%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Farigiraf:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 20
    Maximum Level: 60
    Biome: Grass (10%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Wiglett:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 13
    Maximum Level: 30
    Biome: Beach (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Wugtrio:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 26
    Maximum Level: 53
    Biome: Beach (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dondozo:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 49
    Maximum Level: 65
    Biome: Lake (30%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Veluza:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 25
    Maximum Level: 65
    Biome: Ocean (20%), Lake (30%)
    Area: Casseroya Lake, West Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Finizen:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 15
    Maximum Level: 42
    Biome: Ocean (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Smoliv:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 7
    Maximum Level: 29
    Biome: Olive (100%)
    Area: South Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dolliv:
    Gender: Default
    Encounter Rate: 36%
    Minimum Level: 25
    Maximum Level: 39
    Biome: Flower (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Capsakid:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 16
    Maximum Level: 26
    Biome: Desert (30%), Mountain (30%)
    Area: West Province (Area One), Asado Desert
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Scovillain:
    Gender: Default
    Encounter Rate: 12%
    Minimum Level: 30
    Maximum Level: 60
    Biome: Desert (2%), Mountain (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tadbulb:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 12
    Maximum Level: 35
    Biome: Swamp (70%), River (50%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bellibolt:
    Gender: Default
    Encounter Rate: 12%
    Minimum Level: 35
    Maximum Level: 51
    Biome: River (5%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bellibolt:
    Gender: Default
    Encounter Rate: 12%
    Minimum Level: 35
    Maximum Level: 60
    Biome: River (30%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Varoom:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 27
    Maximum Level: 44
    Biome: Mine (15%), Mountain (5%), Town (10%)
    Area: West Province (Area Two), East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Revavroom:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 40
    Maximum Level: 55
    Biome: Rocky (20%)
    Area: East Province (Area Three), Glaseado Mountain, North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Orthworm:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 22
    Maximum Level: 65
    Biome: Desert (20%), Mine (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tandemaus:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 14
    Maximum Level: 29
    Biome: Town (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tandemaus:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 7
    Maximum Level: 14
    Biome: Town (70%)
    Area: The Pokémon League
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Cetoddle:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 20
    Maximum Level: 41
    Biome: Snow (60%), Mountain (50%)
    Area: Glaseado Mountain, North Province (Area Three), North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Cetitan:
    Gender: Default
    Encounter Rate: 12%
    Minimum Level: 45
    Maximum Level: 60
    Biome: Snow (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Frigibax:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 24
    Maximum Level: 39
    Biome: Cave (2%), Snow (1%)
    Area: Glaseado Mountain
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Frigibax:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 24
    Maximum Level: 39
    Biome: Cave (150%)
    Area: Unknown (a_d1202)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Arctibax:
    Gender: Default
    Encounter Rate: 36%
    Minimum Level: 35
    Maximum Level: 52
    Biome: Cave (50%)
    Area: Unknown (a_d1202)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tatsugiri:
    Gender: Default
    Encounter Rate: 24%
    Minimum Level: 49
    Maximum Level: 65
    Biome: Lake (20%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tatsugiri-1:
    Gender: Default
    Encounter Rate: 24%
    Minimum Level: 49
    Maximum Level: 65
    Biome: Lake (20%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tatsugiri-2:
    Gender: Default
    Encounter Rate: 24%
    Minimum Level: 49
    Maximum Level: 65
    Biome: Lake (20%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Cyclizar:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 20
    Maximum Level: 65
    Biome: Forest (15%), Grass (15%), River (15%), Mountain (10%)
    Area: West Province (Area Two), East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pawmi:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 2
    Maximum Level: 12
    Biome: Grass (5%), Rocky (5%)
    Area: South Province (Area One), South Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Pawmo:
    Gender: Default
    Encounter Rate: 36%
    Minimum Level: 18
    Maximum Level: 58
    Biome: Mountain (15%), Grass (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Wattrel:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 14
    Maximum Level: 29
    Biome: Ocean (60%), Beach (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Wattrel:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 14
    Maximum Level: 27
    Biome: Grass (110%)
    Area: East Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Kilowattrel:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 28
    Maximum Level: 51
    Biome: Ocean (30%), Beach (30%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bombirdier:
    Gender: Default
    Encounter Rate: 12%
    Minimum Level: 19
    Maximum Level: 50
    Biome: Town (5%), Mountain (10%), Ocean (40%)
    Area: South Province (Area Six), West Province (Area One), West Province (Area Three), West Paldean Sea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Squawkabilly:
    Gender: Default
    Encounter Rate: 20%
    Minimum Level: 12
    Maximum Level: 25
    Biome: Town (20%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Squawkabilly-1:
    Gender: Default
    Encounter Rate: 15%
    Minimum Level: 12
    Maximum Level: 25
    Biome: Town (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Squawkabilly-2:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 12
    Maximum Level: 25
    Biome: Town (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Squawkabilly-3:
    Gender: Default
    Encounter Rate: 5%
    Minimum Level: 12
    Maximum Level: 25
    Biome: Town (5%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Flamigo:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 24
    Maximum Level: 48
    Biome: Lake (10%), River (12%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Flamigo:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 10
    Maximum Level: 50
    Biome: Swamp (60%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Flamigo:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 10
    Maximum Level: 50
    Biome: Lake (60%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Flamigo:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 24
    Maximum Level: 60
    Biome: River (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Klawf:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 15
    Maximum Level: 65
    Biome: Rocky (30%)
    Area: South Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Nacli:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 28
    Biome: Rocky (60%), Beach (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Naclstack:
    Gender: Default
    Encounter Rate: 36%
    Minimum Level: 31
    Maximum Level: 60
    Biome: Rocky (30%), Beach (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Naclstack:
    Gender: Default
    Encounter Rate: 36%
    Minimum Level: 31
    Maximum Level: 60
    Biome: Rocky (30%), Beach (10%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Garganacl:
    Gender: Default
    Encounter Rate: 36%
    Minimum Level: 31
    Maximum Level: 60
    Biome: Rocky (10%), Underground (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Glimmet:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 23
    Maximum Level: 55
    Biome: Underground (100%), Cave (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Glimmora:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 35
    Maximum Level: 60
    Biome: Underground (40%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Shroodle:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 5
    Maximum Level: 32
    Biome: Forest (20%), Bamboo (12%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Shroodle:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 5
    Maximum Level: 32
    Biome: Forest (60%)
    Area: Tagtree Thicket
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Grafaiai:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 29
    Maximum Level: 51
    Biome: Forest (70%)
    Area: Tagtree Thicket
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Fidough:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 5
    Maximum Level: 12
    Biome: Town (50%)
    Area: South Province (Area One), The Pokémon League, South Province (Area Two), South Province (Area Six), South Province (Area Three), West Province (Area Three), East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Dachsbun:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 26
    Maximum Level: 44
    Biome: Town (30%)
    Area: South Province (Area One), The Pokémon League, South Province (Area Two), South Province (Area Six), South Province (Area Three), West Province (Area Three), East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Maschiff:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 10
    Maximum Level: 29
    Biome: Grass (30%), Ruins (50%)
    Area: South Province (Area Two), South Province (Area Four), West Province (Area Two), West Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Mabosstiff:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 33
    Maximum Level: 65
    Biome: Grass (20%), Ruins (30%), Forest (20%)
    Area: South Province (Area Two), South Province (Area Four), West Province (Area Two), West Province (Area Three), Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Bramblin:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 25
    Maximum Level: 40
    Biome: Mine (60%), Desert (30%)
    Area: Asado Desert, East Province (Area Three)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Brambleghast:
    Gender: Default
    Encounter Rate: 72%
    Minimum Level: 50
    Maximum Level: 56
    Biome: Forest (1%), Mountain (1%)
    Area: Casseroya Lake, North Province (Area One)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Great Tusk:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Underground (10%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: Booster Energy (5%)
-++ Brute Bonnet:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Grass (20%), Underground (10%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: Booster Energy (5%)
-++ Sandy Shocks:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Rocky (15%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: Booster Energy (5%)
-++ Scream Tail:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Underground (20%), Grass (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: Booster Energy (5%)
-++ Scream Tail:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Underground (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: None
-++ Flutter Mane:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Cave (15%), Underground (3%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: Booster Energy (5%)
-++ Slither Wing:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Grass (15%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: Booster Energy (5%)
-++ Roaring Moon:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Cave (5%), Underground (1%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Scarlet
    Held Item: Booster Energy (5%)
-++ Iron Treads:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Underground (10%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: Booster Energy (5%)
-++ Iron Moth:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Grass (15%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: Booster Energy (5%)
-++ Iron Hands:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Grass (20%), Underground (10%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: Booster Energy (5%)
-++ Iron Jugulis:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Cave (15%), Underground (3%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: Booster Energy (5%)
-++ Iron Thorns:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Rocky (15%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: Booster Energy (5%)
-++ Iron Bundle:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Underground (20%), Grass (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: Booster Energy (5%)
-++ Iron Bundle:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Underground (20%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: None
-++ Iron Valiant:
    Gender: Default
    Encounter Rate: 50%
    Minimum Level: 52
    Maximum Level: 60
    Biome: Cave (5%), Underground (1%)
    Area: The Great Crater of Paldea
    Time: Morning, Noon, Evening, Night
    Version: Violet
    Held Item: Booster Energy (5%)
-++ Tinkatink:
    Gender: Default
    Encounter Rate: 60%
    Minimum Level: 10
    Maximum Level: 20
    Biome: Ruins (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tinkatuff:
    Gender: Default
    Encounter Rate: 36%
    Minimum Level: 24
    Maximum Level: 41
    Biome: Ruins (15%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Tinkatuff:
    Gender: Default
    Encounter Rate: 36%
    Minimum Level: 34
    Maximum Level: 56
    Biome: Mountain (10%)
    Area: Glaseado Mountain, North Province (Area One), North Province (Area Two)
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Charcadet:
    Gender: Default
    Encounter Rate: 1%
    Minimum Level: 13
    Maximum Level: 32
    Biome: Forest (1%), Mountain (1%), Cave (1%), Rocky (1%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None
-++ Toedscool:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 18
    Maximum Level: 34
    Biome: Forest (10%), Grass (2%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Tiny Mushroom (5%)
-++ Toedscool:
    Gender: Default
    Encounter Rate: 10%
    Minimum Level: 18
    Maximum Level: 56
    Biome: Forest (150%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Tiny Mushroom (5%)
-++ Toedscruel:
    Gender: Default
    Encounter Rate: 5%
    Minimum Level: 30
    Maximum Level: 56
    Biome: Forest (40%)
    Area: Casseroya Lake
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: Tiny Mushroom (30%)
-++ Clodsire:
    Gender: Default
    Encounter Rate: 48%
    Minimum Level: 22
    Maximum Level: 47
    Biome: Lake (30%), Swamp (40%)
    Area: Matching Biome
    Time: Morning, Noon, Evening, Night
    Version: Scarlet, Violet
    Held Item: None`

function transformStats(value, key) {
    switch (key) {
        case "Gender":
            return value
        case "Encounter Rate":
            return parseInt(value) / 100
        case "Minimum Level":
            return parseInt(value)

        case "Maximum Level":
            return parseInt(value)

        case "Biome":
            return _.mapValues(Object.fromEntries(value.split(", ").map(a => a.match(/(.*)\((\d*)%\)/)).map(_.tail)), a => parseInt(a) / 100)

        case "Area":
            return value.split(", ")

        case "Time":
            return value.split(", ")

        case "Version":
            return value.split(", ")

        case "Held Item":
            return value
            

    }
}

let bla = _.tail(encounterRates.split("-++")).map(a => {
    const [pokemon, stats] =  a.split(":\n")
    const statsObj = Object.fromEntries(stats.trim().split('\n').map(a => {
        const [k, v] = a.split(': ')
        return [k.trim(), v]
    }))
    return [pokemon, _.mapValues(statsObj, transformStats)]
})

let bla2 = Object.fromEntries(Object.entries(_.groupBy(bla, a => a[0]))
    .map(([pokemon, encounters]) => [pokemon.trim(), encounters.map(a => a[1])]))

fs.writeFile("./encounter-rates.json", JSON.stringify(bla2), "utf8", () => {})

console.log(bla2)