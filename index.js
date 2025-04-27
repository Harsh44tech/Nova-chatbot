let input = document.getElementById("input")
let btn = document.getElementById('btn')
let main = document.getElementById('main')
let file_inp = document.getElementById('image-upload')
let bot_node;
let file;
const base_img
bot_div = `<div class="load_box">
<div class="load"></div>
<div class="load"></div>
<div class="load"></div>
</div>`
input.addEventListener("input", () => {
  // Reset height to auto to shrink when text is deleted
  input.style.height = 'auto';
  
  // Set height to scrollHeight to expand the textarea
  input.style.height = (input.scrollHeight) + 'px';

  // Change button color based on input value
  if (input.value !== "") {
    btn.style.backgroundColor = "#007bff"; // Active color when text is entered
  } else {
    btn.style.backgroundColor = "#8f9397"; // Default button color when input is empty
  }
});


btn.addEventListener("click", ()=>{
  
if (input.value != ""){

let user_node = document.createElement("div")
user_node.classList.add("user")
user_node.innerHTML = input.value
main.appendChild(user_node)
sendmsg(input.value)
input.value = ""

}
})

function formatText(message) {
  return marked.parse(message);
}





async function sendmsg(message){
if (is_loading = true){
bot_node = document.createElement("div")
bot_node.classList.add("bot")
bot_node.innerHTML = bot_div
main.appendChild(bot_node)
}
try {
const response = await fetch('https://api.cohere.ai/v1/chat', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer jxqONky9H7rfr8BJbxbdKP4vDORZvPxoESuZf7um"
},
body: JSON.stringify({
  message: message
  })
});
const  data = await response.json()
const data_msg = await data.text
bot_node.innerHTML = formatText(data_msg)
main.scrollTop = main.scrollHeight;
} catch (e) {
console.log(e)
}
}