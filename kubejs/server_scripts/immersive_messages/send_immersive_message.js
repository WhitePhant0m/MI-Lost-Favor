//priority: 100

// let $ImmersiveFont = Java.loadClass("toni.immersivemessages.ImmersiveFont")
// let $ChatFormatting = Java.loadClass("net.minecraft.ChatFormatting")
// let $SoundEffect = Java.loadClass("toni.immersivemessages.api.SoundEffect")
// let $ImmersiveMessagesManager = Java.loadClass("toni.immersivemessages.ImmersiveMessagesManager")
// let $ToniBinding = Java.loadClass("toni.lib.animation.Binding")
// let $ToniEasingType = Java.loadClass("toni.lib.animation.easing.EasingType")

const DEFAULT_WARN_NOTIFICATION_STYLE = {
    anchor:"CENTER_RIGHT",
    slideIn:"right",
    //slideOut:"right",
    fadeIn:1,
    fadeOut:0.3,
    background:true,
    y:140,
    queue:true,
    applyWarn:true
}

const DEFAULT_CENTER_MESSAGE_STYLE = (duration) => {
    let style = {
        anchor:"CENTER_CENTER",
        fadeIn:0.2,
        fadeOut:0.2,
        background:true,
        y:40,
        queue:true,
        duration:duration
    }
    return style
}


const DEFAULT_CHUNK_CLAIM_NOTIFICATION_STYLE = {
    anchor:"CENTER_CENTER",
    slideIn:"down",
    slideOut:"down",
    slideInDuration:0.7,
    slideOutDuration:0.4,
    //slideOut:"right",
    typewriter:{speed:1.5, sound:"LOWSHORT", centerAligned:true},
    fadeIn:1,
    fadeOut:0.3,
    background:true,
    y:170,
    queue:false,
    size:2,
    duration:1.5
}

const DEFAULT_NEW_AGE_NOTIFICATION_STYLE = {
    anchor:"CENTER_CENTER",
    slideIn:"left",
    y:-20,
    bold:true,
    fadeIn:1,
    fadeOut:0.3,
    queue:false,
    size:4,
    duration:7
}

const DEFAULT_NEW_AGE_SUBTEXT_STYLE = {
    delay:1.5,
    offset:28,
    anchor:"CENTER_CENTER",
    slideIn:"down",
    slideInDuration:2,
    fadeIn:1,
    fadeOut:0.3,
    size:3,
    duration:7,
}

const DEFAULT_MILESTONE_NOTIFICATION_STYLE = {
    anchor:"CENTER_CENTER",
    slideIn:"down",
    y:-20,
    bold:true,
    fadeIn:1,
    fadeOut:0.3,
    queue:false,
    size:3,
    duration:8
}

const DEFAULT_MILESTONE_SUBTEXT_STYLE = {
    delay:2.5,
    offset:48,
    anchor:"CENTER_CENTER",
    slideIn:"up",
    fadeIn:1,
    fadeOut:0.3,
    size:3,
    duration:8,
}

function sendImmersiveMessage(text, /**@type {import("net.minecraft.server.level.ServerPlayer").$ServerPlayer$$Original}*/ player, args, /**@type {import("net.minecraft.server.MinecraftServer").$MinecraftServer$$Original}*/ server){
    if(player.persistentData.immersiveMessageQueue) {
        return
    }
    player.sendData("immersive_message", {
        text:text,
        args:args
    })
    if(args.queue){
        let duration = args.duration || 2.2
        player.persistentData.putBoolean("immersiveMessageQueue", true);
       (server).scheduleInTicks(duration * 20, _ =>  player.persistentData.remove("immersiveMessageQueue"))
    }
    // if(player.persistentData.immersiveMessageQueue) {
    //     return
    // }
    // let $ImmersiveMessage = Java.loadClass("toni.immersivemessages.api.ImmersiveMessage")
    // args = args || {}
    // let duration = args.duration || 2.2
    // //let message = $ImmersiveMessage["builder(float,net.minecraft.network.chat.MutableComponent)"](duration, TextIcons.warn().append(TextIcons.smallSpace()).append(text))
    // args.applyWarn && (text = Component.of("⚠ ").append(text))
    // let message = $ImmersiveMessage["builder(float,net.minecraft.network.chat.MutableComponent)"](duration, text)

    // applyArgsToImmersiveMessage(message, args)

    // message["sendServer(net.minecraft.server.level.ServerPlayer)"](player)
    // if(args.queue){
    //     player.persistentData.putBoolean("immersiveMessageQueue", true);
    //    (server).scheduleInTicks(duration * 20, _ =>  player.persistentData.remove("immersiveMessageQueue"))
    // }
}

