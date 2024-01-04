var userdata = {username:"" , password:"" , age:"" , gender:"" , phonenumber:""};

var sn = document.getElementById('username').Value;
var pass = document.getElementById('password').Value;
var age = document.getElementById('age').Value;
var male = document.getElementById('male').Value;
var female = document.getElementById('female').Value;
var phone = document.getElementById('phone').Value;

function addvalie()
{
    if (sn !== " " && pass !== " " && age !== " " && male||female !== " " && phone !== " ")
    {
        userdata.username =  sn ;
        var upper = /[A-Z]/;
        var lower = /[a-z]/;
        var number = /[0-9]/;
        var special_char = /[~!@#$%^&()_+]/;
        if(upper.test(pass) && lower.test(pass) && number.test(pass) && special_char.test(pass) && pass.length <= 8)
        {
            userdata.password = pass;
            return true;
        }else
        {
            alert('Password Not Strong!');
        }
         if(phone.length == 11 )
        {
            userdata.phonenumber = phone; 
            return true;
        }
        else
        {
            alert('The Phone Number Must Be 11 Numbers!');
        }
        if(age <= 18 && age >= 60)
        {
            userdata.age = age;
            return true;
        }
        else
        {
            alert("The Age Must Be Graterthan 18 And lessthan 60!");
        }
        if(male == checked())
        {
            userdata.gender = male;
           return true;
        }
        if(female == checked())
        {
            userdata.gender = female;
            return true;
        }
        else
        {
            alert('You Must Choes The Gender!');
            return false;
        }
    }
    else{
        alert('Please Enter All The Data!');
    }
    alert("Data Saved Succ");
    console.log(userdata);
}










function getvalue()
{
    var username = document.getElementById('login_name').Value;
    var password = document.getElementById('password').Value;
    if(username !=="" && password !== "")
    {
        if(userdata.username === username && userdata.password === password)
            {
                alert("Log In Suc");
                console.log(userdata.username , userdata.password);
            }else
                {
                    alert("Invaild User Name OR Password !");
                }
    }else
        {
            alert('Please Fill The Data!');
        }
}









function forgetpass()
{
    var password = document.getElementById('pa').Value;
    var user = document.getElementById('na').Value;
    for(i=0 ; i<userdata.length ; i++)
    {
        if(user == user[i].username)
        {
            userdata[i].password = password;
        }
    }
}