function setSignalStrength(el, level) {
	$(el+" > .signal-bar").removeClass('signal-bar-filled');
	for(i=1; i <= level; i++) {
		$(el+" > .signal-bar-"+i).addClass('signal-bar-filled');
	}
}

// jQuery variation
$.fn.setSignalStrength = function(level) {
	this.children(".signal-bar").removeClass('signal-bar-filled');
	for(i=1; i <= level; i++) {
		this.children(".signal-bar-"+i).addClass('signal-bar-filled');
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

// jQuery variation
$.fn.updateRSSI = function(rssi) {
	if(rssi < -87) {
		this.setSignalStrength(0);
	} else if(rssi < -82) {
		this.setSignalStrength(1);
	} else if(rssi < -77) {
		this.setSignalStrength(2);
	} else if(rssi < -72) {
		this.setSignalStrength(3);
	} else if(rssi < -67) {
		this.setSignalStrength(4);
	} else {
		this.setSignalStrength(5);
	}
}
