//Bai toan loai bo phan tu lap ra khoi 1 mang
const array = ['a','b','c','d','e','a','d'];

//Dac tinh cua set la 1 unit. Just exist one
// console.log([...(new Set(array))]);

/*
De quy 2 dac trung chinh: duoc goi lai cua chinh ham do
- Xac dinh diem dung
- Logic handle => tạo ra cai diem dung
*/
function countDown(num) {
    if( num > 0 ){
        console.log(num)
        return countDown(num-1);
    }
    return num;
}

function loop(start,end,cb) {
    if(start <= end){
        cb(start);
        return loop(start + 1,end,cb); 
    }
    return 1;    
}
console.log('length:',array.length)
loop(0,array.length - 1, function(i) {
    console.log(array[i])
})

function giaiThua(num) {
    if(num > 0){
        return num * giaiThua(num - 1);
    }
    return 1;
}
console.log(giaiThua(3));