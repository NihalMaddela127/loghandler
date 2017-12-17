const fs = require('fs-extra');
let path=require('path');
let del = require('node-delete');

for(i=0;i<7;i++){
        fs.createWriteStream('./CreatedFiles/log'+i+'.txt',{'flags':'w'})                
}
let dateLimit = new Date().getTime()-1;
let currentDir = __dirname + '\\CreatedFiles';
fs.readdir(currentDir, function(err, files) {
  files.forEach(function(file, index) {
    fs.stat(path.join(currentDir, file), function(err, stat) {
        let fileDate = new Date(stat.ctime).getTime();
        console.log(file+' '+ fileDate);
        if (fileDate < dateLimit) {
                del(path.join(currentDir, file), function(err) {
                        if (err) {
                          return console.error(err);
                        }
                });
        }
    });
});
});
