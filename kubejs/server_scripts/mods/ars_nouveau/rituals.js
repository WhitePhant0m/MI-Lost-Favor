ServerEvents.recipes(event => {


    customPedestalCraft(event, {
        time: 1000,
        tier: "basic",
        experience: 2.0,
        pattern: [
            'tqt',
            'rwr',
            ' e '
        ],
        key: {
            q: 'enchanted:attuned_stone_charged',
            w: 'supplementaries:pedestal',
            e: "modern_industrialization:gold_rod",
            r: "modern_industrialization:gold_bolt",
            t: "enchanted:soul_of_the_world",
        },
        result: {
            "id": "ars_nouveau:ritual_brazier",
            "count": 1
        },
        advancement: "pastel:create_onyx_shard",
        yield_upgrades: true
    })
    event.remove({ output: "ars_nouveau:ritual_brazier" })
    event.replaceInput({ output: "ars_additions:wayfinder" }, "minecraft:amethyst_shard", "enchanted:attuned_stone")
    
    const rituals = [
        { id: "ars_nouveau:ritual_burrowing", pedestal_tier: "basic", topaz: 2, amethyst: 2, citrine: 2, onyx: 0, moonstone: 0 },
        { id: "ars_nouveau:ritual_challenge", pedestal_tier: "basic", topaz: 2, amethyst: 2, citrine: 2, onyx: 0, moonstone: 0 },
        { id: "ars_nouveau:ritual_sunrise", pedestal_tier: "basic", topaz: 2, amethyst: 2, citrine: 2, onyx: 0, moonstone: 0 },
        { id: "ars_nouveau:ritual_animal_summon", pedestal_tier: "basic", topaz: 2, amethyst: 2, citrine: 2, onyx: 0, moonstone: 0 },
        { id: "ars_nouveau:ritual_forestation", pedestal_tier: "basic", topaz: 2, amethyst: 2, citrine: 2, onyx: 0, moonstone: 0 },
        { id: "ars_nouveau:ritual_moonfall", pedestal_tier: "basic", topaz: 2, amethyst: 2, citrine: 2, onyx: 0, moonstone: 0 },
        { id: "ars_nouveau:ritual_flowering", pedestal_tier: "basic", topaz: 2, amethyst: 2, citrine: 2, onyx: 0, moonstone: 0 },
        {
            id: "ars_additions:ritual_locate_structure", pedestal_tier: "advanced", topaz: 10, amethyst: 10, citrine: 10, onyx: 4, moonstone: 0,
            addition_ingredients: [{ "item": "enchanted:ender_dew" }]
        },
        { id: "ars_nouveau:ritual_cloudshaping", pedestal_tier: "advanced", topaz: 10, amethyst: 10, citrine: 10, onyx: 2, moonstone: 0 },
        { id: "ars_elemental:ritual_repulsion", pedestal_tier: "advanced", topaz: 10, amethyst: 10, citrine: 10, onyx: 2, moonstone: 0 },
        { id: "ars_nouveau:ritual_animal_summon", pedestal_tier: "advanced", topaz: 10, amethyst: 10, citrine: 10, onyx: 2, moonstone: 0 },
        { id: "ars_elemental:ritual_attraction", pedestal_tier: "advanced", topaz: 10, amethyst: 10, citrine: 10, onyx: 2, moonstone: 0 },
        { id: "ars_nouveau:ritual_scrying", pedestal_tier: "advanced", topaz: 10, amethyst: 10, citrine: 10, onyx: 2, moonstone: 0 },
        { id: "ars_elemental:ritual_detection", pedestal_tier: "advanced", topaz: 10, amethyst: 10, citrine: 10, onyx: 2, moonstone: 0 },
        { id: "ars_nouveau:ritual_overgrowth", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_elemental:ritual_archwood_forestation", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_disintegration", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_elemental:ritual_tesla_coil", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_elemental:ritual_squirrels", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_warping", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_conjure_island_plains", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_flight", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_restoration", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_fertility", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_gravity", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_elemental:ritual_archwood_forest", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_sanctuary", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_binding", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_containment", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_harvest", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_awakening", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_conjure_island_desert", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
        { id: "ars_nouveau:ritual_wilden_summon", pedestal_tier: "complex", topaz: 20, amethyst: 20, citrine: 20, onyx: 8, moonstone: 4 },
    ]

    // item -> item
    var replacementsItemToItem = {
        "ars_nouveau:mendosteen_pod": "paganbless:chopped_rue",
        "ars_nouveau:earth_essence": "enchanted:breath_of_the_goddess",
        "ars_nouveau:air_essence": "occultism:awakened_feather",
    };

    // item -> tag
    var replacementsItemToTag = {
        "ars_nouveau:green_archwood_log": "minecraft:logs",
        "ars_nouveau:purple_archwood_log": "minecraft:logs",
        "ars_nouveau:red_archwood_log": "minecraft:logs",
        "ars_elemental:yellow_archwood_log": "minecraft:logs",
        "ars_nouveau:blue_archwood_log": "minecraft:logs",
        "ars_nouveau:green_archwood_log": "minecraft:logs",
    };

    // tag -> item
    var replacementsTagToItem = {
        "c:storage_blocks/source": "occultism:spirit_attuned_crystal",
        "c:gems/source": "occultism:spirit_attuned_gem",
    };

    // tag -> tag
    var replacementsTagToTag = {
        "ars_nouveau:magic_shards": "malum:mob_drops",
    };

    rituals.forEach(ritual => {
        event.findRecipes({ output: ritual.id }).forEach(rec => {
            let advancement = "pastel:place_pedestal"
            let baseJson = JSON.parse(rec.json.toString());
            let baseIngredients = baseJson.ingredients || [];

            let ingredients = [];
            if (ritual.addition_ingredients) ingredients = ingredients.concat(ritual.addition_ingredients);
            ingredients = ingredients.concat(baseIngredients);

            if (ritual.pedestal_tier == "advanced") {
                advancement = "pastel:create_onyx_shard"
            } else if (ritual.pedestal_tier == "complex") {
                advancement = "pastel:lategame/craft_moonstone_pedestal";
            }
            console.log(ingredients)
            ingredients = ingredients.map(function (i) {
                // item -> item
                if (i && i.item && replacementsItemToItem[i.item]) {
                    return Object.assign({}, i, { item: replacementsItemToItem[i.item] });
                }

                // item -> tag
                if (i && i.item && replacementsItemToTag[i.item]) {
                    return { tag: replacementsItemToTag[i.item] };
                }

                // tag -> item 
                if (i && i.tag && replacementsTagToItem[i.tag]) {
                    return { item: replacementsTagToItem[i.tag] };
                }

                // tag -> tag
                if (i && i.tag && replacementsTagToTag[i.tag]) {
                    return { tag: replacementsTagToTag[i.tag] };
                }

                return i;
            });

            customPedestalCraftShapeless(event, {
                tier: ritual.pedestal_tier,
                time: 600,
                topaz: ritual.topaz,
                amethyst: ritual.amethyst,
                citrine: ritual.citrine,
                onyx: ritual.onyx,
                moonstone: ritual.moonstone,
                experience: 2.0,
                ingredients: ingredients,
                result: {
                    "id": ritual.id,
                    "count": 1
                },
                advancement: advancement
            });

        })
        event.remove({ output: ritual.id })
    });


    const locate_structure_list = [
        {
            id: "bosses_of_mass_destruction:lich_tower", name: "lich_tower", augments: [
                { "key": "enchanted:whiff_of_magic" },
                { "key": "minecraft:skeleton_skull" },
                { "key": "enchanted:ender_dew" },
            ]
        },
        {
            id: "bosses_of_mass_destruction:void_blossom", name: "void_blossom", augments: [
                { "key": "enchanted:ender_dew" },
                { "key": "enchanted:breath_of_the_goddess" },
                { "key": "paganbless:chopped_lavender" },
            ]
        },
        {
            id: "bosses_of_mass_destruction:gauntlet_arena", name: "gauntlet_arena", augments: [
                { "key": "enchanted:tongue_of_dog" },
                { "key": "enchanted:demonic_blood" },
            ]
        },
        {
            id: "bosses_of_mass_destruction:obsidilith_arena", name: "obsidilith_arena", augments: [
                { "key": "minecraft:end_stone" },
                { "key": "enchanted:whiff_of_magic" },
            ]
        },
        {
            id: "takesapillage:bastille", name: "bastille", augments: [
                { "key": "minecraft:raw_iron" },
                { "key": "minecraft:crossbow" },
                { "key": "minecraft:emerald_block" },
            ]
        },
        {
            id: "hellish_trials:nether_trial", name: "nether_trial", augments: [
                { "key": "minecraft:breeze_rod" },
                { "key": "enchanted:demonic_blood" },
                { "key": "minecraft:netherite_scrap" },
            ]
        },
    ]

    locate_structure_list.forEach(structure => {
        let locateStructureJson = `kubejs/data/ars_additions/recipe/locate_structure/${structure.name}.json`;
        let locateStructureTagJson = `kubejs/data/ars_additions/tags/worldgen/structure/${structure.name}.json`;

        let locateStructureRecipeJson = {
            "type": "ars_additions:locate_structure",
            "augments": structure.augments,
            "id": `ars_additions:${structure.name}`,
            "structure": {
                "tag": `ars_additions:${structure.name}`
            }
        };

        let tagStructureJson = {
            values: [
                {
                    "id": structure.id,
                    "required": false
                }
            ]
        }

        JsonIO.write(locateStructureJson, locateStructureRecipeJson);
        JsonIO.write(locateStructureTagJson, tagStructureJson);
    });

})