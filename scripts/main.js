var mainDropMenu = document.getElementById("mainDropMenu");
var videos = document.querySelectorall('.videos-container .video');
var videosarray = Array.from(videos);
function drobMainMenu() {
    var asideEle = document.getElementById("asideEle");
    if (asideEle.style.display === "none") {
        asideEle.style.display = "block";
        videosarray.forEach((video) => {
            video.style.width ="328px";
            console.log("328px");
        });
    } else {
        asideEle.style.display = "none";
        videosarray.forEach((video) => {
            video.style.width ="299px";
            console.log("299px");
        });
    }
    
}