// JAVA ZCRIPT LESSON

// alert function...

    // alert("hello, world");

    console.log(5);
    console.log(7);

    let name = 340;
    let year = 2005;
    console.log(name,year);

    let age = 40;
    console.log(age);
    
    year = 2010
    console.log(age)

    // const
    // we use const if we don't want a value to be overwritten.

    const points = 100
    console.log(points)

    // points = 50   this is where we try to change the variable meanwhile its on const.
    // console.log(points)

    // var

    // var score = 70
    // console.log(score)  never mind this is an old way of doing this but for now we are going to be using only const and let.

    // String

    console.log("hello, world");
    let email = ("godstimemaklu3@gmail.com")
    console.log(email)

    let firstName = "Godstime";
    let lastName = "Maklu";

    console.log(firstName + lastName);
               // or
    let fullName = firstName + " " + lastName;
    console.log(fullName)

    // how to get a single character using sqaure bracket
    // note: we are using number because java script is a number based language (0 based language).
    // getting characters

    console.log(firstName[0]);

    // string lenght

    console.log(firstName.length);

    // string method

    console.log(fullName.toUpperCase());
    let result = fullName.toLowerCase();
    console.log(result)
    console.log(result,fullName);

    let index = email.indexOf("@");
    console.log(index)

    //common string method
    let studentName = "danielGenesis"
    let sum = studentName.lastIndexOf("s");
    console.log(sum);

    let cut = "luckysweatmail";
    let set = cut.slice(0,6)

    console.log(set);