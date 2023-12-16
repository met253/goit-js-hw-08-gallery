const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
    
}
const callback = (entries, observer) => {
    entries.forEach(entrie => {
        const listItem = entrie.target;
        const image = listItem.querySelector("img");
        const title = listItem.querySelector("h3");

        if(entrie.isIntersecting){
            image.style.filter = "grayscale(100%)";
            title.style.color = "blue"
        }
        else {
            image.style.filter = "grayscale(0%)";
            title.style.filter = "#333"
        }
    });

}

const observer = new IntersectionObserver(callback, options)



document.querySelectorAll("li").forEach(item =>{
    observer.observe(item);
})