
//file name for downloads
const fileName= document.getElementById("title");


//Image input functionality
const camera = document.getElementById("openCam");
const picArea= document.getElementById("picView");
camera.addEventListener("change", (event) => {
 const file= event.target.files[0];
  if (file) {
    const pic= document.createElement("img");
    pic.src = URL.createObjectURL(file);
    pic.style.width="250px";
    pic.style.height="250px";
    pic.style.margin="5px";
    pic.style.borderRadius="10px";
    picArea.appendChild(pic);
                
    const savePic=document.getElementById("savePic");
    
    savePic.addEventListener("click", () => {
      const blob= new Blob([file], {type: 'image/*'});
      const picUrl= URL.createObjectURL(blob);
      const an = document.createElement("a");
      an.href = picUrl;
      an.download= fileName.value +".jpg";
      document.body.appendChild(an);
      an.click();
      document.body.removeChild(an);
      URL.revokeObjectURL(picUrl);
    });
  }
});
        
//clock to mark the time of note
function updateClock() {
  let clock = document.getElementById("clock");
  if (!clock) return; // safe check

  let now = new Date();

  // Convert local time to UTC
  let utc = now.getTime() + (now.getTimezoneOffset() * 60000);

  // Add 3 hours (GMT+3)
  let addisTime = new Date(utc + 10800000);

  let hours = now.getHours();
  let m = String(now.getMinutes()).padStart(2, '0');
  let s = String(now.getSeconds()).padStart(2, '0');
  let dy=String(now.getDate()).padStart(2,'0');
  let mn=String(now.getMonth()).padStart(2,'0');
  let yr=String(now.getFullYear()).slice(-2);
  let period= hours>=12 ? "pm":"am";
  let h= hours % 12 || 12;

  let timeString = `${dy}/${mn}/${yr}`+" GC  "+`${h}:${m}:${s}${period}`;
  clock.innerHTML= timeString;
  return timeString;
}

// update every second
setInterval(updateClock, 1000);
updateClock(); // run immediately


//Text import/export function
document.addEventListener('DOMContentLoaded', () => {
const importFile = document.getElementById('importFile');
const contentArea = document.getElementById('contentArea');
const exportFile = document.getElementById('exportFile');

    // --- IMPORT FUNCTIONALITY
importFile.addEventListener('change', (event) => {
        
  const file = event.target.files[0];
        
  if (!file) {
            return;
        }

  const reader = new FileReader();
  
  reader.onload = (e) => {

    contentArea.value = e.target.result;
  };

  reader.onerror = (e) => {
   console.error("Error reading file:", e.target.error);
   contentArea.value = "Error reading file.";
  };

  reader.readAsText(file);
});

    // --- EXPORT FUNCTIONALITY
exportFile.addEventListener('click', () => {

 const content = contentArea.value;
        
 if (!content) {
    alert("No content to download!");
    return;
 }

 const blob = new Blob([content], { type: 'text/plain' });

 const url = URL.createObjectURL(blob);

 const a = document.createElement('a');
 a.href = url;
 a.download = updateClock() + fileName.value + '.txt';

 document.body.appendChild(a);
 a.click();
        
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
 });
});