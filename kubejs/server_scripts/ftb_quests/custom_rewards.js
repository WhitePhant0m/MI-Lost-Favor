FTBQuestsEvents.customReward('0DC887212398806D', event => {
    let player = event.entity;
    let dimension = player.getLevel().getDimension()

    event.server.runCommandSilent(`/title ${player.profile.name} times 20 100 20`)
    event.server.runCommandSilent(`/title ${player.profile.name} title {"text":"Congratulations!!!","bold":true,"color":"#9A52FF"}`)
    event.server.runCommandSilent(`/title ${player.profile.name} subtitle ["",{"text":"You have passed into the ","bold":true},{"text":"Bronze Age","bold":true,"color":"#CD7F32"},{"text":"!","bold":true}]`)
    event.server.runCommandSilent(`/playsound immersiveengineering:birthday_party ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
    event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:witch ${player.x} ${player.y} ${player.z} 8 8 8 1 5000 normal`)
});

FTBQuestsEvents.customReward('41C8354D477A8899', event => {
    let player = event.entity;
    let player_name = player.profile.name
    event.server.runCommandSilent(`/astages add ${player_name} tier_1_access_ore`)
    event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate("milf.stage.tier_1_access_ore").string)
    player.tell(Text.translate("milf.stage.tier_1_access_ore").color("#ac6cba").bold())
});

FTBQuestsEvents.customReward('0E7A91DD8F37AF4D', event => {
    let player = event.entity;
    let player_name = player.profile.name
    let stage = "saturation"
    event.server.runCommandSilent(`/astages add ${player_name} saturation`)
    event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.${stage}`).string)
    player.tell(Text.translate(`milf.stage.${stage}`).color("#ac6cba").bold())
});

FTBQuestsEvents.customReward('74E5C7C4B8A33E55', event => {
    let player = event.entity;
    let player_name = player.profile.name
    let stage = "early_mobs"
    event.server.runCommandSilent(`/astages add ${player_name} early_mobs`)
    event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.${stage}`).string)
    player.tell(Text.translate(`milf.stage.${stage}`).color("#ac6cba").bold())
});

FTBQuestsEvents.customReward('4002784F5F537B2D', event => {
    let player = event.entity;
    let player_name = player.profile.name
    let stage = "early_items"

    event.server.runCommandSilent(`/astages add ${player_name} early_items`)
    event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.${stage}`).string)
    player.tell(Text.translate(`milf.stage.${stage}`).color("#ac6cba").bold())
});
