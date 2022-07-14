// dropup settings button (yet unfinished)
function dropUp(){
    document.getElementById('settings_list').classList.toggle('settings_toggle')
}

// applying rules of our js lists to existing elements
let myNodeList = document.getElementsByTagName('LI');
let i;
for (i = 0; i < myNodeList.length; i++){
    let span = document.createElement('SPAN')
    let txt = document.createTextNode("\u00D7")
    span.className = 'close';
    span.appendChild(txt)
    myNodeList[i].appendChild(span);
}

// close task for old task
let close = document.getElementsByClassName('close');
    for (i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none"
        }
    }

// checked tasks func, -- doesn't work
let list = document.querySelector("ul");

list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false)

// adding a task func, -- disappearing after being added
function newTask(){
    let li = document.createElement('LI');
    let inputValue = document.getElementById('new_task_input').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === ''){
        alert('In order to add a task -- you must write something innit')
    } else {
        document.getElementById('task_items').appendChild(li)
}
document.getElementById('new_task_input').value = "";

// close func for new tasks 
let span = document.createElement('SPAN');
let txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span)

for (i = 0; i < close.length; i++){
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none"
    }
}}

// active/completed/deleted button

let act_btn = document.getElementsByClassName("active_mode_button");
act_btn.addEventListener('click', function(status){
    
})
