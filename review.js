let yes =0;
//let no =0;
function submit()
{
    let radios = document.querySelectorAll(".radio");
    radios.forEach
    (
        function(r){
        if(r.checked && r.value == "yes")
        {
            yes++;
        }
       /* else if(r.checked && r.value == "no")
        {
            no++;
        }*/
        
    })
    alert("Thank You For Your Feedback!"+`Totle \"Yes"\ points: ${yes} `);
}

//the answers with no = ${no}