console.info("[BAB] StarterScreen.js loaded")

PlayerEvents.loggedIn(event => {
    const player = event.player

    if (player.persistentData.cobblemonStarterChosen) return

    event.server.scheduleInTicks(200, () => {
        event.server.runCommandSilent(`openstarterscreen ${player.username}`)

        player.persistentData.cobblemonStarterChosen = true
    })
})