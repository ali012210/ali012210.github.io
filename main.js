const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "ali-and-marsy-small.jpg") {
    myImage.setAttribute("src", "ali-and-marsy-wave.jpg");
  } else {
    myImage.setAttribute("src", "ali-and-marsy-small.jpg");
  }
};
