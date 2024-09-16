/* 4413 23f Task 1 - write your code here */

function lightOn (butIn){

    /* set image src to be that for light 1, and set message texts to be "light #1 is on"  */
       if(butIn == 'l1'){
           document.getElementById('light').src='images/light/light_1.jpg';
           document.getElementById('message').innerHTML = 'light #1 is on';
       }
       else if(butIn == 'l2'){
           document.getElementById('light').src='images/light/light_2.jpg';
           document.getElementById('message').innerHTML = 'light #2 is on';
       }
       else if(butIn == 'l3'){
           document.getElementById('light').src='images/light/light_3.jpg';
           document.getElementById('message').innerHTML = 'light #3 is on';
       }
       else if(butIn == 'l4'){
           document.getElementById('light').src='images/light/light_4.jpg';
           document.getElementById('message').innerHTML = 'light #4 is on';
       }
       else if(butIn == 'l5'){
           document.getElementById('light').src='images/light/light_5.jpg';
           document.getElementById('message').innerHTML = 'light #5 is on';
       }
   }
   
   function lightOff (){
   
          document.getElementById('light').src='images/light/light_0.jpg';
          document.getElementById('message').innerHTML = 'all lights are off';
        
   }
   