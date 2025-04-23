const flowers = [
  "minecraft:pitcher_plant",
  "minecraft:torchflower",
  "minecraft:flowering_azalea_leaves",
  "minecraft:cherry_leaves",
  "minecraft:pink_petals",
  "biomesoplenty:flowering_oak_leaves",
  "biomesoplenty:jacaranda_leaves",
  "biomesoplenty:snowblossom_leaves",
  "biomesoplenty:white_petals",
  "biomesoplenty:wildflower",
  "biomesoplenty:rose",
  "biomesoplenty:violet",
  "biomesoplenty:lavender",
  "biomesoplenty:white_lavender",
  "biomesoplenty:pink_daffodil",
  "biomesoplenty:pink_hibiscus",
  "biomesoplenty:wilted_lily",
  "biomesoplenty:glowflower",
  "biomesoplenty:burning_blossom",
  "biomesoplenty:endbloom",
  "biomesoplenty:orange_cosmos",
  "biomesoplenty:tall_lavender",
  "biomesoplenty:tall_white_lavender",
  "biomesoplenty:blue_hydrangea",
  "biomesoplenty:goldenrod",
  "biomesoplenty:icy_iris",
  "farmersdelight:wild_carrots",
  "farmersdelight:wild_potatoes",
  "farmersdelight:wild_rice",
  "farmersdelight:wild_carrots",
  "farmersdelight:wild_beetroots",
  "farmersdelight:wild_cabbages",
  "farmersdelight:wild_tomatoes",
  "farmersdelight:wild_onions",
  "supplementaries:wild_flax"
];

ServerEvents.recipes(event => {
  flowers.forEach(flower => {
    event.custom({
      "type": "thermal:insolator",
      "ingredient": {
        "item": flower
      },
      "result": [
        {
          "item": flower,
          "chance": 2
        }
      ],
      "experience": 0
    });
  });
});