// function applyArgsToImmersiveMessage(message, args){
//     args.bold && message.bold()
//     args.italic && message.italic()
//     args.size && message.size(args.size)
//     args.fadeIn && message.fadeIn(args.fadeIn)
//     args.fadeOut && message.fadeOut(args.fadeOut)
//     args.color && message["color(net.minecraft.ChatFormatting)"]($ChatFormatting.WHITE)
//     //args.font && message["font(toni.immersivemessages.ImmersiveFont)"]('minecrafter') // incompatible with Text Animator :(
//     args.x && message.x(args.x)
//     args.y && message.y(args.y)
//     args.anchor && message.anchor(args.anchor)
//     if(args.slideIn){
//         args.slideIn == "up" && message.slideUp(args.slideInDuration || 1)
//         args.slideIn == "down" && message.slideDown(args.slideInDuration || 1)
//         args.slideIn == "left" && message.slideLeft(args.slideInDuration || 1)
//         args.slideIn == "right" && message.slideRight(args.slideInDuration || 1)
//     }
//     if(args.slideOut){
//         args.slideOut == "up" && message.slideOutUp(args.slideOutDuration || 1)
//         args.slideOut == "down" && message.slideOutDown(args.slideOutDuration || 1)
//         args.slideOut == "left" && message.slideOutLeft(args.slideOutDuration || 1)
//         args.slideOut == "right" && message.slideOutRight(args.slideOutDuration || 1)
//     }
//     if(args.typewriter){
//         message.typewriter(args.typewriter.speed || 1, args.typewriter.centerAligned || false)
//         args.typewriter.sound && message.sound($SoundEffect[args.typewriter.sound])
//     }
//     if(args.background){
//         message.background()
//         args.background.borderTopColor && message.borderTopColor(args.background.borderTopColor)
//         args.background.borderBottomColor && message.borderBottomColor(args.background.borderBottomColor)
//     }
//     args.subtext && message.subtext(args.subtext.delay || 0, args.subtext.content, args.subtext.offset || 8, (subtext) => applyArgsToImmersiveMessage(subtext, args.subtext))
//     args.animation && message.animation.transition(args.animation.bindingType, args.animation.inTime || 0, args.animation.outTime || args.duration || 2.2, args.animation.inValue || 0, args.animation.outValue || 5, args.animation.easingFunction || $ToniEasingType.EaseOutCubic)
// }

function sendImmersiveMessageWithSubtext(text, subtext, player, textArgs, subtextArgs, server){
    sendImmersiveMessage(text, player, Object.assign({}, textArgs, {subtext: Object.assign({}, subtextArgs, {content:subtext})}), server)
}

PlayerEvents.loggedOut(event => {
    if(event.player.persistentData.immersiveMessageQueue) event.player.persistentData.remove("immersiveMessageQueue")
})

function textAnimatorString(text, type, params){
    if (params){
        return `<${type} ${Object.entries(params).reduce((acc, [param, value]) => `${acc}${param}=${value} `, '').trim()}>${text}</${type}>`

    } else {
        return `<${type}>${text}</${type}>`
    }
}
