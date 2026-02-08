ItemEvents.firstRightClicked("kubejs:transmutation_orb", event => {
    if (event.hand == "OFF_HAND") return;
    if (event.level.isClientSide()) return;
    let item = event.player.getOffHandItem()
    if (item.id == "minecraft:air") return;
    if(item.enchantments.keySet().size() < 2){
        addRandomEnchantment(event, item)
    } else {
        sendImmersiveMessage(Text.translatable("milf.orbcraft.error.type"), event.player, DEFAULT_WARN_NOTIFICATION_STYLE, event.server)
    }
})