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
            /immersiveengineering:.*blast.*/,
            'immersiveengineering:wire_copper',
            'immersiveengineering:wire_electrum',
            'immersiveengineering:wire_aluminum',
            'immersiveengineering:wire_steel',
            'immersiveengineering:wire_lead'
        ]
    })

    // Create constants
    const removing_by_recipe_id = [
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
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
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
    /*
    event.remove({id: "immersiveengineering:crafting/component_iron"})
    event.shaped("4x immersiveengineering:component_iron", [
        "QTQ",
        "RWR",
        "QTQ"
    ], {
        Q: "modern_industrialization:iron_plate",
        W: "minecraft:copper_ingot",
        R: "modern_industrialization:piston",
        T: "modern_industrialization:conveyor"
    });
    event.remove({id: "immersiveengineering:crafting/component_steel"})
    event.shaped("4x immersiveengineering:component_steel", [
        "QTQ",
        "RWR",
        "QTQ"
    ], {
        Q: "modern_industrialization:steel_plate",
        W: "minecraft:copper_ingot",
        R: "modern_industrialization:robot_arm",
        T: "modern_industrialization:conveyor"
    });
    */


    event.remove({id: "immersiveengineering:crafting/component_iron"})
    event.shaped("2x immersiveengineering:component_iron", [
        "QTQ",
        "RWR",
        "QTQ"
    ], {
        Q: "#c:plates/iron",
        W: "#c:gears/steel",
        R: "modern_industrialization:rubber_sheet",
        T: "#c:ingots/copper"
    });
    event.remove({id: "immersiveengineering:crafting/component_steel"})
    event.shaped("2x immersiveengineering:component_steel", [
        "QTQ",
        "RWR",
        "QTQ"
    ], {
        Q: "#c:plates/steel",
        W: "#c:gears/steel",
        R: "modern_industrialization:rubber_sheet",
        T: "#c:ingots/bronze"
    });

    event.remove({output: "immersiveengineering:rs_engineering"})
    event.shaped("4x immersiveengineering:rs_engineering", [
        "WQW",
        "QRQ",
        "WQW"
    ], {
        Q: "minecraft:redstone",
        W: "immersiveengineering:sheetmetal_iron",
        R: "modern_industrialization:analog_circuit"
    });


    event.shaped("kubejs:blank_blueprint", [
        "   ",
        "DDD",
        "PPP"
    ], {
        D: "minecraft:blue_dye",
        P: "minecraft:paper"
    });

















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