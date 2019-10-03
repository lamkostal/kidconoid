var images=document.querySelectorAll('img');
var item1 = document.getElementById("one");
var item2 = document.getElementById("two");
var item3 = document.getElementById("three");
var item4 = document.getElementById("four");

var generative = document.getElementById("gen");
var Macro = document.getElementById("macro");
var round = document.getElementById("round");
var lattice = document.getElementById("lattice");

var nav=document.getElementById('nav');
var navlinks=document.getElementById('links-con');

nav.addEventListener("mouseenter",function(e){
  navlinks.classList.add("opacon")
});


item1.addEventListener('mouseenter', function(e){
    
burst.replay();
shape.replay(); 
shape2.replay();
rectbu1.replay();
linebu1.replay();
generative.classList.add("opacon");
});
item1.addEventListener('mouseleave',function(){
generative.classList.remove("opacon");
});

item2.addEventListener('mouseenter', function(e){
burstTWO.replay();
shapeTWO.replay(); 
shape2TWO.replay();
rectbu2.replay();
linebu2.replay();
Macro.classList.add("opacon");
   
});
item2.addEventListener('mouseleave',function(){
Macro.classList.remove("opacon");
});

item3.addEventListener('mouseenter', function(e){
  burstTHREE.replay();
  shapeTHREE.replay(); 
  shape2THREE.replay();
  rectbu3.replay();
  linebu3.replay();
  round.classList.add("opacon");
     
  });
  item3.addEventListener('mouseleave',function(){
  round.classList.remove("opacon");
  });

  item4.addEventListener('mouseenter', function(e){
    burstFOUR.replay();
    shapeFOUR.replay(); 
    shape2FOUR.replay();
    rectbu4.replay();
    linebu4.replay();
    lattice.classList.add("opacon");
       
    });
    item4.addEventListener('mouseleave',function(){
    lattice.classList.remove("opacon");
    });




///UNDERLINES/////////////////////////////////////////////
////GEN////
var rectbu1 = new mojs.Shape({        
        parent:'#gen',
        shape:"rect",
        radius:55, 
        radiusY:20,
        angle:0,
        duration:800,
        stroke:"lightgrey",
        strokeWidth:0.8,
        fill:"none",
        strokeDasharray:{'0%': '25%'},
        strokeDashoffset: { '0%' : '10%' }, 
        easing:'sin.out' ,
        delay:50,           
});
var linebu1 = new mojs.Shape({     
        parent:'#gen',
        shape:"line",
        radius:75, 
        angle:0,
        duration:800,
        stroke:"Lightsteelblue",
        strokeWidth:{30:30},
        fill:"none",
        opacity:{1:0},
        strokeDasharray:{'1%': '10%'},
        strokeDashoffset: { '0%' : '100%' }, 
        easing:  'sin.out' ,
        delay:200               
});
////MACRO////
var rectbu2 = new mojs.Shape({        
        parent:'#macro',
        shape:"rect",
        radius:65, 
        radiusY:20,
        angle:0,
        duration:800,
        stroke:"lightgrey",
        strokeWidth:0.8,
        fill:"none",
        strokeDasharray:{'0%': '25%'},
        strokeDashoffset: { '0%' : '10%' }, 
        easing:'sin.out' ,
        delay:50,           
});
var linebu2 = new mojs.Shape({     
        parent:'#macro',
        shape:"line",
        radius:85, 
        angle:0,
        duration:800,
        stroke:"Peachpuff",
        strokeWidth:{30:30},
        fill:"none",
        opacity:{1:0},
        strokeDasharray:{'1%': '10%'},
        strokeDashoffset: { '0%' : '100%' }, 
        easing:   'sin.out'  ,
        delay:200               
});

////ROUND////
var rectbu3 = new mojs.Shape({        
  parent:'#round',
  shape:"rect",
  radius:65, 
  radiusY:20,
  angle:0,
  duration:800,
  stroke:"lightgrey",
  strokeWidth:0.8,
  fill:"none",
  strokeDasharray:{'0%': '25%'},
  strokeDashoffset: { '0%' : '10%' }, 
  easing:'sin.out' ,
  delay:50,           
});
var linebu3 = new mojs.Shape({     
  parent:'#round',
  shape:"line",
  radius:85, 
  angle:0,
  duration:800,
  stroke:"#aaf0d1",
  strokeWidth:{30:30},
  fill:"none",
  opacity:{1:0},
  strokeDasharray:{'1%': '10%'},
  strokeDashoffset: { '0%' : '100%' }, 
  easing:   'sin.out'  ,
  delay:200               
});

////LATTICE////
var rectbu4 = new mojs.Shape({        
  parent:'#lattice',
  shape:"rect",
  radius:65, 
  radiusY:20,
  angle:0,
  duration:800,
  stroke:"lightgrey",
  strokeWidth:0.8,
  fill:"none",
  strokeDasharray:{'0%': '25%'},
  strokeDashoffset: { '0%' : '10%' }, 
  easing:'sin.out' ,
  delay:50,           
});
var linebu4 = new mojs.Shape({     
  parent:'#lattice',
  shape:"line",
  radius:85, 
  angle:0,
  duration:800,
  stroke:"Khaki",
  strokeWidth:{30:30},
  fill:"none",
  opacity:{1:0},
  strokeDasharray:{'1%': '10%'},
  strokeDashoffset: { '0%' : '100%' }, 
  easing:   'sin.out'  ,
  delay:200               
});

//ONE//////////////////////////////////////////////////////////

