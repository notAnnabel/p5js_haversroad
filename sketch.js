// This is the sketch.js file.
// Press 's' to export the SVG.
// Note that p5.js is used in 'global mode'. 

p5.disableFriendlyErrors = true; // hush
let bDoExportSvg = false; 

function preload(){
    //img = loadImage("badappletest.jpg");

    badapple = loadImage(FINISHEDSVG.svg);
    /*bad_apple_array = [
        {id: 1, img: 'ezgif-frame-001.jpg'},{id: 2, img: 'ezgif-frame-002.jpg'},
    {id: 3, img: 'ezgif-frame-003.jpg'},{id: 4, img: 'ezgif-frame-004.jpg'},
    {id: 5, img: 'ezgif-frame-005.jpg'},{id: 6, img: 'ezgif-frame-006.jpg'},
    {id: 7, img: 'ezgif-frame-007.jpg'},{id: 8, img: 'ezgif-frame-008.jpg'},
    {id: 9, img: 'ezgif-frame-009.jpg'},{id: 10, img: 'ezgif-frame-010.jpg'},
    {id: 11, img: 'ezgif-frame-011.jpg'},{id: 12, img: 'ezgif-frame-012.jpg'},
    {id: 13, img: 'ezgif-frame-013.jpg'},{id: 14, img: 'ezgif-frame-014.jpg'},
    {id: 15, img: 'ezgif-frame-015.jpg'},{id: 16, img: 'ezgif-frame-016.jpg'},
    {id: 17, img: 'ezgif-frame-017.jpg'},{id: 18, img: 'ezgif-frame-018.jpg'},
    {id: 19, img: 'ezgif-frame-019.jpg'},{id: 20, img: 'ezgif-frame-020.jpg'},
    {id: 21, img: 'ezgif-frame-021.jpg'},{id: 22, img: 'ezgif-frame-022.jpg'},
    {id: 23, img: 'ezgif-frame-023.jpg'},{id: 24, img: 'ezgif-frame-024.jpg'},
    {id: 25, img: 'ezgif-frame-025.jpg'}
];

    loop_img_pos = 1;*/
}

function setup(){
  // These canvas dimensions are 8.5"x11" at 96 dpi
  createCanvas(816, 1056); 
}

function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

function draw(){
  background(255); 
  
  if (bDoExportSvg){
      beginRecordSvg(this, badapple);
      /*if (loop_img_pos === 1){
        img = bad_apple_array[id+1];
        delayTime(0.2);
        image(img, 0, 0);
        if (loop_img_pos === 26){
            loop_img_pos = 1;
        }*/

      }
      
    }
    
    
  // Draw stuff here, such as:
  //line(0,0, mouseX, mouseY); 

  if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
