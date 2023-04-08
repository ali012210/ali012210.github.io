const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ali-and-marsy-small.jpg") {
    myImage.setAttribute("src", "images/ali-and-marsy-wave.jpg");
  } else {
    myImage.setAttribute("src", "images/ali-and-marsy-small.jpg");
  }
};