var burst = new mojs.Burst({
   count:6,
   radius:{0:180},      
    parent:"#one",
    children:{
        shape:"polygon",
        points:{1:100},
        scale:{25:0},
        angle:30,
        duration:1000,
        stroke:"black",
        strokeWidth:0.08,
        fill:"white",
        opacity:{0.1:0},
        easing:  'cube.out' ,
        delay:'stagger(50)'
       }
    
});

var shape = new mojs.Shape({
    shape: 'polygon',
    points:{3:6},
    radius:{50:172},
    stroke:{"lightgrey":"grey"},
    fill:'none',
    angle:0,
    duration:2000,
    strokeDasharray: '0.5%',
    strokeDashoffset: { '0%' : '100%' },
    parent:"#one" , 
    easing:  'cubic.out'    
    });


var shape2 = new mojs.Shape({
  shape: 'circle',
  points:6,
  opacity:{1:0},
  angle:0,
  scale:         { 0 : 3 },
  fill:"none",
  stroke:'white',
  strokeWidth:{20:1},
  duration:      1500,
  delay:         20,
  easing:        'sin.out',
  parent:"#one"  
  
});

//TWO//////////////////////////////////////////////////////////

var burstTWO = new mojs.Burst({
   count:6,
   radius:{50:180},      
//      opacity:{1:0}, 
    parent:"#two",
    children:{
        shape:"polygon",
        points:6,
        scale:{25:0},
        angle:30,
        duration:2000,
        stroke:"white",
        strokeWidth:0.05,
        fill:"none",
        easing:  'cubic.out'    
       }
    
});

var shapeTWO = new mojs.Shape({
    shape: 'polygon',
    points:{3:6},
    radius:{50:172},
    stroke:{"lightgrey":"grey"},
    fill:'none',
    angle:0,
    duration:2000,
    strokeDasharray: '0.5%',
    strokeDashoffset: { '0%' : '100%' },
    parent:"#two" , 
    easing:  'cubic.out'    
    });


var shape2TWO = new mojs.Shape({
  shape:        'circle',
  points:6,
  opacity:{1:0},
  angle:0,
  scale:         { 0 : 3 },
  fill:"none",
  stroke:'white',
  strokeWidth:{20:1},
  duration:      1500,
  delay:         20,
  easing:        'sin.out',
  parent:"#two"  
  
});

//THREE//////////////////////////////////////////////////////////

var burstTHREE = new mojs.Burst({
  count:6,
  radius:{50:180},      
//      opacity:{1:0}, 
   parent:"#three",
   children:{
       shape:"polygon",
       points:6,
       scale:{25:0},
       angle:30,
       duration:2000,
       stroke:"white",
       strokeWidth:0.05,
       fill:"none",
       easing:  'cubic.out'    
      }
   
});

var shapeTHREE = new mojs.Shape({
   shape: 'polygon',
   points:{3:6},
   radius:{50:172},
   stroke:{"lightgrey":"grey"},
   fill:'none',
   angle:0,
   duration:2000,
   strokeDasharray: '0.5%',
   strokeDashoffset: { '0%' : '100%' },
   parent:"#three" , 
   easing:  'cubic.out'    
   });


var shape2THREE = new mojs.Shape({
 shape:        'circle',
 points:6,
 opacity:{1:0},
 angle:0,
 scale:         { 0 : 3 },
 fill:"none",
 stroke:'white',
 strokeWidth:{20:1},
 duration:      1500,
 delay:         20,
 easing:        'sin.out',
 parent:"#three"  
 
});

//FOUR//////////////////////////////////////////////////////////

var burstFOUR = new mojs.Burst({
  count:6,
  radius:{0:180},      
   parent:"#four",
   children:{
       shape:"polygon",
       points:{1:100},
       scale:{25:0},
       angle:30,
       duration:1000,
       stroke:"black",
       strokeWidth:0.08,
       fill:"white",
       opacity:{0.1:0},
       easing:  'cube.out' ,
       delay:'stagger(50)'
      }
   
});

var shapeFOUR = new mojs.Shape({
   shape: 'polygon',
   points:{3:6},
   radius:{50:172},
   stroke:{"lightgrey":"grey"},
   fill:'none',
   angle:0,
   duration:2000,
   strokeDasharray: '0.5%',
   strokeDashoffset: { '0%' : '100%' },
   parent:"#four" , 
   easing:  'cubic.out'    
   });


var shape2FOUR = new mojs.Shape({
 shape: 'circle',
 points:6,
 opacity:{1:0},
 angle:0,
 scale:         { 0 : 3 },
 fill:"none",
 stroke:'white',
 strokeWidth:{20:1},
 duration:      1500,
 delay:         20,
 easing:        'sin.out',
 parent:"#four"  
 
});




//mouse click effect//////////////////////////////////



const mClick1 = new mojs.Burst({
    left: 0,        top: 0,
    count:17,
    angle:45,
    radius:{15:10},
    children:
      {shape:'line',
       points:3,
       radius:         { 5 : 0},    
       fill:'none',
       stroke: 'white',
       strokeWidth:{0:10},
       angle:{45:360},
       opacity:{0.5:0},
       duration:      500,
       delay:'stagger(5)',
       easing: 'sin.out'}
});

const mClick2 = new mojs.Shape({
     
  fill:'none',
  radius:         { 0 : 15 },
  strokeWidth:    { 10: 0 },
    
  stroke:         'orange',
  left: 0,        top: 0,
  easing:         'sin.out',
  delay:          'rand(0, 20)',
  duration:       800,
  opacity:{0.8:0},
});

document.addEventListener( 'click', function (ev) {
  
   mClick1
    .tune({ x: ev.pageX, y: ev.pageY  })
    .replay();
  
  mClick2
    .tune({ x: ev.pageX, y: ev.pageY  })
    .replay();
  
});




// LIGHTBOX






console.log('hello')

