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
      "pastel:magenta": args.amethyst,
      "pastel:yellow": args.citrine,
      "pastel:cyan": args.topaz,
      "pastel:black": args.onyx,
      "pastel:white": args.moonstone
    },
    "experience": args.experience || 0.0,
    "pattern": args.pattern,
    "key": args.keys,
    "result": args.result,
    "required_advancement": args.advancement,
    "disable_yield_upgrades": args.yield_upgrades || false,
  });
};

ServerEvents.recipes(event => {

})



