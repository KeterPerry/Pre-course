
alert("Let's play a game! I pick a word and you have ten attempts to guess what it is. In each attempt you pick a single letter. You may also try to guess the whole word. If you manage guessing the word, You Win!");


let attempts=10;
let flag1=false;
let flag2=false;
var animals = [
'dog',
'elephant',
'duck',
'donkey'
];

let randword = animals[Math.floor(Math.random() * animals.length)]
console.log(randword);

let size= randword.length;
console.log(size);


let array= [size];
let i;

for (i=0; i<size; i++)
    {
       array[i]= '*'
    }

while (flag1===false)
{
    let guess= prompt('This is your word '+array+'. You have '+attempts+' attempts left. What is your guess?');
    alert( 'Your guess is '+guess+'');

        if (guess.length> 1)
           {
                    for (k=0; k<guess.length; k++)
                        {
                            if (  64< guess[k].charCodeAt(0) &&  guess[k].charCodeAt(0)< 91 || 96< guess[k].charCodeAt(0) && guess[k].charCodeAt(0)< 123 )

                             {    
                                                let small_guess =guess.toLowerCase();

                                       if (small_guess===randword) 
                                           {
                                             alert("Good Job! You won!");
                                             flag1=true;
                                             break;
                                           }
                                       else
                                          {
                                             alert("This is not the word. Please enter a single letter or type in the whole word.");
                                          }  break;
                             }
               
                           else
                           {
                              alert("Input is invalid. Please try again!");
                              break;
                           }
                        }
            }            
        else if ( 64< guess.charCodeAt() &&  guess.charCodeAt()< 91 || 96< guess.charCodeAt() && guess.charCodeAt()< 123 )
               {
                     let small_guess= guess.toLowerCase();

                     let j;
                     for ( j=0; j<randword.length; j++)
                          {
                              if( small_guess===randword[j])
                                   {
                                    array[j]=small_guess;
                                    flag2=true;
                                   }

                           }


                    if (array.join('')===randword)
                       {
                           alert("Good Job! You won!");
                           flag1=true;
                       }
                 
                   
                    if(flag2===false)
                      {
                      attempts--;
                      }
                 
                     if(attempts===0)
                      {
                       alert("You have no more attempts left.Sorry, Game is Over!");
                       flag1=true;
                      }
                      
                      flag2=false;
               }         
                    
              else
               {
                     alert("Input is invalid. Please try again!");
               }

             
} 

alert("Bye Bye!");







