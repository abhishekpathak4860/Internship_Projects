 /* nav handle*/
 const function_line=document.querySelector('.function_line');
 const header=document.querySelector('.head');

 
 const active_navbar=()=>{
     header.classList.toggle("active");
 }

 function_line.addEventListener("click",()=>{
    active_navbar();
 });

 
 /* about and videos handle*/
const arijit_about=document.querySelector('.arijit_about');
 const hero_1=document.querySelector('.hero_1');
 const hero_2=document.querySelector('.hero_2');
 const hero_3=document.querySelector('.hero_3');

const setborder=(active_border,inactive_border, inactive_border_3)=>{
              active_border.classList.add('active');
              inactive_border.classList.remove('active');
               inactive_border_3.classList.remove('active');
               active_border.style.borderBottom('1.8 solid red');
              inactive_border.style.borderBottom('none');
               inactive_border_3.style.borderBottom('none');
 };
 
  const active_about=()=>{
     arijit_about.classList.remove("hide");
     arijit_about.classList.remove("bengal");
     arijit_about.classList.add("across");
    setborder(hero_1,hero_2,hero_3);

  };
  const active_videos=()=>{
     arijit_about.classList.remove("across");
     arijit_about.classList.remove("bengal");
     arijit_about.classList.add("hide");
     setborder(hero_2,hero_1,hero_3);
  };

const active_bengali_hits=()=>{
    arijit_about.classList.add("bengal");
    arijit_about.classList.remove("across");
     arijit_about.classList.remove("hide");
     setborder(hero_3,hero_1,hero_2);
 }

 hero_1.addEventListener("click",()=>{
        active_about();
  })
 
  hero_2.addEventListener("click",()=>{
      active_videos();
 })

 hero_3.addEventListener("click",()=>{
     active_bengali_hits();
 })

var loader=document.getElementById("preloader");
window.addEventListener("load",()=>{
    loader.style.display="none";
})
