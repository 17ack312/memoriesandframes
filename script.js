window.watsonAssistantChatOptions = {
      integrationID: "3e7dc19e-180a-458d-8398-dd3e2138f409", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "33099d20-d6a3-4d12-ab4f-d9ec5890adff", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });

  function go() {
window.open("https://api.whatsapp.com/send/?phone=918240236950&text=Hi","_blank");
}

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function AutoRefresh( t ) {
   setTimeout("location.reload(true);", t);
    }
//AutoRefresh(600000);