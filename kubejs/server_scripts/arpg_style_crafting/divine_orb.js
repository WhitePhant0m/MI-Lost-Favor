ItemEvents.firstRightClicked("kubejs:divine_orb", event => {

    if (event.hand == "OFF_HAND") return;
    if (event.level.isClientSide()) return;
    let item = event.player.getOffHandItem()
    if (item.id == "minecraft:air") return;
    
    let enchantments = new Map()
    item.enchantments.enchantments.forEach((enchantment, level) => {
        enchantments.set(enchantment, level)
    })
    let enchantmentsCount = item.enchantments.keySet().size()
    if(enchantmentsCount >= 1){
        let changes = []
        enchantments.forEach((level, enchantment) => {
            /**@type {import("net.minecraft.world.item.enchantment.Enchantment").$Enchantment$$Original}*/ let actualEnchantment = enchantment.value()
            let maxLVL = actualEnchantment.getMaxLevel()
            let roll = Math.random() < 0.5 ? -1 : 1
            let newLVL = level + roll
            if(newLVL <= 0){
                item.enchantments.enchantments.remove(enchantment)
                changes.push(Text.of(``).append(actualEnchantment.description()).append(Text.translatable("milf.orbcraft.removed")))
            } else if (newLVL > maxLVL) {
                changes.push(Text.of(``).append(actualEnchantment.description()).append(Text.translatable("milf.orbcraft.maxed")))
            } else {
                item.enchantments.enchantments["put(java.lang.Object,int)"](enchantment, newLVL)
                if(roll == 1) {
                    changes.push(Text.of(``).append(actualEnchantment.description()).append(Text.of(`: ${level} -> ${textAnimatorString(newLVL, "grad", {from:"#55E408", to:"#D3FFAA", f:0.5})}`)))
                } else {
                    changes.push(Text.of(``).append(actualEnchantment.description()).append(Text.of(`: ${level} -> ${textAnimatorString(newLVL, "grad", {from:"#E40808", to:"#FFAAAA", f:0.5})}`)))
                }
            }
        })

        orbChangesMessage(event)
        changes.forEach(change =>{
            //sendImmersiveMessage(change, event.player, DEFAULT_CENTER_MESSAGE_STYLE(1.5), event.server)
            event.player.tell(change)
        })
        event.player.inventoryMenu.broadcastFullState()
    } else {
        sendImmersiveMessage(Text.translatable("milf.orbcraft.error.type"), event.player, DEFAULT_WARN_NOTIFICATION_STYLE, event.server)
    }
})