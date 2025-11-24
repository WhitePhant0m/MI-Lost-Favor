ServerEvents.recipes(event => {
    let miComponents = "MI components"
    let miTools = "MI tools"

    function blueprint_recipe(inputs, output, bpCategory) {
        ieBlueprintCraft(event, {
            inputItems: inputs,
            outputItems: [[output]],
            category: bpCategory,
            removeRecipe: true
        })
    }

    blueprint_recipe(
        [
            [{ "item": "modern_industrialization:steel_ring" }, 1],
            [{ "item": "minecraft:flint" }, 1]
        ],
        { "item": "minecraft:flint_and_steel" },
        miTools
    ); 

    blueprint_recipe(
        [
            [{ "item": "modern_industrialization:steel_curved_plate" }, 2],
            [{ "item": "modern_industrialization:steel_nugget" }, 1],
            [{ "item": "modern_industrialization:iron_plate" }, 1]
        ],
        { "item": "measurements:tape_measure" },
        miTools
    ); 

    blueprint_recipe(
        [
            [{ "item": "immersiveengineering:component_iron" }, 2],
            [{ "item": "modern_industrialization:copper_drill_head" }, 1],
            [{ "item": "kubejs:small_steel_fluid_container" }, 1],
            [{ "item": "modern_industrialization:iron_large_plate" }, 4],
            [{ "item": "modern_industrialization:diamond_dust" }, 3]
        ],
        { "item": "modern_industrialization:steam_mining_drill" },
        miTools
    ); 

    blueprint_recipe(
        [
            [{ "item": "immersiveengineering:component_iron" }, 2],
            [{ "item": "modern_industrialization:copper_curved_plate" }, 4],
            [{ "item": "kubejs:small_steel_fluid_container" }, 1],
            [{ "item": "modern_industrialization:iron_large_plate" }, 4],
            [{ "item": "modern_industrialization:diamond_dust" }, 3],
            [{ "item": "modern_industrialization:rubber_sheet" }, 6]
        ],
        { "item": "extended_industrialization:steam_chainsaw" },
        miTools
    ); 

    blueprint_recipe(
        [
            [{ "tag": "c:rods/steel" }, 2],
            [{ "item": "modern_industrialization:copper_fine_wire" }, 8],
            [{ "item": "modern_industrialization:tin_cable" }, 2],
            [{ "item": "modern_industrialization:steel_rod_magnetic" }, 1]
        ],
        { "item": "modern_industrialization:motor" },
        miComponents
    );


    blueprint_recipe(
        [
            [{ "tag": "c:dusts/glowstone" }, 4],
            [{ "tag": "c:rods/steel" }, 2],
            [{ "item": "modern_industrialization:copper_fine_wire" }, 8],
            [{ "item": "kubejs:lens" }, 2],
            [{ "item": "modern_industrialization:analog_circuit" }, 1],
        ],
        { "item": "kubejs:rangefinder" },
        miComponents
    );

    blueprint_recipe(
        [
            [{ "item": "modern_industrialization:rubber_sheet" }, 6],
            [{ "item": "modern_industrialization:motor" }, 2],
            [{ "item": "modern_industrialization:tin_cable" }, 1],
        ],
        { "item": "modern_industrialization:conveyor" },
        miComponents
    );

    blueprint_recipe(
        [
            [{ "tag": "c:plates/steel" }, 3],
            [{ "tag": "c:rods/steel" }, 2],
            [{ "tag": "c:gears/steel" }, 1],
            [{ "item": "modern_industrialization:motor" }, 1],
            [{ "item": "modern_industrialization:tin_cable" }, 2],
        ],
        { "item": "modern_industrialization:piston" },
        miComponents
    );

    blueprint_recipe(
        [
            [{ "tag": "c:bolts/tin" }, 2],
            [{ "item": "moderndynamics:fluid_pipe" }, 3],
            [{ "item": "modern_industrialization:motor" }, 1],
            [{ "item": "modern_industrialization:tin_rotor" }, 3],
        ],
        { "item": "modern_industrialization:pump" },
        miComponents
    );

    blueprint_recipe(
        [
            [{ "tag": "c:plates/battery_alloy" }, 4],
            [{ "item": "modern_industrialization:analog_circuit" }, 1],
            [{ "item": "modern_industrialization:battery_alloy_curved_plate" }, 2],
            [{ "item": "modern_industrialization:tin_cable"}, 2],
        ],
        { "item": "modern_industrialization:portable_storage_unit" },
        miComponents
    );

    blueprint_recipe(
        [
            [{ "tag": "c:rods/steel" }, 2],
            [{ "item": "modern_industrialization:analog_circuit" }, 1],
            [{ "item": "modern_industrialization:motor" }, 2],
            [{ "item": "modern_industrialization:piston" }, 1],
            [{ "item": "modern_industrialization:tin_cable"}, 3],
        ],
        { "item": "modern_industrialization:robot_arm" },
        miComponents
    );

    blueprint_recipe(
        [
            [{ "tag": "c:bolts/steel" }, 1],
            [{ "tag": "c:plates/aluminum" }, 2],
            [{ "item": "modern_industrialization:analog_circuit" }, 1],
            [{ "item": "kubejs:cd" }, 1],
            [{ "item": "modern_industrialization:motor" }, 1],
            [{ "item": "modern_industrialization:copper_fine_wire" }, 8],
        ],
        { "item": "kubejs:cd_reader" },
        miComponents
    );

    blueprint_recipe(
        [
            [{ "tag": "c:tiny_dusts/diamond" }, 16],
            [{ "tag": "c:plates/invar" }, 4],
            [{ "item": "immersiveengineering:sawblade" }, 1],
        ],
        { "item": "modern_industrialization:invar_rotary_blade" },
        miComponents
    );

})
