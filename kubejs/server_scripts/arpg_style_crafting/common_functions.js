/** @type {typeof import("net.minecraft.world.item.ItemStack").$ItemStack } */
let $ItemStack  = Java.loadClass("net.minecraft.world.item.ItemStack")
let Registries = Java.loadClass("net.minecraft.core.registries.Registries")
let ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
let ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
let DisabledEnchantmentsConfig = Java.loadClass("me.pajic.enchantmentdisabler.ED").CONFIG

function addRandomEnchantment(event, /**@type { $ItemStack }*/ item){
    let applicableEnchantments = []
    /**@type {import("java.util.ArrayList").$ArrayList}*/
    let disabledEnchantments = DisabledEnchantmentsConfig.disabler.disabledEnchantments

    const ENCHANTMENT_REGISTRY_KEY = ResourceKey.createRegistryKey(ResourceLocation.parse('minecraft:enchantment'))
    const enchantmentRegistry = event.server.registryAccess().registryOrThrow(ENCHANTMENT_REGISTRY_KEY)
    enchantmentRegistry.entrySet().forEach((entry) => {
        /**@type {import("net.minecraft.world.item.enchantment.Enchantment").$Enchantment$$Original}*/ 
        let enchantment = entry.getValue()
        let id = entry.getKey()
        
        let fullEnchantmentName =  `${id.getNamespace()}:${id.getPath()}`
        if(disabledEnchantments.stream().anyMatch(e => e == fullEnchantmentName)) {
            //console.log(`Disabled:${fullEnchantmentName}`);
            return
        }
        if(id.getNamespace() == "minecraft" && item.canBeEnchantedWith(enchantment, "primary") && !item.enchantments.keySet().contains(enchantmentRegistry.wrapAsHolder(enchantment))){
            //vanillaEnchantments.set(id, enchantment)
            applicableEnchantments.push(enchantment)
        }
        //console.log(id.getNamespace())
    })
    
    if(applicableEnchantments.length > 0){
        let randomEnchantment = applicableEnchantments[Math.floor(Math.random() * applicableEnchantments.length)]
        item.enchant(randomEnchantment, 1)
        //item.enchantments.enchantments["put(java.lang.Object,int)"](randomEnchantment, 1)
        orbChangesMessage(event)
        event.player.tell(Text.translatable("milf.orbcraft.added").append(randomEnchantment.description()))
    } else {
        sendImmersiveMessage(Text.translatable("milf.orbcraft.error.enchantments"), event.player, DEFAULT_WARN_NOTIFICATION_STYLE, event.server)
        //event.player.tell("This item has no more applicable enchantments")
    }
    event.player.inventoryMenu.broadcastFullState()
}

function getExponentialSuccessChance(enchantmentsSize, baseSize, baseChance, decayFactor) {
    if (enchantmentsSize <= baseSize) {
        return baseChance;
    }
    
    const excessSize = enchantmentsSize - baseSize;
    return baseChance * Math.pow(1 / decayFactor, excessSize);
}

function orbChangesMessage(event){
    sendImmersiveMessage(Text.translatable("milf.orbcraft.changes"), event.player, DEFAULT_CENTER_MESSAGE_STYLE(1.5), event.server)
     event.player.tell(Text.translatable("milf.orbcraft.changes"))
}