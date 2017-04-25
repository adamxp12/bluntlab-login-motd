# bluntlab-login-motd
![bluntlabmotd](http://image.prntscr.com/image/5b4df0d5484b4b9c954668b9341d56b1.png)

A node script for displaying useful info on login.

Note this script does not automagicly set it's self to display as login, by default it simply displays stuff when you run it.

To get started just do `npm install bluntlab-login-motd -g` and it will then be usable as a command `bluntlabmotd`

If you are using CentOS or some other RHEL based linux distro you can add `bluntlabmotd` to the bottom of `/etc/profile` to display it on login.

The is a basic config file at `/usr/lib/node_modules/bluntlab-login-motd/config.js` which will allow you to add notes or roles to the MOTD.

Made for personal use, code is meh but I needed something quick that worked in both Windows and Linux. Should also work in Mac but have not done any testing.

Yes this could be done in bash but Node is cross platform and it is what I know best + I for the life of me can not get fancy colours with bash on CentOS
