  let count=0;
function vowels(str){
 
    for(let i=0;i<str.length;i++){
         let char=str[i].toLowerCase();

            if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
                count++;
            }
     }
      console.log("Number of vowels in the string: " + count);
}
   
vowels("kalyani");
const countvowel =(str)=>{
    for(let i=0;i<str.length;i++){
         let char=str[i].toLowerCase();

            if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
                count++;
            }
     }
      console.log("Number of vowels in the string: " + count);
}
countvowel("JavaScript");