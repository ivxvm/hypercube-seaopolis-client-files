// priority: 0

ServerEvents.recipes(event => {

  //Mystical 

  //Inferium Essence 
  event.custom({
    "type": "mysticalagriculture:infusion",
    "input": {
      "item": "ae2:certus_quartz_crystal"
    },
    "ingredients": [
      {
        "item": "thermal:niter"
      },
      {
        "item": "thermal:rose_gold_dust"
      },
      {
        "item": "thermal:niter"
      },
      {
        "item": "thermal:apatite"
      },
      {
        "item": "thermal:niter"
      },
      {
        "item": "thermal:rose_gold_dust"
      },
      {
        "item": "thermal:niter"
      },
      {
        "item": "thermal:apatite"
      }
    ],
    "result": {
      "item": "mysticalagriculture:inferium_essence"
    }
  }).id("submerged:infusion/inferium_essence")

  //Mystical Seeds Energy Reduction
  
  let energy = 10000;
  let mysticalSeeds = Ingredient.of("#mysticalagriculture:seeds").itemIds;

  mysticalSeeds.forEach(element => {
    const newElement = element.toString().replace("mysticalagriculture:", "").replace("_seeds", "");
    console.log(newElement);
    
    event.custom({
      "type": "thermal:insolator",
      "ingredient": {
        "item": `mysticalagriculture:${newElement}_seeds`
      },
      "result": [
        {
          "item": `mysticalagriculture:${newElement}_essence`
        },
        {
          "item": `mysticalagriculture:${newElement}_seeds`
        }
      ],
      "energy": energy,
    }).id(`thermal:compat/mysticalagriculture/insolator_mysticalag_${newElement}_seeds`)

  });


})