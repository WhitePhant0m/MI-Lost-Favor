// Command: /getlangvalue <key>
// Returns the translation string for the given lang key with a [Copy] button.

ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event

  event.register(
    Commands.literal('getlangvalue')
      .requires(src => src.hasPermission(2))
      .then(
        Commands.argument('key', Arguments.STRING.create(event))
          .executes(getLangValue)
      )
  )

  function getLangValue(ctx) {
    const key = Arguments.STRING.getResult(ctx, 'key')
    const source = ctx.source
    const player = source.player

    const translated = Text.translate(key)

    player.tell([
      Text.gray('[lang] '),
      Text.green(key).clickCopy(key).hover('Click to copy Key'),
      Text.gray(' = '),
      translated,
      Text.gray(' | '),
      Text.darkAqua('[Copy value]').clickCopy(translated.getString()).hover('Click to copy value'),
    ])

    return 1
  }
})
