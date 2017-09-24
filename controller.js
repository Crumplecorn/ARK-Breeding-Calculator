var breedingController=angular.module('breedingControllers', []).controller('breedingController', ['$scope', '$interval', '$cookies', '$animate', function($scope, $interval, $cookies, $animate) {

	var defaultmult = {
  		get: function(target, name) {
   			return target.hasOwnProperty(name) ? target[name] : 1;
  		}
	};

	$scope.foods={

		'Raw Meat': {
			food: 50,
			stack: 20,
			spoil: 10*60,
			weight: 0.1,
			waste: 0
		},

		'Cooked Meat': {
			food: 25,
			stack: 30,
			spoil: 20*60,
			weight: 0.1,
			waste: 25
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
		}

	}

	$scope.foodlists={
		Carnivore: ['Raw Meat', 'Cooked Meat'],
		Herbivore: ['Mejoberry', 'Berry'],
		Omnivore: ['Raw Meat', 'Cooked Meat', 'Mejoberry', 'Berry']
	}

	$scope.foodlist=['Raw Meat', 'Berry', 'Cooked Meat', 'Mejoberry', 'Kibble']

	$scope.foodorder=['Raw Meat', 'Berry', 'Cooked Meat', 'Mejoberry', 'Kibble']

	$scope.creatures={

		Ankylosaurus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			eggspeed: 0.005556,
			eggspeedmult: 1.9,
			weight: 250
		},

		Angler: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 350
		},

		Argentavis: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.7,
			eggspeed: 0.005556,
			eggspeedmult: 1.7,
			weight: 350.0
		},

		Brontosaurus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.007716,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 900.0
		},

		Carbonemys: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.0,
			eggspeed: 0.005556,
			eggspeedmult: 4.0,
			weight: 250.0
		},

		Carnotaurus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001852,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 300.0
		},

		Castoroides: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.5,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 300
		},

		Compsognathus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 6.0,
			weight: 25
		},

		Daeodon: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Carnivore,
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

		Dilophosaurus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 45
		},

		Dimetrodon: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001736,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2,
			eggspeed: 0.005556,
			eggspeedmult: 2,
			weight: 250
		},

		Dimorphodon: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.7,
			eggspeed: 0.005556,
			eggspeedmult: 3.7,
			weight: 50
		},

		Diplodocus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.007716,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 800.0
		},

		"Direbear": {
			birthtype: "Gestation",
			foods: $scope.foodlists.Omnivore,
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2,
			gestationspeed: 0.000035,
			gestationspeedmult: 2,
			weight: 650.0
		},

		"Direwolf": {
			birthtype: "Gestation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 170.0
		},

		Dodo: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 6.0,
			eggspeed: 0.005556,
			eggspeedmult: 6.0,
			weight: 50.0
		},

		Doedicurus: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.6,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.6,
			weight: 250.0
		},

		Gallimimus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 230
		},

		Giganotosaurus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.002314,
			babyfoodrate: 45.0,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.33,
			eggspeed: 0.005556,
			eggspeedmult: 0.1,
			weight: 700
		},

		Gigantopithecus: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.004156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.2,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.2,
			weight: 220.0
		},

		Kairuku: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001389,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.3,
			eggspeed: 0.005556,
			eggspeedmult: 3.3,
			weight: 70
		},

		Mammoth: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.004133,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.125,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 500
		},

		Megaloceros: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.3,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.3,
			weight: 220.0
		},

		Mesopithecus: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.000868,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 3.0,
			weight: 70.0
		},

		Oviraptor: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001302,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 4.4,
			eggspeed: 0.005556,
			eggspeedmult: 4.4,
			weight: 100.0
		},

		Ovis: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 90
		},

		Pachycephalosaurus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 150.0
		},

		Paraceratherium: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.0035,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.0,
			weight: 500.0
		},

		Parasaurolophus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 3.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.5,
			weight: 255.0
		},

		Phiomia: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			gestationspeed: 0.000035,
			gestationspeedmult: 0.8,
			weight: 200.0
		},

		Procoptodon: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.001929,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 450.0
		},

		Pteranodon: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 150.0
		},

		Quetzalcoatlus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.0035,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.5,
			eggspeed: 0.005556,
			eggspeedmult: 0.3,
			weight: 820
		},

		Raptor: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.5,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 140.0
		},

		Rex: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20,
			agespeed: 0.000003,
			agespeedmult: 1.0,
			eggspeed: 0.005556,
			eggspeedmult: 1.0,
			weight: 500
		},

		Sabertooth: {
			birthtype: "Gestation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001543,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.9,
			gestationspeed: 0.000035,
			gestationspeedmult: 1.9,
			weight: 200.0
		},

		Sarcosuchus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001578,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 300.0
		},

		Spinosaurus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.002066,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.3,
			eggspeed: 0.005556,
			eggspeedmult: 1.3,
			weight: 350.0
		},

		Stegosaurus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.005341,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 1.8,
			eggspeed: 0.005556,
			eggspeedmult: 1.8,
			weight: 440.0
		},

		"Terror Bird": {
			birthtype: "Incubation",
			foods: $scope.foodlists.Carnivore,
			basefoodrate: 0.001578,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2,
			eggspeed: 0.005556,
			eggspeedmult: 2.5,
			weight: 120.0
		},

		Therizinosaurus: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.002314,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 0.8,
			eggspeed: 0.005556,
			eggspeedmult: 3.0,
			weight: 365.0
		},

		Triceratops: {
			birthtype: "Incubation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			eggspeed: 0.005556,
			eggspeedmult: 2.0,
			weight: 365.0
		},

		"Woolly Rhino": {
			birthtype: "Gestation",
			foods: $scope.foodlists.Herbivore,
			basefoodrate: 0.003156,
			babyfoodrate: 25.5,
			extrababyfoodrate: 20.0,
			agespeed: 0.000003,
			agespeedmult: 2.0,
			gestationspeed: 0.000035,
			gestationspeedmult: 2.0,
			weight: 750.0
		}

	}

	for (creature in $scope.creatures) {
		$scope.creatures[creature]['foodmultipliers']=new Proxy($scope.creatures[creature]['foodmultipliers']===undefined ? {} : $scope.creatures[creature]['foodmultipliers'], defaultmult);
		$scope.creatures[creature]['wastemultipliers']=new Proxy($scope.creatures[creature]['wastemultipliers']===undefined ? {} : $scope.creatures[creature]['wastemultipliers'], defaultmult);
	}

	$scope.settings=$cookies.getObject('settings');
	if ($scope.settings==undefined || $scope.settings.version!="170914") {
		$scope.settings={
			version: "170914",
			consumptionspeed: 1,
			maturationspeed: 1,
			hatchspeed: 1,
			baseminfoodrate: 0.000155
		}
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
			name: "Argentavis"
		};
	}

	$scope.troughcreatures=$cookies.getObject("troughcreatures");
	if ($scope.troughcreatures==undefined) {
		$scope.troughcreatures=[];
	}

	$scope.troughstacks=$cookies.getObject("troughstacks");
	if (1==1 || $scope.troughstacks==undefined) {
		foodlist=$scope.foodlist;
		$scope.troughstacks={};
		for (i=0;i<foodlist.length;i++) {
			$scope.troughstacks[foodlist[i]]=0;
		}
	}

	$scope.troughdata=$cookies.getObject("troughdata");
	if ($scope.troughdata==undefined) {
		$scope.troughdata={
			type: undefined,
			time: 0,
			totalfood: 0,
			totalpoints: 0,
			eatenfood: 0,
			eatenpoints: 0,
			spoiledfood: 0,
			spoiledpoints: 0,
			wastedpoints: 0,
			linkfoodtabletotrough: 0,
			lossfactor: 0,
			cutoff: 0
		}
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
			$scope.selectcreature();
		}
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
		$scope.selectcreature();
		$scope.troughcalc();
	}

	$scope.selectcreature=function() {
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

		$scope.foodunit=creaturedata.foods[0];

		$scope.selectweight();
		$scope.totalfoodcalc();
		$scope.babybuffercalc();
	}

	$scope.selectweight=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		creature.maturationprogress=creature.currentweight/creature.finalweight;

		$scope.maturationcalc();
	}

	$scope.selectmaturation=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		creature.currentweight=creature.finalweight*creature.maturationprogress;

		$scope.maturationcalc();
	}

	$scope.maturationcalc=function() {
		creature.maturationtimecomplete=creature.maturationtime*creature.maturationprogress;
		creature.maturationtimeremaining=creature.maturationtime-creature.maturationtimecomplete;
		creature.babytimeremaining=Math.max(0, creature.babytime-(creature.maturationtime*creature.maturationprogress));

		$scope.babybuffercalc();
	}

	$scope.totalfoodcalc=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		creature.totalfood=$scope.getfoodforperiod(0, creature.maturationtime, $scope.creature);
		creature.babyfood=$scope.getfoodforperiod(0, creature.babytime, $scope.creature);
		if (!$scope.troughdata.linkfoodtabletotrough) {
			creature.foodforday={};
			day=1;
			food=$scope.getfoodforperiod((day-1)*24*60*60, day*24*60*60, $scope.creature);
			while (food>0 && day<20) {
				creature.foodforday[day]=food+food*$scope.troughdata.lossfactor/100;
				day++;
				food=$scope.getfoodforperiod((day-1)*24*60*60, day*24*60*60, $scope.creature);
			}
		}
	}

	$scope.babybuffercalc=function() {
		creature=$scope.creature;
		creaturedata=$scope.creatures[creature.name];
		food=$scope.foods[$scope.foodunit];
		creature.currentbabybuffer=creature.currentweight/$scope.foods[$scope.foodunit].weight*$scope.foods[$scope.foodunit].food/(creature.maxfoodrate-creature.foodratedecay*creature.maturationtimecomplete);
		creature.maxbabybuffer=creature.finalweight/10/$scope.foods[$scope.foodunit].weight*$scope.foods[$scope.foodunit].food/(creature.maxfoodrate-creature.foodratedecay*creature.babytime);
		creature.timeuntildesiredbabybuffer=Math.max(0,(creature.desiredbabybuffer*60*creature.babytime*food.weight*creature.maxfoodrate)/(creature.desiredbabybuffer*60*creature.babytime*food.weight*creature.foodratedecay+creature.finalweight/10*food.food)-creature.maturationtimecomplete);

		var now=new Date();
		$cookies.putObject('creature', $scope.creature, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
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
		$scope.troughcreatures.push({
			name: $scope.creature.name,
			maturation: $scope.creature.maturationprogress,
			finalweight: $scope.creature.finalweight
		});
		$scope.troughcalc();
	}

	$scope.troughremovecreature=function(index) {
		$scope.troughcreatures.splice(index, 1);
		$scope.troughcalc();
	}

	$scope.troughcalc=function() {
		troughcreatures=$scope.troughcreatures;
		troughstacks=$scope.troughstacks;
		foodorder=$scope.foodorder;

		if (troughcreatures.length==0) {
			return;
		}

		stacks=[];
		totalstacks={};
		totalstacks['all']=0;
		for (i=0; i<foodorder.length; i++) {
			foodname=foodorder[i];
			totalstacks['all']+=troughstacks[foodname]*1;
			totalstacks[foodname]=troughstacks[foodname];
			for (j=0; j<troughstacks[foodname]; j++) {
				stacks.push({
					"type": foodname, //Name of this food
					"stacksize": $scope.foods[foodname].stack, //Size of this stack
					"stackspoil": $scope.foods[foodname].spoil*4, //Actual spoil timer that decrements for this stack (variable)
					"foodspoil": $scope.foods[foodname].spoil*4, //Spoil time for this food in general (constant)
					"food": $scope.foods[foodname].food, //Food provided
					"waste": $scope.foods[foodname].waste}); //Waste (eg cooked meat wastes 25 because cooking turns 50 food into 25)
			}
		};

		for (i=0;i<troughcreatures.length;i++) {
			name=troughcreatures[i].name;
			troughcreatures[i].maturationtime=1/$scope.creatures[name].agespeed/$scope.creatures[name].agespeedmult/$scope.settings.maturationspeed;
			troughcreatures[i].maturationtimecomplete=troughcreatures[i].maturationtime*troughcreatures[i].maturation;
			troughcreatures[i].maxfoodrate=$scope.creatures[name].basefoodrate*$scope.creatures[name].babyfoodrate*$scope.creatures[name].extrababyfoodrate*$scope.settings.consumptionspeed;
			troughcreatures[i].minfoodrate=$scope.settings.baseminfoodrate*$scope.creatures[name].babyfoodrate*$scope.creatures[name].extrababyfoodrate*$scope.settings.consumptionspeed;
			troughcreatures[i].foodratedecay=(troughcreatures[i].maxfoodrate-troughcreatures[i].minfoodrate)/troughcreatures[i].maturationtime;
			troughcreatures[i].foodrate=troughcreatures[i].maxfoodrate-troughcreatures[i].foodratedecay*troughcreatures[i].maturation*troughcreatures[i].maturationtime;
			troughcreatures[i].hunger=0;
			troughcreatures[i].foods=$scope.creatures[name].foods;
			troughcreatures[i].foodmultipliers=$scope.creatures[name].foodmultipliers;
			troughcreatures[i].wastemultipliers=$scope.creatures[name].wastemultipliers;
		}

		spoiledpoints=0;
		spoiledfood=0;
		eatenpoints=0;
		eatenfood=0;
		wastedpoints=0;
		hunger=0;

		time=0;
		while (totalstacks['all']>0) {
			time++;

			for (i=0;i<troughcreatures.length;i++) { //Drop hunger rate over time and increment current hunger
				troughcreatures[i].foodrate-=troughcreatures[i].foodratedecay;
				troughcreatures[i].hunger+=troughcreatures[i].foodrate;

				for (currentstack=0;currentstack<stacks.length;currentstack++) {
					if (stacks[currentstack]['stacksize']>0 && troughcreatures[i].foods.indexOf(stacks[currentstack]['type'])>-1) {
						foodmult=troughcreatures[i].foodmultipliers[stacks[currentstack]['type']];
						wastemult=troughcreatures[i].wastemultipliers[stacks[currentstack]['type']];
						if (stacks[currentstack]['food']*foodmult<troughcreatures[i].hunger) {
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

		$scope.troughdata={
			type: $scope.troughdata.type,
			time: time,
			totalfood: eatenfood+spoiledfood,
			totalpoints: eatenpoints+spoiledpoints+wastedpoints,
			eatenfood: eatenfood,
			eatenpoints: eatenpoints,
			spoiledfood: spoiledfood,
			spoiledpoints: spoiledpoints,
			wastedpoints: wastedpoints,
			linkfoodtabletotrough: $scope.troughdata.linkfoodtabletotrough,
			lossfactor: $scope.troughdata.lossfactor,
			cutoff: $scope.troughdata.cutoff
		}

		if ($scope.troughdata.linkfoodtabletotrough) {

			foodforday={};
			day=1;
			food=0;
			for (i=0;i<troughcreatures.length;i++) {
				food+=$scope.getfoodforperiod(troughcreatures[i].maturationtimecomplete+(day-1)*24*60*60, troughcreatures[i].maturationtimecomplete+day*24*60*60, troughcreatures[i]);
			}
			while (food>0 && day<20) {
				foodforday[day]=food+food*$scope.troughdata.lossfactor/100;
				food=0;
				day++;
				for (i=0;i<troughcreatures.length;i++) {
					food+=$scope.getfoodforperiod(troughcreatures[i].maturationtimecomplete+(day-1)*24*60*60, troughcreatures[i].maturationtimecomplete+day*24*60*60, troughcreatures[i]);
				}
			}
			$scope.creature.foodforday=foodforday;

			var now=new Date();
			$cookies.putObject('creature', $scope.creature, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});

		}

		var now=new Date();
		$cookies.putObject('troughcreatures', $scope.troughcreatures, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
		$cookies.putObject('troughdata', $scope.troughdata, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
		$cookies.putObject('troughstacks', $scope.troughstacks, {expires: new Date(now.getFullYear(), now.getMonth()+6, now.getDate()), path: '/breeding'});
	}

	$scope.selectcreature();

}]);