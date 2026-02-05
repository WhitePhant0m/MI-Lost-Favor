// TODO: refactor in future

let $FTBTeamsAPI = Java.loadClass("dev.ftb.mods.ftbteams.api.FTBTeamsAPI").api()

// reward for Forge Hammer
FTBQuestsEvents.customReward('0DC887212398806D', event => {
    let player = event.entity;
    let dimension = player.getLevel().getDimension()
    //event.server.runCommandSilent(`/title ${player.profile.name} times 20 100 20`)
    //event.server.runCommandSilent(`/title ${player.profile.name} title {"text":"Congratulations!!!","bold":true,"color":"#9A52FF"}`)
    //event.server.runCommandSilent(`/title ${player.profile.name} subtitle ["",{"text":"You have passed into the ","bold":true},{"text":"Bronze Age","bold":true,"color":"#CD7F32"},{"text":"!","bold":true}]`)
    event.server.runCommandSilent(`/playsound immersiveengineering:birthday_party ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
    event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:witch ${player.x} ${player.y} ${player.z} 8 8 8 1 5000 normal`)
    sendImmersiveMessageWithSubtext(Text.translate('milf.stage.congratulations'), Text.translate('milf.stage.bronze_age'), event.player, DEFAULT_NEW_AGE_NOTIFICATION_STYLE, DEFAULT_NEW_AGE_SUBTEXT_STYLE, event.server)
});

// reward for Bronze Machine Bit
FTBQuestsEvents.customReward('41C8354D477A8899', event => {
    let player = event.entity;
    let player_name = player.profile.name

    const stage = "tier_1_access_ore"
    addStagesToTeamMembers(event, stage)
    defaultMilestoneNotification(event, stage)
    //sendImmersiveMessageWithSubtext(Text.translate('milf.stage.something_changed'), Text.translate('milf.stage.bronze_age'), event.player, DEFAULT_NEW_AGE_NOTIFICATION_STYLE, DEFAULT_NEW_AGE_SUBTEXT_STYLE, event.server)
    //event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.${stage}_ore`).string)
    //player.tell(Text.translate(`milf.stage.${stage}`).color("#ac6cba").bold())
});

// reward for Crafting Table
FTBQuestsEvents.customReward('0E7A91DD8F37AF4D', event => {
    const stage = "saturation"
    addStagesToTeamMembers(event, stage)
    defaultMilestoneNotification(event, stage)
    //event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.${stage}`).string)
});

// reward for Iron Bloom
FTBQuestsEvents.customReward('74E5C7C4B8A33E55', event => {
    // let player = event.entity;
    // let player_name = player.profile.name
    const stages = ["minecraft_mobs","variants_and_ventures_mobs"]
    addStagesToTeamMembers(event, stages)
    defaultMilestoneNotification(event, stages[0])
    // event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.minecraft_mobs`).string)
    // player.tell(Text.translate(`milf.stage.minecraft_mobs`).color("#ac6cba").bold())
});

// reward for Steel Ingot
FTBQuestsEvents.customReward('670CBE4973B6F390', event => {
    // let player = event.entity;
    // let player_name = player.profile.name
    const stages = ["early_items", "blast_furnace"]
    addStagesToTeamMembers(event, stages)
    defaultMilestoneNotification(event, stages[0])
    // event.server.runCommandSilent(`/immersivemessages sendcustom ${player_name} {color:"#ac6cba", bold:1, align:3, wave:1, obfuscate:1} 20  ` + Text.translate(`milf.stage.early_items`).string)
    // player.tell(Text.translate(`milf.stage.early_items"`).color("#ac6cba").bold())
});

// reward for Iron Ingot
FTBQuestsEvents.customReward('4002784F5F537B2D', event => {
    const stage = "post_iron"
    addStagesToTeamMembers(event, stage)
});

// reward for Enter in Eternal Starlight
FTBQuestsEvents.customReward('3922C9ACA47723BA', event => {
    const stage = "forbidden_arcanus_mobs"
    addStagesToTeamMembers(event, stage)
});

// reward for flint and steel
FTBQuestsEvents.customReward('7650FE6CA0220DA3',  event => {
    const stage = "the_nether_access"
    addStagesToTeamMembers(event, stage)
});

// reward for 12 eyes
FTBQuestsEvents.customReward('2BD4B3CA5BEDBA19', event => {
    const stage = "the_end_access"
    addStagesToTeamMembers(event, stage)
});

function defaultMilestoneNotification(event, stage){
    let teamManager = $FTBTeamsAPI.getManager()
    let team = teamManager.getTeamForPlayer(event.getPlayer()).get()
    let teamMembers = team.getOnlineMembers()
    teamMembers.forEach(player => {
        sendImmersiveMessageWithSubtext(Text.translate('milf.stage.something_changed'), Text.translate(`milf.stage.${stage}`), player, DEFAULT_MILESTONE_NOTIFICATION_STYLE, DEFAULT_MILESTONE_SUBTEXT_STYLE, event.server)
        event.server.scheduleInTicks(DEFAULT_MILESTONE_SUBTEXT_STYLE.delay * 20, _ =>  {
            event.server.runCommandSilent(`/playsound immersiveengineering:spark ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
            player.tell(Text.translate(`milf.stage.${stage}`))
        })
    })
}

function addStagesToTeamMembers(event, stages){

    let teamManager = $FTBTeamsAPI.getManager()

    let team = teamManager.getTeamForPlayer(event.getPlayer()).get()
    let teamMembers = team.getOnlineMembers()
    stages = Array.isArray(stages) ? stages : [stages]

    teamMembers.forEach(member => {
        //console.log(member);
        for (const stage of stages){
            AStages.addStageToPlayer(stage, member)
        }
    })
}

PlayerEvents.loggedIn(event => {
    let teamManager = $FTBTeamsAPI.getManager()
    //let uuid = event.getPlayer().getUuid()
    //let playerList = event.server.getPlayerList()
    //let team = teamManager.getTeamForPlayerID(uuid).get()
    let team = teamManager.getTeamForPlayer(event.getPlayer()).get()
    //let teamMembersUUIDS = team.getMembers()
    let teamMembers = team.getOnlineMembers()
    let teamStagesSet = new Set()

    teamMembers.forEach(member => {
        //let player = playerList.getPlayer(memberUUID)
        let playerStages = AStages.getStagesFromPlayer(member)
        for (const stage of playerStages){
            teamStagesSet.add(stage)
        }
    })
    let playerStagesSet = new Set()
    let playerStagesList = AStages.getStagesFromPlayer(event.getPlayer())

    for(const stage of playerStagesList){
        playerStagesSet.add(stage)
    }

    teamStagesSet.forEach(stage =>{
        if (!playerStagesSet.has(stage)){
            AStages.addStageToPlayer(stage, event.getPlayer())
            //console.log("New stage: " + stage);
        } else {
            //console.log("Stage: " + stage);
        }
    })

})