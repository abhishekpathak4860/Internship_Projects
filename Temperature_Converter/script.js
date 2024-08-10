const button=document.querySelector('.btn');
 const reset=document.getElementById("reset");


convert_temperature=()=>{
const from=document.getElementById("fromUnit").value;
const to=document.getElementById("toUnit").value;
const temp=parseFloat(document.getElementById("temp").value);


switch(from){
    case 'C':
        if(to==='F'){
            var convert_value=(temp*9/5) + 32;
            var unit='F';
        }
        else if(to==='K'){
            var convert_value=temp + 273.15;
            var unit='K';
        }
        else{
            var convert_value=temp;
            var unit='C';
        }
        break;

        case 'F':
            if(to==='C'){
                var convert_value=(temp-32)*5/9;
                var unit='C';
            }
            else if(to==='K'){
                var convert_value=(temp-32)*5/9 + 273.15;
                var unit='K';
            }
            else{
                var convert_value=temp;
                var unit='F';
            }
            break;

            case 'K':
                if(to==='C'){
                    var convert_value=temp-273.15;
                    var unit='C';
                }
                else if(to==='F'){
                    var convert_value=(temp -273.15) *9/5 + 32;
                    var unit='F';
                }
                else{
                    var convert_value=temp;
                    var unit='K';
                }
                break;
}
      document.getElementById("output").value = convert_value.toFixed(2) + ' ' + unit;
      
   
}

  const reset_value=()=>{
    document.getElementById("temp").value="";
    document.getElementById("output").value="";  
 }

reset.addEventListener("click", ()=>{
     reset_value();
})


button.addEventListener("click", ()=>{
    const temp = document.getElementById("temp").value;
    if (temp === "") {
        document.getElementById("output").value = ""; 
        alert("Please enter the temperature");
    }
    else{
        convert_temperature();
    }
    
})