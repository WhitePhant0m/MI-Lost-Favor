ClientEvents.lang('ru_ru', event => {
    event.add('mia.tooltip.strainer.how.to.use', 'Тут будет текст о том как использовать strainer')
    event.add('milf.text.entity.interact.part0', 'На данный момент, ')
    event.add('milf.text.entity.interact.part1', ' не хочет взаимодействовать с тобой')
    event.add('milf.text.entity.interact.part2', 'Что-то магическое запрещает вам использовать ')
    event.add('milf.text.block.interact.part0', 'Странная магия мешает вам использовать этот блок')
    event.add('milf.text.first_join', `Добро пожаловать в ${textAnimatorString("MI:Lost Favor", "grad", {from:"#848dcb", to:"#45509d", f:0.5})}!`)
    
    event.add('milf.stage.congratulations', `${textAnimatorString("Поздравляем!!!", "wave", {a:0.25, w:0.25, f:0.5})}`)
    event.add('milf.stage.something_changed', `${textAnimatorString("Вы чувствуете, что что-то изменилось...", "wiggle", {a:0.25, f:0.35})}`)

    event.add('milf.stage.bronze_age', `Вы перешли в ${textAnimatorString("Бронзовую Эпоху", "grad", {from:"#CD7F32", to:"#F6BA7D", f:0.5})}`)
    event.add('milf.stage.monsterplus_mobs', `Вы начали слышать ${textAnimatorString("крики мертвых", "grad", {from:"#F00B0B", to:"#7A0F0B", f:0.5})} ночью`)
    event.add('milf.stage.tier_1_access_ore', `Шахты были благословлены ${textAnimatorString("новыми рудами", "grad", {from:"#55A2FA", to:"#8DDBFF", f:0.5})}...`)
    event.add('milf.stage.tier_2_access_ore', 'Unlocked: iridium / platinum / titanium / tungsten / uranium ore')
    event.add('milf.stage.saturation', `Вы потеряли свое ${textAnimatorString("насыщение", "grad", {from:"#E4C549", to:"#FDE49A", f:0.5})}...`)
    event.add('milf.stage.xaeromap', 'Разблокированы: мини-карта, радар, метки')
    event.add('milf.stage.minecraft_mobs', `Вы начали слышать ${textAnimatorString("странные звуки", "grad", {from:"#ED1A1A", to:"#B62651", f:0.5})} ночью...`)
    event.add('milf.stage.early_items', `Этот мир больше не ${textAnimatorString("отвергает", "glitch")} вас...`)
    event.add('milf.how_to_seed.tooltip', 'Можно найти в птичьем гнезде')
    event.add('milf.how_to_get_blaze_core.tooltip', 'Можно получить с шансом 50% если убить ключом: Sacred Pontiff, Lord Pumpking, The Black Charro, Umvuthi, Frostmaw, Ferrous Wroughtnaut, Amethyst Crab')
    event.add('milf.how_to_get_electronice_ender_core.tooltip', 'Можно получить с шансом 50% если убить ключом: Nether Gauntlet, Night Lich, Obsidilith, Void Blossom, Geburah, Chesed, Malkuth')

    event.add('milf.cannot.mine.block', 'Вы не можете добыть блок на данный момент')
    event.add('kubejs.press_button', 'Зажми ')
    event.add('kubejs.for_details', 'для подробной информации')
    event.add('kubejs.amber_visage.tooltip', 'Используется как топливо в Transmogrification Table для изменения внешнего вида предметов, не влияя на их функциональность')
    event.add('kubejs.beltborne_lanterns.tooltip', 'Нажмите CTRL + B, держа фонарь — он прикрепится к твоему поясу. Нужно вернуть его в руки? Нажмите CTRL + B снова.')
    event.add('milf.money_pouch.tooltip', 'Можно открыть с помощью радиального меню, находясь в слоте для безделушек.')
    event.add('milf.curio_bag.tooltip', 'Можно открыть с помощью радиального меню если мешок на панели быстрого доступа или в слоте для безделушек.')

    event.add('milf.placers.notification1', `Не хватает места, чтобы ${textAnimatorString("это", "bounce")} разместить`)
    event.add('milf.placers.notification2', `Сначала необходимо выбрать ${textAnimatorString("правильное направление", "glitch")}`)
    event.add('milf.placers.notification3', `Структура должна быть ${textAnimatorString("ТОЧНО", "shake")} такой же`)

    event.add('milf.placers.gui1', `Используйте любой тип ${textAnimatorStringForEach("МОЛОТКА", "bounce")} для создания структуры!`)
    event.add('milf.placers.gui2', `Щелкните правой кнопкой мыши пустой рукой, чтобы просмотреть предварительный вариант.`)
    event.add('milf.placers.gui3', ` + ПКМ с пустой рукой, чтобы удалить предварительный просмотр`)
    event.add('milf.empty_box.gui1', `Вы все еще можете вернуть свою структуру!`)
    event.add('milf.empty_box.gui2_1', `Просто `)
    event.add('milf.empty_box.gui2_2', ` + ПКМ с пустой рукой, чтобы вернуть её обратно`)
    event.add('milf.empty_box.gui3_1', `Обратите внимание, что разбивание этой коробки приведет к `)
    event.add('milf.empty_box.gui3_2', `${textAnimatorString("РАЗРУШЕНИЮ", "glitch")}`)
    event.add('milf.empty_box.gui3_3', " этой коробки")
    
    event.add('milf.text.dim.cant_visit', `${textAnimatorString("Какая-то магия останавливает вас", "glitch")}`)

    event.add('milf.flags.claimed', "Чанк запривачен")
    event.add('milf.flags.unclaimed', "Чанк распривачен")

    event.add('gateways.basic/deer', "Врата Оленя")

    //#region Food tweak
    event.add("milf.food.feel_bit_better", "Вы чувствуете себя немного лучше после того, как съели что-то, кроме фруктов и овощей.")
    event.add("milf.food.poison_1", "Вы съели слишком много фруктов и овощей и теперь чувствуете себя плохо!")
    event.add("milf.food.poison_2", "После употребления большого количества фруктов и овощей вы чувствуете себя плохо. Будьте осторожны!")
    event.add("milf.food.poison_3", "После того, как вы съели слишком много фруктов и овощей, вам стало ещё хуже. Попробуйте съесть что-нибудь другое.")
    event.add("milf.food.poison_4", "Вы съели слишком много фруктов и овощей вы чувствуете себя очень плохо! Подумайте о том, чтобы какое-то время есть что-нибудь другое.")
    event.add("milf.food.poison_5", "Вы съели чрезмерное количество фруктов и овощей и теперь находитесь в критическом состоянии от отравления! Пожалуйста, немедленно съешьте что-нибудь другое, чтобы прийти в себя. Если вы продолжите есть фрукты или овощи во время отравления, вы можете умереть от яда!")
    //#region

    //#region rituals
        event.add('ritual.occultism.craft_curio_bag.started', "Starting the ritual: Craft Trinkets Pouch.")
        event.add('ritual.occultism.craft_curio_bag.conditions', "Not all requirements for this ritual are met.")
        event.add('ritual.occultism.craft_curio_bag.finished', "Ritual completed successfully: Craft Trinkets Pouch.")
        event.add('ritual.occultism.craft_curio_bag.interrupted', "Interruption in the ritual: Craft Trinkets Pouch.")
        
        event.add('ritual.occultism.craft_vial_of_liquid_confidence.started', "Starting the ritual: Craft Vial Of Liquid Confidence.")
        event.add('ritual.occultism.craft_vial_of_liquid_confidence.conditions', "Not all requirements for this ritual are met.")
        event.add('ritual.occultism.craft_vial_of_liquid_confidence.finished', "Ritual completed successfully: Craft Vial Of Liquid Confidence.")
        event.add('ritual.occultism.craft_vial_of_liquid_confidence.interrupted', "Interruption in the ritual: Craft Vial Of Liquid Confidence.")
    //#endregion
})