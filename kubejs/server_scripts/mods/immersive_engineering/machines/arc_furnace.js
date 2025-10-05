/**
 * IE Arc furnace recipe
 *  - `args`:
 *      - `energy` : self explanatory, defaults to 102400
 *      - `time` : time in ticks (20 = 1sec), defaults to 200
 *      - --------
 *      - `inputItems` : an array of arrays of the following structure : [{ tag|item : name }, amount], defaults to 1 item
 *      - `outputItems` : an array of arrays of the following structure : [{ item : name }, amount, chance], defaults to 1 item
 *      - `slag` : true(1 slag) or an array of arrays of the following structure : [{ tag|item : name }, amount], defaults to 1 item 
 *      - --------
 *      - `removeRecipe`: self explanatory
 *      - `compatOff`: doesn't add MI recipe if true (blast_furnace)
*/
const ieArcFurnaceCraft = (event, args) => {
    let recipe = {
        type: "immersiveengineering:arc_furnace",
        additives: [],
        results: [],
        secondaries: [],
        energy: args.energy || 102400,
        time: args.time || 200
    }
    args.inputItems.forEach((input, index) => {index == 0 ? recipe.input = {basePredicate:input[0], count:input[1] || 1} : recipe.additives.push({basePredicate:input[0], count:input[1] || 1})})
    args.outputItems.forEach((out) => {out[2] ? recipe.secondaries.push({output:{basePredicate:out[0], count:out[1] || 1}, chance:out[2]}) : recipe.results.push({basePredicate:out[0], count:out[1] || 1})})
    if (args.slag){recipe.slag = args.slag == true ? {basePredicate: {"item": "immersiveengineering:slag"}, count: 1} : {basePredicate: args.slag[0][0], count: args.slag[0][1] || 1}}
    if(!args.compatOff){
        miMachineCraft(event, {energy:32, time:args.time || 200, machine:"modern_industrialization:blast_furnace",
            inputItems:args.inputItems,
            outputItems:args.outputItems.concat(args.slag == true ? [[{"item": "immersiveengineering:slag"}]] : args.slag || [[]])
        })
    }
    if(args.removeRecipe){event.remove(args.outputItems.forEach((out) => {event.remove({output: out})}))}
    event.custom(recipe)
}

ServerEvents.recipes(event => {

    ieArcFurnaceCraft(event,{
        inputItems:[
            [{tag: "c:ores/aluminum"}, 1]
        ],
        outputItems:[
            [{item: "modern_industrialization:aluminum_ingot"}, 1],
            [{item: "modern_industrialization:aluminum_ingot"}, 1, 0.5]

        ],
        slag:true
    })

    //#region ae stuff
    //ae starter pack
    ieArcFurnaceCraft(event,{
        inputItems:[
            [{"item": "ae2:mysterious_cube"}, 1],
            [{"item": "pastel:bottle_of_fading"}, 4],
            [{"item": "pastel:light_blue_pigment"}, 32]
        ],
        outputItems:[
            [{"item": "ae2:controller"}, 1],
            [{"item": "ae2:terminal"}, 1],
            [{"item": "kubejs:blueprint_pack"}, 1],
            [{"item": "kubejs:disk_from_space"}, 1],

        ],
        slag:[
            [{"item": "pastel:vegetal"}, 4]
        ]
    })

    //quartz_glass
    ieArcFurnaceCraft(event,{
        inputItems:[
            [{"tag": "c:glass_blocks"}, 6],
            [{"tag": "c:dusts/certus_quartz"}, 7],
            [{"tag": "c:dusts/quartz"}, 2]
        ],
        outputItems:[
            [{"item": "ae2:quartz_glass"}, 6]

        ],
        slag:[
            [{"item": "extendedae:quartz_blend"}, 3]
        ]
    })

    //vibrant_quartz_glass
    ieArcFurnaceCraft(event,{
        inputItems:[
            [{"tag": "c:glass_blocks"}, 6],
            [{"tag": "c:dusts/certus_quartz"}, 7],
            [{"tag": "c:dusts/quartz"}, 2],
            [{"item": "pastel:shimmerstone_gem"}, 12]
        ],
        outputItems:[
            [{"item": "ae2:quartz_vibrant_glass"}, 6]
        ],
        slag:[
            [{"item": "extendedae:quartz_blend"}, 3]
        ]
    })

    //tempered_glass
    ieArcFurnaceCraft(event,{
        inputItems:[
            [{"tag": "c:sands"}, 2],
            [{"tag": "c:dusts/aluminum"}, 4],
            [{"tag": "c:dusts/quartz"}, 2],
            [{"tag": "c:dusts/lead"}, 2],
        ],
        outputItems:[
            [{"item": "kubejs:tempered_glass"}, 8]
        ],
        slag:true
    })

    //wth
    ieArcFurnaceCraft(event,{
        inputItems:[
            [{"item": "minecraft:netherite_helmet"}, 1],
            [{"item": "pastel:horse_head"}, 4],
            [{"tag": "immersiveengineering:treated_wood"}, 16],
            [{"tag": "c:nuggets/copper"}, 6],
            [{"item": "minecraft:netherite_block"}, 4]
        ],
        outputItems:[
            [{"item": "kubejs:meze_109"}, 1]
        ],
        slag:[
            [{"item": "pastel:skeleton_horse_head"}, 4]
        ]
    })
    //#endregion

});