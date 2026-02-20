let $ImmersiveFont = Java.loadClass("toni.immersivemessages.ImmersiveFont")
let $ChatFormatting = Java.loadClass("net.minecraft.ChatFormatting")
let $SoundEffect = Java.loadClass("toni.immersivemessages.api.SoundEffect")
let $ImmersiveMessagesManager = Java.loadClass("toni.immersivemessages.ImmersiveMessagesManager")
let $ToniBinding = Java.loadClass("toni.lib.animation.Binding")
let $ToniEasingType = Java.loadClass("toni.lib.animation.easing.EasingType")
let $ImmersiveMessage = Java.loadClass("toni.immersivemessages.api.ImmersiveMessage")

NetworkEvents.dataReceived('immersive_message', (event) => {
    //console.log("WHAT DA HELL");
    /**@type {import("net.minecraft.nbt.Tag").$Tag$$Original}*/ let text = event.data.text, args = event.data.args, player = Client.player
    //text = Component.of("").append(text.getAsString())
    //console.log(Component.translate("milf.placers.notification2"))
    sendImmersiveMessage(text, player, args)

})

function I_HATE_COMPOUND_TAGS(/**@type {import("net.minecraft.nbt.CompoundTag").$CompoundTag$$Original}*/ stupidFreakingCompoundTag){
    let prettyJSObject = {}
    for(let [key,  value] of Object.entries(stupidFreakingCompoundTag)){
        if(key == "content"){
            console.log(value);
            prettyJSObject[key] = COMPOUND_TAGS_ME_ARSE(value)
            continue
        }
        switch (value.getType().getName()) {
            case "DOUBLE":
                prettyJSObject[key] = value.getAsDouble()
                break;
            case "INT":
                prettyJSObject[key] = value.getAsInt()
                break;
            case "BYTE":
                prettyJSObject[key] = true
                break;
            case "STRING":
                prettyJSObject[key] = value.getAsString()
                break;
            case "COMPOUND":
                prettyJSObject[key] = I_HATE_COMPOUND_TAGS(value)
                break;
            default:
                console.log(value.getType().getName());
                console.log(value);
                break;
        }
    }
    
    return prettyJSObject
}

function COMPOUND_TAGS_ME_ARSE(tagLikeText){
    //console.log(tagLikeText.text);
    let text = Text.of(``)
    if (tagLikeText.text){
        text.append(tagLikeText.text.getAsString())
    }
    if (tagLikeText.translate){
        text.append(Text.translatable(tagLikeText.translate.getAsString()))
    }
    if (tagLikeText.extra){
        let extraArray = Array.isArray(tagLikeText.extra) ? tagLikeText.extra : [tagLikeText.extra]
        tagLikeText.extra.forEach(compoundTag => {
            for(let [key,  value] of Object.entries(compoundTag)){
                switch (key) {
                    case "translate":
                        text.append(Text.translatable(value.getAsString()))
                        break;
                    case "":
                        text.append(Text.of(value.getAsString()))
                        break;
                    default:
                        console.log("whoao :(" + value.getAsString());
                        break;
                }
            }
        })
    }

    return text
}

function sendImmersiveMessage(text, player, args){

    args = args || {}
    let textComponent = COMPOUND_TAGS_ME_ARSE(text)
    let argsJS = I_HATE_COMPOUND_TAGS(args)
    let duration = argsJS.duration || 2.2
    console.log(text);
    console.log(Text.of("Full text: ").append(textComponent));
    console.log(argsJS)
    //let message = $ImmersiveMessage["builder(float,net.minecraft.network.chat.MutableComponent)"](duration, TextIcons.warn().append(TextIcons.smallSpace()).append(text))
    args.applyWarn && (text = Component.of("⚠ ").append(text))
    let message = $ImmersiveMessage["builder(float,net.minecraft.network.chat.MutableComponent)"](duration, textComponent)
    
    applyArgsToImmersiveMessage(message, argsJS)
    //console.log(player.type);
    //message["sendServer(net.minecraft.server.level.ServerPlayer)"](player)
    
    message.sendLocal(player)

}

function applyArgsToImmersiveMessage(message, args){

    args.bold && message.bold()
    args.italic && message.italic()
    args.size && message.size(args.size)
    args.fadeIn && message.fadeIn(args.fadeIn)
    args.fadeOut && message.fadeOut(args.fadeOut)
    //args.color && message["color(net.minecraft.ChatFormatting)"]($ChatFormatting.WHITE)
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
    if(args.background){
        message.background()
        args.background.borderTopColor && message.borderTopColor(args.background.borderTopColor)
        args.background.borderBottomColor && message.borderBottomColor(args.background.borderBottomColor)
    }
    args.subtext && message.subtext(args.subtext.delay || 0, args.subtext.content.string, args.subtext.offset || 8, (subtext) => applyArgsToImmersiveMessage(subtext, args.subtext))
    args.animation && message.animation.transition(args.animation.bindingType, args.animation.inTime || 0, args.animation.outTime || args.duration || 2.2, args.animation.inValue || 0, args.animation.outValue || 5, args.animation.easingFunction || $ToniEasingType.EaseOutCubic)
}