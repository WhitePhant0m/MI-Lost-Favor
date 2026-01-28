ItemEvents.modifyTooltips(event => {

    

    let simpleShiftText = (args) => {
        event.add(
            args.item,
            { shift: false },
            Text.translate("kubejs.press_button").color("#f5c25b")
                .append(Text.of("Shift ").bold().color("#ffb319"))
                .append(Text.translate("kubejs.for_details").color("#f5c25b"))
        )

        event.add(
            args.item,
            { shift: true },
            Text.translate(args.text).color(args.color)
        )
    };

    simpleShiftText({item: "kubejs:amber_visage", text: "kubejs.amber_visage.tooltip", color: "#5ca5e0"})

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
})