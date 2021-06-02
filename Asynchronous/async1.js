async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
    });

    let result = await promise; // wait until the promise resolves (*)
    console.log(result); // "done!"
}

f();

// async là hàm xử lý những thứ không đồng bộ, await là hàm xử lý đồng bộ chỉ được sử dụng trong async
