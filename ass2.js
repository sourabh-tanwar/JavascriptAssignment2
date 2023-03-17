function checkTriangle(x, y, z)
{
     
  
    if (x == y && y == z)
        document.write("Equilateral Triangle");
 
   
    else if (x == y || y == z || z == x)
        document.write("Isosceles Triangle");

    else
        document.write("Scalene Triangle");
}



function getGrade(marks) {
  if (marks >= 90 && marks <= 100) {
    return "S grade";
  } else if (marks >= 80 && marks < 90) {
    return "A grade";
  } else if (marks >= 70 && marks < 80) {
    return "B grade";
  } else if (marks >= 60 && marks < 70) {
    return "C grade";
  } else if (marks >= 50 && marks < 60) {
    return "D grade";
  } else if (marks >= 40 && marks < 50) {
    return "E grade";
  } else if (marks >= 0 && marks < 40) {
    return "Student has failed";
  } else {
    return "Invalid marks";
  }
}



//Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

let sum = 0;

for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log(sum);





//Write a program to find the factorial of all prime numbers between a given range



function prime(start, end) {

  for (let i = start; i <= end; i++) {
    let isPrime = true;


    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }


    if (isPrime) {
      let factorial = 1;
      for (let k = 2; k <= i; k++) {
        factorial *= k;
      }
      console.log(`Factorial of ${i} is ${factorial}`);
    }
  }
}

prime(1, 100);
