var calc=document.getElementById("btn")
var ageResult=document.getElementById("ageResult")
var inputDate=document.getElementById("dob")

calc.addEventListener("click",function(){
    const dob=inputDate.value
    if (dob) {
        const dobDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
            age--;
        }
        ageResult.innerText = "Your age is " + age + " years old.";
    } else {
        ageResult.innerText = "Please enter a valid date.";
    }
})