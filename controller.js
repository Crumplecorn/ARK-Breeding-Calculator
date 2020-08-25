var breedingController=angular.module('breedingControllers', []).controller('breedingController', ['$scope', '$interval', '$cookies', '$animate', function($scope, $interval, $cookies, $animate) {

	var defaultmult = {
  		get: function(target, name) {
   			return target.hasOwnProperty(name) ? target[name] : 1;
  		}
	};

	$scope.Defaultfoods={

		'Raw Fish Meat': {
			food: 25,
			stack: 40,
			spoil: 20*60,
			weight: 0.1,
			waste: 0
		},

		'Cooked Fish Meat': {
			food: 12.5,
			stack: 50,
			spoil: 30*60,
			weight: 0.1,
			waste: 0
		},

		'Raw Meat': {
			food: 50,
			stack: 40,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Cooked Meat': {
			food: 25,
			stack: 50,
			spoil: 20*60,
			weight: 0.1,
			waste: 25
		},

		'Spoiled Meat': {
			food: 50,
			stack: 100,
			spoil: 60*60,
			weight: 0.1,
			waste: 0
		},

		'Mejoberry': {
			food: 30,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Berry': {
			food: 20,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Vegetables': {
			food: 40,
			stack: 100,
			spoil: 5*60,
			weight: 0.1,
			waste: 0
		},

		'Rare Flower': {
			food: 60,
			stack: 100,
			spoil: 3*24*60*60,
			weight: 0.15,
			waste: 0
		},

		'Chitin': {
			food: 50,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.01,
			waste: 0
		},

		'Kibble': {
			food: 60,
			stack: 100,
			spoil: 3*24*60*60,
			weight: 0.1,
			waste: 0
		},

		'Wyvern Milk': {
			food: 1200,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		},
		
		'Primal Crystal': {
			food: 350,
			stack: 1,
			spoil: 10800,
			weight: 1,
			waste: 0
		},
				
		'Ambergris': {
			food: 500,
			stack: 1,
			spoil: 10*60*2,
			weight: 5,
			waste: 0
		},
		
		'Nameless Venom': {
			food: 400,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		}
	}
	
	$scope.Primfoods={

		'Raw Fish Meat': {
			food: 25,
			stack: 20,
			spoil: 20*60,
			weight: 0.1,
			waste: 0
		},

		'Cooked Fish Meat': {
			food: 12.5,
			stack: 50,
			spoil: 30*60,
			weight: 0.1,
			waste: 0
		},

		'Raw Meat': {
			food: 50,
			stack: 20,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Cooked Meat': {
			food: 25,
			stack: 50,
			spoil: 20*60,
			weight: 0.1,
			waste: 25
		},

		'Spoiled Meat': {
			food: 50,
			stack: 100,
			spoil: 60*60,
			weight: 0.1,
			waste: 0
		},

		'Mejoberry': {
			food: 30,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Berry': {
			food: 20,
			stack: 100,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Vegetables': {
			food: 40,
			stack: 100,
			spoil: 5*60,
			weight: 0.1,
			waste: 0
		},

		'Rare Flower': {
			food: 60,
			stack: 100,
			spoil: 3*24*60*60,
			weight: 0.15,
			waste: 0
		},

		'Chitin': {
			food: 50,
			stack: 100,
			spoil: 9001*9001,
			weight: 0.01,
			waste: 0
		},

		'Kibble': {
			food: 60,
			stack: 100,
			spoil: 3*24*60*60,
			weight: 0.1,
			waste: 0
		},
		
		'Wyvern Milk': {
			food: 1200,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		},
		
		'Primal Crystal': {
			food: 350,
			stack: 1,
			spoil: 10800,
			weight: 1,
			waste: 0
		},
				
		'Ambergris': {
			food: 500,
			stack: 1,
			spoil: 10*60*2,
			weight: 5,
			waste: 0
		},
		
		'Nameless Venom': {
			food: 400,
			stack: 1,
			spoil: 10*60*3,
			weight: 0.1,
			waste: 0
		}
	}

	$scope.foods=$scope.Defaultfoods;

	$scope.foodlists={
		Carnivore: ['Raw Meat', 'Cooked Meat', 'Raw Fish Meat', 'Kibble'],
		Herbivore: ['Mejoberry', 'Berry', 'Vegetables', 'Kibble'],
		Omnivore: ['Raw Meat', 'Cooked Meat', 'Raw Fish Meat', 'Mejoberry', 'Berry', 'Kibble'],
		Microraptor: ['Raw Meat', 'Cooked Meat', 'Rare Flower'],
		Archaeopteryx: ['Chitin'],
		Carrion: ['Spoiled Meat'],
		Piscivore: ['Raw Fish Meat', 'Cooked Fish Meat'],
		Wyvern: ['Wyvern Milk'],
		CrystalWyvern: ['Primal Crystal'],
		Magmasaur: ['Ambergris'],
		RockDrake: ['Nameless Venom']
	}

	$scope.foodlist=['Raw Meat', 'Cooked Meat', 'Raw Fish Meat', 'Cooked Fish Meat', 'Mejoberry', 'Berry', 'Vegetables', 'Kibble', 'Rare Flower', 'Chitin', 'Spoiled Meat', 'Wyvern Milk', 'Primal Crystal', 'Ambergris', 'Nameless Venom'] //Display order

	$scope.foodorder=['Raw Fish Meat', 'Cooked Fish Meat', 'Raw Meat', 'Berry', 'Cooked Meat', 'Mejoberry', 'Vegetables', 'Kibble', 'Rare Flower', 'Chitin', 'Spoiled Meat', 'Wyvern Milk', 'Primal Crystal', 'Ambergris', 'Nameless Venom'] //In-game order

	$scope.troughtypes={
		Normal: 4,
		Tek: 100,
		Clicker: 1
	}

	/*
	* Where to locate stat values:
	*
	* Note: PrimalItemConsumable_Egg_[Creature]_Fertilized can be PrimalItemConsumable_UnderwaterEgg_[Creature] for underwater creatures
	*
	* basefoodrate: DinoCharacterStatusComponent_BP_[Creature]/BaseFoodConsumionRate
	* babyfoodrate: DinoCharacterStatusComponent_BP_[Creature]/BabyDinoConsumingFoodRateMultiplier
	* extrababyfoodrate: DinoCharacterStatusComponent_BP_[Creature]/ExtraBabyDinoConsumingFoodRateMultipler
	* agespeed: [Creature]_Character_BP/BabyAgeSpeed
	* agespeedmult: [Creature]_Character_BP/BabyAgeSpeedMultipler
	* eggspeed: PrimalItemConsumable_Egg_[Creature]_Fertilized/EggLoseDurabilityPerSecond
	* eggspeedmult: PrimalItemConsumable_Egg_[Creature]_Fertilized/ExtraEggLoseDurabilityPerSecondMultiplier
	* or
	* gestationspeed: [Creature]_Character_BP/BabyGestationSpeed
	* gestationspeedmult: [Creature]_Character_BP/ExtraBabyGestationSpeedMultiplier
	* // = DevKit checked
	*/
	

	$scope.creatures={

		Allosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 380.0
		},

		Anglerfish: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 350
		},

		Ankylosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 1.9,
			weight: 250
		},

		Archaeopteryx: { //
			birthtype: "Incubation",
			type: "Archaeopteryx",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 6.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.9,
			weight: 30.0
		},

		Argentavis: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.7,
			weight: 400.0
		},

		Baryonyx: { //
			birthtype: "Incubation",
			type: "Piscivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 325.0
		},

		Basilosaurus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.002929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 700.0
		},

		Beelzebufo: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 160.0
		},
		
		Bloodstalker: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.7,
			weight: 350.0
		},

		Brontosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.007716,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 1600.0
		},

		Bulbdog: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 120
		},

		Carbonemys: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.0,
			eggspeed: 0.005556,
			eggspeedmult: 4.0,
			weight: 270.0
		},

		Carnotaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 300.0
		},

		Castoroides: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.5,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 300
		},

		Chalicotherium: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.125,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 400
		},

		Compsognathus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 6.0,
			weight: 25
		},
		
		"Crystal Wyvern": { //Food Check - Primal Crystal 350 Food Value - need more Tests!?
			birthtype: "Incubation",
			type: "CrystalWyvern",
			basefoodrate: 0.000185,
			babyfoodrate: 19.25,
			extrababyfoodrate: 6.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 300
		},

		Daeodon: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.01,
			babyfoodrate: 5.0,
			extrababyfoodrate: 8.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 400.0,
			foodmultipliers: {
				"Raw Meat": 0.2
			},
			wastemultipliers: {
				"Cooked Meat": 0
			}
		},
		
		Deinonychus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 140.0
		},

		Dilophosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 45
		},

		Dimetrodon: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001736,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2,
			eggspeed: 0.005556,
			eggspeedmult: 2,
			weight: 250
		},

		Dimorphodon: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.7,
			weight: 50
		},
		
		Diplocaulus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 4.1,
			weight: 150.0
		},

		Diplodocus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.007716,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 800.0
		},

		Direbear: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2,
			gestationspeed: 0.000035,
			gestationspeedmult: 2,
			weight: 650.0
		},

		Direwolf: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 170.0
		},

		Dodo: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 6.0,
			eggspeed: 0.005556,
			eggspeedmult: 6.0,
			weight: 50.0
		},

		Doedicurus: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.6,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.6,
			weight: 250.0
		},

		Dunkleosteus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.125,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 910.0
		},

		Electrophorus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.002929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 150.0
		},

		Equus: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 0.6,
			weight: 350.0
		},

		Featherlight: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 70.0
		},
		
		Ferox: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 0.8,
			weight: 55.0
		},

 		// Unsure on this, because the gacha eats so many things.  This may be completely wrong.
		Gacha: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.01,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 380.0
		},

		Gallimimus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 270
		},

		Gasbag: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.002066,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 3000.0
		},

		Giganotosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 45.0,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.33,
			eggspeed: 0.005556,
			eggspeedmult: 0.1,
			weight: 700
		},

		Gigantopithecus: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.004156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.2,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.2,
			weight: 220.0
		},

		Glowtail: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 70.0
		},
		
		Hesperornis: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001389,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.3,
			eggspeed: 0.005556,
			eggspeedmult: 3.3,
			weight: 70.0
		},
		
		Hyaenodon: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 170.0
		},
		
		Ichthyornis: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 55.0
		},
		
		 Ichthyosaurus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.6,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 250.0
		},

		Iguanodon: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 375.0
		},
		
		Jerboa: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			gestationspeed: 0.000035,
			gestationspeedmult: 3.0,
			weight: 55.0
		},

		Kairuku: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001389,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.3,
			eggspeed: 0.005556,
			eggspeedmult: 3.3,
			weight: 70
		},
		
		 Kaprosuchus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 140.0
		},

		Kentrosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.005341,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.8,
			eggspeed: 0.005556,
			eggspeedmult: 1.8,
			weight: 500.0
		},
		
		Lystrosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 6.0,
			eggspeed: 0.005556,
			eggspeedmult: 6.0,
			weight: 90.0
		},
		
		Magmasaur: { //Food Check - Ambergris 500 Food Value - need more Tests!?
			birthtype: "Incubation",
			type: "Magmasaur",
			basefoodrate: 0.000385,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 550
		},

		Mammoth: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.004133,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.125,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 500
		},

		Managarmr: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 300.0
		},
		
		Manta: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 200.0
		},
		
		Megachelon: { //
			birthtype: "Incubation",
			type: "Omnivore",
			basefoodrate: 0.010000,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 2500.0
		},

		Megalania: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001736,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 400.0
		},

		Megaloceros: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.3,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.3,
			weight: 220.0
		},

		Megalodon: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 250.0
		},

		Megalosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 300.0
		},

		Megatherium: { //
			birthtype: "Gestation",
			type: "Omnivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 725.0
		},

		Mesopithecus: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 3.0,
			weight: 70.0
		},

		Microraptor: { //
			birthtype: "Incubation",
			type: "Microraptor",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 45.0
		},

		Morellatops: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.005341,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 440.0
		},

		Mosasaurus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.005,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 1300.0
		},

		Moschops: { //
			birthtype: "Incubation",
			type: "Omnivore",
			basefoodrate: 0.001736,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 1.9,
			weight: 200.0
		},

		Otter: { //
			birthtype: "Gestation",
			type: "Piscivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 30.0
		},

		Oviraptor: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 100.0
		},

		Ovis: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 90
		},

		Pachycephalosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 150.0
		},

		Pachyrhinosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 365.0
		},

		Paraceratherium: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.0035,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 850.0
		},

		Parasaurolophus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 480.0
		},

		Pegomastax: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.0,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 55.0
		},

		Pelagornis: { //
			birthtype: "Incubation",
			type: "Piscivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 150
		},

		Phiomia: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 0.8,
			weight: 200.0
		},

		Plesiosaurus: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.003858,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 800.0
		},

		Procoptodon: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 550.0
		},

		Pteranodon: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 120.0
		},

		Purlovia: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 400.0
		},

		Quetzalcoatlus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.0035,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.7,
			eggspeed: 0.005556,
			eggspeedmult: 0.3,
			weight: 800
		},

		Raptor: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 140.0
		},

		Ravager: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 500.0
		},

		Rex: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 500
		},
		
		"Rock Drake": { //Food Check - Nameless Venom 400 Food Value - need more Tests!?
			birthtype: "Incubation",
			type: "RockDrake",
			basefoodrate: 0.000185,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 0.8,
			weight: 400.0
		},

		"Roll Rat": { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.6,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.6,
			weight: 400.0
		},

		Sabertooth: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 200.0
		},

		Sarcosuchus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001578,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 300.0
		},

		Shinehorn: { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 100.0
		},

		"Snow Owl": { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.01,
			babyfoodrate: 4.72,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.7,
			weight: 375.0
		},

		Spinosaurus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002066,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.3,
			eggspeed: 0.005556,
			eggspeedmult: 1.3,
			weight: 350.0
		},

		Stegosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.005341,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.8,
			eggspeed: 0.005556,
			eggspeedmult: 1.8,
			weight: 500.0
		},

		Tapejara: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 280.0
		},

		"Terror Bird": { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001578,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 120.0
		},

		Therizinosaurus: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 365.0
		},

		"Thorny Dragon": { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 300.0
		},

		Thylacoleo: { //
			birthtype: "Gestation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 400.0,
		},

		Triceratops: { //
			birthtype: "Incubation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 365.0
		},

		Troodon: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 140.0
		},
		
		Tropeognathus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 340.0
		},

		Tusoteuthis: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.005,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 800.0
		},

		Velonasaur: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 325.0
		},

		Vulture: { //
			birthtype: "Incubation",
			type: "Carrion",
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.7,
			weight: 50
		},

		"Woolly Rhino": { //
			birthtype: "Gestation",
			type: "Herbivore",
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.6,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 750.0
		},
		
		Wyvern: { //Food Check - Wyvern Milk 1200 Food Value - need more Tests!?
			birthtype: "Incubation",
			type: "Wyvern",
			basefoodrate: 0.000185,
			babyfoodrate: 13.0,
			extrababyfoodrate: 3.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 400.0
		},

		Yutyrannus: { //
			birthtype: "Incubation",
			type: "Carnivore",
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 500.0
		}

	}

	$scope.iterations=0;

	for (creature in $scope.creatures) {
		$scope.creatures[creature]['foodmultipliers']=new Proxy($scope.creatures[creature]['foodmultipliers']===undefined ? {} : $scope.creatures[creature]['foodmultipliers'], defaultmult);
		$scope.creatures[creature]['wastemultipliers']=new Proxy($scope.creatures[creature]['wastemultipliers']===undefined ? {} : $scope.creatures[creature]['wastemultipliers'], defaultmult);
	}

	$scope.clearcookies=false; //Some of these data structures don't really allow version numbering

	$scope.settings=$cookies.getObject('settings');
	if ($scope.settings==undefined || $scope.settings.version!="171108") {
		$scope.settings={
			version: "171108",
			consumptionspeed: 1,
			maturationspeed: 1,
			hatchspeed: 1,
			baseminfoodrate: 0.000155,
			lossfactor: 0,
			troughtype: "Normal"
		}
		$scope.clearcookies=true;
		var now=new Date();
		$cookies.putObject('settings', $scope.settings, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
	}

	$scope.displayconfig=$cookies.getObject('displayconfig');
	if ($scope.displayconfig==undefined || $scope.displayconfig.version!="160227") {
		$scope.displayconfig={
			version: "160227",
			showoldselects: 0,
			showanimations: 1
		}
	}
	$animate.enabled($scope.displayconfig.showanimations);

	$scope.tablevisibility=$cookies.getObject('tablevisibility');
	if ($scope.tablevisibility==undefined) {
		$scope.tablevisibility={
			"Creature": true,
			"Maturation": true,
			"Baby": true,
			"Food": true,
			"Trough": true,
			"TroughCreatures": true
		}
	}

	$scope.creature=$cookies.getObject('creature');
	if ($scope.creature==undefined || !($scope.creature.name in $scope.creatures)) {
		$scope.creature={
			name: "Argentavis",
			maturationprogress: 0
		};
	}

	$scope.creaturelist=$cookies.getObject("creaturelist");
	if ($scope.creaturelist==undefined || $scope.clearcookies==true) {
		$scope.creaturelist=[];
	}

	$scope.troughstacks=$cookies.getObject("troughstacks");
	if ($scope.troughstacks==undefined || $scope.clearcookies==true) {
		foodlist=$scope.foodlist;
		$scope.troughstacks={};
		for (i=0;i<foodlist.length;i++) {
			$scope.troughstacks[foodlist[i]]=0;
		}
	}

	$scope.troughdata=$cookies.getObject("troughdata");
	if ($scope.troughdata==undefined || $scope.clearcookies==true) {
		$scope.troughdata={
			time: 0,
			totalfood: 0,
			totalpoints: 0,
			eatenfood: 0,
			eatenpoints: 0,
			spoiledfood: 0,
			spoiledpoints: 0,
			wastedpoints: 0
		}
	}

	function validatenumber(number, min, max) {
		if (isNaN(number)) {
			return min;
		}
		return Math.min(max, Math.max(min, number));
	}

	$scope.showhidetable=function(table) {
		$scope.tablevisibility[table]=!$scope.tablevisibility[table];
		var now=new Date();
		$cookies.putObject('tablevisibility', $scope.tablevisibility, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
	}

	$scope.showhideanimations=function() {
		$animate.enabled($scope.displayconfig.showanimations);
		if ($scope.displayconfig.showanimations==0) {
			alert("Refresh the page");
		}
		$scope.changedisplayconfig();
	}

	$scope.changedisplayconfig=function() {
		var now=new Date();
		$cookies.putObject('displayconfig', $scope.displayconfig, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
	}

	$scope.searchcreature=function() {
		//alert("searchdino");
		var creature=$scope.creature;
		var creatures=$scope.creatures;

		if (creature.searchname in creatures) {
			creature.name=creature.searchname;
			$scope.switchcreature();
		}
	}
	
	$scope.changeStackSize=function() {
		if($scope.settings.stackSize){
			$scope.foods=$scope.Primfoods;
		} else {
			$scope.foods=$scope.Defaultfoods;
		}
		$scope.troughcalc();
	}

	$scope.selectsettings=function() {
		settings=$scope.settings;
		if (isNaN(settings.consumptionspeed) || settings.consumptionspeed<=0) {
			return;
		}
		if (isNaN(settings.maturationspeed) || settings.maturationspeed<=0) {
			return;
		}
		if (isNaN(settings.hatchspeed) || settings.hatchspeed<=0) {
			return;
		}
		var now=new Date();
		$cookies.putObject('settings', settings, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
		$scope.statscalc();
		$scope.troughcalc();
	}

	/*$scope.selectcreature=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		creature.searchname=creature.name; //Ensure the searchname is kept up to date
		creature.maturationtime=1/creaturedata.agespeed/creaturedata.agespeedmult/$scope.settings.maturationspeed;
		creature.babytime=creature.maturationtime/10;
		if (creaturedata.birthtype=="Incubation") {
			creature.birthtime=100/creaturedata.eggspeed/creaturedata.eggspeedmult/$scope.settings.hatchspeed;
			creature.birthlabel="Incubation";
		}
		if (creaturedata.birthtype=="Gestation") {
			creature.birthtime=1/creaturedata.gestationspeed/creaturedata.gestationspeedmult/$scope.settings.hatchspeed;
			creature.birthlabel="Gestation";
		}
		creature.finalweight=creaturedata.weight;
		creature.currentweight=0;
		creature.maxfoodrate=creaturedata.basefoodrate*creaturedata.babyfoodrate*creaturedata.extrababyfoodrate*$scope.settings.consumptionspeed;
		creature.minfoodrate=$scope.settings.baseminfoodrate*creaturedata.babyfoodrate*creaturedata.extrababyfoodrate*$scope.settings.consumptionspeed;
		creature.foodratedecay=(creature.maxfoodrate-creature.minfoodrate)/creature.maturationtime;
		creature.desiredbabybuffer=1;
		$scope.foodunit=$scope.foodlists[creaturedata.type][0];
		$scope.selectweight();
		$scope.totalfoodcalc();
		$scope.babybuffercalc();
	}*/

	$scope.switchcreature=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		creature.searchname=creature.name; //Ensure the searchname is kept up to date
		creature.finalweight=creaturedata.weight;
		creature.currentweight=0;
		creature.desiredbabybuffer=30;
		creature.maturationprogress=0;
		$scope.foodunit=$scope.foodlists[creaturedata.type][0];

		$scope.statscalc();
	}

	$scope.statscalc=function() {
		creature.maturationtime=1/creaturedata.agespeed/creaturedata.agespeedmult/$scope.settings.maturationspeed;
		creature.babytime=creature.maturationtime/10;

		if (creaturedata.birthtype=="Incubation") {
			creature.birthtime=100/creaturedata.eggspeed/creaturedata.eggspeedmult/$scope.settings.hatchspeed;
			creature.birthlabel="Incubation";
		}

		if (creaturedata.birthtype=="Gestation") {
			creature.birthtime=1/creaturedata.gestationspeed/creaturedata.gestationspeedmult/$scope.settings.hatchspeed;
			creature.birthlabel="Gestation";
		}

		creature.maxfoodrate=creaturedata.basefoodrate*creaturedata.babyfoodrate*creaturedata.extrababyfoodrate*$scope.settings.consumptionspeed;
		creature.minfoodrate=$scope.settings.baseminfoodrate*creaturedata.babyfoodrate*creaturedata.extrababyfoodrate*$scope.settings.consumptionspeed;
		creature.foodratedecay=(creature.maxfoodrate-creature.minfoodrate)/creature.maturationtime;
		creature.foodratedecay=(creature.maxfoodrate-creature.minfoodrate)/creature.maturationtime;

		$scope.totalfoodcalc();
		$scope.selectweight();
	}

	$scope.selectweight=function() {
		//creature=$scope.creature;
		//creaturedata=$scope.creatures[creature.name];
		//creature.maturationprogress=creature.currentweight/creature.finalweight;

		creature.finalweight=validatenumber(creature.finalweight, 1, 10000);

		$scope.finalbuffercalc();
		$scope.selectmaturation();
		$scope.desiredbuffercalc();
	}

	$scope.selectmaturation=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];

		if (isNaN(creature.maturationprogress)) {
			creature.maturationprogress=0;
		}
		creature.maturationprogress=validatenumber(creature.maturationprogress, 0, 1);

		creature.currentweight=creature.finalweight*creature.maturationprogress;

		$scope.maturationcalc();
	}

	$scope.maturationcalc=function() {
		creature.maturationtimecomplete=creature.maturationtime*creature.maturationprogress;
		creature.maturationtimeremaining=creature.maturationtime-creature.maturationtimecomplete;
		creature.babytimeremaining=Math.max(0, creature.babytime-(creature.maturationtime*creature.maturationprogress));

		$scope.totalfoodcalc();
		$scope.babybuffercalc();
	}

	$scope.totalfoodcalc=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		creature.totalfood=$scope.getfoodforperiod(0, creature.maturationtime, $scope.creature);
		creature.babyfood=$scope.getfoodforperiod(0, creature.babytime, $scope.creature);
		creature.tojuvfood=$scope.getfoodforperiod(creature.maturationtimecomplete, creature.babytime, $scope.creature);
		creature.toadultfood=$scope.getfoodforperiod(creature.maturationtimecomplete, creature.maturationtime, $scope.creature);
		creature.totalfooditems=creature.totalfood/($scope.foods[$scope.foodunit].food*creaturedata.foodmultipliers[$scope.foodunit]);
		creature.babyfooditems=creature.babyfood/($scope.foods[$scope.foodunit].food*creaturedata.foodmultipliers[$scope.foodunit]);
		creature.tojuvfooditems=creature.tojuvfood/($scope.foods[$scope.foodunit].food*creaturedata.foodmultipliers[$scope.foodunit]);
		creature.toadultfooditems=creature.toadultfood/($scope.foods[$scope.foodunit].food*creaturedata.foodmultipliers[$scope.foodunit]);
		creature.foodforday={};
		creature.fooditemsforday={};
		day=1;
		food=$scope.getfoodforperiod((day-1)*24*60*60, day*24*60*60, $scope.creature);
		while (food>0 && day<20) {
			creature.foodforday[day]=food+food*$scope.settings.lossfactor/100;
			creature.fooditemsforday[day]=(food+food*($scope.settings.lossfactor/100))/($scope.foods[$scope.foodunit].food*creaturedata.foodmultipliers[$scope.foodunit]);
			day++;
			food=$scope.getfoodforperiod((day-1)*24*60*60, day*24*60*60, $scope.creature);
		}

		//$scope.babybuffercalc();
	}

	$scope.babybuffercalc=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		var foodname=$scope.foodunit;
		food=$scope.foods[foodname];
		foodmult=creaturedata.foodmultipliers[foodname];

		creature.desiredbabybuffer=validatenumber(creature.desiredbabybuffer, 0, 10000000);

		//creature.currentbabybuffer=creature.currentweight/food.weight*food.food*foodmult/(creature.maxfoodrate-creature.foodratedecay*creature.maturationtimecomplete);
		//creature.maxbabybuffer=creature.finalweight/10/food.weight*food.food*foodmult/(creature.maxfoodrate-creature.foodratedecay*creature.babytime);
		//creature.timeuntildesiredbabybuffer=Math.max(0,(creature.desiredbabybuffer*60*creature.babytime*food.weight*creature.maxfoodrate)/(creature.desiredbabybuffer*60*creature.babytime*food.weight*creature.foodratedecay+creature.finalweight/10*food.food*foodmult)-creature.maturationtimecomplete);

		//Trough calc creature setup
		creaturelist=[{
			'name': creature.name,
			'maturation': creature.maturationprogress,
			'quantity': 1
		}];

		//Trough calc food setup
		stacklist={};
		for (i=0; i<$scope.foodorder.length; i++) {
			stacklist[$scope.foodorder[i]]=0;
		}

		//Current buffer calc
		$scope.iterations=0;
		stacklist[foodname]=creature.currentweight/food.weight/food.stack;
		creature.foodtofill=creature.currentweight/food.weight;
		data=$scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal']);
		creature.currentbabybuffer=data['time'];
		//alert("Current buffer "+$scope.iterations);

		//Final Buffer Calc
		creature.lasthandfeed=Math.max(0, creature.maturationtime*(creature.lasthandfeedmaturation-creature.maturationprogress));

		//Desired Buffer Calc
		creature.timeuntildesiredbabybuffer=Math.max(0, creature.maturationtime*(creature.timeuntildesiredbabybuffermaturation-creature.maturationprogress));
		//alert("Desired buffer "+$scope.iterations);

		//Food to finish calc
		$scope.iterations=0;
		var estimate=((creature.maxfoodrate-creature.foodratedecay*creature.maturationprogress*creature.maturationtime)-(creature.maxfoodrate-creature.foodratedecay*0.1*creature.maturationtime))*(creature.maturationtime*(0.1-creature.maturationprogress))/2;
		estimate+=(creature.maxfoodrate-creature.foodratedecay*0.1*creature.maturationtime)*creature.maturationtime*(0.1-creature.maturationprogress);
		estimate=estimate/food.food;
		stacklist[foodname]=estimate/food.stack;
		creaturelist[0]['maturation']=creature.maturationprogress;
		creature.foodtofinishbaby="N/A";
		var troughdata=$scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal']);
		while(creature.maturationprogress>creature.lasthandfeedmaturation && troughdata['time']<creature.maturationtime*(0.1-creature.maturationprogress)) {
			estimate=estimate*Math.max(1.01, (creature.maturationtime*(0.1-creature.maturationprogress))/(troughdata['time']));
			stacklist[foodname]=estimate/food.stack;
			troughdata=$scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal']);
		}
		if (creature.maturationprogress>creature.lasthandfeedmaturation && creature.maturationprogress<0.1) {
			creature.foodtofinishbaby=Math.ceil(estimate);
		}
		//alert("Food to finish "+$scope.iterations);

		var now=new Date();
		$cookies.putObject('creature', $scope.creature, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
	}

	$scope.finalbuffercalc=function() {
		//Trough calc creature setup
		creaturelist=[{
			'name': creature.name,
			'maturation': creature.maturationprogress,
			'quantity': 1
		}];

		//Trough calc food setup
		stacklist={};
		for (i=0; i<$scope.foodorder.length; i++) {
			stacklist[$scope.foodorder[i]]=0;
		}

		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		var foodname=$scope.foodunit;
		food=$scope.foods[foodname];
		foodmult=creaturedata.foodmultipliers[foodname];

		//Final Buffer Calc
		$scope.iterations=0;
		var estimate=(food.weight*creature.maxfoodrate*creature.maturationtime)/(10*creature.finalweight*food.food*foodmult+10*food.weight*creature.maxfoodrate*creature.maturationtime);
		stacklist[foodname]=0;
		//creature.maxbabybuffer=creature.maturationtime*0.1-creature.maturationtime*estimate;
		while ($scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time']<creature.maturationtime*(0.1-estimate)) {
			estimate+=0.01;
			stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
			creaturelist[0]['maturation']=estimate;
		}
		while ($scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time']>creature.maturationtime*(0.1-estimate)) {
			estimate-=0.001;
			stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
			creaturelist[0]['maturation']=estimate;
		}
		estimate+=0.001;
		stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
		creaturelist[0]['maturation']=estimate;
		creature.maxbabybuffer=$scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time'];
		creature.lasthandfeed=Math.max(0, creature.maturationtime*(estimate-creature.maturationprogress));
		creature.lasthandfeedmaturation=estimate;
		//alert("Last Hand Feed "+$scope.iterations);
	}

	$scope.desiredbuffercalc=function() {
		//Trough calc creature setup
		creaturelist=[{
			'name': creature.name,
			'maturation': creature.maturationprogress,
			'quantity': 1
		}];

		//Trough calc food setup
		stacklist={};
		for (i=0; i<$scope.foodorder.length; i++) {
			stacklist[$scope.foodorder[i]]=0;
		}

		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		var foodname=$scope.foodunit;
		food=$scope.foods[foodname];
		foodmult=creaturedata.foodmultipliers[foodname];

		creature.desiredbabybuffer=validatenumber(creature.desiredbabybuffer, 0, 600); //Needs better estimation to deal with longer times
		//Desired Buffer Calc
		$scope.iterations=0;
		var estimate=(food.weight*creature.maxfoodrate*creature.desiredbabybuffer*60)/(creature.finalweight*food.food*foodmult+food.weight*creature.foodratedecay*creature.maturationtime*creature.desiredbabybuffer*60)
		stacklist[foodname]=0;
		while ($scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time']<creature.desiredbabybuffer*60) {
			estimate+=0.01;
			stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
			creaturelist[0]['maturation']=estimate;
		}
		while ($scope.troughsim(creaturelist, stacklist, $scope.troughtypes['Normal'])['time']>creature.desiredbabybuffer*60) {
			estimate-=0.001;
			stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
			creaturelist[0]['maturation']=estimate;
		}
		estimate+=0.001;
		stacklist[foodname]=creature.finalweight*estimate/food.weight/food.stack;
		creaturelist[0]['maturation']=estimate;
		creature.timeuntildesiredbabybuffer=Math.max(0, creature.maturationtime*(estimate-creature.maturationprogress));
		creature.timeuntildesiredbabybuffermaturation=estimate;
		//alert("Desired buffer "+$scope.iterations);
	}

	$scope.getfoodforperiod=function(start, end, creature) {
		creaturedata=$scope.creatures[creature.name];
		end=Math.min(creature.maturationtime, end);
		end=Math.max(start, end);
		startfoodrate=creature.maxfoodrate-creature.foodratedecay*start;
		endfoodrate=creature.maxfoodrate-creature.foodratedecay*end;
		totaltime=end-start;
		return 0.5*totaltime*(startfoodrate-endfoodrate)+endfoodrate*totaltime;
	}

	$scope.troughaddcreature=function() {
		$scope.creaturelist.push({
			name: $scope.creature.name,
			maturation: $scope.creature.maturationprogress,
			quantity: 1
		});
		$scope.troughupdatefoodtypes();
		$scope.troughcalc();
	}

	$scope.troughremovecreature=function(index) {
		$scope.creaturelist.splice(index, 1);
		$scope.troughupdatefoodtypes();
		$scope.troughcalc();
	}

	$scope.troughupdatefoodtypes=function() {
		var activefoodtypes=new Set([]);
		for (var i=0;i<$scope.creaturelist.length;i++) {
			var creaturefoodlist=$scope.foodlists[$scope.creatures[$scope.creaturelist[i].name].type];
			for (var j in creaturefoodlist) {
				activefoodtypes.add(creaturefoodlist[j]);
			}
		}
		var newstacklist={};
		for (var i in $scope.foodlist) {
			if (activefoodtypes.has($scope.foodlist[i])) {
				if ($scope.troughstacks[$scope.foodlist[i]]!=undefined) {
					newstacklist[$scope.foodlist[i]]=$scope.troughstacks[$scope.foodlist[i]];
				} else {
					newstacklist[$scope.foodlist[i]]=0;
				}
			}
		}
		$scope.troughstacks=newstacklist;
	}

	$scope.troughcalc=function() {
		$scope.troughdata=$scope.troughsim($scope.creaturelist, $scope.troughstacks, $scope.troughtypes[$scope.settings.troughtype]);
	}

	$scope.troughsim=function(creaturelist, troughstacks, troughmultiplier) {
		$scope.iterations++;
		foodorder=$scope.foodorder;
		troughcreatures=[];

		if (creaturelist.length==0) {
			return;
		}

		//Make stacks for calculation
		stacks=[]; //Actual stacks
		totalstacks={}; //Total stacks of each type
		totalstacks['all']=0; //Number of stacks total, all types
		times={};
		for (i=0; i<foodorder.length; i++) {
			foodname=foodorder[i];
			if (troughstacks[foodname]===undefined) {
				continue;
			}
			totalstacks['all']+=Math.ceil(troughstacks[foodname]);
			totalstacks[foodname]=Math.ceil(troughstacks[foodname]);
			fullstacks=Math.floor(troughstacks[foodname]);
			partialstack=(troughstacks[foodname]-fullstacks);
			for (j=0; j<troughstacks[foodname]; j++) {
				stacks.push({
					"type": foodname, //Name of this food
					"stacksize": $scope.foods[foodname].stack, //Size of this stack
					"stackspoil": $scope.foods[foodname].spoil*troughmultiplier, //Actual spoil timer that decrements for this stack (variable)
					"foodspoil": $scope.foods[foodname].spoil*troughmultiplier, //Spoil time for this food in general (constant)
					"food": $scope.foods[foodname].food, //Food provided
					"waste": $scope.foods[foodname].waste}); //Waste (eg cooked meat wastes 25 because cooking turns 50 food into 25)
			}
			if (stacks.length>0 && partialstack>0) {
				stacks[j-1]['stacksize']=Math.floor(stacks[j-1]['stacksize']*partialstack);
				if (stacks[j-1]['stacksize']==0) {
					totalstacks[foodname]--;
					totalstacks['all']--;
				}
			}
		};

		//Make creatures for calcualtion
		for (i=0;i<creaturelist.length;i++) {
			for (j=0;j<creaturelist[i].quantity;j++) {
				name=creaturelist[i].name;
				newcreature={};
				newcreature.name=name;
				newcreature.maturation=creaturelist[i].maturation;
				newcreature.maturationtime=1/$scope.creatures[name].agespeed/$scope.creatures[name].agespeedmult/$scope.settings.maturationspeed;
				newcreature.maturationtimecomplete=newcreature.maturationtime*newcreature.maturation;
				newcreature.maxfoodrate=$scope.creatures[name].basefoodrate*$scope.creatures[name].babyfoodrate*$scope.creatures[name].extrababyfoodrate*$scope.settings.consumptionspeed;
				newcreature.minfoodrate=$scope.settings.baseminfoodrate*$scope.creatures[name].babyfoodrate*$scope.creatures[name].extrababyfoodrate*$scope.settings.consumptionspeed;
				newcreature.foodratedecay=(newcreature.maxfoodrate-newcreature.minfoodrate)/newcreature.maturationtime;
				newcreature.foodrate=newcreature.maxfoodrate-newcreature.foodratedecay*newcreature.maturation*newcreature.maturationtime;
				newcreature.hunger=0;
				newcreature.foods=$scope.foodlists[$scope.creatures[name].type];
				newcreature.foodmultipliers=$scope.creatures[name].foodmultipliers;
				newcreature.wastemultipliers=$scope.creatures[name].wastemultipliers;
				troughcreatures.push(newcreature);
				times[$scope.creatures[name].type]=0;
			}
		}

		spoiledpoints=0;
		spoiledfood=0;
		eatenpoints=0;
		eatenfood=0;
		wastedpoints=0;
		hunger=0;

		//Trough sim
		time=0;
		while (totalstacks['all']>0 && time<60*60*24*3) {
			time++;

			for (i=0;i<troughcreatures.length;i++) {
				if (troughcreatures[i].foodrate<troughcreatures[i].minfoodrate) {
					continue; //Creature is adult
				}

				troughcreatures[i].foodrate-=troughcreatures[i].foodratedecay;
				troughcreatures[i].hunger+=troughcreatures[i].foodrate;

				if (troughcreatures[i].hunger<20) {
					continue; //Creature cannot possibly eat below this
				}

				for (currentstack=0;currentstack<stacks.length;currentstack++) {
					if (stacks[currentstack]['stacksize']>0 && troughcreatures[i].foods.indexOf(stacks[currentstack]['type'])>-1) {
						foodmult=troughcreatures[i].foodmultipliers[stacks[currentstack]['type']];
						wastemult=troughcreatures[i].wastemultipliers[stacks[currentstack]['type']];
						if (stacks[currentstack]['food']*foodmult<troughcreatures[i].hunger) {
							times[$scope.creatures[troughcreatures[i].name].type]=time;
							stacks[currentstack]['stacksize']--;
							eatenfood++;
							eatenpoints+=stacks[currentstack]['food']*foodmult;
							wastedpoints+=stacks[currentstack]['waste']*wastemult;
							troughcreatures[i].hunger-=stacks[currentstack]['food']*foodmult;
							if (stacks[currentstack]['stacksize']==0) {
								totalstacks['all']--;
								totalstacks[stacks[currentstack]['type']]--;
							}
						}
						break;
					}
				}
			}

			//Spoil timers / spoiling
			for (i=0;i<stacks.length;i++) {
				stacks[i]['stackspoil']--; //Reduce spoil timer by one
				if (stacks[i]['stackspoil']<=0 && stacks[i]['stacksize']>0) { //Spoil timer passed, spoil a food
					stacks[i]['stacksize']--;
					stacks[i]['stackspoil']=stacks[i]['foodspoil'];
					spoiledfood++;
					spoiledpoints+=stacks[i]['food'];
					wastedpoints+=stacks[i]['waste'];
					if (stacks[i]['stacksize']==0) {
						totalstacks['all']--;
						totalstacks[stacks[i]['type']]--;
					}
				}
			}

		}

		output={
			time: time,
			times: times,
			totalfood: eatenfood+spoiledfood,
			totalpoints: eatenpoints+spoiledpoints+wastedpoints,
			eatenfood: eatenfood,
			eatenpoints: eatenpoints,
			spoiledfood: spoiledfood,
			spoiledpoints: spoiledpoints,
			wastedpoints: wastedpoints
		}

		var now=new Date();
		$cookies.putObject('creaturelist', $scope.creaturelist, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
		$cookies.putObject('troughdata', $scope.troughdata, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
		$cookies.putObject('troughstacks', $scope.troughstacks, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});

		return output;
	}

	$scope.switchcreature();
	$scope.troughupdatefoodtypes();

}]);