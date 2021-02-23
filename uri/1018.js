/* In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed.
The possible banknotes are 100, 50, 20, 10, 5, 2 e 1. Print the read value and the list of banknotes. */

function amount(x){
    //Variable Declaration
    let note100, note50, note20, note10, note5, note2, note1;
    let firstR, secondR, thirdR, fourthR, fifthR;
    //Condtion//
    if(x<=10) {
        if(x===10){
            note10 = x/10;
            console.log("100 note is", 0,
            "\n 50 note is",0,
            "\n 20 note is",0, 
            "\n 10 note is",note10, 
            "\n 5 note is",0, 
            "\n 2 note is",0, 
            "\n 1 note is",0);
        }
        else if(x%5===0){
            note5 = x/5;
                console.log("100 note is", 0,
                "\n 50 note is",0,
                "\n 20 note is",0, 
                "\n 10 note is",0, 
                "\n 5 note is",note5, 
                "\n 2 note is",0, 
                "\n 1 note is",0);
            }
        else if(x%5!=0){
            note5 = parseInt(x/5);
            firstR = x%5;
            if(firstR %2===0){
                note2 = parseInt((firstR/2));
                console.log("100 note is", 0,
                "\n 50 note is",0,
                "\n 20 note is",0, 
                "\n 10 note is",0, 
                "\n 5 note is",note5, 
                "\n 2 note is",note2, 
                "\n 1 note is",0); 
            }
            else if(firstR%2!=0){
                note2 = parseInt((firstR/2));
                note1 = parseInt((firstR%2));
                
            }console.log("100 note is", 0,
                "\n 50 note is",0,
                "\n 20 note is",0, 
                "\n 10 note is",0, 
                "\n 5 note is",note5, 
                "\n 2 note is",note2, 
                "\n 1 note is",note1); 
        }
    }
    else if(x<=100){
        if(x===100){
            note100= x/100;
            console.log("100 note is", note100,
            "\n 50 note is",0,
            "\n 20 note is",0, 
            "\n 10 note is",0, 
            "\n 5 note is",0, 
            "\n 2 note is",0, 
            "\n 1 note is",0);
        }
        else if(x<100){
            note50 = parseInt(x/50);
            firstR = x%50;
            note20 = parseInt(firstR/20);
            secondR = firstR%20;
            note5 = parseInt(secondR/5);
            thirdR = secondR%5;
            note2 = parseInt(thirdR/2);
            fourthR = thirdR%2;
            note1= parseInt(fourthR/1);
            console.log("100 note is", 0,
            "\n 50 note is",note50,
            "\n 20 note is",note20, 
            "\n 10 note is",0, 
            "\n 5 note is",note5, 
            "\n 2 note is",note2, 
            "\n 1 note is",note1);
        }
    }
    else if (x<=1000||x<=10000||x<=100000){
        if(x===1000||x===10000||x===100000){
            note100 = parseInt(x/1000);
            console.log("100 note is", note100,
            "\n 50 note is",0,
            "\n 20 note is",0, 
            "\n 10 note is",0, 
            "\n 5 note is",0, 
            "\n 2 note is",0, 
            "\n 1 note is",0);
        }
        else if(x<1000||x<10000||x<100000){
            note100 = parseInt(x/100); //888
            firstR = x%100; //99 88
            note50 = parseInt(firstR/50);
            secondR = firstR%50; //49 38
            note20 = parseInt(secondR/20);
            thirdR= secondR%20; //9 18
            note10 = parseInt(thirdR/10);
            fourthR = thirdR%10; //8
            note5 = parseInt(fourthR/5);
            fifthR = fourthR%5; //3
            note2 = parseInt(fifthR/2); 
            note1 = fifthR%2;
            if(thirdR>=10){
                console.log("100 note is", note100,
                "\n 50 note is",note50,
                "\n 20 note is",note20, 
                "\n 10 note is",note10, 
                "\n 5 note is",note5, 
                "\n 2 note is",note2, 
                "\n 1 note is",note1);
            }
            else if (thirdR<=10){
                console.log("100 note is", note100,
                "\n 50 note is",note50,
                "\n 20 note is",note20, 
                "\n 10 note is",0, 
                "\n 5 note is",note5, 
                "\n 2 note is",note2, 
                "\n 1 note is",note1);
            }
        }
    
    }
}

