ServerEvents.recipes(event => {

    event.remove({output: [
        "waystones:return_scroll",
        "waystones:blank_scroll",
        "waystones:warp_scroll",
    ]})

    function anvil_recipe(inputs, output) {
        anvilSmashingCraft(event, {
            inputItems: inputs,
            outputItems: [output],
            removeRecipe: true
        })
    }

    anvil_recipe(
        [
            [{ "item": "minecraft:amethyst_shard" }, 4],
            [{ "item": "minecraft:echo_shard" }, 4],
            [{ "item": "enchanted:attuned_stone" }, 1],
        ],
        [{ "id": 'waystones:warp_stone' }, 1]
    );

})