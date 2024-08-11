let show = document.getElementById("answer");
// getting the buttons
let buttons = document.querySelectorAll("button");
let input_string = '';

 const is_valid_expression=(string)=>{
  const check= /^(\d+(\.\d+)?([+\-*/]\d+(\.\d+)?)*|\d*\.\d+([+\-*/]\d*\.\d+)*)$/;
  return check.test(string);
 }


for (item of buttons) {
    item.addEventListener("click", (e) => {
        data = e.target.innerText;
        console.log("button text", data);
        if (data == "x") {
             data = "*";
            input_string +=data; 
            show.value =input_string;
        }
        else if (data == "C") {
            input_string = "";
            show.value = input_string;
        }
        else if (data == "DEL") {
            input_string=input_string.substring(0,input_string.length-1);
            show.value=input_string;
        }
        else if (data == "=") {
            if(is_valid_expression(input_string)){
                show.value = eval(input_string);
            }
          else{
            alert("Invalid format used")
            input_string="";
            show.value="";
          }
        }
    else{
        input_string +=data;
        show.value=input_string
    }
    });
}