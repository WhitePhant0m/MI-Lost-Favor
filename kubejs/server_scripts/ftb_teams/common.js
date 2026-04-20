//priority: 10
let $HashSet = Java.loadClass("java.util.HashSet")
let $String = Java.loadClass("java.lang.String")

function getTeamData(player){
    let teamManager = $FTBTeamsAPI.getManager()
    let team = teamManager.getTeamForPlayer(player).get()
    /**@type {import("net.minecraft.server.level.ServerPlayer").$ServerPlayer$$Original[]}*/ let teamMembers = team.getOnlineMembers()
    return { team: team, teamMembers: teamMembers }
}