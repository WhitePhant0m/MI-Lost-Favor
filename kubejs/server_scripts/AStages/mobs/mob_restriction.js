const mobRestriction = (modId, mobArray) => {
    mobArray.forEach(mob => {
        AStages.addRestrictionForMob(`${modId}/${mob.id}`, `${modId}_mobs`, mob.mob)
            .setEnableMobSpawning(true)
            .restrictSpawnType("natural", "event", "mob_summoned", "jockey", "conversion", "reinforcement", "triggered", "command", "dispenser", "patrol")
    });
};