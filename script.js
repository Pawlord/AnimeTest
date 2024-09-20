let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: 'fraction'
    },
    mousewhell: true,
    keyboard: true,
});

let firstAnswer = document.getElementsByClassName('first-answer')
let secondAnswer = document.getElementsByClassName('second-answer')
let thirdAnswer = document.getElementsByClassName('third-answer')
let fourthAnswer = document.getElementsByClassName('fourth-answer')
let fifthAnswer = document.getElementsByClassName('fifth-answer')
let sixthAnswer = document.getElementsByClassName('sixth-answer')
let seventhAnswer = document.getElementsByClassName('seventh-answer')
let eigthAnswer = document.getElementsByClassName('eigth-answer')
let ninethAnswer = document.getElementsByClassName('nineth-answer')
let tenthAnswer = document.getElementsByClassName('tenth-answer')
let eleventhAnswer = document.getElementsByClassName('eleventh-answer')
let twelvethAnswer = document.getElementsByClassName('twelveth-answer')
let thirteenthAnswer = document.getElementsByClassName('thirteenth-answer')
let fourteenthAnswer = document.getElementsByClassName('fourteenth-answer')
let fifteenthAnswer = document.getElementsByClassName('fifteenth-answer')
let sixteenthAnswer = document.getElementsByClassName('sixteenth-answer')
let seventeenthAnswer = document.getElementsByClassName('seventeenth-answer')
let eighteenthAnswer = document.getElementsByClassName('eighteenth-answer')
let nineteenthAnswer = document.getElementsByClassName('nineteenth-answer')
let twentyAnswer = document.getElementsByClassName('twenty-answer')
let twentyOneAnswer = document.getElementsByClassName('twenty-one-answer')
let twentyTwoAnswer = document.getElementsByClassName('twenty-two-answer')
let twentyThreeAnswer = document.getElementsByClassName('twenty-three-answer')
let twentyFourAnswer = document.getElementsByClassName('twenty-four-answer answer')
let twentyFiveAnswer = document.getElementsByClassName('twenty-five-answer')
let twentySixAnswer = document.getElementsByClassName('twenty-six-answer')
let twentySevenAnswer = document.getElementsByClassName('twenty-seven-answer')
let twentyEightAnswer = document.getElementsByClassName('twenty-eight-answer')
let twentyNineAnswer = document.getElementsByClassName('twenty-nine-answer')
let thirtyAnswer = document.getElementsByClassName('thirty-answer')

let totalPagination = document.querySelector('.swiper-pagination-total')
let currentPagination = document.querySelector('.swiper-pagination-current')
let swiperWrapper = document.querySelector('.swiper-wrapper')


let usersAnswer = []
let choosenQuestion = []
let countRightAnswers = 0
let persentRightAnswers = 0
let countWrongAnswers = 0
let countOfQuestions = 30

let startButton = document.querySelector('.start-button')
let lastButton = document.querySelector('.end-button-disabled')
let endButtonCheck = document.querySelector('.check-answers')

let firstSlide = document.querySelector('.first-slide-main')
let endSlide = document.querySelector('.end-slide')
let swiperSlide = document.querySelector('.swiper')
let lastSlide = document.querySelector('.last-slide')

let endPageText = document.querySelector('.persent-text')
let inputName = document.querySelector('#NameOfPlayer')
let endSlidePersentText = document.querySelector('.persent-right-answer')
let userName = '';



inputName.addEventListener('input', function(){
    userName = inputName.value
    if (userName.length == '') {
        startButton.disabled = true
        startButton.classList.add('start-button-disabled')
        startButton.classList.remove('end-button')
    } else{
        startButton.disabled = false;
        startButton.classList.remove('start-button-disabled')
        startButton.classList.add('end-button')
        if (startButton.classList.contains('end-button')) {
            startButton.addEventListener('click', function(){
                firstSlide.classList.add('invisible')
                setTimeout(function(){
                    firstSlide.classList.add('double-invisible')
                    swiperSlide.classList.add('visible')
                    swiperSlide.classList.add('opening')
                    
                }, 1000)
                       
            })
        }
    }
    
})

