ServerEvents.recipes(event => {

    miMachineCraft(event, {energy:8, time:100, machine:"modern_industrialization:mixer",
        inputItems:[
            [{tag:"c:plates/aluminum"}],
            [{tag:"c:dusts/aluminum"}],
        ],
        outputItems:[
            [{item:"kubejs:cd"}]
        ]
    })

    miMachineCraft(event, {energy:8, time:600, machine:"modern_industrialization:mixer",
        inputItems:[
            [{tag:"c:dusts/diamond"}],
            [{tag:"c:nuggets/steel"}, 1, 0],
        ],
        outputItems:[
            [{item:"modern_industrialization:diamond_tiny_dust"}, 4]
        ]
    })
    
})