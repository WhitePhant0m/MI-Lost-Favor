ServerEvents.recipes(event => {
    const removing_by_recipe_id = [

    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    })

    event.remove({ type: 'ae2:inscriber' })
    //event.remove({ output: /ae2:.*item_storage_cell/ })
    /*
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⣀⠐⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣄⠀⣀⡑⠫⡀⡆⢀⣤⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⡀⠀⠠⣀⣀⣀⠠⠿⠚⠉⠀⠈⢂⣀⡵⠋⣽⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠱⣄⠀⢀⣁⠠⠤⠀⢀⣀⠀⠀⢠⠃⠀⢠⠋⠀⠀⠀⠀⠀ AE Horse
    ⠀⠀⠀⠀⠈⠂⠀⣀⡤⠒⠉⢀⡀⠤⠒⠙⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀
    ⠀⣀⠀⠈⠓⠎⠩⠁⠀⡀⣴⣍⠀⠀⠀⠀⠀⠀⣰⠀⠀⠀⠀⠀⠀⠀
    ⠀⠉⠙⠕⢦⡀⠀⠀⠀⠸⡁⠍⠀⠀⠀⠀⡀⠘⡉⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠈⠀⠈⠁⣒⣈⡠⠋⡆⠀⢰⠀⠀⠃⠀⡇⠀⠀⠀⠀⠀⠀⠀
    ⠀⡰⠊⠉⠉⠉⠉⣉⠄⠀⢀⠑⡀⠈⠀⠀⠀⡐⠀⠀⠀⠀⠀⠀⠀⠀
    ⢠⠁⣠⠄⠒⠈⠁⠀⠀⡐⢸⠀⢡⡀⠀⠀⡄⠀⡄⠀⠀⠀⠀⠀⠀⠀
    ⠀⢰⢃⠠⠤⠤⠀⡠⠊⠀⡄⠀⠸⡷⠀⠰⢧⠀⡇⠀⣀⠀⠀⠀⠀⠀
    ⠀⢸⠃⠀⠀⡤⠚⠁⢀⠂⠃⠀⠘⠤⢄⡤⠌⠀⡷⡀⠀⠉⠒⢤⠀⠀
    ⠀⠘⠀⠀⣼⠁⠀⡔⠁⢸⠀⠀⠀⠀⠀⠀⠀⠀⡇⢡⠀⠀⠀⠀⠱⠀
    ⠀⠀⠀⠀⢻⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⡄⠀⠀⠀⠀⠇
    ⠀⠀⠀⠀⠀⠙⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⡇⠀⠀⠀⠀⠠
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠈
    */
    //event.remove({ output: /ae2:*/, type: 'minecraft:crafting_shaped' })
    //event.remove({ output: /ae2:*/, type: 'minecraft:crafting_shapeless' })


    const remove_by_output = [

    ]

    remove_by_output.forEach(id => {
            event.remove({ output: id })
        })

    event.custom({
        "type": "extendedae:circuit_cutter",
        "input": {
            "ingredient": {
                "item": "modern_industrialization:aluminum_block"
            }
        },
        "output": {
            "count": 9,
            "id": "ae2:printed_engineering_processor"
        }
    })

    /*
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "modern_industrialization:aluminum_ingot"
            },
            "top": {
                "item": "ae2:engineering_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "count": 1,
            "id": "ae2:printed_engineering_processor"
        }
    })

    event.replaceInput(
        { output: "ae2:printed_engineering_processor" },
        "minecraft:diamond",
        "modern_industrialization:aluminum_ingot"
    )
    */

    const ingotToPlateAE2Replace = ["iron", "gold", ]
    ingotToPlateAE2Replace.forEach(element => {
        event.replaceInput(
        { mod: "ae2" },
        `minecraft:${element}_ingot`,
        `modern_industrialization:${element}_plate`
    )
    });
})