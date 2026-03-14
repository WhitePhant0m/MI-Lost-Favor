ServerEvents.recipes(event => {
    event.remove({id: "cognition:cognitive_flux"})
    event.replaceInput({ mod: 'cognition' }, 'minecraft:emerald', 'enchanted:attuned_stone')
    event.shapeless(Item.of("cognition:cognitive_flux", 4),
        [
            "minecraft:quartz",
            "minecraft:lapis_lazuli",
            [{ "item": "spectrum:topaz_powder" }, { "item": "spectrum:citrine_powder" }, { "item": "spectrum:amethyst_powder" }],
            [{ "item": "minecraft:soul_sand" }, { "item": "minecraft:soul_soil" }]
        ]).id("milf:cognitive_flux");

});
