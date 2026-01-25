//priority: 100

const $ImmersiveMessage = Java.loadClass("toni.immersivemessages.api.ImmersiveMessage")
const $ImmersiveFont = Java.loadClass("toni.immersivemessages.ImmersiveFont")
const $ChatFormatting = Java.loadClass("net.minecraft.ChatFormatting")
const $SoundEffect = Java.loadClass("toni.immersivemessages.api.SoundEffect")
const $ImmersiveMessagesManager = Java.loadClass("toni.immersivemessages.ImmersiveMessagesManager")

function sendImmersiveMessage(text, player, args, event){
    if(player.persistentData.immersiveMessageQueue) {
        return
    }
    args = args || {}
    let duration = args.duration || 2.2
    //let message = $ImmersiveMessage["builder(float,net.minecraft.network.chat.MutableComponent)"](duration, TextIcons.warn().append(TextIcons.smallSpace()).append(text))
    args.applyWarn && (text = Component.of("⚠ ").append(text))
    let message = $ImmersiveMessage["builder(float,net.minecraft.network.chat.MutableComponent)"](duration, text)
    args.bold && message.bold()
    args.italic && message.italic()
    args.size && message.size(args.size)
    args.fadeIn && message.fadeIn(args.fadeIn)
    args.fadeOut && message.fadeOut(args.fadeOut)
    args.color && message["color(net.minecraft.ChatFormatting)"]($ChatFormatting.WHITE)
    //args.font && message["font(toni.immersivemessages.ImmersiveFont)"]('minecrafter') // incompatible with Text Animator :(
    args.x && message.x(args.x)
    args.y && message.y(args.y)
    args.anchor && message.anchor(args.anchor)
    if(args.slideIn){
        args.slideIn == "up" && message.slideUp(args.slideInDuration || 1)
        args.slideIn == "down" && message.slideDown(args.slideInDuration || 1)
        args.slideIn == "left" && message.slideLeft(args.slideInDuration || 1)
        args.slideIn == "right" && message.slideRight(args.slideInDuration || 1)
    }
    if(args.slideOut){
        args.slideOut == "up" && message.slideOutUp(args.slideOutDuration || 1)
        args.slideOut == "down" && message.slideOutDown(args.slideOutDuration || 1)
        args.slideOut == "left" && message.slideOutLeft(args.slideOutDuration || 1)
        args.slideOut == "right" && message.slideOutRight(args.slideOutDuration || 1)
    }
    if(args.typewriter){
        message.typewriter(args.typewriter.speed || 1, args.typewriter.centerAligned || false)
        args.typewriter.sound && message.sound($SoundEffect[args.typewriter.sound])
    }
    args.background && message.background()
    args.background.borderTopColor && message.borderTopColor(args.background.borderTopColor)
    args.background.borderBottomColor && message.borderBottomColor(args.background.borderBottomColor)
    message["sendServer(net.minecraft.server.level.ServerPlayer)"](player)
    if(args.queue){
        player.persistentData.putBoolean("immersiveMessageQueue", true);
        /**@type {$MinecraftServer_}*/(event.server).scheduleInTicks(duration * 20, _ =>  player.persistentData.remove("immersiveMessageQueue"))
    }
}

PlayerEvents.loggedOut(event => {
    if(event.player.persistentData.immersiveMessageQueue) event.player.persistentData.remove("immersiveMessageQueue")
})