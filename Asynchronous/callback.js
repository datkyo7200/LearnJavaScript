// VAN DE 
/*
const getPhoneNumber = () =>{
    let phoneNumber;

    console.log("Gọi điện cho thằng Hiếu, cho xin số thằng Trí");

    console.log("Thằng Hiếu đang tìm số thằng trí");
    
    setTimeout(() => {
        phoneNumber = 987654321;
        console.log("Đây rồi, số điện thoại của thằng Trí này");
    }, 2000);
    return phoneNumber;
}

const phoneNumber = getPhoneNumber();
console.log(phoneNumber);
*/
// CACH GIAI QUYET SAI

/*
const getPhoneNumber = () =>{
    let phoneNumber;

    console.log("Gọi điện cho thằng Hiếu, cho xin số thằng Trí");

    console.log("Thằng Hiếu đang tìm số thằng trí");
    
    setTimeout(() => {
        phoneNumber = 987654321;
        console.log("Đây rồi, số điện thoại của thằng Trí này");
    }, 1000);

    console.log(phoneNumber);
}
getPhoneNumber();

*/

// CACH GIAI QUYET XAU
/*
const getPhoneNumber = () =>{
    let phoneNumber;

    console.log("Gọi điện cho thằng Hiếu, cho xin số thằng Trí");

    console.log("Thằng Hiếu đang tìm số thằng trí");
    
    setTimeout(() => {
        phoneNumber = 987654321;
        console.log("Đây rồi, số điện thoại của thằng Trí này");
    }, 1000);

    setTimeout(() => {
        console.log(phoneNumber);
    }, 1500);

}
getPhoneNumber();

*/
// CACH SUA DUNG, SU DUNG HAM GOI LAI( CALLBACK FUNCTION)
/*
const getPhoneNumber = (sauKhiNhanDuocSDT) =>{
    let phoneNumber;

    console.log("Goi dien cho Hieu, xin so Tri");

    console.log("Hieu dang tim so Tri");
    
    setTimeout(() => {
        phoneNumber = 987654321;
        sauKhiNhanDuocSDT(phoneNumber);
    }, 2000);

}

const sauKhiNhanDuocSDT = (soDTDaNhan) =>{
    console.log("Tao tim duoc so dien thoai Tri roi nek");
    console.log(`Day la so dien thoai cua Tri: ${soDTDaNhan}`);
}
getPhoneNumber(sauKhiNhanDuocSDT);

*/

// VAN DE VOI QUA NHIEU HAM GOI LAI ( CALLBACK FUNCTIONS )
/*
const getPhoneNumber = (sacPin) =>{
    let phoneNumber;

    console.log("Goi dien cho Hieu, xin so Tri");

    console.log("Hieu dang tim so Tri");
    
    
    setTimeout(() => {
        phoneNumber = 987654321;
        sacPin(phoneNumber,goiChoTriSauKhiSacPinXong);
    }, 2000);
    
}

const sacPin = (sdt,goiChoTriSauKhiSacPinXong)=>{
    console.log("Tao tim duoc so dien thoai Tri roi nek");
    console.log("Doi xiu, tao sac pin da");
    setTimeout(() => {
        console.log("Sac pin xong, bat dau goi cho Tri");
        goiChoTriSauKhiSacPinXong(sdt);
    }, 3000);
}

const goiChoTriSauKhiSacPinXong = (sdt) =>{
    console.log('Dang noi chuyen voi Tri sau khi lay duoc sdt tu Hieu va sac pin xong.');
    console.log(`So dien thoai cua Tri: ${sdt}`);
}

// TIEN HANH TOAN BO QUA TRINH

getPhoneNumber(sacPin);

*/

const getPhoneNumber = (anCom) =>{
    let phoneNumber;

    console.log("Goi dien cho Hieu, xin so Tri");

    console.log("Hieu dang tim so Tri");
    
    
    setTimeout(() => {
        phoneNumber = 987654321;
        anCom(phoneNumber,AnComXongGoiChoTri);
    }, 2000);
    
}

const sacPin = ()=>{
    console.log("Tao tim duoc so dien thoai Tri roi nek");
    console.log("Doi xiu, tao sac pin da");
    setTimeout(() => {
        console.log("Sac pin xong, thoi an com da");
    }, 3000);
}

const anCom = (sdt,AnComXongGoiChoTri)=>{
    sacPin();
    setTimeout(() => {
        console.log("Doi xiu, tao an com da");
        console.log("An com xong, bat dau goi cho Tri");
        AnComXongGoiChoTri(sdt);
    }, 5000);
}

const AnComXongGoiChoTri = (sdt) =>{
    console.log('Dang noi chuyen voi Tri sau khi lay duoc sdt tu Hieu va sac pin xong.');
    console.log(`So dien thoai cua Tri: ${sdt}`);
}

// TIEN HANH TOAN BO QUA TRINH

getPhoneNumber(anCom);
