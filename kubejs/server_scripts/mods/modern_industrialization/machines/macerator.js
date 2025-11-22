ServerEvents.recipes(event => {

    const oresToChange = ['iron', 'gold', 'copper', 'tin', 'lead']
    oresToChange.forEach(ore =>{
        miMachineCraft(event, {energy:2, time:100, machine:"modern_industrialization:macerator",
            inputItems:[
                [{tag:`c:raw_materials/${ore}`}],
            ],
            outputItems:[
                [{item:`kubejs:crushed_${ore}`}, 2],
                [{item:`kubejs:crushed_${ore}`}, 1, 0.5]
            ]
        })
    })

})