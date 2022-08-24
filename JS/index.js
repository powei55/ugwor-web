const heroContainer = document.getElementById('hero-container')
const title = document.getElementById('title')
const navLink = document.getElementById('nav-link')
const excerpt = document.getElementById('excerpt')
const heroImg = document.getElementById('hero-img')



const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    title.innerHTML = `UGWOR'S FAMILY`
    navLink.innerHTML =  
                        `<ul>
                            <li><a href="index.html" class="current-page">Home</a></li>
                            <li><a href="recent.html" >Recent post</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">contact</a></li>
                        </ul>`

    excerpt.innerHTML = `family are the compass that guides us,they are the
                         inspiration to reach great heights, and our comfort when
                         we occassionally falter`
   heroImg.innerHTML = ` <img src="https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb
                        -1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0aWZ1bCUyMGhvbWVzfGVufDB8fDB8fA
                        %3D%3D&auto=format&fit=crop&w=500&q=60" alt="">`

   animated_bgs.forEach(bg => bg.classList.remove('animated-bg') )
   animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg') )

}



