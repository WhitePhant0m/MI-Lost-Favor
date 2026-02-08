const listsWithMultipliers = [
    {
        list: mythsandlegends_mobs, multipliers: {
            'minecraft:generic.max_health': 2,
            'minecraft:generic.attack_damage': 1.2,
            'minecraft:generic.armor': 1.2,
        }
    },
    {
        list: monsterplus_mobs, multipliers: {
            'minecraft:generic.max_health': 2,
            'minecraft:generic.attack_damage': 1.2,
            'minecraft:generic.armor': 1.2,
        }
    },
    {
        list: cataclysm_mobs, multipliers: {
            'minecraft:generic.max_health': 3,
            'minecraft:generic.attack_damage': 2,
            'minecraft:generic.armor': 2,
        }
    },
];

const born_in_chaos_mobs = [
    "born_in_chaos_v1:decrepit_skeleton",
    "born_in_chaos_v1:baby_skeleton",
    "born_in_chaos_v1:bone_imp",
    "born_in_chaos_v1:siamese_skeletons",
    "born_in_chaos_v1:skeleton_thrasher",
    "born_in_chaos_v1:bonescaller",
    "born_in_chaos_v1:supreme_bonescaller",
    "born_in_chaos_v1:spirit_guide",
    "born_in_chaos_v1:lifestealer",
    "born_in_chaos_v1:decaying_zombie",
    "born_in_chaos_v1:barrel_zombie",
    "born_in_chaos_v1:door_knight",
    "born_in_chaos_v1:zombie_clown",
    "born_in_chaos_v1:zombie_fisherman",
    "born_in_chaos_v1:zombie_bruiser",
    "born_in_chaos_v1:fallen_chaos_knight",
    "born_in_chaos_v1:maggot",
    "born_in_chaos_v1:corpse_fly",
    "born_in_chaos_v1:bloody_gadfly",
    "born_in_chaos_v1:swarmer",
    "born_in_chaos_v1:firelight",
    "born_in_chaos_v1:baby_spider",
    "born_in_chaos_v1:mother_spider",
    "born_in_chaos_v1:dread_hound",
    "born_in_chaos_v1:dire_hound_leader",
    "born_in_chaos_v1:thornshell_crab",
    "born_in_chaos_v1:corpse_fish",
    "born_in_chaos_v1:glutton_fish",
    "born_in_chaos_v1:restless_spirit",
    "born_in_chaos_v1:scarlet_persecutor",
    "born_in_chaos_v1:phantom_creeper",
    "born_in_chaos_v1:dark_vortex",
    "born_in_chaos_v1:spiritof_chaos",
    "born_in_chaos_v1:nightmare_stalker",
    "born_in_chaos_v1:missioner",
    "born_in_chaos_v1:pumpkin_spirit",
    "born_in_chaos_v1:seared_spirit",
    "born_in_chaos_v1:krampus",
    "born_in_chaos_v1:krampus_henchman",
    "born_in_chaos_v1:mr_pumpkin",
    "born_in_chaos_v1:sir_pumpkinhead",
    "born_in_chaos_v1:senor_pumpkin",
    "born_in_chaos_v1:lord_pumpkinhead",
    "born_in_chaos_v1:infernal_spirit",
    "born_in_chaos_v1:pumpkin_dunce",
    "born_in_chaos_v1:mrs_pumpkin",
    "born_in_chaos_v1:pumpkin_bruiser",
    "born_in_chaos_v1:skeleton_demoman",
    "born_in_chaos_v1:spirit_guide_assistant",
    "born_in_chaos_v1:zombie_lumberjack",
];

const cataclysm_mobs = [
    "cataclysm:koboleton",
    "cataclysm:deepling_angler",
    "cataclysm:lionfish",
    "cataclysm:deepling_brute",
    "cataclysm:deepling",
];

const creeper_overhaul_mobs = [
    "creeperoverhaul:badlands_creeper",
    "creeperoverhaul:bamboo_creeper",
    "creeperoverhaul:beach_creeper",
    "creeperoverhaul:birch_creeper",
    "creeperoverhaul:cave_creeper",
    "creeperoverhaul:dark_oak_creeper",
    "creeperoverhaul:desert_creeper",
    "creeperoverhaul:dripstone_creeper",
    "creeperoverhaul:hills_creeper",
    "creeperoverhaul:jungle_creeper",
    "creeperoverhaul:mushroom_creeper",
    "creeperoverhaul:ocean_creeper",
    "creeperoverhaul:savannah_creeper",
    "creeperoverhaul:snowy_creeper",
    "creeperoverhaul:spruce_creeper",
    "creeperoverhaul:swamp_creeper",
];

