
(function () {
    "use strict";
    
 document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
    
    	   console.log('lauft');
    	   
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
		document.getElementById('scan').addEventListener('click', this.scan, false);
        
        
     
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
    
    function scan(){
    
    console.log('scanning');
    
    };
	
	
} )();