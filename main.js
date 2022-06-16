

 /*get element*/
 const takeDigit = document.querySelector('#take-digit');
 const guessBtn = document.querySelector('#guess-btn');
 const resultList = document.querySelector('#result-list');
 const correctScore = document.querySelector('#correctScore');
 const wrongScore = document.querySelector('#wrongScore');
 const correctProgress = document.querySelector('#correct-progress')
 const wrongProgress = document.querySelector('#wrong-progress')
 const image = document.querySelector('#image');
 const loadPage = document.querySelector('#load-page');
 

// trigger with enter and button

let count = 0;
let correct = 0;
let wrong = 0;
let progressWidth = 0;
takeDigit.addEventListener('keyup',function(e){
    if(e.keyCode === 13){
        guessBtn.click();

    }
} );

function handleBtn(){
    
        count++;

        let guessDigit = parseInt(takeDigit.value);
        let randomNumber = Math.floor(Math.random() * 9) + 1;

        
        let listItem = document.createElement('li');
        listItem.classList = 'list-group-item';
        
        //validation and random number check
        if(guessDigit<=9 && guessDigit>=0 && guessDigit !== ''){
            
            if(count>5){
                
                takeDigit.setAttribute('readonly',null)
            }
            else{
                 if(guessDigit === randomNumber){
                     correct++;
                     listItem.style.listStyle = 'none';
                     listItem.style.border='solid 1px #17A2B8'
                     listItem.style.color='#17A2B8'
                     listItem.classList = 'text-center mt-2';
                     correctProgress.innerHTML = correct * 20 +'% Correct';
                     correctProgress.style.width = correct * 20;
                     listItem.innerHTML = 'Wow great!!'
                     correctScore.innerHTML = correct;
                     correctScore.classList.add("p-1");
                     correctScore.classList.add("bg-success");
                 }
                 else{
                     wrong++;
                     listItem.style.listStyle = 'none',
                     listItem.style.border='solid 1px #C82333'
                     listItem.style.color='#C82333';
                     listItem.classList ='text-center mt-2';
                     wrongProgress.innerHTML = wrong * 20 +'% Wrong';
                     wrongProgress.style.width = (20 / 100) * wrong ;
                     
                    listItem.innerHTML = 'Sorry!! Wrong Digit. It Was '+randomNumber;
                    wrongScore.innerHTML=wrong;
                    wrongScore.classList.add("p-1");
                    wrongScore.classList.add("bg-danger");
                 }

                 // image emotion logic
                //  if(wrong >= 3){
                //      image.setAttribute('src','image/lost1.gif');
                //  }
                //  if(correct >= 3){
                //      image.setAttribute('src','image/happy1.gif');
                //  }
                //  if(correct === 2 && wrong === 2){
                //      image.setAttribute('src','image/happyTwo.gif');
                //  }
                 
            }
            if(count===5){
                takeDigit.setAttribute('readonly',null)
                takeDigit.style.backgroundColor='#9a17b8';
                alert('Finished!');
                
                loadPage.innerHTML = 'Try again';
                loadPage.classList ='bg-primary p-2';
                loadPage.style.color='white';
                loadPage.style.cursor='pointer';
                loadPage.style.borderRadius= '10px';
                loadPage.addEventListener('click',()=>{
                    location.reload();
                })
            }

            resultList.appendChild(listItem);


        }
        else{
            const message = 'দুঃখিত !! অনুগ্রহ করে ০-৯ পর্যন্ত যে কোন একটি সংখ্যা দিন।';
            alert(message);
        }

        takeDigit.value = '';
}
