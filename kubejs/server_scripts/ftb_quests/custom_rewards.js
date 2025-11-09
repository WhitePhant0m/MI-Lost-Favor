// TODO: refactor in future

// reward for Forge Hammer
FTBQuestsEvents.customReward('0DC887212398806D', event => {
    let player = event.entity;
    let dimension = player.getLevel().getDimension()

    event.server.runCommandSilent(`/title ${player.profile.name} times 20 100 20`)
    event.server.runCommandSilent(`/title ${player.profile.name} title {"text":"Congratulations!!!","bold":true,"color":"#9A52FF"}`)
    event.server.runCommandSilent(`/title ${player.profile.name} subtitle ["",{"text":"You have passed into the ","bold":true},{"text":"Bronze Age","bold":true,"color":"#CD7F32"},{"text":"!","bold":true}]`)
    event.server.runCommandSilent(`/playsound immersiveengineering:birthday_party ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
    event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:witch ${player.x} ${player.y} ${player.z} 8 8 8 1 5000 normal`)
});

// reward for Bronze Machine Bit
FTBQuestsEvents.customReward('41C8354D477A8899', event => {
    let player = event.entity;
    let player_name = player.profile.name
    let stage = "tier_1_access_ore"
    event.server.runCommandSilent(`/astages add ${player_name} ${stage}`)
    event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.${stage}_ore`).string)
    player.tell(Text.translate(`milf.stage.${stage}`).color("#ac6cba").bold())
});

// reward for Crafting Table
FTBQuestsEvents.customReward('0E7A91DD8F37AF4D', event => {
    let player = event.entity;
    let player_name = player.profile.name
    let stage = "saturation"
    event.server.runCommandSilent(`/astages add ${player_name} ${stage}`)
    event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.${stage}`).string)
    player.tell(Text.translate(`milf.stage.${stage}`).color("#ac6cba").bold())
});

// reward for Iron Bloom
FTBQuestsEvents.customReward('74E5C7C4B8A33E55', event => {
    let player = event.entity;
    let player_name = player.profile.name

    let stage_list = [
        "minecraft_mobs",
        "variants_and_ventures_mobs",
    ]
    stage_list.forEach(stage => {
        event.server.runCommandSilent(`/astages add ${player_name} ${stage}`)
    });
    
    event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.minecraft_mobs`).string)
    player.tell(Text.translate(`milf.stage.minecraft_mobs`).color("#ac6cba").bold())
});

// reward for Steel Ingot
FTBQuestsEvents.customReward('670CBE4973B6F390', event => {
    let player = event.entity;
    let player_name = player.profile.name
    let stage = "early_items"

    event.server.runCommandSilent(`/astages add ${player_name} ${stage}`)
    event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.${stage}`).string)
    player.tell(Text.translate(`milf.stage.${stage}`).color("#ac6cba").bold())
});

// reward for Iron Ingot
FTBQuestsEvents.customReward('4002784F5F537B2D', event => {
    let player = event.entity;
    let player_name = player.profile.name
    let stage = "post_iron"

    event.server.runCommandSilent(`/astages add ${player_name} ${stage}`)
});

// reward for Enter in Eternal Starlight
FTBQuestsEvents.customReward('3922C9ACA47723BA', event => {
    let player = event.entity;
    let player_name = player.profile.name
    let stage = "forbidden_arcanus_mobs"

    event.server.runCommandSilent(`/astages add ${player_name} ${stage}`)
});