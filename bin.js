 class bin{
   constructor(){ 
    

    var box1,box2,box3,box4,binImg
    
    binImg=loadImage("Bin.png")

    box1= createSprite(700,465,100,10)
    box1.shapeColor=color("purple")
	box2= createSprite(750,415,10,100)
	box2.shapeColor=color("purple")
	box3= createSprite(650,415,10,100)
    box3.shapeColor=color("purple")
  box4= createSprite(700,410,100,100)
  box4.addImage("bin",binImg)
  box4.scale=1.2
   }
 }