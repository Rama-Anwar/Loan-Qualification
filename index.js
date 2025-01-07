age = 35;
salary = 35000;

if (age >= 18 && age <= 60 && salary >= 5000){
    let borrowedAmount = salary * 3;
    if (borrowedAmount > 60000) {
        borrowedAmount = 60000
    }
    console.log("Congratulations! You are eligible for " + borrowedAmount + " EGP loan")

}
else if (age == null || age == undefined || salary == null || salary == undefined){
    console.log("Applicant is rejected because they do not meet the minimum requirements")
}
else {
    console.log("Applicant is rejected because they do not meet the minimum requirements")
}
