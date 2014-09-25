var evt = new Event(),
    dragdrop = new Dragdrop(evt),
    measurer = new Measurer(evt, dragdrop);

    measurer.enable();

self.port.on('remove', function(message) {
  
measurer.disable();

document.getElementById("measurer-area").remove();

clearBoxes();

self.port.emit('response', "done");

});


function clearBoxes () {

var elements = document.getElementsByClassName("draggable");


	for (var i = 0; i < elements.length; i++) {
		elements[i].remove();
	};
}