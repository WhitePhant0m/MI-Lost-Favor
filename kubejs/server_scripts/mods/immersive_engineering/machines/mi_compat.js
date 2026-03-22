ServerEvents.tags('item', event => {
    var remove = [
        //item outputs that will not be converted
        /.*fine_wire/,
        "modern_industrialization:diamond_tiny_dust",
        "modern_industrialization:blastproof_alloy_plate",
        "minecraft:stick",
        "minecraft:chain",
        "modern_industrialization:fire_clay_bricks",
    ]

    remove.forEach(output => {
        event.add('milf:nocompat', output)
    })
})

ServerEvents.recipes(event => {
    //macerator to crusher
    function crusher_mi(ingredients, result, miEnergy){
        let output = []
        result.forEach((out) => output.push([{item: out.item}, out.amount, out.probability]))
        ieCrusherCraft(event, {
            inputItems: ingredients.tag ? [[{tag:ingredients.tag}, ingredients.amount]] : [[{item:ingredients.item}, ingredients.amount]],
            outputItems: output,
            energy: miEnergy,
            compatOff: true,
            removeRecipeType:"immersiveengineering:crusher"
        })
        //event.remove({ type: 'immersiveengineering:crusher', output:result[0].item})

    }

    event.remove({ type: 'immersiveengineering:crusher', output:"minecraft:amethyst_shard"})

    event.forEachRecipe({ type: 'modern_industrialization:macerator', not : {output: "#milf:nocompat"}}, r => {
        const rjson = JSON.parse(r.json)
        if(!Array.isArray(rjson.item_inputs)){rjson.item_inputs = [rjson.item_inputs]}
        if(!Array.isArray(rjson.item_outputs)){rjson.item_outputs = [rjson.item_outputs]}
        crusher_mi((rjson.item_inputs)[0], rjson.item_outputs, rjson.duration * rjson.eu)
        rjson.item_outputs.forEach(output =>{            
            event.remove({ type: 'immersiveengineering:crusher', output:output?.item || `#${output?.tag}`})
        })

        rjson.item_inputs.forEach(input =>{            
            event.remove({ type: 'immersiveengineering:crusher', input:input?.item ||  `#${input?.tag}`})
        })
    })


    //#region press
    function press_mi(ingredients, result, mold, miEnergy){
        iePressCraft(event, {
            inputItems: ingredients.tag ? [[{tag:ingredients.tag}, ingredients.amount]] : [[{item:ingredients.item}, ingredients.amount]],
            outputItems: [[{id:result.item}, result.amount]],
            mold: {item : mold},
            energy: miEnergy,
            compatOff: true,
        })
        event.remove({ type: 'immersiveengineering:metal_press', output:result.item})
    }

    //plates
    event.forEachRecipe({ type: 'modern_industrialization:compressor', not : {output: "#milf:nocompat"}, output:"#c:plates"}, r => {
        const rjson = JSON.parse(r.json)
        press_mi((rjson.item_inputs)[0], (rjson.item_outputs)[0], 'immersiveengineering:mold_plate', (rjson.duration * rjson.eu))
    })
    
    //rods
    event.forEachRecipe({ type: 'modern_industrialization:cutting_machine', not : {output: "#milf:nocompat"}, output:"#c:rods"}, r => {
        const rjson = JSON.parse(r.json)
        press_mi((rjson.item_inputs)[0], (rjson.item_outputs)[0], 'immersiveengineering:mold_rod', (rjson.duration * rjson.eu))
    })

    //wires
    // event.forEachRecipe({ type: 'modern_industrialization:wiremill', not : {output: "#milf:nocompat"}, output:"#c:wires"}, r => {
    //     const rjson = JSON.parse(r.json)
    //     press_mi((rjson.item_inputs)[0], (rjson.item_outputs)[0], 'immersiveengineering:mold_wire', (rjson.duration * rjson.eu))
    // })
    //unpacker
    event.forEachRecipe({ type: 'modern_industrialization:unpacker', not : {output: "#milf:nocompat"}, output:["#c:ingots","#c:nuggets","#c:tiny_dusts"]}, r => {
        const rjson = JSON.parse(r.json)
        press_mi((rjson.item_inputs)[0], (rjson.item_outputs)[0], 'immersiveengineering:mold_unpacking', (rjson.duration * rjson.eu))
    })
    //packer
    event.forEachRecipe({ type: 'modern_industrialization:packer', not : {output: "#milf:nocompat"}}, r => {
        const rjson = JSON.parse(r.json)
        if(!Array.isArray(rjson.item_inputs)){rjson.item_inputs = [rjson.item_inputs]}
        if(!Array.isArray(rjson.item_outputs)){rjson.item_outputs = [rjson.item_outputs]}
        if(rjson.item_inputs[0].amount == 9){press_mi((rjson.item_inputs)[0], (rjson.item_outputs)[0], 'immersiveengineering:mold_packing_9', (rjson.duration * rjson.eu))}
        else if(!(rjson.item_inputs)[1]){press_mi((rjson.item_inputs)[0], (rjson.item_outputs)[0], 'immersiveengineering:mold_packing_4', (rjson.duration * rjson.eu))}
    })    
    //#endregion
})