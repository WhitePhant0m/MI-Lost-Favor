const mobRestriction = (modId, mobArray) => {
    mobArray.forEach(mob => {
    AStages.addRestrictionForMob(`${modId}/${mob.id}`, `${modId}_mobs`,  mob.mob)
        .setEnableMobSpawning(false)
        .setDisableSpawner(false)
});
};