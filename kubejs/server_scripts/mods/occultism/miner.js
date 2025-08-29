ServerEvents.recipes(event => {
    const ore_to_remove = [
        "occultism:miner/ores/platinum_ore",
        "occultism:miner/ores/diamond_ore",
        "occultism:miner/ores/copper_ore",
        "occultism:miner/ores/monazite_ore",
        "occultism:miner/ores/salt_ore",
        "occultism:miner/ores/lignite_coal_ore",
        "occultism:miner/ores/nickel_ore",
        "occultism:miner/ores/coal_ore",
        "occultism:miner/ores/antimony_ore",
        "occultism:miner/ores/redstone_ore",
        "occultism:miner/ores/lead_ore",
        "occultism:miner/ores/iron_ore",
        "occultism:miner/ores/lapis_ore",
        "occultism:miner/ores/titanium_ore",
        "occultism:miner/ores/gold_ore",
        "occultism:miner/ores/uranium_ore",
        "occultism:miner/ores/tungsten_ore",
        "occultism:miner/ores/nether_quartz_ore",
        "occultism:miner/ores/nether_gold_ore",
        "occultism:miner/ores/tin_ore",
        "occultism:miner/ores/iridium_ore",
        "occultism:miner/ores/platinum_ore",
        "occultism:miner/ores/bauxite_ore",
        "occultism:miner/ores/emerald_ore",
        // Deepslate Miners
        "occultism:miner/deeps/deepslate_copper_ore",
        "occultism:miner/deeps/deepslate_iron_ore",
        "occultism:miner/deeps/deepslate_emerald_ore",
        "occultism:miner/deeps/deepslate_coal_ore",
        "occultism:miner/deeps/deepslate_redstone_ore",
        "occultism:miner/deeps/deepslate_diamond_ore",
        "occultism:miner/deeps/deepslate_gold_ore",
        "occultism:miner/deeps/deepslate_lapis_ore",
        "occultism:miner/deeps/deepslate_silver_ore",
        // Eldritch Ancient Miner
        "occultism:miner/eldritch/raw_platinum",
        "occultism:miner/eldritch/raw_gold",
        "occultism:miner/eldritch/lapis",
        "occultism:miner/eldritch/raw_iron",
        "occultism:miner/eldritch/raw_titanium",
        "occultism:miner/eldritch/redstone",
        "occultism:miner/eldritch/raw_nickel",
        "occultism:miner/eldritch/raw_silver",
        "occultism:miner/eldritch/diamond",
        "occultism:miner/eldritch/quartz",
        "occultism:miner/eldritch/sulfur",
        "occultism:miner/eldritch/monazite",
        "occultism:miner/eldritch/raw_tin",
        "occultism:miner/eldritch/ancient_debris",
        "occultism:miner/eldritch/raw_tungsten",
        "occultism:miner/eldritch/bauxite",
        "occultism:miner/eldritch/raw_antimony",
        "occultism:miner/eldritch/lignite_coal",
        "occultism:miner/eldritch/raw_copper",
        "occultism:miner/eldritch/coal",
        "occultism:miner/eldritch/emerald",
        "occultism:miner/eldritch/raw_lead",
        "occultism:miner/eldritch/salt",
        "occultism:miner/eldritch/raw_uranium",
    ]


    // miner_types: unspecialized, ores, deeps, master, eldritch
    const custom_ores = [
        {name: "malum:deepslate_soulstone_ore", miner_type: "deeps", chance: 200, amount: 1},
        {name: "malum:brilliant_deepslate", miner_type: "deeps", chance: 100, amount: 1},
        {name: "pastel:deepslate_shimmerstone_ore", miner_type: "deeps", chance: 200, amount: 1},
        {name: "malum:cthonic_gold_ore", miner_type: "deeps", chance: 100, amount: 1},
        {name: "pastel:deepslate_azurite_ore", miner_type: "deeps", chance: 50, amount: 1},
    ]
    

    custom_ores.forEach(ore => {
        event.recipes.occultism.miner(
        WeightedRecipeResult.of(ore.name, ore.amount, ore.chance),
        `#occultism:miners/${ore.miner_type}`
    )
    });
    

    ore_to_remove.forEach(ore => {
        event.remove(ore)
    });
})