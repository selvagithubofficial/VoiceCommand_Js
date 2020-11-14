var speakbtn=document.getElementById("speakbtn");
var body=document.getElementById("body"),para=document.getElementsByTagName("h2");
var  speechre_recognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new speechre_recognition();
const  utterance_obj=window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;
let utterance=new utterance_obj();
const speech_synthesis=window.speechSynthesis || window.webkitspeechSynthesis;
utterance.rate=1;utterance.pitch=1;utterance.volume=1;
speakbtn.addEventListener("click",spk_start)
icon_lison=document.createElement("i");
recognition.onstart=function () {
  console.log("onstarted");
  icon_lison.setAttribute("class","fa fa-spinner fa-spin fa-2x fa-fw");
  speakbtn.innerHTML="";
  speakbtn.appendChild(icon_lison);
}
recognition.onresult=function (e) {
  console.log(e);
  icon_lison.removeAttribute("class");
  speakbtn.innerHTML="DONE ! are you continue your voice command";
  let res_indx=e.resultIndex;
  let {transcript}=e.results[res_indx][0];
  speak_out_to_User(transcript);
  dark_light_mode(transcript);
  console.log(transcript);
}
function spk_start() {
  console.log("working")
  recognition.start();
}
function speak_out_to_User(msg) {
  utterance.text=msg;
  //speech_synthesis.speak(utterance);
}
function dark_light_mode(msg) {
  if(msg.includes("dark")){
    utterance.text=msg+"Mode enabled ";
    body.classList.add("dark");
    para[0].innerHTML=utterance.text=msg+" enabled";
    speech_synthesis.speak(utterance);
    console.log(speech_synthesis);
  }
  else if(msg.includes("light"))
  {
  para[0].innerHTML=utterance.text=msg+"Mode enabled ";
  body.classList.remove("dark");
  speech_synthesis.speak(utterance);
  console.dir(speech_synthesis);
  }
  else if(msg.includes("who are you"))
  {
  para[0].innerHTML=utterance.text="i am javascript artifiial intelligent . My name is vivo v11. how can i help you?";
  speech_synthesis.speak(utterance);
  }
  else if(msg.includes("YouTube"))
  {
  para[0].innerHTML=utterance.text="youtube opening";
  speech_synthesis.speak(utterance);
  window.open("https://www.youtube.com/");
  }
  else if(msg.includes("open Gmail"))
  {
  para[0].innerHTML=utterance.text="Your gmail account is opening";
  speech_synthesis.speak(utterance);
  window.open("https://mail.google.com/mail/u/0/");
  }
  else if(msg.includes("open Twitter"))
  {
  para[0].innerHTML=utterance.text="Twitter opening";
  speech_synthesis.speak(utterance);
  window.open("https://twitter.com/explore");
  }
  else if(msg.includes("story"))
  {
  para[0].innerHTML=utterance.text="A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun. This disturbed the lion’s sleep, and he woke up quite angry. He was about to eat the mouse when the mouse desperately requested the lion to set him free. “/I promise you, I will be of great help to you someday if you save me.”/ The lion laughed at the  mouse’s confidence and let him go. One day, a few hunters came into the forest and took the lion with them. They tied him up against a tree. The lion was struggling to get out and started to whimper. Soon, the mouse walked past and noticed the lion in trouble. Quickly, he ran and gnawed on the ropes to set the lion free. Both of them sped off into the jungle. Moral of the Story. A small act of kindness can go a long way.";
  speech_synthesis.speak(utterance);
  }
  else if(msg.includes("news"))
  {
  para[0].innerHTML=utterance.text="polimer news opening";
  speech_synthesis.speak(utterance);
  window.open("https://www.youtube.com/watch?v=Vq-9xWMiiVQ");
  }
  else if(msg.includes("Amazon"))
  {
  para[0].innerHTML=utterance.text="Amazon opening";
  speech_synthesis.speak(utterance);
  window.open("https://www.amazon.in/");
  }
  else if(msg.includes("song") || msg.includes("favorite"))
  {
  para[0].innerHTML=utterance.text="Selva your favorite song is opening";
  speech_synthesis.speak(utterance);
  window.open("https://youtu.be/OjU54VhRFbU");
  }
  else if(msg.includes("designer"))
  {
  para[0].innerHTML=utterance.text="There are 4 members in designer team";
  speech_synthesis.speak(utterance);
  }
  else if(msg.includes("developer"))
  {
  para[0].innerHTML=utterance.text="There are 5 members in developer's team";
  speech_synthesis.speak(utterance);
  }
}






























var arr=[1,2,3,4,5,1,1,6,7,8,6,9,7,8,10,11];
var arr1=[];
// for (let i = 0; i < arr.length; i++) {
//   let ispresnt=false;
//     for (let j = 0; j < arr1.length; j++) {
//        if(arr[i]===arr1[j])
//        {
//         ispresnt=true;
//         break;
//        }
     
//     }
//     if(!ispresnt){
//       arr1.push(arr[i]);
//     }
//   }
// console.log(arr1);
const arr2=[...new Set(arr)];
console.log(arr2)
