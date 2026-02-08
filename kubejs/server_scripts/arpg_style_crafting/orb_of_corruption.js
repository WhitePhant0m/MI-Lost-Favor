ItemEvents.firstRightClicked("kubejs:orb_of_corruption", event => {
    if (event.hand == "OFF_HAND") return;
    if (event.level.isClientSide()) return;
    let item = event.player.getOffHandItem()
    if (item.id == "minecraft:air") return;

    let enchantments = []
    let totalLVL = 0
    item.enchantments.enchantments.forEach((enchantment, level) => {
        if(level >= 3){
            enchantments.push(enchantment)
        }
        totalLVL += level
    })

    if(totalLVL >= 10){
        let chanceToSucceed = getExponentialSuccessChance(item.enchantments.enchantments.size(), 4, 0.5, 2)
        console.log(chanceToSucceed);
        if(Math.random() < chanceToSucceed){
            let randomEnchantment = enchantments[Math.floor(Math.random() * enchantments.length)]
            orbChangesMessage(event)
            event.player.tell(Text.translatable("milf.orbcraft.overenchantment"))
            item.enchantments.enchantments["put(java.lang.Object,int)"](randomEnchantment, randomEnchantment.value().getMaxLevel() + 2)
        } else {
            event.player.tell(Text.translatable("milf.orbcraft.destroyed"))
            item.count--
        }

    } else {
        sendImmersiveMessage(Text.translatable("milf.orbcraft.error.type"), event.player, DEFAULT_WARN_NOTIFICATION_STYLE, event.server)
    }
    event.player.inventoryMenu.broadcastFullState()
})