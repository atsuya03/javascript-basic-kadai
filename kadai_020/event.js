//btnの要素を持つ要素を取得
const pushBtn=document.getElementById("btn")
//textのID要素を取得
const changeText=document.getElementById('text')

pushBtn.addEventListener('click',()=>{
    changeText.textContent='ボタンをクリックしました。'

})
