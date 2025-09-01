ServerEvents.recipes(event => {

    function bottling_recipe(inputs, fluid, outputs) {
        let recipe = {
            type: "immersiveengineering:bottling_machine",
            inputs: [],
            results: []
        };
        recipe.fluid = {
            fluid : fluid[0],
            amount : fluid[1]
        }
        inputs.forEach(input => {
            let i = {
                basePredicate: input[0],
                count: input[1]
            };
            recipe.inputs.push(i);
        });
        outputs.forEach(output => {
            let o = {
                basePredicate: output[0],
                count: output[1]
            };
            recipe.results.push(o);
        });
        event.custom(recipe);
    }

    function ae_processor (printedCircuit, output) {
        bottling_recipe(
            [
                [ { "item": "ae2:printed_silicon" }, 1 ],
                [ { "item": printedCircuit }, 1 ]
            ],
            [ "modern_industrialization:molten_redstone", 250 ],
            [
                [ { "item": output }, 1 ]
            ]
        );
    }

    function ae_item_cell (cellComponent, output) {
        bottling_recipe(
            [
                [ { "item": "ae2:quartz_glass" }, 2 ],
                [ { "item": "ae2:item_cell_housing" }, 1 ],
                [ { "item": cellComponent }, 1 ]
            ],
            [ "modern_industrialization:molten_redstone", 500 ],
            [
                [ { "item": output }, 1 ]
            ]
        );
    }

    function ae_fluid_cell (cellComponent, output) {
        bottling_recipe(
            [
                [ { "item": "ae2:quartz_glass" }, 2 ],
                [ { "item": "ae2:fluid_cell_housing" }, 1 ],
                [ { "item": cellComponent }, 1 ]
            ],
            [ "modern_industrialization:molten_redstone", 500 ],
            [
                [ { "item": output }, 1 ]
            ]
        );
    }

    ae_processor("ae2:printed_logic_processor", "ae2:logic_processor")
    ae_processor("ae2:printed_engineering_processor", "ae2:engineering_processor")
    ae_processor("ae2:printed_calculation_processor", "ae2:calculation_processor")


    ae_item_cell("ae2:cell_component_1k", "ae2:item_storage_cell_1k")
    ae_item_cell("ae2:cell_component_4k", "ae2:item_storage_cell_4k")
    ae_item_cell("ae2:cell_component_16k", "ae2:item_storage_cell_16k")
    ae_item_cell("ae2:cell_component_64k", "ae2:item_storage_cell_64k")
    ae_item_cell("ae2:cell_component_256k", "ae2:item_storage_cell_256k")

    ae_fluid_cell("ae2:cell_component_1k", "ae2:fluid_storage_cell_1k")
    ae_fluid_cell("ae2:cell_component_4k", "ae2:fluid_storage_cell_4k")
    ae_fluid_cell("ae2:cell_component_16k", "ae2:fluid_storage_cell_16k")
    ae_fluid_cell("ae2:cell_component_64k", "ae2:fluid_storage_cell_64k")
    ae_fluid_cell("ae2:cell_component_256k", "ae2:fluid_storage_cell_256k")

    // AE Cores
    bottling_recipe(
        [
            [ { "item": "ae2:quartz_glass" }, 4 ],
            [ { "item": "ae2:calculation_processor" }, 2 ],
            [ { "item": "kubejs:core_hull" }, 1 ]
        ],
        [ "modern_industrialization:polyethylene", 500 ],
        [
            [ { "item": "ae2:annihilation_core" }, 1 ]
        ]
    );

    bottling_recipe(
        [
            [ { "item": "ae2:quartz_glass" }, 4 ],
            [ { "item": "ae2:engineering_processor" }, 2 ],
            [ { "item": "kubejs:core_hull" }, 1 ]
        ],
        [ "modern_industrialization:polyethylene", 500 ],
        [
            [ { "item": "ae2:formation_core" }, 1 ]
        ]
    );

});