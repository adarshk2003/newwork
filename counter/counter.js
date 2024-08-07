{
let counterValue = 0;

//buttons
const countDisply = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetbtn = document.getElementById('reset');
function displycounter() {
    countDisply.textContent = counterValue;
}
incrementBtn.addEventListener('click', function () {
    counterValue ++
    displycounter()
});
decrementBtn.addEventListener('click', function () {
    counterValue --
    displycounter()
});
resetbtn.addEventListener('click', function () {
    counterValue = 0;
    displycounter()
})
}

{
    let counterValue1 = 0;

    //buttons
    const countDisply1 = document.getElementById('counter1');
    const incrementBtn1 = document.getElementById('increment1');
    const decrementBtn1 = document.getElementById('decrement1');
    const resetbtn1 = document.getElementById('reset1');
    function displyCounter() {
        countDisply1.textContent = counterValue1;
    }
    incrementBtn1.addEventListener('click', function () {
        counterValue1++
        displyCounter()
    });
    decrementBtn1.addEventListener('click', function () {
        counterValue1--
        displyCounter()
    });
    resetbtn1.addEventListener('click', function () {
        counterValue1 = 0;
        displyCounter()
    })
}