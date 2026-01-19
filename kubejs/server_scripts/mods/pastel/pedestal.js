// basic: Cyan, Magenta and Yellow pedestal variants
// simple: CMY pedestal variant with matching structure
// advanced: Onyx pedestal variant with matching structure
// complex: Moonstone pedestal variant with matching structure
const customPedestalCraft = (event, args) => {
  event.custom({
    "type": "pastel:pedestal",
    "time": args.time,
    "tier": args.tier || "basic",
    "colors": {
      "pastel:magenta": args.amethyst || 0,
      "pastel:yellow": args.citrine || 0,
      "pastel:cyan": args.topaz || 0,
      "pastel:black": args.onyx || 0,
      "pastel:white": args.moonstone || 0
    },
    "experience": args.experience || 0.0,
    "pattern": args.pattern,
    "key": args.key,
    "result": args.result,
    "required_advancement": args.advancement,
    "disable_yield_upgrades": args.yield_upgrades || false,
  });
};

const customPedestalCraftShapeless = (event, args) => {
  event.custom({
    "type": "pastel:pedestal_shapeless",
    "time": args.time,
    "tier": args.tier || "basic",
    "colors": {
      "pastel:magenta": args.amethyst || 0,
      "pastel:yellow": args.citrine || 0,
      "pastel:cyan": args.topaz || 0,
      "pastel:black": args.onyx || 0,
      "pastel:white": args.moonstone || 0
    },
    "experience": args.experience || 0.0,
    "ingredients": args.ingredients || [],
    "result": args.result,
    "required_advancement": args.advancement
  });
};


ServerEvents.recipes(event => {

})



