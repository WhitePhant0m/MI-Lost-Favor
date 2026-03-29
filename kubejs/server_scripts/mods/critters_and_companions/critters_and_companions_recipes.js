ServerEvents.recipes(event => {

    event.remove({ output: "crittersandcompanions:grappling_hook" })
    event.custom(
        {
            "type": "enchanted:wheel",
            "ingredients": [
                {
                    "count": 4,
                    "id": "crittersandcompanions:silk"
                },
                {
                    "count": 1,
                    "id": "enchanted:whiff_of_magic"
                },
                {
                    "count": 1,
                    "id": "enchanted:flying_ointment"
                }
            ],
            "power": 1000,
            "result": {
                "count": 1,
                "id": "crittersandcompanions:grappling_hook"
            }
        }
    )


})