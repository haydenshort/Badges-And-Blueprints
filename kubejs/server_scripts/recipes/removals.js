console.info("[BAB] Removals.js loaded")

const removeByOutput = [
    "functionalstorage:iron_downgrade",
    "minecraft:milk_bucket",
    "farm_and_charm:fertilized_soil",
    "ftbquests:task_screen_configurator",
    "ftbquests:stage_barrier",
    "ftbquests:detector",
    "ftbquests:loot_crate_opener",
    "ftbquests:screen_1",
    "ftbquests:screen_3",
    "ftbquests:screen_5",
    "ftbquests:screen_7",
    "ftbquests:barrier",
]

const removeById = [
    "cobblemon:poke_ball",
    "cobblemon:citrine_ball",
    "cobblemon:verdant_ball",
    "cobblemon:azure_ball",
    "cobblemon:roseate_ball",
    "cobblemon:slate_ball",
    "cobblemon:premier_ball",
    "cobblemon:great_ball",
    "cobblemon:ultra_ball",
    "cobblemon:safari_ball",
    "cobblemon:fast_ball",
    "cobblemon:level_ball",
    "cobblemon:lure_ball",
    "cobblemon:heavy_ball",
    "cobblemon:love_ball",
    "cobblemon:friend_ball",
    "cobblemon:moon_ball",
    "cobblemon:sport_ball",
    "cobblemon:park_ball",
    "cobblemon:net_ball",
    "cobblemon:dive_ball",
    "cobblemon:nest_ball",
    "cobblemon:repeat_ball",
    "cobblemon:timer_ball",
    "cobblemon:luxury_ball",
    "cobblemon:dusk_ball",
    "cobblemon:heal_ball",
    "cobblemon:dream_ball",
    "cobblemon:beast_ball",
    "cobblemon:master_ball",
    "cobblemon:ancient_poke_ball",
    "cobblemon:ancient_citrine_ball",
    "cobblemon:ancient_verdant_ball",
    "cobblemon:ancient_azure_ball",
    "cobblemon:ancient_roseate_ball",
    "cobblemon:ancient_slate_ball",
    "cobblemon:ancient_premier_ball",
    "cobblemon:ancient_great_ball",
    "cobblemon:ancient_ultra_ball",
    "cobblemon:ancient_feather_ball",
    "cobblemon:ancient_wing_ball",
    "cobblemon:ancient_jet_ball",
    "cobblemon:ancient_heavy_ball",
    "cobblemon:ancient_leaden_ball",
    "cobblemon:ancient_gigaton_ball",
    "farmersdelight:bread_from_smelting",
    "farmersdelight:bread_from_smoking",
    "netherdepthsupgrade:food/nether_salad",
    "farmersdelight:honey_cookie",
    "farmersdelight:sweet_berry_cookie",
    "farm_and_charm:supply_cart",
    "farm_and_charm:plow",
    "netherdepthsupgrade:grilled_lava_pufferfish",
    "netherdepthsupgrade:grilled_obsidianfish",
    "netherdepthsupgrade:grilled_searing_cod",
    "netherdepthsupgrade:grilled_soulsucker",
    "netherdepthsupgrade:grilled_glowdine",
    "netherdepthsupgrade:grilled_magmacubefish",
    "netherdepthsupgrade:grilled_blazefish",
    "create:fill_minecraft_bucket_with_minecraft_milk",
    "culturalrecipes:fermenting/pickle",
    "mushroomquest:miso_soup_2",
    "minecraft:beetroot_soup",
    "/^createmonballsoverhaul:deploying\/ball_bases\/",
    "createmonballsoverhaul:crafting/rubber_stamp_lid",
    "berrypouch:berry_pouch_30",
    "culturaldelights:corn_cob",
    "culturaldelights:corn_kernels",
    "actuallyadditions:rice",
    "starcatcher:rod",
    "starcatcher:rod_from_vanilla",
]

const removeByInput = [
    "create:dough",
    "minecraft:milk_bucket",
]

ServerEvents.recipes((event) => {

    removeById.forEach((recipe) => {
		event.remove({ id: recipe })
	})

    removeByOutput.forEach((recipe) => {
        event.remove({ output: recipe })
    })

    removeByInput.forEach((recipe) => {
        event.remove({ input: recipe })
    })

    global.removedItems.forEach((recipe) => {
        event.remove({ output: recipe })
    })

    event.remove({ type: "farm_and_charm:pot_cooking" })
    event.remove({ type: "meadow:cooking" })
    event.remove({ type: "meadow:woodcutting" })
})