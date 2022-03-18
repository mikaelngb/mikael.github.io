function moveToDiv(target, current){
    const el = document.getElementById(target)
    if(el.classList.contains('content-animation')){
        el.classList.remove('content-animation')
    }
    let linkArr = ['home-link','project-link','contact-link', 'about-link']
    let curr = document.getElementById(current)
    
    linkArr.forEach((e) => {
        let other = document.getElementById(e)
        if (e == current) {
            curr.classList.add("active")
        } else {
            if (other != null && other.classList.contains("active")) {
                other.classList.remove("active")
            }
        }
    })
    
    el.scrollIntoView()
    el.classList.add('content-animation')
}