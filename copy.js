const ok = document.createElement("p");
const nook = document.createElement("p");
ok.innerHTML = `<p class="p-2 text-3xl absolute animate-ping ease-in-out ">copied 👌</p>`
nook.innerHTML = `<p class="p-2 text-3xl absolute ease-in-out text-red-600 ">nothing writed!</p>`



const seccion = document.getElementById("seccion");

btn.addEventListener("click", ()=>{
    const content = document.getElementById('textArea').value;
    if (!(content.length === 0)) {
      navigator.clipboard.writeText(content)
      .then(() => {
      console.log("Text copied to clipboard...");          
      seccion.appendChild(ok);                 
      setTimeout(() => {
          ok.remove();
        }, 800);                 
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })      
    }
    else{
      seccion.appendChild(nook);                 
      setTimeout(() => {
          nook.remove();
        }, 800); 
    }

})

textArea.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        const content = document.getElementById('textArea').value;
        navigator.clipboard.writeText(content)
            .then(() => {
            console.log("Text copied to clipboard...");  
            seccion.appendChild(ok);  
            setTimeout(() => {
                ok.remove();
              }, 800);                 
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })    
    }
});