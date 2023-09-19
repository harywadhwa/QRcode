import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";
 
 
inquirer.prompt([
    {
        name:"url",
        message:"please enter your website url"
    },
]).then(ans => {
    var qr_svg = qr.image(ans.url, { type: 'svg' });
qr_svg.pipe(fs.createWriteStream('url.svg'));
 
var svg_string = qr.imageSync(ans.url, { type: 'svg' });
 
fs.writeFile("urlfile.txt",ans.url, (err) => {
    if(err) throw err;
    console.log("file successfully generated");
});
 
});