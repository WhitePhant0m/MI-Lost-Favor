const dim_list = [
    {name: "minecraft:the_nether", stage: "the_nether_access"}, 
    {name: "eternal_starlight:starlight", stage: "the_gatekeeper"},
]


dim_list.forEach(dim => {
    AStages.addRestrictionForDimension(`astages/dimension/${dim.name}`, dim.stage, dim.name)
        .setDimensionMessage(() => Text.of([
            Text.translate("milf.text.dim.cant_visit")
        ]))
});
