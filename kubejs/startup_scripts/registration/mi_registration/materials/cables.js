MIRegistrationEvents.registerCableTiers(event => {
    event.register(
        "ie",
        "IE",
        "Insufficient Electricity",
        16,
        "immersiveengineering:block/metal_decoration/redstone_engineering",
    )
})

MIMachineEvents.registerHatches(event => {
    event.energy("ie")
})