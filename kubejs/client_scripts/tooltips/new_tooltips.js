ItemEvents.modifyTooltips(event => {

    

    let simpleShiftText = (args) => {
    const raw = args.items ?? args.item;
    const items = Array.isArray(raw) ? raw : [raw];

    const hint = Text.translate("kubejs.press_button")
        .color("#f5c25b")
        .append(Text.of("Shift ").bold().color("#ffb319"))
        .append(Text.translate("kubejs.for_details").color("#f5c25b"));

    const details = Text.translate(args.text).color(args.color);

    items.forEach(item => {
        event.add(item, { shift: false }, hint);
        event.add(item, { shift: true }, details);
    });
};

    simpleShiftText({item: "kubejs:amber_visage", text: "kubejs.amber_visage.tooltip", color: "#5ca5e0"})
    simpleShiftText({ items: ["minecraft:lantern", "minecraft:soul_lantern"],text: "kubejs.beltborne_lanterns.tooltip", color: "#43B747"});

    const seeds_tooltip = [
        'rusticdelight:cotton_seeds', 
        'rusticdelight:bell_pepper_seeds', 
        'fruitsdelight:durian_sapling', 
        'fruitsdelight:lemon_seeds', 
        'fruitsdelight:hamimelon_seeds', 
        'enchanted:water_artichoke_seeds', 
        'enchanted:belladonna_seeds', 
        'enchanted:mandrake_seeds', 
        'enchanted:snowbell_seeds', 
        'minecraft:wheat_seeds', 
        'minecraft:pumpkin_seeds', 
        'minecraft:melon_seeds', 
        'minecraft:beetroot_seeds', 
        'supplementaries:flax_seeds', 
        'immersiveengineering:seed', 
        'hexerei:sage_seed', 
        'farmersdelight:cabbage_seeds', 
        'farmersdelight:tomato_seeds', 
        'enchanted:wolfsbane_seeds'
    ];

    seeds_tooltip.forEach(seed => {
        event.add(seed, Text.translate("milf.how_to_seed.tooltip").color("#43BD24"));
    });

    const orbs = ['kubejs:transmutation_orb', 'kubejs:orb_of_annulment', 'kubejs:orb_of_alchemy', 'kubejs:orb_of_regret', 'kubejs:regal_orb', 'kubejs:orb_of_corruption', 'kubejs:divine_orb', 'kubejs:orb_of_chance']

    orbs.forEach(orb =>{
        event.add(orb, Text.translatable(`milf.orbcraft.tooltip.${orb.slice(7)}`))
    })
})