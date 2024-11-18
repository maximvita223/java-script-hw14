function changeStyleDelayed(id, delay) {
    setTimeout(() =>{
        const el = document.getElementById(id);
        if (el) {
            el.style.color = "blue"
        }
    },delay)
}