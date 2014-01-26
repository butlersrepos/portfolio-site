var tickSpeedInMS = 100;

$(document).ready( function() {
	$(document).on('selectstart', function(event) { 
		return false;
	});
	$(document).on('dragstart', function(event) { 
		return false;
	});
	bindCloudSpawnKey();
	tick();
	var minX = $('#mainContentDiv').position().left - 100;
	var maxX = $('#mainContentDiv').position().left - 10;
	var minY = $('#mainContentDiv').position().top + 10;
	var maxY = $('#mainContentDiv').position().top + 50;
	
	while( Cloud.prototype.allClouds.length < 6 ) {
		var randX = Math.floor((Math.random()*maxX) + minX);
		var randY = Math.floor((Math.random()*maxY) + minY);
		
		Cloud.prototype.spawnCloud(randX, randY);
	}
});

function bindCloudSpawnKey() {
	$(document).on( 'keypress', function(event) {
		var KEY_C = 99;
		if( event.keyCode == KEY_C ) {
			var minX = $('#mainContentDiv').position().left - 100;
			var maxX = $('#mainContentDiv').position().left - 10;
			var minY = $('#mainContentDiv').position().top + 10;
			var maxY = $('#mainContentDiv').position().top + 50;
			
			var randX = Math.floor((Math.random()*maxX) + minX);
			var randY = Math.floor((Math.random()*maxY) + minY);
			
			Cloud.prototype.spawnCloud(randX, randY);
		}
	});
};

function tick() {
	setTimeout('tick()', tickSpeedInMS);
	
	// Stuff to do in ticks
	
	// Move and draw clouds
	$.each( Cloud.prototype.allClouds, function(index, value) {
		if( this.xPos > $('#mainContentDiv').position().left + $('#mainContentDiv').width() + 100 ) {
			this.destroy();
		} else {
			this.driftRight(true);
			this.redraw();
		}
	});
}

// Cloud class
function Cloud(x,y, img) {
	this.xPos = x;
	this.yPos = y;
	this.image = img;

	var that = this;
	$(this.image).on( 'mousedown', function(event) {
		that.destroy();
	});
	
	this.redraw = function() {
		$(this.image).css({'top':this.yPos,
							'left':this.xPos});
	};
	
	this.driftRight = function(stagger) {
		if( typeof stagger !== 'boolean' ) { stagger = false; }
		this.xPos++;
		if( stagger ) {
			var result = Math.floor((Math.random()*3)+1);
			if( result == 1 ) { this.yPos--; }
			if( result == 3 ) { this.yPos++; }
		}
	};
	
	this.destroy = function() {
		Cloud.prototype.allClouds.splice( Cloud.prototype.allClouds.indexOf(this), 1);
		this.xPos = undefined;
		this.yPos = undefined;
		$(this.image).remove();
		this.redraw = undefined;
		this.driftRight = undefined;
		this.destroy = undefined;
	};
	
	this.redraw();
};

Cloud.prototype.allClouds = new Array();
Cloud.prototype.spawnCloud = function(x,y) {
	var img =  $('#cloudTemplate').clone().removeAttr('id').appendTo( $('body') ).show();
	var c = new Cloud(x,y,img);
	
	Cloud.prototype.addCloud(c);
};
Cloud.prototype.addCloud = function(cloud) {
	if( cloud.constructor.name === 'Cloud' ) {
		Cloud.prototype.allClouds.push(cloud);
	} else {
		console.log("WARNING - Attempted to add a non-Cloud object to the array of All Clouds!");
	}
};
Cloud.prototype.removeCloud = function(cloud) {
	if( cloud.constructor.name === 'Cloud' ) {
		
	} else {
		console.log("WARNING - Attempted to remove a non-Cloud object from the array of All Clouds!");
	}
};
Cloud.prototype.getAllClouds = function() {
	return allClouds;
};