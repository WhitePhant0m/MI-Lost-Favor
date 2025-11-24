// Remove IE recipes
ServerEvents.recipes(event => {
    // (`･Θ･´) - Some recipes are located in data because it is easier to change a recipe there and delete the previous recipe at the same time (overwrite)
    event.remove({
        output: [
            /immersiveengineering:.*coke.*/,
            /immersiveengineering:plate.*/,
            // /immersiveengineering:wire.*/,
            /immersiveengineering:stick.*/,
            /immersiveengineering:dust.*/,
            /immersiveengineering:ingot.*/,
            /immersiveengineering:raw.*/,
            /immersiveengineering:nugget.*/,
            'immersiveengineering:wire_copper',
            'immersiveengineering:wire_electrum',
            'immersiveengineering:wire_aluminum',
            'immersiveengineering:wire_steel',
            'immersiveengineering:wire_lead'
        ]
    })

    const materials_for_wires = ["steel", "copper", "lead"]
    materials_for_wires.forEach(material => {
        event.replaceInput(
            { input: `immersiveengineering:wire_${material}` },
            `immersiveengineering:wire_${material}`,
            `modern_industrialization:${material}_wire`
        )
    });

    const iron_to_steel = [
        "immersiveengineering:hammer",
        "immersiveengineering:dynamo",
    ]
    iron_to_steel.forEach(element => {
        event.replaceInput(
            { output: element },
            "iron_ingot",
            "modern_industrialization:steel_ingot"
        )
    });

    event.replaceInput(
            { output: "immersiveengineering:cloche" },
            "immersiveengineering:component_iron",
            "immersiveengineering:component_steel"
        )
    event.replaceInput(
            { output: "immersiveengineering:toolbox" },
            "modern_industrialization:aluminum_plate",
            "modern_industrialization:steel_plate"
        )

    milfShaped(event, {
        pattern: [
            "NFN",
            "FMF",
            "NFN"
        ],
        key: {
            M: { item: "minecraft:magma_block" },
            N: { item: "minecraft:nether_brick" },
            F: { item: "modern_industrialization:fire_clay_brick" },
        },
        outputItems: [[{ id: "immersiveengineering:blastbrick" }, 3]],
        removeRecipe:true
    })

    milfShaped(event, {
        pattern: [
            "NF",
            "FN",
        ],
        key: {
            N: { item: "minecraft:nether_brick" },
            F: { item: "modern_industrialization:fire_clay_brick" }
        },
        outputItems: [[{ id: "immersiveengineering:alloybrick" }, 2]],
        removeRecipe:true
    })

    milfShaped(event, {
        pattern: [
            "QTQ",
            "RWR",
            "QTQ"
        ],
        key: {
            Q: { tag: "c:plates/iron" },
            W: { tag: "c:gears/steel" },
            R: { item: "modern_industrialization:rubber_sheet" },
            T: { tag: "c:ingots/copper" },
        },
        outputItems: [[{ id: "immersiveengineering:component_iron" }, 2]],
        removeRecipe:true,
        compatOff:true

    })

    milfShaped(event, {
        pattern: [
            "QTQ",
            "RWR",
            "QTQ"
        ],
        key: {
            Q: { tag: "c:plates/steel" },
            W: { tag: "c:gears/steel" },
            R: { item: "modern_industrialization:rubber_sheet" },
            T: { tag: "c:ingots/bronze" },
        },
        outputItems: [[{ id: "immersiveengineering:component_steel" }, 2]],
        removeRecipe:true,
        compatOff:true

    })

    milfShaped(event, {
        pattern: [
            "WQW",
            "QRQ",
            "WQW"
        ],
        key: {
            Q: { item: "minecraft:redstone" },
            W: { item: "immersiveengineering:sheetmetal_iron" },
            R: { item: "modern_industrialization:analog_circuit" },
        },
        outputItems: [[{ id: "immersiveengineering:rs_engineering" }, 4]],
        removeRecipe:true
    })

    milfShaped(event, {
        pattern: [
            "DDD",
            "PPP"
        ],
        key: {
            D: { item: "minecraft:blue_dye" },
            P: { item: "minecraft:paper" }
        },
        outputItems: [[{ id: "kubejs:blank_blueprint" }, 1]],
        removeRecipe:true
    })

    //TODO: добавить всё что дробится и плавиться из руды или похожее на руду
    const ore_for_arc_furnace = [
        "antimony",
        "iesnium",
    ]

    const ore_for_crusher = [
        "antimony",
        "monazite",
        "salt",
        "stratine",
        "ae2:certus_quartz_crystal",
    ]
})



KubeJSTweaks.beforeRecipes(event =>{

    const disableByRecipeID = [
        /immersiveengineering:crafting\/.*hammercrushing.*/,
        /immersiveengineering:crusher\/.*aluminum/,
        /immersiveengineering:blastfurnace.*/,
        "immersiveengineering:alloysmelter/insulating_glass",
        "immersiveengineering:alloysmelter/bronze",
        "immersiveengineering:alloysmelter/electrum",
        "immersiveengineering:alloysmelter/constantan",
        "immersiveengineering:alloysmelter/invar",
        "immersiveengineering:arcfurnace/raw_block_aluminum",
        "immersiveengineering:arcfurnace/raw_ore_aluminum",
        "immersiveengineering:arcfurnace/ore_silver",
        "immersiveengineering:arcfurnace/dust_tungsten",
        "immersiveengineering:arcfurnace/ore_tungsten",
        "immersiveengineering:arcfurnace/raw_block_tungsten",
        "immersiveengineering:arcfurnace/raw_ore_tungsten",
        "immersiveengineering:arcfurnace/dust_aluminum",
        "immersiveengineering:arcfurnace/dust_platinum",
        "immersiveengineering:arcfurnace/ore_platinum",
        "immersiveengineering:arcfurnace/raw_block_platinum",
        "immersiveengineering:arcfurnace/raw_ore_platinum",
        "immersiveengineering:arcfurnace/dust_uranium",
        "immersiveengineering:arcfurnace/ore_uranium",
        "immersiveengineering:arcfurnace/raw_block_uranium",
        "immersiveengineering:arcfurnace/raw_ore_uranium",
        "immersiveengineering:crusher/ore_quartz",
        "immersiveengineering:crusher/ore_lapis",
        "immersiveengineering:crusher/red_sandstone"
    ]

    disableByRecipeID.forEach(id =>{
        event.disable(id)
    })
    

})