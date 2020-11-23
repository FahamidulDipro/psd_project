const navitems = document.querySelectorAll('nav ul li');
const navadd = document.querySelector('.redbar');
for(var i = 0; i<navitems.length; i++){
    console.log(navitems[i].innerHTML);
    navitems[i].addEventListener('click',()=>{
        let value = document.querySelector('#dropdown');
        if(value){
            document.querySelector('#dropdown ul').style.display = "none";
        }
        else{
            document.querySelector('#dropdown ul').style.display = "block";
        }
        
    })
}
    
   

   
