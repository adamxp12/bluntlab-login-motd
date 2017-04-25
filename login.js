#!/usr/bin/env node
var colour = require('colour'),
    os = require('os'),
    getos = require('getos'),
    osName = require('os-name'),
    pretty = require('prettysize'),
    humanizeDuration = require('humanize-duration'),
    cpuStat = require('cpu-stat'),
    config = require('./config');

//hostname
console.log("    "+"Welcome to ".grey+os.hostname().rainbow.bold);

//os type and version (if linux then run getos instead for proper distro recognition)
if(os.platform() === "linux") {
    getos(function(e,os) {
        if(e) return console.log(e)
        console.log("    OS: ".grey +colour.yellow(colour.bold(os.os))+" Distro: ".grey+colour.yellow(colour.bold(os.dist))+" Ver:".grey+colour.yellow(colour.bold(os.release)))
    })
} else {
    console.log("    "+"OS: ".grey+osName().yellow.bold+" Ver: ".grey+os.release().yellow.bold)
}

//mem
 console.log("    "+"Memory: ".grey.bold+" Free: ".grey+pretty(os.freemem()).red.bold + " Used: ".grey + pretty(os.totalmem() - os.freemem()).green.bold + " Total: ".grey + pretty(os.totalmem()).blue.bold)
//cpu
cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
    console.log("    "+"CPU: ".grey+os.cpus()[0].model.magenta.bold+" Usage: ".grey+colour.yellow(colour.bold(Math.round(percent)))+"%".yellow)
})

//roles
if(config.roles === "") {
    // My brain hurts, adding ! does not flip this if statement
} else {
    console.log("    "+"Roles: ".grey+config.roles.yellow.bold)
}

//notes
if(config.notes === "") {
    // My brain hurts, adding ! does not flip this if statement
} else {
    console.log("    "+"Notes: ".grey+config.notes.red.bold)
}

    
//uptime
 console.log("    "+"Uptime: ".grey+humanizeDuration(1000 * Math.round(os.uptime())).cyan.bold)
