// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        document.getElementById('scan').addEventListener('click', this.scan, false);
        
        
        console.log('lauft');
        //hier kommt die online/offline prüfung, wenn online .. kein problem die daten werden vom webservice aufgerufen dabei sollen aber auch
        //die daten auf dem lokalen gerät gespeichert werden. 
        // wenn offline, dann direkt auf dem loakeln gerät zugreifen und von dort aus die daten laden.

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
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
} )();