 // last update 2/18/2014 2:10:06 PM
        var jmolApplet1; // set up in HTML table, below
        var jmolApplet0; // set up in HTML table, below
        // logic is set by indicating order of USE -- default is HTML5 for this test page, though
        var s = document.location.search;
        // Developers: The _debugCode flag is checked in j2s/core/core.z.js,
        // and, if TRUE, skips loading the core methods, forcing those
        // to be read from their individual directories. Set this
        // true if you want to do some code debugging by inserting
        // System.out.println, document.title, or alert commands
        // anywhere in the Java or Jmol code.
        
        Jmol._debugCode = (s.indexOf("debugcode") >= 0);
        
        jmol_isReady = function(applet) {
        //  document.title = (applet._id + " - Jmol " + ___JmolVersion)
            Jmol._getElement(applet, "appletdiv").style.border="0px solid blue"
        }
        //jmol_isReady = function() { alert('Welcome to Jmol!'); }
        //jmol_isReady = function() {
        //$("#appdiv").html(Jmol.getAppletHtml("jmolApplet0", Info))
        //}
        
        
        var Info = {
            width: 500,
            height: 500,
            debug: false,
            color: "transparent",
        //  color: "#111111",
        //        coverImage: "1fss.png",
        //        coverTitle: "TEST",
        //        deferApplet: true,
        //        deferUncover: true,
        //  addSelectionOptions: true,
            use: "HTML5",   // JAVA HTML5 WEBGL are all options
            j2sPath: "plugin/jsmol/j2s", // this needs to point to where the j2s directory is.
            jarPath: "plugin/jsmol/java",// this needs to point to where the java directory is.
            jarFile: "JmolAppletSigned.jar",
            isSigned: true,
        //  script: "set antialiasDisplay; set zoomLarge true; load jsmol/data/caffeine.mol",
            script: "set antialiasDisplay; load molecules/caffeine.xyz; set frank off",
        //        scr: 'test.spt',
        //        script: "set zoomLarge true",
        //  serverURL: "http://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
            readyFunction: jmol_isReady,
            disableJ2SLoadMonitor: true,
                disableInitialConsole: true,
                allowJavaScript: true,
                antialiasDisplay: true,
        //        script: "display not water",
        //        zoomScaling: 4.0
            //defaultModel: "$dopamine",
            //console: "none", // default will be jmolApplet0_infodiv, but you can designate another div here or "none"
        }
        var Info2 = {
            width: 500,
            height: 500,
            debug: false,
            color: "transparent",
        //  color: "#111111",
        //        coverImage: "1fss.png",
        //        coverTitle: "TEST",
        //        deferApplet: true,
        //        deferUncover: true,
        //  addSelectionOptions: true,
            use: "HTML5",   // JAVA HTML5 WEBGL are all options
            j2sPath: "plugin/jsmol/j2s", // this needs to point to where the j2s directory is.
            jarPath: "plugin/jsmol/java",// this needs to point to where the java directory is.
            jarFile: "JmolAppletSigned.jar",
            isSigned: true,
        //  script: "set antialiasDisplay; set zoomLarge true; load jsmol/data/caffeine.mol",
            script: "set antialiasDisplay; load xyz:molecules/bnsheet.xyz; set frank off",
        //        scr: 'test.spt',
        //        script: "set zoomLarge true",
        //  serverURL: "http://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
            readyFunction: jmol_isReady,
            disableJ2SLoadMonitor: true,
                disableInitialConsole: true,
                allowJavaScript: true,
                antialiasDisplay: true,
        //        script: "display not water",
        //        zoomScaling: 4.0
            //defaultModel: "$dopamine",
            //console: "none", // default will be jmolApplet0_infodiv, but you can designate another div here or "none"
        }
        var jmolcmds = [
        "set frank on",
        ]
        
        $(document).ready(function() {
        //  Jmol.getApplet("jmolApplet0", Info)
        //  $("#appdiv").html(Jmol.getAppletHtml("jmolApplet0"))
          $("#appdiv2").html(Jmol.getAppletHtml("jmolApplet1", Info2))
          $("#appdiv").html(Jmol.getAppletHtml("jmolApplet0", Info))
        })
        
        var lastPrompt=0;
        

