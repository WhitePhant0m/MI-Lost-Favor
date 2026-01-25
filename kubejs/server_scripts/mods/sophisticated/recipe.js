// Remove IE recipes
ServerEvents.recipes(event => {
    // (`･Θ･´) - Some recipes are located in data because it is easier to change a recipe there and delete the previous recipe at the same time (overwrite)
    const materials_for_replacing_to_plate = ["gold", "iron", "copper", "diamond"]


    materials_for_replacing_to_plate.forEach(material => {
        const input = material === "diamond" ? material : `${material}_ingot`
        const output = `modern_industrialization:${material}_plate`;

        ["sophisticatedstorage", "sophisticatedbackpacks"].forEach(mod => {
            event.replaceInput({ mod: mod }, input, output)
        })
    });

    ["sophisticatedstorage", "sophisticatedbackpacks"].forEach(mod => {
        event.replaceInput({ mod: mod }, "minecraft:redstone_torch", "modern_industrialization:rubber_sheet")
    })

    //WIP
    event.remove({id:/sophisticatedstorage:generic*/})

})

ServerEvents.tags("item", event => {


    const chests = event.get("sophisticatedstorage:all_storage").getObjectIds()
    const types = ["copper", "iron", "gold", "diamond", "netherite"]
    types.forEach( type => {
        let regex = new RegExp(`sophisticatedstorage:.*${type}.*`)
        chests.forEach(chest =>{
            if(regex.test(chest.toString())) event.add(`milf:${type}_storage`, chest)
            // console.log(chest);
        })
    })

})