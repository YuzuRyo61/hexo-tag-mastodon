'use strict';

hexo.extend.tag.register('mastodon', function(args, content){

  var instanceAddress = "";
  var userId = "";
  var postId = "";
  var returnStr = "";

  if(args[0] && args[0].match(/https\:\/\/[a-zA-Z0-9\-.]+\/@[a-zA-Z0-9_]+\/[0-9]+/)){
    var urlVariable = args[0].match(/https\:\/\/([a-zA-Z0-9\-.]+)\/@([a-zA-Z0-9_]+)\/([0-9]+)/);
    instanceAddress = urlVariable[1];
    userId = urlVariable[2];
    postId = urlVariable[3];
  }

  if(instanceAddress != "" && userId != "" && postId != ""){
    returnStr = '<iframe src="https://'+instanceAddress+'/@'+userId+'/'+postId+'/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400"></iframe><script src="https://'+instanceAddress+'/embed.js" async="async"></script>';
  } else {
    returnStr = '<pre>hexo-tag-mastodon: Invalid URL Format</pre>'
  }

  return returnStr;
},{
  async: true,
  ends: false
})