endButtonCheck.addEventListener('click', function(){
    endSlide.classList.add('invisible')
    swiperWrapper.classList.add('start-slide-wrapper')
    
    setTimeout(function(){
        endSlide.classList.add('double-invisible')
        swiperSlide.classList.remove('invisible')
        swiperSlide.classList.add('visible')
        swiperSlide.classList.add('opening')
    
        
        
    }, 1000)
    

})



let arr = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer, sixthAnswer, seventhAnswer, eigthAnswer, ninethAnswer, tenthAnswer, eleventhAnswer, twelvethAnswer, thirteenthAnswer,
    fourteenthAnswer, fifteenthAnswer, sixteenthAnswer, seventeenthAnswer, eighteenthAnswer, nineteenthAnswer, twentyAnswer, twentyOneAnswer, twentyTwoAnswer, twentyThreeAnswer,
    twentyFourAnswer, twentyFiveAnswer, twentySixAnswer, twentySevenAnswer, twentyEightAnswer, twentyNineAnswer, thirtyAnswer]

let getRightAnswer = function(answer, currentPagination){
    let currentAnswer = answer.classList
    if (currentAnswer.contains('1')) {
        usersAnswer[currentPagination - 1] = 1
        console.log(usersAnswer)
    } else{
        usersAnswer[currentPagination - 1] = 0
        console.log(usersAnswer)
    }
    
}

let getActiveSingleQuestion = function(answer){


    for (let item of answer) {
        
        item.addEventListener('click', function(){
            let currentPagination = +(document.querySelector('.swiper-pagination-current').textContent)
            

            for (const elem of answer) {
                elem.classList.remove('isActive')
            }
            this.classList.toggle('isActive')
            choosenQuestion[currentPagination - 1] = this
            console.log(choosenQuestion)
            
            getRightAnswer(this, currentPagination)
            getCheckForLastButton(choosenQuestion)
        }
        )
    }
}

let getCheckForLastButton = function(arr){
    if (arr.length < countOfQuestions) {

        lastButton.disabled = true

    } else{ 

        getCheckCountRightAnswers(usersAnswer)
        persentRightAnswers = (countRightAnswers/30) * 100

        endSlidePersentText.textContent = `${persentRightAnswers}%`
        endPageView(persentRightAnswers)

        lastButton.disabled = false
        lastButton.classList.remove('end-button-disabled')
        lastButton.classList.add('end-button')
          
        lastButton.addEventListener('click', function(){
            swiperSlide.classList.add('invisible')
            setTimeout(function(){
                endSlide.classList.add('visible')
                endSlide.classList.add('opening')
            }, 800)
            
        })
    }
}

let getCheckCountRightAnswers = function(arr){
    for (let elem of arr) {
        if (elem == 1) {
            countRightAnswers += elem
        } else{
            countWrongAnswers += 1
        }
    }
}

let endPageView = function(persent){
    if (persent <= 25) {
        endSlide.classList.add('low-level')
        endPageText.textContent = `${userName}, тебе не стыдно? Да ты глуп как воробушек! Тебе еще многое надо узнать, бегом смотреть это аниме, бесстыдник!!!`
    } else if(persent > 25 && persent <= 50){
        endSlide.classList.add('lower-then-middle')
        endPageText.textContent = `${userName}, у тебя довольно неплохой результат, но этого мало, смотри аниме внимательнее и возвращайся с новыми знаниями!`
    } else if (persent > 50 && persent <= 75) {
        endSlide.classList.add('middle-level')
        endPageText.textContent = `${userName}, у тебя хороший результат, но нужно еще немного подтянуть знания! Еще немного и все получится!!`
    } else if (persent > 75 && persent <= 99) {
        endSlide.classList.add('high-level')
        endPageText.textContent = `${userName}, да у тебя отличный результат, мой юный истребитель! Ты почти достиг совершенства, однако ключевое слово ПОЧТИ!`
    } else{
        endSlide.classList.add('full-stolp')
        endPageText.textContent = `${userName}, да ты просто бог! Само совершенство!! Ты переплюнул всех из этого аниме, даже самым сильным столпам тебя не победить!! Я горжусь твоим результатом, так держать!!!`
    }
}


for (let element of arr) {
    getActiveSingleQuestion(element)
}
















