var inp= document.querySelector('.tod')
var ul= document.getElementById('list')
var  btn= document.getElementById('btn')
ul.onclick=function (e){

    const c=e.target
    if(c.classList[0]==="delet"){
        var m= c.parentNode;
        m.remove()
    }
    else if(c.classList[0]==="check"){
        var m= c.parentNode;
        m.classList.toggle("ignore")
    }
}
btn.onclick=function () {

    if (inp.value.length !== 0) {
        var todiv = document.createElement('div')
        todiv.classList.add("todo")
        var check = document.createElement('button')
        check.classList.add("check")
        check.innerHTML = '<i class="fa fa-check"> </i>'

        var delet = document.createElement('button')
        delet.classList.add("delet")
        delet.innerHTML = '<i class="fa fa-trash">'
        var li = document.createElement('li')
        li.classList.add('todo-list')
        li.innerHTML = inp.value
        todiv.appendChild(li)
        todiv.appendChild(check);
        todiv.appendChild(delet);
        ul.appendChild(todiv)
inp.value=""
    }
    else {
        alert("Please give any task!")
    }
}
