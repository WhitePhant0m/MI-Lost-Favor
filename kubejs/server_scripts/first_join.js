PlayerEvents.loggedIn(event => {
    const { player } = event
    //TODO add cooldown for first trigger 
    if (!player.persistentData.getBoolean('first_join')) {
        player.persistentData.putBoolean('first_join', true)
        player.inventory.clear()
        player.give(Item.of('ftbquests:book', 1))
        player.give(Item.of('minecraft:lantern', 1))
    }
})