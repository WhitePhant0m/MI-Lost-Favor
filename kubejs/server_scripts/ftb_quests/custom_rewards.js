// TODO: refactor in future

let $FTBTeamsAPI = Java.loadClass("dev.ftb.mods.ftbteams.api.FTBTeamsAPI").api()

// reward for Forge Hammer
FTBQuestsEvents.customReward('0DC887212398806D', event => {
    let player = event.entity;
    let dimension = player.getLevel().getDimension()
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
});
// reward for toxony:alchemical_forge_part (root whispering chapter)
FTBQuestsEvents.customReward('4178A18CA2E5A74F', event => {
    let player = event.entity;
    let player_name = player.profile.name

    const stage = "monsterplus_mobs"
    addStagesToTeamMembers(event, stage)
    defaultMilestoneNotification(event, stage)
});

// reward for Crafting Table
FTBQuestsEvents.customReward('0E7A91DD8F37AF4D', event => {
    const stage = "saturation"
    addStagesToTeamMembers(event, stage)
    defaultMilestoneNotification(event, stage)
});

// reward for Iron Bloom
FTBQuestsEvents.customReward('74E5C7C4B8A33E55', event => {
    const stages = ["minecraft_mobs", "variants_and_ventures_mobs", "player_mobs_mobs", "creeperoverhaul_mobs", "endermanoverhaul_mobs"]
    addStagesToTeamMembers(event, stages)
    defaultMilestoneNotification(event, stages[0])
});

// reward for Steel Ingot
FTBQuestsEvents.customReward('670CBE4973B6F390', event => {
    const stages = ["early_items", "blast_furnace", "mythsandlegends_mobs"]
    addStagesToTeamMembers(event, stages)
    defaultMilestoneNotification(event, stages[0])
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
FTBQuestsEvents.customReward('7650FE6CA0220DA3', event => {
    const stage = "the_nether_access"
    addStagesToTeamMembers(event, stage)
});

// reward for 12 eyes
FTBQuestsEvents.customReward('2BD4B3CA5BEDBA19', event => {
    const stage = "the_end_access"
    addStagesToTeamMembers(event, stage)
});

// ring, charm, feet, shoulders, bracelet, bundle, brooch, hands, back, head, pouch, face, 
// necklace, an_focus, deep_learner, body, pin, belt, adv_pattern_encoder, pigment_palette
const trinkets_slot_list_reward = [
    { quest_id: '679412F522B788D9', trinket_slot: 'hands' },
]

trinkets_slot_list_reward.forEach(reward => {
    FTBQuestsEvents.customReward(reward.quest_id, event => {
        let pData = event.player.persistentData
        let player = event.entity;
        let player_name = player.profile.name
        let pDataName = player_name + "_trinket_reward_" + reward.trinket_slot + "_" + reward.quest_id

        if (!pData.getBoolean(pDataName)) {
            pData.putBoolean(pDataName, true)
            
            event.server.runCommandSilent(`/curios add ${reward.trinket_slot} ${player_name} 1`)
        }
    });
});

function defaultMilestoneNotification(event, stage) {
    let teamManager = $FTBTeamsAPI.getManager()
    let team = teamManager.getTeamForPlayer(event.getPlayer()).get()
    let teamMembers = team.getOnlineMembers()
    teamMembers.forEach(player => {
        sendImmersiveMessageWithSubtext(Text.translate('milf.stage.something_changed'), Text.translate(`milf.stage.${stage}`), player, DEFAULT_MILESTONE_NOTIFICATION_STYLE, DEFAULT_MILESTONE_SUBTEXT_STYLE, event.server)
        event.server.scheduleInTicks(DEFAULT_MILESTONE_SUBTEXT_STYLE.delay * 20, _ => {
            event.server.runCommandSilent(`/playsound immersiveengineering:spark ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
            player.tell(Text.translate(`milf.stage.${stage}`))
        })
    })
}

function addStagesToTeamMembers(event, stages) {

    let teamManager = $FTBTeamsAPI.getManager()

    let team = teamManager.getTeamForPlayer(event.getPlayer()).get()
    let teamMembers = team.getOnlineMembers()
    stages = Array.isArray(stages) ? stages : [stages]

    teamMembers.forEach(member => {
        //console.log(member);
        for (const stage of stages) {
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
        for (const stage of playerStages) {
            teamStagesSet.add(stage)
        }
    })
    let playerStagesSet = new Set()
    let playerStagesList = AStages.getStagesFromPlayer(event.getPlayer())

    for (const stage of playerStagesList) {
        playerStagesSet.add(stage)
    }

    teamStagesSet.forEach(stage => {
        if (!playerStagesSet.has(stage)) {
            AStages.addStageToPlayer(stage, event.getPlayer())
            //console.log("New stage: " + stage);
        } else {
            //console.log("Stage: " + stage);
        }
    })

})