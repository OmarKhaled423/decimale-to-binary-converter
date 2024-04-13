const numbersForm = document.querySelectorAll("#form .input_group input[type='text']");
const textForms = document.querySelectorAll("#form .input_area_group textarea");
const decimaleNum = document.querySelector("#form .input_group #decimale");
const binaryNum = document.querySelector("#form .input_group #binary");
const octalNum = document.querySelector("#form .input_group #octal");
const hexadecimaleNum = document.querySelector("#form .input_group #hexadecimale");
const numbersResetBtn = document.querySelector("#button_box #numbers_reset_btn");
const binaryInputArea = document.querySelector("#binary_input_area");
const textInputArea = document.getElementById("text_input_area");
const texareaResetBtn = document.getElementById("texarea_reset_btn");
// const decimale = document.getElementById("decimale");
// console.log(decimaleNum);
// console.log(binaryNum);



// decimale number checker
let isDecimale = function (text) {
    for (let t of text) {
        if (t < "0" || t > "9") {
            // console.log(`${t} is not a dicimale number ❌`)
            alert(`${t} is not a dicimale number ❌`)
            return false;
        } else {
            // console.log(`${t} is a dicimale number`)
            return true;
        }
    }
}

// binary number checker
let isBinary = function (text) {
    for (let t of text) {
        if (t != "0" && t != "1") {
            // console.log(`${t} is not a dicimale number ❌`)
            // alert(`${t} is not a dicimale number ❌`)
            return false;
        } else {
            // console.log(`${t} is a dicimale number ✔`)
            return true;
        }
    }
}

// octal number checker
let isOctal = function (text) {
    for (let t of text) {
        if (t < "0" || t > "7") {
            // console.log(`${t} is not a octal number`)
            alert(`${t} is not a octal number`)
            return false;
        } else {
            // console.log(`${t} is a octal number`)
            return true;
        }
    }
}

// hexadecimale number checker
let isHexadecimale = function (text) {
    for (let t of text) {
        if (
            (t < "0" || t > "9") &&
            (t < "a" || t > "f") &&
            (t < "A" || t > "F")) {
            // console.log(`${t} is not a hexadicimale number ❌`)
            alert(`${t} is not a hexadicimale number ❌`)
            return false;
        } else {
            // console.log(`${t} is a Hexadicimale number ✔`)
            return true;
        }
    }
}


// convert any number system to Other Number System defines
let convertOtherNumberSystem = function (decimale) {
    decimaleNum.value = decimale || 0;
    binaryNum.value = decimale.toString(2) || 0;
    octalNum.value = decimale.toString(8) || 0;
    hexadecimaleNum.value = decimale.toString(16) || 0;
}

// reset number checker
let resetFunction = function () {
    decimaleNum.value = 0;
    binaryNum.value = 0;
    octalNum.value = 0;
    hexadecimaleNum.value = 0;
}



// text to binary code converter
let textToBinary = function (text) {
    let charTextArray = [];
    for (const ind in text) {
        charTextArray.push(text.charCodeAt(ind));
    }
    return charTextArray.map((charCode) => {
        return charCode.toString(2);
    }).join(' ')
}



// binary code to text converter
let binaryToText = function (binaryString) {
    return binaryString.split(' ').map(function (bin) {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}



;
[...numbersForm].forEach((input) => {
    // console.log(input)
    input.addEventListener("input", (e) => {
        let target = e.target;

        //converter function for decimale 
        // =============================================================
        if (target.id == "decimale") {
            if (target.value) {
                if (!isDecimale(target.value)) {
                    //  console.log("not decimale")
                } else {
                    // console.log("decimale")
                    let decimale = parseInt(target.value) || 0;
                    convertOtherNumberSystem(decimale)
                }
            } else {
                resetFunction()
            }
        }


        // ==============================================================
        //converter function for binary 
        // =============================================================
        if (target.id == "binary") {
            if (target.value) {
                if (!isBinary(target.value)) {
                    console.log("not binary")
                } else {
                    console.log("binary")
                    let decimale = parseInt(target.value, 2) || 0;
                    convertOtherNumberSystem(decimale)
                }
            } else {
                resetFunction()
            }
        }



        // ==============================================================
        //converter function for octal
        // =============================================================
        if (target.id == "octal") {
            if (target.value) {
                if (!isOctal(target.value)) {
                    console.log("not octal")
                } else {
                    console.log("octal")
                    let decimale = parseInt(`0${target.value}`, 8) || 0;
                    convertOtherNumberSystem(decimale)

                }
            } else {
                resetFunction()
            }
        }
        // ==============================================================
        //converter function for Hexadecimale
        // =============================================================
        if (target.id === "hexadecimale") {
            if (target.value) {
                if (!isHexadecimale(target.value)) {
                    console.log("not Hexadecimale")
                } else {
                    console.log("Hexadecimale")
                    let decimale = parseInt(`0x${target.value}`, 16) || 0;
                    convertOtherNumberSystem(decimale)
                }
            } else {
                resetFunction()
            }
        }
        // ==============================================================

    })
})




;
[...textForms].forEach((textArea) => {
    // console.log(input)
    textArea.addEventListener("input", (e) => {
        let target = e.target;
        if (target.id === "text_input_area") {
            let codeData = textToBinary(target.value);
            // console.log(codeData)
            binaryInputArea.value = codeData;
        }

        if (target.id === "binary_input_area") {
            if (isBinary(target.value)) {
                let textData = binaryToText(target.value) || 0;
                // console.log(textData)
                textInputArea.value = textData;
            } else {
                textInputArea.value = "";

            }
        }
    })
})




numbersResetBtn.addEventListener("click", function (e) {
    e.preventDefault()
    resetFunction()
})


// isDecimale("0175444444468798467sdhfsdkjfh")
// isHexadecimale("0175444444468798467sdhfsdkjfh")
// isBinary("0175444444468798467sdhfsdkjfh")
// console.log(decimaleNum, binaryNum, octalNum, hexadecimaleNum)


window.addEventListener("load", function () {
    resetFunction()
})