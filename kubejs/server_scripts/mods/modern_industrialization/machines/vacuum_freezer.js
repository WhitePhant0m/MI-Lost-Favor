ServerEvents.recipes(event => {

    miMachineCraft(event, {energy:64, time:300, machine:"modern_industrialization:vacuum_freezer",
        token:{item:"immersiveengineering:mold_plate"},
        outputItems:[
            [{item:"modern_industrialization:plastic_plate"}]
        ],
        inputFluids:[
            [{fluid:"modern_industrialization:polyethylene"}, 500]
        ]
    })

})