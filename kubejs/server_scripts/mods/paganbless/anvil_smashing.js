/**
 * Paganbless anvil smashing recipe
 *  - `args`:
 *      - `inputItems` : an array of arrays of the following structure : [{ tag|item : name }, amount], items defaults to 1 item
 *      - `outputItems` : an array of arrays of the following structure : [{ id : name }, amount], items defaults to 1 item
 *      - --------
 *      - `removeRecipe`: self explanatory
 *      - `compatOff`: doesn't add MI recipe if true
*/
const anvilSmashingCraft = (event, args) => {
    let recipe = {
        type: "paganbless:anvil_smashing",
        ingredients: [],
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    args.inputItems.forEach((input) => {recipe.ingredients.push(Object.assign({},input[0], {count:input[1] || 1}))})
    if(!args.compatOff){
        miMachineCraft(event, {energy:2, time:200, machine:"modern_industrialization:packer",
            inputItems:args.inputItems,
            outputItems:[[{item:recipe.result.id}, recipe.result.count]]
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].id})}
    event.custom(recipe)
}


ServerEvents.recipes(event => {

    function anvil_recipe(inputs, output) {
        anvilSmashingCraft(event, {
            inputItems: inputs,
            outputItems: [output],
            removeRecipe: true
        })
    }


    anvil_recipe(
        [
            [{ "tag": "c:bolts/copper" }, 1],
            [{ "tag": "c:rods/iron" }, 4],
            [{ "tag": "c:plates/iron" }, 4],
        ],
        [{ "id": 'adfinders:mineral_finder' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/copper" }, 1],
            [{ "tag": "c:rods/bronze" }, 4],
            [{ "tag": "c:plates/bronze" }, 4],
        ],
        [{ "id": 'adfinders:metal_finder' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/aluminum" }, 4],
            [{ "tag": "c:rods/aluminum" }, 4],
            [{ "tag": "c:ingots/aluminum" }, 2],
        ],
        [{ "id": 'hangglider:glider_framework' }, 1]
    );

    anvil_recipe(
        [
            [{ "item": "minecraft:amethyst_shard" }, 4],
            [{ "item": "minecraft:ender_pearl" }, 4],
            [{ "item": "minecraft:emerald" }, 1],
        ],
        [{ "id": 'waystones:warp_stone' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/iron" }, 4],
            [{ "tag": "c:plates/iron" }, 2],
            [{ "tag": "c:dusts/iron" }, 4],
        ],
        [{ "id": 'moderndynamics:inhibitor' }, 4]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/iron" }, 4],
            [{ "tag": "c:plates/iron" }, 2],
            [{ "tag": "c:dusts/lead" }, 4],
        ],
        [{ "id": 'moderndynamics:attractor' }, 2]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/iron" }, 4],
            [{ "tag": "c:plates/iron" }, 2],
            [{ "tag": "c:dusts/redstone" }, 4],
        ],
        [{ "id": 'moderndynamics:extractor' }, 2]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/iron" }, 4],
            [{ "tag": "c:plates/iron" }, 2],
            [{ "tag": "c:dusts/lapis" }, 4],
        ],
        [{ "id": 'moderndynamics:filter' }, 2]
    );

    //#region mi stuff

    anvil_recipe(
        [
            [{ "tag": "c:plates/copper" }, 2],
            [{ "tag": "c:bolts/copper" }, 4],
        ],
        [{ "id": 'kubejs:small_copper_fluid_container' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:plates/steel" }, 2],
            [{ "tag": "c:bolts/steel" }, 4],
        ],
        [{ "id": 'kubejs:small_steel_fluid_container' }, 1]
    );

    anvil_recipe(
        [
            [{ "item": "immersiveengineering:fluid_pipe" }, 5],
            [{ "item": "kubejs:steel_infused_glass" }, 1],
            [{ "item": "kubejs:steel_machine_bit" }, 12],
        ],
        [{ "id": 'modern_industrialization:steel_upgrade' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/bronze" }, 8],
            [{ "tag": "c:gears/bronze" }, 1],
            [{ "tag": "c:plates/bronze" }, 8],
        ],
        [{ "id": 'modern_industrialization:bronze_machine_casing' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/steel" }, 8],
            [{ "tag": "c:gears/steel" }, 1],
            [{ "tag": "c:plates/steel" }, 8],
        ],
        [{ "id": 'modern_industrialization:steel_machine_casing' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/invar" }, 8],
            [{ "tag": "c:gears/invar" }, 1],
            [{ "tag": "c:plates/invar" }, 8],
        ],
        [{ "id": 'modern_industrialization:heatproof_machine_casing' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/titanium" }, 8],
            [{ "tag": "c:gears/titanium" }, 1],
            [{ "tag": "c:plates/titanium" }, 8],
        ],
        [{ "id": 'modern_industrialization:solid_titanium_machine_casing' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/stainless_steel" }, 8],
            [{ "tag": "c:gears/stainless_steel" }, 1],
            [{ "tag": "c:plates/stainless_steel" }, 8],
        ],
        [{ "id": 'modern_industrialization:clean_stainless_steel_machine_casing' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/aluminum" }, 8],
            [{ "tag": "c:gears/aluminum" }, 1],
            [{ "tag": "c:plates/aluminum" }, 8],
        ],
        [{ "id": 'modern_industrialization:frostproof_machine_casing' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/bronze" }, 8],
            [{ "item": "modern_industrialization:fire_clay_bricks" }, 1],
            [{ "tag": "c:plates/bronze" }, 8],
        ],
        [{ "id": 'modern_industrialization:bronze_plated_bricks' }, 1]
    );

    anvil_recipe(
        [
            [{ "tag": "c:bolts/bronze" }, 4],
            [{ "tag": "c:rods/bronze" }, 1],
            [{ "tag": "c:plates/bronze" }, 2],
        ],
        [{ "id": 'modern_industrialization:wrench' }, 1]
    );

    //#endregion

})