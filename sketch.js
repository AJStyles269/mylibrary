var mObj, fObj;
var obj1,obj2;
var obj3,obj4;
function setup()
 {
    createCanvas(600,400);
     mObj=createSprite(500,200,100,40); 
     fObj=createSprite(200,200,40,100);
      mObj.shapeColor="green";
       fObj.shapeColor="green";
        mObj.debug=true; 
        fObj.debug=true; 
        obj1=createSprite(100,100,40,40);
        obj1.shapeColor="green";
        obj2=createSprite(200,100,40,40);
      obj2.shapeColor="green";
      obj3=createSprite(50,300,20,20);
      obj3.shapeColor="green";
      obj4=createSprite(500,300,20,20);
    obj4.shapeColor="green";
    obj3.velocityX=3;
    obj4.velocityX=-3;
        }

         function draw() 
         {
            background("black"); 
            mObj.x=mouseX;
             mObj.y=mouseY; 
             console.log(mObj.x); 
             console.log(fObj.x);
              console.log(mObj.width/2+fObj.width/2);
               console.log(mObj.x-fObj.x);
                console.log(fObj.x-mObj.x); 
               if (isTouching(mObj,fObj)){
                  mObj.shapeColor="red";
                  fObj.shapeColor="red";
               }
               else{
                  mObj.shapeColor="green";
                  fObj.shapeColor="green";
               }


               
              if( isTouching(mObj,obj1)){

              
               mObj.shapeColor="white";
               obj1.shapeColor="white";
            }
            else{
               mObj.shapeColor="green";
            
               obj1.shapeColor="green";
            }
bounceOff(obj3,obj4)
               drawSprites(); 
        }
        