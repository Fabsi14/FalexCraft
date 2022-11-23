// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	event.hide('mekanism:creative_fluid_tank')
	event.hide('ftblibrary:fluid_container')
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})
