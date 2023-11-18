// let namaSaya: string = "Wahyu Usman";
// let username: number = 12345;
// let isDead: boolean = false;

// array biasa
// let istriSaya: string[];
// istriSaya = ["true", "false"];

// tuple array
// let rumahSaya: [string, number, boolean];
// rumahSaya = ["true", 123, true];

// console.log({namaSaya, username, isDead, istriSaya, rumahSaya});

// Type Data Custom
// type TemanType = { 
//     nama: string, 
//     bekenBinci: boolean,
//     pinjaman: number 
// };
// let temanSaya: TemanType;

// temanSaya = {
//     nama: "Pian",
//     bekenBinci: true,
//     pinjaman: 1000000
// };

// console.log(temanSaya);

// // Function
// function create(): number {
//     return 2;
// }

// // Arrow Function
// const createDua = (): string => {
//     return "hello world";
// }

// const result = createDua();
// console.log(result);

// function createTiga(x: number, y: number): string {
//     return `${x} + ${y} = ${x + y}`;
//     // let a = 1;
//     // let b = 2;
//     // let z = a + b;
//     // console.log("hasilnya adalah: " + z);
// }

// const result = createTiga(10, 20);
// console.log(result);

// type Wanita = string;
// type Pria = boolean;
// type Gender = Wanita | Pria;
// let sayaManusia: Gender;
// sayaManusia = true;

type CoreCount = 2 | 4 | 8 | 12;
type CoreName = "dual core" | "quad core" | "octa core" | "hexa core"
type Core = CoreCount | CoreName;

interface Processor {
    brand: string;
    series: string;
    core: Core;
    thread: number;
    baseClock: number;
}

interface Intel extends Processor {
    // brand: "intel";
    turboBoost: boolean;
}

interface Amd extends Processor {
    // brand: "amd";
    precisionBoost?: boolean;
}

function createIntel(processor: Intel): void {
    const message = `
    ----
    terima kasih ${processor.brand} ✨
    ----
    anda telah berhasil membuat processor dengan detail berikut: 

    Series: ${processor.series}
    Core: ${processor.core}
    Thread: ${processor.thread}
    Base Clock: ${processor.baseClock}
    Turbo Boost Enabled: ${processor.turboBoost}
    `;
    console.log(message);
}

function createAmd(processor: Amd): void {
    const message = `
    ----
    terima kasih ${processor.brand} ✨
    ----
    anda telah berhasil membuat processor dengan detail berikut: 

    Series: ${processor.series}
    Core: ${processor.core}
    Thread: ${processor.thread}
    Base Clock: ${processor.baseClock}
    Precision Boost Enabled: ${processor.precisionBoost}
    `;
    console.log(message);
}

function createAmd1(processor: Amd): void {
    const message = `
    ----
    terima kasih ${processor.brand} ✨
    ----
    anda telah berhasil membuat processor dengan detail berikut: 

    Series: ${processor.series}
    Core: ${processor.core}
    Thread: ${processor.thread}
    Base Clock: ${processor.baseClock}
    Precision Boost Enabled: ${processor.precisionBoost ? processor.precisionBoost : "tidak ada"}
    `
    console.log(message);
}

const corei5: Intel = {
    brand: "intel",
    series: "core i5",
    core: "dual core",
    thread: 8,
    baseClock: 2.5,
    turboBoost: true
}

const ryzen3: Amd = {
    brand: "amd",
    series: "ryzen 3",
    core: 4,
    thread: 8,
    baseClock: 3.2,
    precisionBoost: true
}

const ryzen1: Amd = {
    brand: "amd",
    series: "ryzen 1",
    core: "quad core",
    thread: 8,
    baseClock: 3.2,
}

createIntel(corei5);
createAmd(ryzen3);
createAmd1(ryzen1);