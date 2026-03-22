ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.cutting_machine(8, 100)
    .itemIn("milf:tempered_glass")
    .itemOut("milf:lens")

    miMachineCraft(event, {energy:2, time:100, machine:"modern_industrialization:cutting_machine",
        inputFluids:[[{fluid:"modern_industrialization:lubricant"}, 1]],
        inputItems:[[{tag:"immersiveengineering:treated_wood"}],],
        outputItems:[[{item:"immersiveengineering:stick_treated"}, 3]]
    })
})

