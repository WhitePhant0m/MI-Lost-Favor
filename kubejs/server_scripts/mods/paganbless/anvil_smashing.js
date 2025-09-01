ServerEvents.recipes(event => {

    var craft_removal_list = []

    function packer_recipe(energy,time,inputs,outputs,token){
        var recipe = event.recipes.modern_industrialization.packer(energy, time);
        inputs.forEach((input) => {Array.isArray(input) ? recipe.itemIn(input[0], input[1]) : recipe.itemIn(input)})
        outputs.forEach((out) => {
            recipe.itemOut(out)
        })
        if (token != undefined){recipe.itemIn(token, 0)}
    }

    function anvil_recipe(inputs, output) {
        let mi_inputs = []
        let recipe = {
            type: "paganbless:anvil_smashing",
            ingredients: [],
            result: output[0],
        }
        recipe.result.count = output[1] || 1
        inputs.forEach(input => {
            let i = input[0]
            i.count = input[1]
            recipe.ingredients.push(i);
            mi_inputs.push(input[1] + "x " + (input[0].tag ? "#" + input[0].tag : input[0].item))
        });
        event.custom(recipe);
        let out = output[0].id || output.id || "#" + output[0].tag || "#" + output.tag
        craft_removal_list.push(out)
        out = output[1] + "x " + (output[0].tag ? "#" + output[0].tag : output[0].id)
        packer_recipe(2,200,mi_inputs,[out])
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

    anvil_recipe(
        [
            [{ "tag": "c:plates/copper" }, 2],
            [{ "tag": "c:bolts/copper" }, 4],
        ],
        [{ "id": 'kubejs:small_copper_fluid_container' }, 1]
    );



    //#region mi stuff

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

    event.forEachRecipe({output:craft_removal_list}, r => {
        event.remove({output: r.getOriginalRecipeResult()})
    })

})