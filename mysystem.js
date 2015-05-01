var os = require('os');

var message = "Here is your info about system: ";

var sysarray = new Array('Type: '+os.type(),
                         'Node Version: '+process.version,
                         'Platform: '+os.platform(),
                         'Hostname: '+os.hostname(),
                         'Total memory: '+os.totalmem(),
                         'Free memory: '+os.freemem(),
                         'Updatime: '+os.uptime()
                         );

console.log(message);

var arraylen = sysarray.length;

i = 0;
while (i < arraylen){
    console.log(sysarray[i]);
    i++;
}