const enderman_overhaul_mobs = [
    "endermanoverhaul:badlands_enderman",
    "endermanoverhaul:cave_enderman",
    "endermanoverhaul:coral_enderman",
    "endermanoverhaul:crimson_forest_enderman",
    "endermanoverhaul:dark_oak_enderman",
    "endermanoverhaul:desert_enderman",
    "endermanoverhaul:end_enderman",
    "endermanoverhaul:end_islands_enderman",
    "endermanoverhaul:flower_fields_enderman",
    "endermanoverhaul:ice_spikes_enderman",
    "endermanoverhaul:mushroom_fields_enderman",
    "endermanoverhaul:nether_wastes_enderman",
    "endermanoverhaul:savanna_enderman",
    "endermanoverhaul:snowy_enderman",
    "endermanoverhaul:soulsand_valley_enderman",
    "endermanoverhaul:swamp_enderman",
    "endermanoverhaul:warped_forest_enderman",
    "endermanoverhaul:windswept_hills_enderman",
];

const enderzoology_mobs = [
    "enderzoology:concussion_creeper",
    "enderzoology:dire_wolf",
    "enderzoology:enderminy",
    "enderzoology:fallen_knight",
    "enderzoology:fallen_mount",
    "enderzoology:infested_zombie",
    "enderzoology:owl",
    "enderzoology:wither_cat",
    "enderzoology:wither_witch",
];

const grimoireofgaia_mobs = [
    "grimoireofgaia:ant",
    "grimoireofgaia:ant_hill",
    "grimoireofgaia:ant_salvager",
    "grimoireofgaia:anubis",
    "grimoireofgaia:arachne",
    "grimoireofgaia:banshee",
    "grimoireofgaia:bee",
    "grimoireofgaia:behender",
    "grimoireofgaia:bone_knight",
    "grimoireofgaia:cecaelia",
    "grimoireofgaia:chest",
    "grimoireofgaia:cobble_golem",
    "grimoireofgaia:cobblestone_golem",
    "grimoireofgaia:creep",
    "grimoireofgaia:creeper_girl",
    "grimoireofgaia:cyclops",
    "grimoireofgaia:deathword",
    "grimoireofgaia:dryad",
    "grimoireofgaia:dullahan",
    "grimoireofgaia:dwarf",
    "grimoireofgaia:ender_dragon_girl",
    "grimoireofgaia:ender_eye",
    "grimoireofgaia:ender_girl",
    "grimoireofgaia:flesh_lich",
    "grimoireofgaia:gelatinous_slime",
    "grimoireofgaia:goblin",
    "grimoireofgaia:goblin_feral",
    "grimoireofgaia:gravemite",
    "grimoireofgaia:gryphon",
    "grimoireofgaia:harpy",
    "grimoireofgaia:horse",
    "grimoireofgaia:hunter",
    "grimoireofgaia:kobold",
    "grimoireofgaia:mandragora",
    "grimoireofgaia:matango",
    "grimoireofgaia:mermaid",
    "grimoireofgaia:mimic",
    "grimoireofgaia:minotaur",
    "grimoireofgaia:minotaurus",
    "grimoireofgaia:mummy",
    "grimoireofgaia:naga",
    "grimoireofgaia:nine_tails",
    "grimoireofgaia:oni",
    "grimoireofgaia:orc",
    "grimoireofgaia:satyress",
    "grimoireofgaia:shaman",
    "grimoireofgaia:sharko",
    "grimoireofgaia:siren",
    "grimoireofgaia:slime_girl",
    "grimoireofgaia:sludge_girl",
    "grimoireofgaia:sphinx",
    "grimoireofgaia:sporeling",
    "grimoireofgaia:spriggan",
    "grimoireofgaia:succubus",
    "grimoireofgaia:toad",
    "grimoireofgaia:trader",
    "grimoireofgaia:valkyrie",
    "grimoireofgaia:werecat",
    "grimoireofgaia:witch",
    "grimoireofgaia:wither_cow",
    "grimoireofgaia:wizard_harpy",
    "grimoireofgaia:yuki_onna",
    "grimoireofgaia:cyan_flower",
    "grimoireofgaia:centaur",
];

const monsterplus_mobs = [
    "monsterplus:abyssologer",
    "monsterplus:ancient_hero",
    "monsterplus:ancient_hero_skull",
    "monsterplus:crystal_zombie",
    "monsterplus:demon_eye",
    "monsterplus:desert_acolyte",
    "monsterplus:desert_sorceress",
    "monsterplus:ender_eye",
    "monsterplus:glow_skeleton",
    "monsterplus:lava_squid",
    "monsterplus:mother_lava_squid",
    "monsterplus:opalescent_eye",
    "monsterplus:overgrown_skeleton",
    "monsterplus:soul",
    "monsterplus:spectral_skeleton",
    "monsterplus:spectral_skull",
    "monsterplus:swamp_zombie",
    "monsterplus:wisp",
];

const mowziesmobs_mobs = [
    "mowziesmobs:umvuthana",
    "mowziesmobs:umvuthana_raptor",
    "mowziesmobs:naga",
];

