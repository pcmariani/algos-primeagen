var CliFrames = require("cli-frames");
// let arr = new Array(10);

// let arr = new Array(Math.floor(Math.random() * 100));
let arr = new Array(70);
for (let o = 0; o < arr.length; ++o) {
  arr[o] = Math.ceil(Math.random() * 40)
}

// console.log(arr)
// const arr = [60, 3, 7, 4, 50, 20, 42, 1];
// const arr = [12, 8, 7 ,6, 14, 4, 3, 2, 1];
// const arr = [10, 9, 8, 7 ,6, 5, 4, 3, 2, 1];
bubble_sort(arr);

export default function bubble_sort(arr: number[]): void {

  let frames:String[] = []
  frames.push(generateFrame(arr))

  for (let i = 0; i < arr.length-1; ++i) {
    for (let j = 0; j < arr.length-1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      frames.push(generateFrame(arr))
    }
  }

  animate(frames)
}

export function generateFrame(arr: number[]): String {
  let frameArr:String[][] = []
  let frame = ""
  const char = "/"
  // for (let j = arr.length-1; j >= 0; --j) {
  //   const fillChars = new Array(Math.max(...arr)).fill(" ");
  //   for (let i = 0; i < arr[j]; ++i) { 
  //     fillChars[i] = char; 
  //   }
  //   frameArr.push(fillChars)
  // }


  for (let j = 0; j < arr.length-1; ++j) {
    const fillChars = new Array(Math.max(...arr)).fill(" ");
    fillChars[0] = "."; 
    let i = 1;
    for (; i < arr[j]-1; ++i) { 
      // fillChars[i] = char; 
      fillChars[i] = " "; 
    }
    fillChars[i] = char; 
    frameArr.push(fillChars)
  }
  
  let transpFrameArr:String[][] = transpose(frameArr)
  let rotatedFramesArr:String[][] = rotateN90(frameArr)
  // transpFrameArr.reverse().forEach(item => { frame += item.join("") + "\n" })
  // frameArr.forEach(item => { frame += item.join("") + "\n" })
  rotatedFramesArr.forEach(item => { frame += item.join("") + "\n" })
  // frameArr.forEach(x => console.log(x.join("")))
  // transpFrameArr.forEach(x => console.log(x.join("")))
  // rotatedFramesArr.forEach(x => console.log(x.join("")))
  // console.log(frameArr.join(""),"\n")
  return frame
}

export function transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
}

function rotateN90(a){
  var temp = new Array(a[0].length); // number of columns
  var i=0;
  for (i = 0; i < temp.length; i++) { 
    temp[i] = [];
  } 
  for(i=0;i<a.length;i++){
    for(let j = 0; j<a[0].length;j++){
      temp[j][i]= a[i][a[i].length-1-j];
    }
  }
  return temp;
}

export function animate(frames: String[]): void {
  var animation = new CliFrames();
  animation.load(frames);
  animation.start({
    repeat: false,
    delay: 1
  });
}
