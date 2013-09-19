/*** LINKS ***/
Unofficial Meteor FAQ: https://github.com/oortcloud/unofficial-meteor-faq
LESS doc for CSS compilation: http://lesscss.org/
Utility lib for JS: http://underscorejs.org/

/*** PACKAGE to check ***/
http://spiderable-404.meteor.com/

/*** Folder structure organization ***/
lib/     # <- any common code for client/server.
public/  # <- static files, such as images, that are served directly.
tests/   # <- unit test files (won't be loaded on client or server).
client/  # <- only run in the client.
server/  # <- only run on the server.

