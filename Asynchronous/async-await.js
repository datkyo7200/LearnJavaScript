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
      if (chayPin) {
        reject("Dien thoai no roi khong goi duoc");
      } else {
        console.log("Sac pin xong bat dau goi cho Tri");
        resolve();
      }
    }, 2000);
  });
  return thaoTacSacPin;
};

// Goi cho tri
const goiChoTri = (sDt) => {
  console.log(`Dang noi chuyen voi Tri voi sdt Hieu da dem ${sDt}`);
};

//Hanh dong
const hanhDong = async () => {
  try {
    const sDt = await getPhoneNumber();
    try {
      await sacPin();
      goiChoTri(sDt);
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
};
hanhDong();
