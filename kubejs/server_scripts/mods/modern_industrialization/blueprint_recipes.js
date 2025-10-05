ServerEvents.recipes(event => {
    let mibp = "MI components"

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
            [{ "tag": "c:rods/steel" }, 2],
            [{ "item": "modern_industrialization:copper_fine_wire" }, 8],
            [{ "item": "modern_industrialization:tin_cable" }, 2],
            [{ "item": "modern_industrialization:steel_rod_magnetic" }, 1]
        ],
        { "item": "modern_industrialization:motor" },
        mibp
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
        mibp
    );

    blueprint_recipe(
        [
            [{ "item": "modern_industrialization:rubber_sheet" }, 6],
            [{ "item": "modern_industrialization:motor" }, 2],
            [{ "item": "modern_industrialization:tin_cable" }, 1],
        ],
        { "item": "modern_industrialization:conveyor" },
        mibp
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
        mibp
    );

    blueprint_recipe(
        [
            [{ "tag": "c:bolts/tin" }, 2],
            [{ "item": "moderndynamics:fluid_pipe" }, 3],
            [{ "item": "modern_industrialization:motor" }, 1],
            [{ "item": "modern_industrialization:tin_rotor" }, 3],
        ],
        { "item": "modern_industrialization:pump" },
        mibp
    );

    blueprint_recipe(
        [
            [{ "tag": "c:plates/aluminum" }, 4],
            [{ "item": "modern_industrialization:analog_circuit" }, 1],
            [{ "item": "modern_industrialization:aluminum_curved_plate" }, 2],
            [{ "item": "modern_industrialization:tin_cable"}, 2],
        ],
        { "item": "modern_industrialization:portable_storage_unit" },
        mibp
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
        mibp
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
        mibp
    );

    blueprint_recipe(
        [
            [{ "tag": "c:tiny_dusts/diamond" }, 16],
            [{ "tag": "c:plates/invar" }, 4],
            [{ "item": "immersiveengineering:sawblade" }, 1],
        ],
        { "item": "modern_industrialization:invar_rotary_blade" },
        mibp
    );

})
