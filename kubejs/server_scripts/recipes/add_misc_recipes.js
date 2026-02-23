console.info("[BAB] AddMiscRecipes.js loaded")

ServerEvents.recipes((event) => {

    event.shaped(
        Item.of("functionalstorage:iron_downgrade", 1),
        ["aaa", "aba", "aaa"],
        {a: "create:iron_sheet", b: "functionalstorage:copper_upgrade"}
    )
    event.shaped(
        Item.of("createmonballsoverhaul:rubber_stamp_lid", 1),
        ["aaa", "aba", "ccc"],
        {a: "minecraft:stick", b: "#createmonballsoverhaul:spherical_shaped_items_for_lids", c: "refinedstorage:silicon"}
    )

    event.smithing(
        "starcatcher:starcatcher_rod",
        "starcatcher:hook",
        "minecraft:fishing_rod",
        "starcatcher:bobber"
    )
})