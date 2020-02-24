// function test() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const name = 123;
//             resolve(name);
//         })
//     })
// }
// async function a() {
//     let val = await test();
//     console.log(val)
// }
// a();



async function test() {
    setTimeout(async () => {
        const name = 123;
        return name;
    })
}
async function a() {
    let val = await test();
    console.log(val)
}
a();