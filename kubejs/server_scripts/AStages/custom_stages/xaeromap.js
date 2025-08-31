AStageEvents.added("xaeromap", event => {
    event.player.tell("xaeromap")
    let player = event.entity;
    let dimension = player.getLevel().getDimension()

    event.server.runCommandSilent(`/playsound immersiveengineering:birthday_party ambient ${player.profile.name} ${player.x} ${player.y} ${player.z}`)
    event.server.runCommandSilent(`/execute in ${dimension} run particle minecraft:witch ${player.x} ${player.y} ${player.z} 8 8 8 1 5000 normal`)
})

PlayerEvents.tick(event => {
    const { player } = event
    if (player.tickCount % 20 != 0) return
    if (AStages.playerHasStage("xaeromap", player)) {
        player.removeEffect("xaerominimap:no_cave_maps_harmful")
        player.removeEffect("xaerominimap:no_entity_radar_harmful")
        player.removeEffect("xaerominimap:no_minimap_harmful")
        player.removeEffect("xaerominimap:no_waypoints_harmful")
        player.removeEffect("xaeroworldmap:no_world_map_harmful")
        return
    } 
    if (player.hasEffect('xaerominimap:no_cave_maps_harmful')) return
    player.potionEffects.add("xaerominimap:no_cave_maps_harmful",-1)
    player.potionEffects.add("xaerominimap:no_entity_radar_harmful",-1)
    player.potionEffects.add("xaerominimap:no_minimap_harmful",-1)
    player.potionEffects.add("xaerominimap:no_waypoints_harmful",-1)
    player.potionEffects.add("xaeroworldmap:no_world_map_harmful",-1)    
})
