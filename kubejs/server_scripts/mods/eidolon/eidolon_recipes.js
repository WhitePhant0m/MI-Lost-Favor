const customWorktable = (event, args) => {
    event.custom({
        "type": "eidolon_repraised:worktable",
        "pattern": args.pattern,
        "reagents": args.reagents,
        "key": args.key,
        "result": {
            "id": args.result,
            "count": args.count || 1
        }
    });
    if (args.removeRecipe === true) {
        event.remove({ output: args.result });
    }
};


ServerEvents.recipes(event => {

    // Currently not working
    // const locate_structure_list = [
    //     {
    //         id: "bosses_of_mass_destruction:lich_tower", pedestal_items: [
    //             { "item": "enchanted:whiff_of_magic" },
    //             { "item": "minecraft:skeleton_skull" },
    //             { "item": "enchanted:ender_dew" },
    //         ]
    //     },
    //     {
    //         id: "bosses_of_mass_destruction:void_blossom", pedestal_items: [
    //             { "item": "enchanted:ender_dew" },
    //             { "item": "enchanted:breath_of_the_goddess" },
    //             { "item": "paganbless:chopped_lavender" },
    //         ]
    //     },
    //     {
    //         id: "bosses_of_mass_destruction:gauntlet_arena", pedestal_items: [
    //             { "item": "enchanted:tongue_of_dog" },
    //             { "item": "enchanted:demonic_blood" },
    //         ]
    //     },
    //     {
    //         id: "bosses_of_mass_destruction:obsidilith_arena", pedestal_items: [
    //             { "item": "minecraft:end_stone" },
    //             { "item": "enchanted:whiff_of_magic" },
    //         ]
    //     },
    //     {
    //         id: "takesapillage:bastille", pedestal_items: [
    //             { "item": "minecraft:raw_iron" },
    //             { "item": "minecraft:crossbow" },
    //             { "item": "minecraft:emerald_block" },
    //         ]
    //     },
    //     {
    //         id: "hellish_trials:nether_trial", pedestal_items: [
    //             { "item": "enchanted:demonic_blood" },
    //             { "item": "minecraft:netherite_scrap" },
    //         ]
    //     },
    //     {
    //         id: "cataclysm:acropolis", pedestal_items: [
    //             { "item": "cataclysm:storm_eye" },
    //         ]
    //     },
    //     {
    //         id: "cataclysm:ancient_factory", pedestal_items: [
    //             { "item": "cataclysm:mech_eye" },
    //         ]
    //     },
    //     {
    //         id: "cataclysm:cursed_pyramid", pedestal_items: [
    //             { "item": "cataclysm:desert_eye" },
    //         ]
    //     },
    //     {
    //         id: "cataclysm:frosted_prison", pedestal_items: [
    //             { "item": "cataclysm:cursed_eye" },
    //         ]
    //     },
    //     {
    //         id: "cataclysm:sunken_city", pedestal_items: [
    //             { "item": "cataclysm:abyss_eye" },
    //         ]
    //     },
    //     {
    //         id: "cataclysm:burning_arena", pedestal_items: [
    //             { "item": "cataclysm:flame_eye" },
    //         ]
    //     },
    //     {
    //         id: "cataclysm:soul_black_smith", pedestal_items: [
    //             { "item": "cataclysm:monstrous_eye" },
    //         ]
    //     },
    //     {
    //         id: "cataclysm:ruined_citadel", pedestal_items: [
    //             { "item": "cataclysm:void_eye" },
    //         ]
    //     },
    //     {
    //         id: "fdbosses:chesed_arena", pedestal_items: [
    //             { "item": "fdbosses:eye_of_chesed" },
    //         ]
    //     },
    //     {
    //         id: "fdbosses:geburah_arena", pedestal_items: [
    //             { "item": "fdbosses:eye_of_geburah" },
    //         ]
    //     },
    //     {
    //         id: "fdbosses:malkuth_arena", pedestal_items: [
    //             { "item": "fdbosses:eye_of_malkuth" },
    //         ]
    //     },
    //     {
    //         id: "mythsandlegends:graveyard", pedestal_items: [
    //             { "item": "minecraft:skeleton_skull" },
    //             { "item": "minecraft:skeleton_skull" },
    //         ]
    //     },
    //     {
    //         id: "cataclysm:amethyst_nest", pedestal_items: [
    //             { "item": "minecraft:amethyst_block" },
    //             { "item": "minecraft:amethyst_block" },
    //             { "item": "minecraft:amethyst_block" },
    //         ]
    //     },
    //     {
    //         id: "born_in_chaos_v1:infernal_pumpkin", pedestal_items: [
    //             { "item": "minecraft:jack_o_lantern" },
    //             { "item": "enchanted:foul_fume" },
    //         ]
    //     },
    //     {
    //         id: "companions:companions_monkey_temple", pedestal_items: [
    //             { "item": "minecraft:cocoa_beans" },
    //             { "item": "enchanted:candelabra" },
    //         ]
    //     },
    //     {
    //         id: "mowziesmobs:monastery", pedestal_items: [
    //             { "item": "minecraft:goat_horn" },
    //             { "item": "minecraft:red_terracotta" },
    //         ]
    //     },
    //     {
    //         id: "mowziesmobs:wrought_chamber", pedestal_items: [
    //             { "item": "minecraft:iron_sword" },
    //             { "item": "minecraft:iron_sword" },
    //         ]
    //     },
    //     {
    //         id: "mowziesmobs:frostmaw_spawn", pedestal_items: [
    //             { "item": "minecraft:powder_snow_bucket" },
    //             { "item": "toxony:snow_mint" },
    //         ]
    //     },
    //     {
    //         id: "mowziesmobs:umvuthana_grove", pedestal_items: [
    //             { "item": "ytech:lion_man" },
    //             { "item": "ytech:wild_horse" },
    //             { "item": "ytech:venus_of_hohle_fels" },
    //             { "item": "ytech:shell_beads" },
    //         ]
    //     },
    // ]

    // locate_structure_list.forEach(s => {
    //     event.custom({
    //         "type": "eidolon_repraised:ritual_brazier_location",
    //         "focus_items": [],
    //         "health_requirement": 0.0,
    //         "pedestal_items": s.pedestal_items,
    //         "reagent": { "item": "minecraft:map" },
    //         "structure": s.id
    //     })
    // })


    event.remove({
        output: [
            'eidolon_repraised:lead_ingot',
            'eidolon_repraised:raw_lead',
            'eidolon_repraised:lead_nugget',
            'eidolon_repraised:lead_ore',
            'eidolon_repraised:deep_lead_ore',
            'eidolon_repraised:lead_block',
            'eidolon_repraised:raw_lead_block',
            'eidolon_repraised:silver_ore',
            'eidolon_repraised:silver_ingot',
            'eidolon_repraised:raw_silver',
            'eidolon_repraised:silver_nugget',
            'eidolon_repraised:deep_silver_ore',
            'eidolon_repraised:silver_ore',
            'eidolon_repraised:silver_block',
            'eidolon_repraised:raw_silver_block',
            'eidolon_repraised:soul_enchanter',
        ]
    })

    customMixingCauldron(event, {
        fluid: "minecraft:water",
        fluidAmount: 1000,
        ingredients: [
            { "item": "minecraft:book" },
            { "item": "minecraft:rotten_flesh" },
            { "item": "minecraft:rotten_flesh" },
            { "item": "minecraft:rotten_flesh" },
            { "item": "minecraft:rotten_flesh" },
            { "item": "minecraft:rotten_flesh" },
            { "item": "minecraft:rotten_flesh" },
            { "item": "minecraft:rotten_flesh" },
        ],
        output: "eidolon_repraised:codex",
        removeRecipe: true
    })

})