for (let index = 1; index <= 10; index++) {
    // const element = array[index];
    
    // console.log("lifting weights repetition",index);
}
 infoRonaldo= [
    "Ronaldo",
     1985,
    ["Dat","Hoang","Hieu"],
    true
 ];
const infoRonaldoType = [];
for (let i = 0; i < infoRonaldo.length; i++) {
    infoRonaldoType.push(typeof infoRonaldo[i] ); 
}
console.log(infoRonaldoType);

//continue
const infoRonaldoType1 = [];
for (let i = 0; i < infoRonaldo.length; i++) {
    if(typeof infoRonaldo[i] !== 'strings') continue;
    infoRonaldoType1.push(typeof infoRonaldo[i] ); 
}
console.log(infoRonaldoType1);

//break
const infoRonaldoType2 = [];
for (let i = 0; i < infoRonaldo.length; i++) {
    if(typeof infoRonaldo[i] === 'number') break;
    infoRonaldoType2.push(typeof infoRonaldo[i] ); 
}
console.log(infoRonaldoType2);

const years =  [1991,2007,1999,2003];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i] )
}
console.log(ages);

for (let i = years.length - 1; i >=0 ; i--) {
    const element = years[i];
    console.log(element);
}

for (let exercise = 1; exercise < 4; exercise++) {
   console.log(`exercise: ${exercise}`);
   for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise: ${exercise}, rep: ${rep}`);       
   }
}