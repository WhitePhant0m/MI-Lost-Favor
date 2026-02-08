ItemEvents.firstRightClicked("kubejs:orb_of_annulment", event => {
    if (event.hand == "OFF_HAND") return;
    if (event.level.isClientSide()) return;
    let item = event.player.getOffHandItem()
    if (item.id == "minecraft:air") return;

    let enchantmentsCount = item.enchantments.keySet().size()
    if(enchantmentsCount >= 4){
        let enchantments = []
        item.enchantments.enchantments.forEach((enchantment, level) => {
            enchantments.push(enchantment)
        })

        let randomEnchantment = enchantments[Math.floor(Math.random() * enchantments.length)]
        enchantments.forEach((enchantment) => {
            if(enchantment != randomEnchantment){
                item.enchantments.enchantments.remove(enchantment)
            } else {
                orbChangesMessage(event)
                event.player.tell(Text.of(``).append(enchantment.value().description()).append(Text.translatable("milf.orbcraft.absorbed")))
                item.enchantments.enchantments["put(java.lang.Object,int)"](enchantment, enchantment.value().getMaxLevel())
            }
        })

    } else {
        sendImmersiveMessage(Text.translatable("milf.orbcraft.error.type"), event.player, DEFAULT_WARN_NOTIFICATION_STYLE, event.server)
    }
    event.player.inventoryMenu.broadcastFullState()
})