const mythsandlegends_mobs = [
    "mythsandlegends:abaddon",
    "mythsandlegends:alp",
    "mythsandlegends:black_charro",
    "mythsandlegends:candle_keeper",
    "mythsandlegends:condemned",
    "mythsandlegends:gargoyle",
    "mythsandlegends:karakondjul",
    "mythsandlegends:lampad",
    "mythsandlegends:possessed_armor",
    "mythsandlegends:possessed_armor_archer",
    "mythsandlegends:possessed_armor_inquisitor",
    "mythsandlegends:scorched_sentinel",
    "mythsandlegends:warborn_aegis",
    "mythsandlegends:imp",
    "mythsandlegends:imp_clone",
];

const netherskeletons_mobs = [
    "netherskeletons:basalt_skeleton",
    "netherskeletons:charred_skeleton",
    "netherskeletons:crimson_skeleton",
    "netherskeletons:crying_obby_skeleton",
    "netherskeletons:netherborn_skeleton",
    "netherskeletons:skelly_ghast",
    "netherskeletons:skelly_piglin",
    "netherskeletons:soul_skeleton",
    "netherskeletons:warped_skeleton",
];

const rottencreatures_mobs = [
    "rottencreatures:burned",
    "rottencreatures:dead_beard",
    "rottencreatures:frostbitten",
    "rottencreatures:glacial_hunter",
    "rottencreatures:hunter_wolf",
    "rottencreatures:immortal",
    "rottencreatures:mummy",
    "rottencreatures:scarab",
    "rottencreatures:skeleton_lackey",
    "rottencreatures:swampy",
    "rottencreatures:undead_miner",
    "rottencreatures:zap",
    "rottencreatures:zombie_lackey",
];


// born_in_chaos_mobs
// cataclysm_mobs
// creeper_overhaul_mobs
// enderman_overhaul_mobs
// enderzoology_mobs
// grimoireofgaia_mobs
// monsterplus_mobs
// mowziesmobs_mobs
// mythsandlegends_mobs
// netherskeletons_mobs
// rottencreatures_mobs
EntityJSEvents.attributes(function (event) {
    let mobToMultipliers = {};

    for (let i = 0; i < listsWithMultipliers.length; i++) {
        let pair = listsWithMultipliers[i];
        let list = pair.list || [];
        let multipliers = pair.multipliers || {};
        for (let j = 0; j < list.length; j++) {
            let mob = list[j];
            if (!mobToMultipliers[mob]) mobToMultipliers[mob] = {};
            for (let attrKey in multipliers) {
                if (!multipliers.hasOwnProperty(attrKey)) continue;
                let m = Number(multipliers[attrKey]) || 1;
                if (!mobToMultipliers[mob][attrKey]) {
                    mobToMultipliers[mob][attrKey] = m;
                } else {
                    let cur = mobToMultipliers[mob][attrKey];
                    mobToMultipliers[mob][attrKey] = Math.max(cur, m);
                }
            }
        }
    }

    function findBaseValue(attrs, attrKey) {
        let parts = attrKey.split('.');
        let suffix = parts[parts.length - 1];

        for (let k = 0; k < attrs.length; k++) {
            let a = attrs[k];
            if ((a.descriptionId && a.descriptionId.indexOf(suffix) !== -1) ||
                (a.name && a.name.indexOf(suffix) !== -1) ||
                (a.id && String(a.id).indexOf(suffix) !== -1)) {
                return Number(a.defaultValue);
            }
        }
        return 1;
    }

    for (let mobId in mobToMultipliers) {
        if (!mobToMultipliers.hasOwnProperty(mobId)) continue;

        let attrs = event.getAttributes(mobId) || [];
        let newValues = {};
        for (let attrKeyName in mobToMultipliers[mobId]) {
            if (!mobToMultipliers[mobId].hasOwnProperty(attrKeyName)) continue;
            let multiplierForAttr = Number(mobToMultipliers[mobId][attrKeyName]) || 1;
            let base = findBaseValue(attrs, attrKeyName) || 1;
            let newVal = base * multiplierForAttr;
            newVal = Math.round(newVal);
            newValues[attrKeyName] = newVal;
        }

        let hasAny = false;
        for (let key in newValues) { hasAny = true; break; }
        if (!hasAny) continue;

        (function (mobIdCopy, newValuesCopy, baseAttrs) {
            event.modify(mobIdCopy, function (attribute) {
                for (let key in newValuesCopy) {
                    if (!newValuesCopy.hasOwnProperty(key)) continue;
                    attribute.add(key, newValuesCopy[key]);
                    console.log('Set ' + mobIdCopy + ' ' + key + ' -> ' + newValuesCopy[key]);
                }
            });
        })(mobId, newValues, attrs);
    }
});

// EntityJSEvents.attributes(event => {
//     event.getAttributes('creeper').forEach(attribute => {
//         console.log(`Creeper Attribute: ${attribute.descriptionId}: ${attribute.defaultValue}`)
//     })
// })
