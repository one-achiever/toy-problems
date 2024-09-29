function inputMarks() {
    let marks = 80;
    
    if (marks > 79) {
        return "A";
    } 
    else if (marks >= 60 && marks <= 79) {
        return "B";
    } 
    else if (marks >= 50 && marks <= 59) {
        return "C";
    } 
    else if (marks >= 40 && marks <= 49) {
        return "D";
    } 
    else {
        return "E";
    }
}

function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPerUnit = 5;
    const maxDemeritPoints = 12;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerUnit);
        console.log(`Points: ${demeritPoints}`);
        
        if (demeritPoints > maxDemeritPoints) {
            console.log("License suspended");
        }
    }
}

function calculateNetSalary(basicSalary, benefits) {

    const grossSalary = basicSalary + benefits;

    
    const nssfDeduction = Math.min(0.06 * grossSalary, 1080);

    
    function calculateNhifDeduction(grossSalary) {
        if (grossSalary <= 5999) return 150;
        else if (grossSalary <= 7999) return 300;
        else if (grossSalary <= 11999) return 400;
        else if (grossSalary <= 14999) return 500;
        else if (grossSalary <= 19999) return 600;
        else if (grossSalary <= 24999) return 750;
        else if (grossSalary <= 29999) return 850;
        else if (grossSalary <= 34999) return 900;
        else if (grossSalary <= 39999) return 950;
        else if (grossSalary <= 44999) return 1000;
        else if (grossSalary <= 49999) return 1100;
        else if (grossSalary <= 59999) return 1200;
        else if (grossSalary <= 69999) return 1300;
        else if (grossSalary <= 79999) return 1400;
        else if (grossSalary <= 89999) return 1500;
        else if (grossSalary <= 99999) return 1600;
        else return 1700;
    }
    const nhifDeduction = calculateNhifDeduction(grossSalary);

    
    function calculatePaye(grossSalary) {
        let taxableIncome = grossSalary - nssfDeduction;
        let paye = 0;

        
        if (taxableIncome <= 24000) {
            paye = taxableIncome * 0.1;
        } else if (taxableIncome <= 32333) {
            paye = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
        } else {
            paye = (24000 * 0.1) + (8333 * 0.25) + ((taxableIncome - 32333) * 0.3);
        }

        return paye;
    }
    const paye = calculatePaye(grossSalary);

    
    const netSalary = grossSalary - (paye + nhifDeduction + nssfDeduction);

    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`PAYE (Tax): ${paye}`);
    console.log(`Net Salary: ${netSalary}`);

    return netSalary;
}


const basicSalary = 50000;
const benefits = 10000;
calculateNetSalary(basicSalary, benefits);
