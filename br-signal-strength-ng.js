function setSignalStrength(el, level) {
	$(el+" > .signal-bar").removeClass('signal-bar-filled');
	for(i=1; i <= level; i++) {
		$(el+" > .signal-bar-"+i).addClass('signal-bar-filled');
	}
}

function updateRSSI(el, rssi) {
	if(rssi < -87) {
		setSignalStrength(el, 0);
	} else if(rssi < -82) {
		setSignalStrength(el, 1);
	} else if(rssi < -77) {
		setSignalStrength(el, 2);
	} else if(rssi < -72) {
		setSignalStrength(el, 3);
	} else if(rssi < -67) {
		setSignalStrength(el, 4);
	} else {
		setSignalStrength(el, 5);
	}
}

angular.module('bjrSignalStrength',[])
.directive('bjrSignalStrength', function() {
	function link(scope,element,attrs) {
		scope.barOne = scope.barOne || -87;
		scope.barTwo = scope.barTwo || -82;
		scope.barThree = scope.barThree || -77;
		scope.barFour = scope.barFour || -72;
		scope.barFive = scope.barFive || -67;

		function setSignalStrength(level) {
			$(element).children(".signal-bar").removeClass('signal-bar-filled');
			for(i=1; i <= level; i++) {
				$(element).children(".signal-bar-"+i).addClass('signal-bar-filled');
			}
		}

		function updateRSSI(rssi) {
			if(rssi < scope.barOne) {
				setSignalStrength(0);
			} else if(rssi < scope.barTwo) {
				setSignalStrength(1);
			} else if(rssi < scope.barThree) {
				setSignalStrength(2);
			} else if(rssi < scope.barFour) {
				setSignalStrength(3);
			} else if(rssi < scope.barFive) {
				setSignalStrength(4);
			} else {
				setSignalStrength(5);
			}
		}

		scope.$watch("ngModel",function(newValue,oldValue){
			if(newValue !== undefined) {
				updateRSSI(newValue);
			}
		})
	}

	return {
		restrict: 'E',
		link: link,
		scope: {
			rssi: "=ngModel",
			barOne: "=?",
			barTwo: "=?",
			barThree: "=?",
			barFour: "=?",
			barFive: "=?"
		},
		template:
			'<span class="signal-strength">' +
			'<div ng-class="{\'signal-bar-filled\': rssi > -87}" class="signal-bar signal-bar-1"></div>' +
			'<div ng-class="{\'signal-bar-filled\': rssi > -82}" class="signal-bar signal-bar-2"></div>' +
			'<div ng-class="{\'signal-bar-filled\': rssi > -77}" class="signal-bar signal-bar-3"></div>' +
			'<div ng-class="{\'signal-bar-filled\': rssi > -72}" class="signal-bar signal-bar-4"></div>' +
			'<div ng-class="{\'signal-bar-filled\': rssi > -67}" class="signal-bar signal-bar-5"></div>' +
			'</span>'
	}
})
