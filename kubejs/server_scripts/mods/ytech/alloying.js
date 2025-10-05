/**
 * Ytech alloying recipe
 *  - `args`:
 *      - `inputItems` : an array of arrays of the following structure : [{ tag|item : name }, amount], items defaults to 1 item
 *      - `outputItems` : an array of arrays of the following structure : [{ id : name }, amount], items defaults to 1 item
 *      - `minTemp` : defaults to 1000
 *      - `smeltingTime` : defaults to 200
 *      - --------
 *      - `removeRecipe`: self explanatory
 *      - `compatOff`: doesn't add MI recipe if true
*/
const ytechAlloyingCraft = (event, args) => {
    let recipe = {
        type: "ytech:alloying",
        minTemp: args.minTemp || 1000,
        smeltingTime: args.smeltingTime || 200,
        ingredient1: {ingredient:args.inputItems[0][0], count:args.inputItems[0][1] || 1},
        ingredient2: {ingredient:args.inputItems[1][0], count:args.inputItems[1][1] || 1},
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    if(!args.compatOff){
        miMachineCraft(event, {energy:4, time:200, machine:"extended_industrialization:alloy_smelter",
            inputItems:args.inputItems,
            outputItems:[[{item:recipe.result.id}, recipe.result.count]]
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].id})}
    event.custom(recipe)
}

ServerEvents.recipes(event => {

    ytechAlloyingCraft(event, {
        inputItems:[
            [{tag: "c:sands"}],
            [{tag: "c:dusts/bronze"}]
        ],
        outputItems:[
            [{id:"kubejs:bronze_glass"},2]
        ],
        minTemp: 1000
    })

    ytechAlloyingCraft(event, {
        inputItems:[
            [{tag: "c:cobblestones"}],
            [{item: "ytech:pebble"}]
        ],
        outputItems:[
            [{id:"minecraft:stone"}]
        ],
        minTemp: 800
    })

    ytechAlloyingCraft(event, {
        inputItems:[
            [{item: "modern_industrialization:iron_dust"}],
            [{item: "modern_industrialization:coal_dust"}]
        ],
        outputItems:[
            [{id:"ytech:iron_bloom"}]
        ],
        minTemp: 1250
    })

})