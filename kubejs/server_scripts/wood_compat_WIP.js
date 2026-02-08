ServerEvents.recipes(event => {
    const wood_planks_list = [
        { tag: "architects_palette:twisted_logs", output: "architects_palette:twisted_planks", recipe_id: "architects_palette:twisted_planks" },
        { tag: "xkdeco:varnished_logs", output: "xkdeco:varnished_planks", recipe_id: "xkdeco:varnished_planks" },
        { tag: "occultism:otherworld_logs", output: "occultism:otherplanks", recipe_id: "occultism:crafting/otherplanks" },
        { tag: "minecraft:woodkr", output: "born_in_chaos_v1:scorched_planks", recipe_id: "born_in_chaos_v1:scorched_planks_k" },
        { tag: "eternal_starlight:lunar_logs", output: "eternal_starlight:lunar_planks", recipe_id: "eternal_starlight:lunar_planks" },
        { tag: "eternal_starlight:northland_logs", output: "eternal_starlight:northland_planks", recipe_id: "eternal_starlight:northland_planks" },
        { tag: "eternal_starlight:starlight_mangrove_logs", output: "eternal_starlight:starlight_mangrove_planks", recipe_id: "eternal_starlight:starlight_mangrove_planks" },
        { tag: "eternal_starlight:scarlet_logs", output: "eternal_starlight:scarlet_planks", recipe_id: "eternal_starlight:scarlet_planks" },
        { tag: "eternal_starlight:torreya_logs", output: "eternal_starlight:torreya_planks", recipe_id: "eternal_starlight:torreya_planks" },
        { tag: "eternal_starlight:jinglestem_logs", output: "eternal_starlight:jinglestem_planks", recipe_id: "eternal_starlight:jinglestem_planks" },
        { tag: "eternal_starlight:cradlewood_logs", output: "eternal_starlight:cradlewood_planks", recipe_id: "eternal_starlight:cradlewood_planks" },
        { tag: "c:logs/archwood", output: "ars_nouveau:archwood_planks", recipe_id: "ars_nouveau:archwood_planks" },
        { tag: "thaumon:greatwood_logs", output: "thaumon:greatwood_planks", recipe_id: "thaumon:greatwood_planks" },
        { tag: "thaumon:silverwood_logs", output: "thaumon:silverwood_planks", recipe_id: "thaumon:silverwood_planks" },
        { tag: "enchanted:alder_logs", output: "enchanted:alder_planks", recipe_id: "enchanted:alder_planks" },
        { tag: "enchanted:rowan_logs", output: "enchanted:rowan_planks", recipe_id: "enchanted:rowan_planks" },
        { tag: "enchanted:hawthorn_logs", output: "enchanted:hawthorn_planks", recipe_id: "enchanted:hawthorn_planks" },
        { tag: "forbidden_arcanus:fungyss_stems", output: "forbidden_arcanus:fungyss_planks", recipe_id: "forbidden_arcanus:fungyss_planks" },
        { tag: "forbidden_arcanus:mysterywood_logs", output: "forbidden_arcanus:aurum_planks", recipe_id: "forbidden_arcanus:aurum_planks" },
        { tag: "malum:runewood_logs", output: "malum:runewood_planks", recipe_id: "malum:runewood_planks" },
        { tag: "malum:soulwood_logs", output: "malum:soulwood_planks", recipe_id: "malum:soulwood_planks" },
        { tag: "hexerei:willow_logs", output: "hexerei:willow_planks" },
        { tag: "hexerei:witch_hazel_logs", output: "hexerei:witch_hazel_planks" },
        { tag: "hexerei:mahogany_logs", output: "hexerei:mahogany_planks" },
        { item: "paganbless:black_thorn_log", output: "paganbless:black_thorn_planks", recipe_id: "paganbless:black_thorn_planks" },
        { item: "betterarcheology:rotten_log", output: "betterarcheology:rotten_planks", recipe_id: "betterarcheology:rotten_planks" },
    ];

    wood_planks_list.forEach(entry => {
        if (entry.recipe_id) event.remove({ id: entry.recipe_id });

        const ingredient = entry.tag ? { tag: entry.tag } : { item: entry.item };
        const miInput = entry.tag ? [{ tag: entry.tag }] : [{ item: entry.item }];

        event.custom({
            "type": "ytech:remaining_shapeless_crafting",
            "category": "building",
            "ingredients": [
                ingredient,
                { "tag": "minecraft:axes" },
            ],
            "result": { "count": 1, "id": entry.output }
        });

        event.custom({
            "type": "ytech:remaining_shapeless_crafting",
            "category": "building",
            "ingredients": [
                ingredient,
                { "tag": "c:saws" },
            ],
            "result": { "count": 3, "id": entry.output }
        });

        event.custom({
            "type": "ytech:chopping",
            "hitCount": 3,
            "ingredient": ingredient,
            "result": { "count": 2, "id": entry.output },
            "tool": { "tag": "minecraft:axes" }
        });

        miMachineCraft(event, {
            energy: 2,
            time: 100,
            machine: "modern_industrialization:cutting_machine",
            inputFluids: [[{ fluid: "modern_industrialization:lubricant" }, 1]],
            inputItems: [miInput],
            outputItems: [[{ item: entry.output }, 6]]
        });
    });
});
