 // last update 2/18/2014 2:10:06 PM
        var jmolApplet0; // set up in HTML table, below
        var jmolApplet1;
        var jmolApplet2;
        var jmolApplet3;
        var jmolApplet4;
        var jmolApplet5;
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
        function jmspin() {
          var scpt;
          var jjj = document.getElementById("jmolspin").value;
          if  (jjj == "Spin off") {
            scpt = "Spin off;";
            document.getElementById("jmolspin").value = "Spin on";
          } else {
            scpt = "Spin on;";
            document.getElementById("jmolspin").value = "Spin off";
          }
          jms(scpt);
        }
        //jmol_isReady = function() { alert('Welcome to Jmol!'); }
        //jmol_isReady = function() {
        //$("#appdiv").html(Jmol.getAppletHtml("jmolApplet0", Info))
        //}

        var Info = {
            width: 800,
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
            script: "background white; set antialiasDisplay; load molecules/3v03.pdb; set frank off; Cartoon On; color chain; wireframe off; spacefill off;",
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
            script: "set antialiasDisplay; load molecules/bnsheet.xyz; set frank off; background white",
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
        var Info3 = {
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
            script: "background white; set antialiasDisplay; load molecules/goldbn.xyz; set frank off",
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
        var Info4 = {
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
            script: "background white; set antialiasDisplay; load molecules/PEEK.xyz; set frank off",
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
        var Info5 = {
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
            script: "background white; set antialiasDisplay; load molecules/BN_88.xyz; set frank off",
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
          $("#appdiv1").html(Jmol.getAppletHtml("jmolApplet0", Info))
          $("#appdiv2").html(Jmol.getAppletHtml("jmolApplet1", Info2))
          $("#appdiv3").html(Jmol.getAppletHtml("jmolApplet2", Info3))
          $("#appdiv4").html(Jmol.getAppletHtml("jmolApplet3", Info4))
          $("#appdiv5").html(Jmol.getAppletHtml("jmolApplet4", Info5))
          $("#jsmolbtnss").html(Jmol.jmolButton("jmolApplet0","select *;color chains; cartoon only;" ,"Peptide Chains") + Jmol.jmolButton("jmolApplet0", "select *; wireframe 0.15; spacefill 23%; cartoon off;","Atoms"))
          $("#jsmolbtnsc").html(Jmol.jmolButton("jmolApplet0", "select *; color cpk;","Elemental") + Jmol.jmolButton("jmolApplet0","select *;color amino" ,"Amino Acids"))
          $("#jmolspin").html(Jmol.jmolButton("jmolApplet0", "select *; color cpk;","Elemental") + Jmol.jmolButton("jmolApplet0","select *;color amino" ,"Amino Acids"))
        });


          //$("#appdiv1").html(Jmol.resizeApplet("jmolApplet0", [500,800]));
        var lastPrompt=0;
