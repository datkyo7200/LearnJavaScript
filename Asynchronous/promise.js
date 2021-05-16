/*
const getPhoneNumber = () =>{
    let phoneNumber;

    console.log("Goi dien cho Hieu, xin so Tri");

    console.log("Hieu dang tim so Tri");

    const thaoTacTimKiem = new Promise((resolve, reject) => {
        let daTimThay;
        setTimeout(() => {
            daTimThay = false;

            if(daTimThay){
                phoneNumber = 123456789;
                console.log(`Day roi, so cua Tri la: ${phoneNumber}`);
                resolve(phoneNumber);
            }else{
                reject('Tao khong co so thang Tri');
            }

        }, 1000);
    });
    return thaoTacTimKiem;
}

getPhoneNumber()
    .then(sDt => {
        console.log(`Da xin duoc so thang Tri: ${sDt}`)
    })
    .catch(error =>{
        console.log(error);
    });

*/
// Thao tac thu nhat xin so dien thoai cua Tri
const getPhoneNumber = () => {
  let phoneNumber;

  console.log("Goi dien cho Hieu, xin so Tri");

  console.log("Hieu dang tim so Tri");

  const thaoTacTimKiem = new Promise((resolve, reject) => {
    let daTimThay;
    setTimeout(() => {
      daTimThay = true;

      if (daTimThay) {
        phoneNumber = 123456789;
        console.log(`Day roi, so cua Tri la: ${phoneNumber}`);
        resolve(phoneNumber);
      } else {
        reject("Tao khong co so thang Tri");
      }
    }, 1000);
  });
  return thaoTacTimKiem;
};

// Thao tac thu hai sac pin

const sacPin = () => {
  console.log("Doi ti sac pin da");
  let chayPin;
  const thaoTacSacPin = new Promise((resolve, reject) => {
    setTimeout(() => {
      chayPin = false;
      if (!chayPin) {
        console.log("Sac pin xong bat dau goi cho Tri");
        resolve();
      } else {
        reject("Dien thoai no roi khong goi duoc");
      }
    }, 2000);
  });
  return thaoTacSacPin;
};

// Goi cho tri

const goiChoTri = (sDt) => {
  console.log(`Dang noi chuyen voi Tri voi sdt Hieu da dem ${sDt}`);
};

//THUC HIEN TOAN BO THAO TAC
getPhoneNumber()
  .then((sDt) => {
    sacPin()
      .then(() => {
        goiChoTri(sDt);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
