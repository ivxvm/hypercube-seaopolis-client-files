// priority: 0

ServerEvents.recipes(event => {

  //Botany Pots

  //Growing Mulch
  event.recipes.botanypots.crop("strainers:mulch", ["dirt"], {block: "strainers:mulch"}, [Item.of ("strainers:mulch").withChance(100).withRolls(1, 2)], 300, 1).id('submerged:botanypots/crop/mulch')

  //Mulch as a Soil
  event.recipes.botanypots.soil("strainers:mulch", {block: "strainers:mulch"}, ["dirt"], -1, 1.1).id('submerged:botanypots/soil/mulch')

  event.remove({type: "botanypots:crop", input: "#submerged:banned_in_botany_pots"})



})