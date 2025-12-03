//Toggle chat after initial trigger by the bottom chat icon
function toggleChat() {
      const chatIframe = document.querySelector("iframe[src*='chatbase.co']");
      if (chatIframe) {
        chatIframe.parentElement.style.display = 
          (chatIframe.parentElement.style.display === "none") ? "block" : "none";
      }
};

//Chatbase embed code
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};
    window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");
    script.src="https://www.chatbase.co/embed.min.js";
    script.id="rmdc0iWzcDCV--_mPxx5H";
    script.domain="www.chatbase.co";
    document.body.appendChild(script)};
    if(document.readyState==="complete"){onLoad()}
    else{window.addEventListener("load",onLoad)}})();
    

//API configuration 
window.chatbaseConfig = {
      chatbotId: "rmdc0iWzcDCV--_mPxx5H",
};