var b = 3; 

function run()
{
    b+= 1;
    console.log("Gia tri: " + (b%3 + 1));
}

let x = "dien thoai samsung chinh hang";

//Tim kiem
let vitri = x.search("samsung");

if(vitri !== -1)
    {
        console.log("Tim thay");
        //Thay the
        let strNew = x.replace("samsung", "iphone");
        console.log(strNew);

    }
else
    console.log("khong tim thay");


//Tach chuoi thanh mang
let y = x.split(" ");
console.log(y);
    