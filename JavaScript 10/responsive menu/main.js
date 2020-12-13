const navbar = ()=> {
    const  line = document.querySelector('.line');
    const nav = document.querySelector('.navlink');
    const navlink = document.querySelectorAll('.navlink li');
    
    line.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });

    navlink.forEach((link, index) =>{
        if (link.style.animation){
            link.style.animation = '';
        }  else{
            link.style.animation = `navlinkfade 0.5s ease forwards ${index/7 + 2}s`
        }
        
    });
}  
navbar();
