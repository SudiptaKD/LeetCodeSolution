/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
   for (let x = 0 ; x < image.length ; x++) {
       for (let i = 0, j = image[x].length-1 ; i <= j ; i++, j--) {
           let a = image[x][i];
           image[x][i] = image[x][j] ? 0 : 1;
           image[x][j] = a ? 0 : 1;
       }
   }
   return image; 
};
