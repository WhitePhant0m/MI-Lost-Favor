const mobRestriction = (modId, mobArray) => {
    mobArray.forEach(mob => {
        AStages.addRestrictionForMob(`${modId}/${mob.id}`, `${modId}_mobs`, mob.mob)
            .setEnableMobSpawning(true)
            .restrictSpawnType("natural", "mob_summoned", "event", "chunk_generation", "jockey")
    });
};