const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const pipe2 = document.querySelector('.pipe2')
const turtle = document.querySelector('.turtle')
const turtle2= document.querySelector('.turtle2')
const clouds = document.querySelector('.clouds')
const gameOver = document.querySelector('.game-over')
const botaoReset = document.querySelector('.reset') 

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);


    const loop = setInterval(() =>{
        const pipePosition = pipe.offsetLeft;
        const pipe2Position = pipe2.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        // pipe2.style.marginLeft = Math.round(Math.random()*100) 

        

        if( pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
  
         pipe.style.animation = 'none'
         pipe.style.left = `${pipePosition}px`   
         pipe2.style.animation = 'none '     
        //  pipe2.style.left = `${pipe2Position}px`

         mario.style.animation = 'none'
         turtle.style.animation = 'none' 
         turtle2.style.animation = 'none' 

         clouds.style.animation = 'none'

         mario.style.bottom = `${marioPosition}px`  
         
         mario.src = './assets/game-over.png'
         mario.style.width = '75px'
         mario.style.marginLeft = '50px';

         gameOver.classList.remove('invisivel')
         botaoReset.classList.remove('invisivel')   
       
        }
    }, 10)
    
}

botaoReset.addEventListener('click', () =>{
    location.reload()
    console.log('clicou')
})


document.addEventListener('keydown', jump)