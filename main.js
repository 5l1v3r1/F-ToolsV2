var p = require('inquirer');
var sh = require("shelljs");
var style = require("chalk");
var check = require("log-symbols");
var loading = require("ora");
var js = require("jsome");
var warna = require("colors");

console.log("  | \__/,|   ( (")
console.log("_.|o o  |_   ) )")
console.log("-(((---(((--------\n")
console.log(warna.rainbow("  { F-Tools }"))
console.log(style.green("[ Version 2.0 ]\n"))

js({Coder: "Fajar Firdaus",
    Fb: "Fajar Firdaus",
    Github: "FajarTheGGman",
    IG: "fajar_firdaus_7"})

console.log(style.red("[!] Kalo Gk Tau Password nya chat gw :)"))
console.log("\n")
p.prompt({
  type: "password",
  name: "data",
  message: "[ Masukan Password ] >_ ",
  mask: "*"
}).then(answers => {
  if(answers.data == "fajarfirdaus"){
    main();
  }else{
    console.log("[" + check.error + "]", "Username Atau Password Salah");
    process.exit(1);
  }
})

function main(){
  var pentesting = style.bgGreen("[ Main Tools ] ");
  var shellCustom = style.bgCyan("[ Shell Custom ]")

  p.prompt({
    type: "list",
    name: "tools",
    choices: [
      new p.Separator(pentesting),
      "[F-Tools]",
      "[Admin Search]",
      "[PhoneSpoofing]",
      "[Dork-Search]",
      "[Wikipedia Search]",
      "[WhoAreYou]",
      "[Text-Editor]",
      "[XSS-Exploiter]",
      "[Cryptograpy]",
      "[Text To Binary]",
      "[NetScan]",
      "[ReverseIP]",
      "[IGpentestingRM]",
      "[IpTracker]",
      "[CoderQuotes]",
      "[SqlBot]",
      "[CSRF-Uploader]",
      "[NetWorkSpoofing]",
      "[Tool-X]",
      "[OSIF]",
      "[RED_Hawk]",
      "[Firebase-Tools]",
      "[Striker]",
      new p.Separator(shellCustom),
      new p.Separator(style.red("[!] This Tools Only Work in termux")),
      "[ Oh My Zsh ]",
      "[ Oh My Fish ]",
      new p.Separator(style.bgRed("[ Exit ]")),
      "[ Exit ]"
    ]
  }).then(answers => {
    if(answers.tools == "[F-Tools]"){
      sh.exec("git clone https://github.com/FajarTheGGman/F-Tools")
        sh.exec("cd F-Tools");
        sh.exec("sh F-Tools.sh")
      }else if(answers.tools == "[Admin Search]"){
        sh.exec("git clone https://github.com/FajarTheGGman/AdminSearch");
        sh.exec("cd AdminSearch");
        sh.exec("node admin.ts")
      }else if(answers.tools == "[PhoneSpoofing]"){
        sh.exec("git clone https://github.com/FajarTheGGman/PhoneSpoofing")
        sh.exec("cd PhoneSpoofing");
        sh.exec("sh install.sh")
      }else if(answers.tools == "[Dork-Search]"){
        sh.exec("git clone https://github.com/FajarTheGGman/Dork-Search")
        sh.exec("cd Dork-Search")
        sh.exec("sh install.sh")
      }else if(answers.tools == "[Wikipedia Search]"){
        sh.exec("git clone https://github.com/FajarTheGGman/WikiPedia_Search")
        sh.exec("cd WikiPedia_Search")
        sh.exec("sh install.sh")
      }else if(answers.tools == "[WhoAreYou]"){
        sh.exec("git clone https://github.com/FajarTheGGman/WhoAreYou")
        sh.exec("cd WhoAreYou")
        sh.exec("sh install.sh")
      }else if(answers.tools == "[Text-Editor]"){
        sh.exec("git clone https://github.com/FajarTheGGman/Text-Editor")
        sh.exec("Text-Editor")
        sh.exec("ls");
      }else if(answers.tools == "[XSS-Exploiter]"){
        sh.exec("git clone https://github.com/FajarTheGGman/XSS-Exploiter")
        sh.exec("cd XSS-Exploiter")
        sh.exec("sh install.sh")
      }else if(answers.tools == "[Cryptography]"){
        sh.exec("git clone https://github.com/FajarTheGGman/Cryptography")
        sh.exec("cd Cryptography")
        sh.exec("sh install.sh")
      }else if(answers.tools == "[Text To Binary]"){
        sh.exec("git clone https://github.com/FajarTheGGman/TextToBinary")
        sh.exec("cd TextToBinary")
        sh.exec("sh install")
      }else if(answers.tools == "[ReverseIP]"){
        sh.exec("git clone https://github.com/FajarTheGGman/ReverseIP")
        sh.exec("cd ReverseIP")
        sh.exec("sh install.sh")
      }else if(answers.tools == "[IGINFORM]"){
        sh.exec("git clone https://github.com/FajarTheGGman/IGINFORM")
        sh.exec("cd IGpentestingRM")
        sh.exec("sh install")
      }else if(answers.tools == "[IpTracker]"){
        sh.exec("git clone https://github.com/FajarTheGGman/IpTracker")
        sh.exec("cd IpTracker")
        sh.exec("sh install.sh")
      }else if(answers.tools == "[CoderQuotes]"){
        sh.exec("git clone https://github.com/FajarTheGGman/CoderQuotes")
        sh.exec("cd CoderQuotes")
        sh.exec("node quotes.js")
      }else if(answers.tools == "[ Oh My Zsh]"){
        sh.exec("git clone https://github.com/Devarajankp/termux-ohmyzsh")
        sh.exec("cd termux-oh-my-zsh");
        sh.exec("sh install.sh")
      }else if(answers.tools == "[ Oh My Fish ]"){
        sh.exec("git clone https://github.com/oh-my-fish/oh-my-fish")
        sh.exec("cd oh-my-fish");
        sh.exec("bin/install");
      }else if(answers.tools == "[SqlBot]"){
        sh.exec("git clone https://github.com/FajarTheGGman/Sqlbot")
        sh.exec("cd Sqlbot")
        sh.exec("sh sqlbot.sh")
      }else if(answers.tools == "[CRSF-Uploader]"){
        sh.exec("git clone https://github.com/FajarTheGGman/CSRF-Uploader")
        sh.exec("cd CSRF-Uploader")
        sh.exec("sh install.sh")
      }else if(answers.tools == "[NetWorkSpoofing]"){
        sh.exec("git clone https://github.com/FajarTheGGman/NetWorkSpoofing")
        sh.exec("cd NetWorkSpoofing")
        sh.exec("sh NetWorkSpoofing.sh")
      }else if(answers.tools == "[Tool-X]"){
        sh.exec("git clone https://github.com/Rajkumrdusad/Tool-X")
        sh.exec("cd Tool-X")
        sh.exec("./install.aex")
      }else if(answers.tools == "[OSIF]"){
        sh.exec("git clone https://github.com/CiKu370/OSIF")
        sh.exec("cd OSIF")
        sh.exec("apt-get install python2 -y")
        sh.exec("pip2 install -r requirements.txt")
        sh.exec("python2 osif.py")
      }else if(answers.tools == "[RED_Hawk]"){
        sh.exec("git clone https://github.com/Tuhinshubhra/RED_HAWK")
        sh.exec("cd RED_HAWK")
        sh.exec("apt-get install php -y")
        sh.exec("php rhawk.php")
      }else if(answers.tools == "[Firebase-tools]"){
        sh.exec("npm install firebase-tools")
        sh.exec("firebase")
      }else if(answers.tools == "[Striker]"){
        sh.exec("git clone https://github.com/s0md3v/Striker")
        sh.exec("cd Striker")
        sh.exec("apt-get install python2 -y")
        sh.exec("pip2 install -r requirements.txt")
        sh.exec("python2 striker.py")
      }else if(answers.tools == "[ Exit ]"){
        process.exit(1);
      }
  })
}