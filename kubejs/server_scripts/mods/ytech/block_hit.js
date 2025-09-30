ServerEvents.recipes(event => {

     function press_recipe(input, output) {
        var recipe = {
            type: "immersiveengineering:metal_press",
            energy: 800,
            mold: "immersiveengineering:mold_unpacking",
            input: {
                basePredicate: input,
                count: 1
            },  
        }
        recipe.result = output[0]
        recipe.result.count = output[1]
        event.custom(recipe)
    }

    function unpacker_recipe(energy,time,input,output){
        var recipe = event.recipes.modern_industrialization.unpacker(energy, time);
        recipe.itemIn(input);
        recipe.itemOut(output[1] + "x " + (output[0].tag ? "#" + output[0].tag : output[0].id))
    }

    function block_hit_recipe(input,output,block){
        let recipe =
            {
                "type": "ytech:block_hit",
                "block" : block || {tag : "c:stones"},
                "ingredient": input,
                "result" : output[0]
            }
        recipe.result.count = output[1]
        event.custom(recipe)
        press_recipe(input, output)
        unpacker_recipe(2,200,input,output)
    }

    block_hit_recipe({item:"modern_industrialization:bronze_machine_casing"}, [{id:"kubejs:bronze_machine_bit"}, 12], {tag : "minecraft:anvil"} )
    block_hit_recipe({item:"modern_industrialization:frostproof_machine_casing"}, [{id:"kubejs:basic_machine_bit"}, 12], {tag : "minecraft:anvil"} )
    block_hit_recipe({item:"modern_industrialization:steel_machine_casing"}, [{id:"kubejs:steel_machine_bit"}, 12], {tag : "minecraft:anvil"} )

    block_hit_recipe({tag:"c:cobblestones"}, [{id:"ytech:pebble"}, 4], {tag : "c:stones"} )


})