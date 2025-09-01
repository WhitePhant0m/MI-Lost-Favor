ServerEvents.recipes(event => {


    function shrine_recipe(time, fluid, items, output, advancement, conditions, startEffect, duringEffects, finishEffect){
        advancement = advancement || "pastel:unlocks/blocks/fusion_shrine"
        conditions = conditions || {}
        startEffect = startEffect || "nothing"
        duringEffects = duringEffects || ["nothing","nothing","nothing"]
        finishEffect = finishEffect || "nothing"
        let recipe = {
            "type": "pastel:fusion_shrine",
            "time": time,
            "experience": 16.0,
            "fluid": {
                "fluid": fluid
            },
            "copy_components": true,
            "ingredients": [],
            "result": {
                "id": output[0],
                "count" : output[1]
            },
            "required_advancement": advancement,
            "world_conditions": conditions,
            "start_crafting_effect": startEffect,
            "during_crafting_effects": duringEffects,
            "finish_crafting_effect": finishEffect,
        }
        items.forEach(i => {
            i[0].count = i[1]
            recipe.ingredients.push(i[0])
        });

        event.custom(recipe)
    }

    shrine_recipe(60, "pastel:dragonrot",
        [
            [{ "item": "minecraft:amethyst_shard" }, 4],
            [{ "item": "pastel:topaz_shard" }, 4],
            [{ "item": "pastel:citrine_shard" }, 4],
            [{ "item": "pastel:onyx_shard" }, 4],
            [{ "item": "pastel:moonstone_shard" }, 4],
            [{ "item": "ae2:certus_quartz_crystal" }, 4],
            [{ "item": "pastel:downstone_fragments" }, 1],

        ],
        ["extendedae:entro_shard", 1]
    )

})