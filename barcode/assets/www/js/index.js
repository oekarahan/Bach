var app = {
    initialize: function() {
        this.bindEvents();
    },
       
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('scan').addEventListener('click', this.scan, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },
    scan: function() {
        console.log('scanning');
        try {
            var scanner = cordova.require("cordova/plugin/BarcodeScanner");
            //var scanner = window.plugins.barcodeScanner;

            scanner.scan( function (result) { 

                /*alert("We got a barcode\n" + 
                "Result: " + result.text + "\n" + 
                "Format: " + result.format + "\n" + 
                "Cancelled: " + result.cancelled);  */

                console.log("Scanner result: \n" +
                    "text: " + result.text + "\n" +
                    "format: " + result.format + "\n" +
                    "cancelled: " + result.cancelled + "\n");
                console.log(result);
                $("#barcodeTypeContainer").html(result.format);
                $("#barcodeResultContainer").html(result.text);
            }, function (error) { 
                console.log("Scanning failed: ", error); 
            } );
        } catch (ex) {
            console.log(ex.message);
        }
    }

};
