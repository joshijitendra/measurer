var self = require("sdk/self");
var tabs = require("sdk/tabs");

var worker=null;

var button = require("sdk/ui/button/toggle").ToggleButton({
  id: "measurer",
  label: "Measurer",
  icon: "./icon-16.png",
  onChange: handleChange

});


function handleChange(state) {

  if(worker === null) {

    worker = tabs.activeTab.attach({
      
      contentScriptFile: [ self.data.url("Event/Event.js"),
                           self.data.url("Dragdrop/Dragdrop.js"),
                           self.data.url("Measurer/Measurer.js"),
                           self.data.url("application.js") ]
    });

  } else {

    // pass message to remove DOM elements
    worker.port.emit("remove", "Message from the add-on");

    worker.port.on("response", function (location) {
       
       worker.destroy();

       worker = null;

    });


  }  

  
     // button.state("tab", { disabled: true });

  }