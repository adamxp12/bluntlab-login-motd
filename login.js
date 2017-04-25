var colour = require('colour'),
    os = require('os'),
    getos = require('getos'),
    osName = require('os-name'),
    pretty = require('prettysize'),
    humanizeDuration = require('humanize-duration')

//hostname
console.log("    "+"Welcome to ".grey+os.hostname().rainbow.bold);

//os type and version (if linux then run getos instead for proper distro recognition)
if(os.type() === "linux") {
    getos(function(e,os) {
        if(e) return console.log(e)
        console.log("OS:".grey +os.os+" Distro: ".grey+os.dist+" Ver:".grey+os.release)
    })
} else {
    console.log("    "+"OS:".grey+osName().yellow.bold+" Ver: ".grey+os.release().yellow.bold)
}

//mem
 console.log("    "+"Memory: ".grey.bold+" Free: ".grey+pretty(os.freemem()).red.bold + " Used: ".grey + pretty(os.totalmem() - os.freemem()).green.bold + " Total: ".grey + pretty(os.totalmem()).blue.bold)
//uptime
 console.log("    "+"Uptime: ".grey+humanizeDuration(1000 * Math.round(os.uptime())).cyan.bold)