let storage = localStorage;
let greetingText = document.getElementById("greeting-text");
if (storage !== null) {
  greetingText.innerHTML = 
  `
    Welcome back, ${storage.getItem("name")}!
  `
} else {
  greetingText.innerHTML = 
  `
    Welcome back, guest!
  `
}
