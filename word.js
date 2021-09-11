
const convertCodeTOChar = (firstLetter, inc) => {
  if (firstLetter + inc > 122)
    return (convertedLetter = String.fromCharCode(firstLetter + inc - 26));
  return (convertedLetter = String.fromCharCode(firstLetter + inc));
};
const InsertionAndSubstitution = (word,replaceLetter,firstLetterCode) => {
  let inc = 0;
  let sub = []
  let ins = []
  while (inc != 2) {
    let convertedLetter;
    inc++;
    convertedLetter = convertCodeTOChar(firstLetterCode, inc);
    sub= [...sub,word.replace(replaceLetter,convertedLetter)]
    
    ins=[...ins,word.replace(replaceLetter, replaceLetter + convertedLetter)]
  }
  return [sub,ins]
};
const Substitution = (word,firstLetterCode,replaceLetter) => {
  let inc = 0;
  let result= []
  while (inc != 2) {
    let convertedLetter;
    inc++;
    convertedLetter = convertCodeTOChar(firstLetterCode, inc);
    result = [...result,word.replace(replaceLetter, convertedLetter)];
  }
  return result
};
const Insertion = (word,firstLetterCode,replaceLetter) => {
  let inc = 0;
  let result = []
  while (inc != 2) {
    let convertedLetter;
    inc++;
    convertedLetter = convertCodeTOChar(firstLetterCode, inc);
   result = [...result,word.replace(replaceLetter, replaceLetter + convertedLetter)]
  }
  return result
};
var result = {
  del:[],
sub1:[],
insertion:[]
};
const deletion = (number_of_deletions,word)=>{
  let length=word.length
     for(let i=0;i<length;i++){
      if( result.del['del'+number_of_deletions] ){
          result.del['del'+number_of_deletions] = result.del['del'+number_of_deletions].add(word.slice(i+1,length))
      }else {
        result.del['del'+number_of_deletions] = new Set([word.slice(i+1,length)])
      }
     }
     return  result.del['del'+number_of_deletions]
}
const variate = (
  word,
  number_of_insertions = 2,
  number_of_deletions = 2,
  number_of_substitutions = 2
) => {
  if (!word) return "please send word";
  const length = Math.max(number_of_insertions,number_of_substitutions,number_of_deletions)
    var s = String(word);
    for (let i = 0; i < length; i++) {
        let del_2 = s.slice(i, i + 1);
       if(i< number_of_deletions){
        let tempresult;
        if(i==0){ tempresult = deletion(i+1,word)}
        else {
          tempresult = result.del['del'+i]
          tempresult?.forEach(element => {
            deletion(i+1,element)
          })
        }
       }
      if (i < number_of_substitutions || i < number_of_insertions) {    
        let firstLetter = s.charCodeAt(i);
        if (i < number_of_substitutions && i < number_of_insertions) {
         let [sub,ins] =  InsertionAndSubstitution(s,del_2,firstLetter);    
         result.sub1 = [...result.sub1,{
            ["sub"+(i+1)]:sub
         }]
         result.insertion = [
             ...result.insertion,{
                 ['ins'+(i+1)]:ins
             }
         ]
        } else {
          if (i < number_of_substitutions) {
            result.sub1 = [
                ...result.sub1,
                {
                    ['sub'+(i+1)]:Substitution(s,firstLetter,del_2)
                }
            ]
          }
          if (i < number_of_insertions) {
            result.insertion = [
                ...result.insertion,
                {
                    ['ins'+(i+1)]:Insertion(s,del_2,firstLetter)
                }
            ]
          }
        }
      }
    }
  
   return result

};
variate("and", 2,2,1);
console.log(result.del);
console.log(result.insertion);
console.log(result.sub1);