ServerEvents.recipes(event => {

    function arc_furnace_recipe(inputs, outputs, energy, time, slag) {
        let recipe = {
            type: "immersiveengineering:arc_furnace",
            additives: [],
            results: [],
            secondaries: [],
            energy: energy,
            time: time
        };
        inputs.forEach((input,index) => {
            if(index == 0){
                recipe.input = {
                    basePredicate: input[0],
                    count: input[1]
                };
            }
            else{
                recipe.additives.push({
                    basePredicate: input[0],
                    count: input[1]
                })
            }
        });
        outputs.forEach(output => {
            let o = {
                basePredicate: output[0],
                count: output[1],
            };
            if(output[2] != undefined){recipe.secondaries.push({
                chance: output[2],
                output: o
            })}
            else{
                recipe.results.push(o);
            }

        });
        if (slag != undefined){recipe.slag = {
            basePredicate: slag[0],
            count: slag[1]
        }}
        event.custom(recipe);
    }

    arc_furnace_recipe(
        [
            [{"tag": "c:ores/aluminum"}, 1]
        ],
        [
            [{"tag": "c:ingots/aluminum"}, 1],
            [{"tag": "c:ingots/aluminum"}, 1, 0.5]

        ],
        102400,
        200,
        [{"tag": "c:slag"}, 1]
    );

    //ae stuff
    //#region
    //ae starter pack
    arc_furnace_recipe(
        [
            [{"item": "ae2:mysterious_cube"}, 1],
            [{"item": "pastel:bottle_of_fading"}, 4],
            [{"item": "pastel:light_blue_pigment"}, 32]
        ],
        [
            [{"item": "ae2:controller"}, 1],
            [{"item": "ae2:terminal"}, 1],
            [{"item": "kubejs:blueprint_pack"}, 1],
            [{"item": "kubejs:disk_from_space"}, 1],
        ],
        500163,
        200,
        [{"item": "pastel:vegetal"}, 4]
    );

    //quartz_glass
    arc_furnace_recipe(
        [
            [{"tag": "c:glass_blocks"}, 6],
            [{"tag": "c:dusts/certus_quartz"}, 7],
            [{"tag": "c:dusts/quartz"}, 2]
        ],
        [
            [{"item": "ae2:quartz_glass"}, 6]
        ],
        102400,
        200,
        [{"item": "extendedae:quartz_blend"}, 3]
    );

    //vibrant_quartz_glass
    arc_furnace_recipe(
        [
            [{"tag": "c:glass_blocks"}, 6],
            [{"tag": "c:dusts/certus_quartz"}, 7],
            [{"tag": "c:dusts/quartz"}, 2],
            [{"item": "pastel:shimmerstone_gem"}, 12]
        ],
        [
            [{"item": "ae2:quartz_vibrant_glass"}, 6]
        ],
        102400,
        200,
        [{"item": "extendedae:quartz_blend"}, 3]
    );
    //tempered_glass
    arc_furnace_recipe(
        [
            [{"tag": "c:sands"}, 2],
            [{"tag": "c:dusts/aluminum"}, 4],
            [{"tag": "c:dusts/quartz"}, 2],
            [{"tag": "c:dusts/lead"}, 2],
        ],
        [
            [{"item": "kubejs:tempered_glass"}, 8]
        ],
        102400,
        200,
        [{"tag": "c:slag"}, 1]
    );

    //wth
    arc_furnace_recipe(
        [
            [{"item": "minecraft:netherite_helmet"}, 1],
            [{"item": "pastel:horse_head"}, 4],
            [{"tag": "immersiveengineering:treated_wood"}, 16],
            [{"tag": "c:nuggets/copper"}, 6],
            [{"item": "minecraft:netherite_block"}, 4]
        ],
        [
            [{"item": "kubejs:meze_109"}, 1]
        ],
        109109,
        109,
        [{"item": "pastel:skeleton_horse_head"}, 4]
    );
    //#endregion

});