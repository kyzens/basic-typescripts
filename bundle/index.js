"use strict";
// let namaSaya: string = "Wahyu Usman";
// let username: number = 12345;
// let isDead: boolean = false;
function createIntel(processor) {
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
function createAmd(processor) {
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
function createAmd1(processor) {
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
    `;
    console.log(message);
}
const corei5 = {
    brand: "intel",
    series: "core i5",
    core: "dual core",
    thread: 8,
    baseClock: 2.5,
    turboBoost: true
};
const ryzen3 = {
    brand: "amd",
    series: "ryzen 3",
    core: 4,
    thread: 8,
    baseClock: 3.2,
    precisionBoost: true
};
const ryzen1 = {
    brand: "amd",
    series: "ryzen 1",
    core: "quad core",
    thread: 8,
    baseClock: 3.2,
};
createIntel(corei5);
createAmd(ryzen3);
createAmd1(ryzen1);
