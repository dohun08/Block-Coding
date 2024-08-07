const car = document.getElementById("car");
const arrive = document.getElementById('arrive');

const under = document.getElementById('under');
const last = document.getElementById('last');
const list = document.getElementById("list");
const right = document.getElementById("right");
const iff = document.getElementById("if");
const forr = document.getElementById("for");
const stop = document.getElementById("stop");
let isDragging = false;
let draggableCopy = null;

        // Clone and drag the copy of the original element
        under.addEventListener('mousedown', (event) => {

            if (event.target.classList.contains('under')) {
                isDragging = true;

                // Create a copy of the original element
                draggableCopy = under.cloneNode(true);
                draggableCopy.style.position = 'absolute';

                // Append the copy to the body to enable dragging
                document.body.appendChild(draggableCopy);

                const rect = under.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const offsetY = event.clientY - rect.top;

                draggableCopy.style.left = `${rect.left}px`;
                draggableCopy.style.top = `${rect.top}px`;

                function onMouseMove(e) {
                    if (isDragging) {
                        draggableCopy.style.left = `${e.clientX - offsetX}px`;
                        draggableCopy.style.top = `${e.clientY - offsetY}px`;
                    }
                }

                function onMouseUp() {
                    isDragging = false;
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                    
                    const copyRect = draggableCopy.getBoundingClientRect();
                    const lastRect = last.getBoundingClientRect();
                    for (let i = 0; i < last.children.length; i++) {
                        if(last.children[i].id=="for"){
                            const forOption = draggableCopy4.querySelector('#forOption');
                            const forOptionRect = forOption.getBoundingClientRect();
                            if(copyRect.top >= forOptionRect.top &&
                                copyRect.left >= forOptionRect.left &&
                                copyRect.bottom <= forOptionRect.bottom &&
                                copyRect.right <= forOptionRect.right){
                                    forOption.appendChild(draggableCopy);
                                    draggableCopy.style.position = 'relative';
                                    draggableCopy.style.left = '0px';
                                    draggableCopy.style.top = '0px';
                            }
                            else {
                                document.body.removeChild(draggableCopy);
                            }
                            document.addEventListener('mousemove', onMouseMove);
                            document.addEventListener('mouseup', onMouseUp);
                            return 0;
                        }
                        else if(last.children[i].id == "if"){
                            const ifOption = draggableCopy3.querySelector("#ifOption");
                            const ifOptionRect = ifOption.getBoundingClientRect();
                            if(copyRect.top >= ifOptionRect.top &&
                                copyRect.left >= ifOptionRect.left &&
                                copyRect.bottom <= ifOptionRect.bottom &&
                                copyRect.right <= ifOptionRect.right){
                                    ifOption.appendChild(draggableCopy);
                                    draggableCopy.style.position = 'relative';
                                    draggableCopy.style.left = '0px';
                                    draggableCopy.style.top = '0px';
                                    return 0;
                            }
                            else {
                                document.body.removeChild(draggableCopy);
                                return 0;
                            }
                            document.addEventListener('mousemove', onMouseMove);
                            document.addEventListener('mouseup', onMouseUp);
                            return 0;
                        }
                    }
                    
                    if (copyRect.top >= lastRect.top &&
                        copyRect.left >= lastRect.left &&
                        copyRect.bottom <= lastRect.bottom &&
                        copyRect.right <= lastRect.right) {

                        last.appendChild(draggableCopy);
                        draggableCopy.style.position = 'relative';
                        draggableCopy.style.left = '0px';
                        draggableCopy.style.top = '0px';
                    } else {
                        document.body.removeChild(draggableCopy);
                    }
                }

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            }
        });




        let isDragging2 = false;
let draggableCopy2 = null;

right.addEventListener('mousedown', (event) => {

    if (event.target.classList.contains('right')) {
        isDragging2 = true;

        // Create a copy of the original element
        draggableCopy2 = right.cloneNode(true);
        draggableCopy2.style.position = 'absolute';

        // Append the copy to the body to enable dragging
        document.body.appendChild(draggableCopy2);

        const rect = right.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        draggableCopy2.style.left = `${rect.left}px`;
        draggableCopy2.style.top = `${rect.top}px`;

        function onMouseMove(e) {
            if (isDragging2) {
                draggableCopy2.style.left = `${e.clientX - offsetX}px`;
                draggableCopy2.style.top = `${e.clientY - offsetY}px`;
            }
        }

        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            
            const copyRect = draggableCopy2.getBoundingClientRect();
            const lastRect = last.getBoundingClientRect();
            for (let i = 0; i < last.children.length; i++) {
                if(last.children[i].id == "for") {
                    const forOption = draggableCopy4.querySelector('#forOption');
                    const forOptionRect = forOption.getBoundingClientRect();
                    if(copyRect.top >= forOptionRect.top &&
                        copyRect.left >= forOptionRect.left &&
                        copyRect.bottom <= forOptionRect.bottom &&
                        copyRect.right <= forOptionRect.right) {
                            forOption.appendChild(draggableCopy2);
                            draggableCopy2.style.position = 'relative';
                            draggableCopy2.style.left = '0px';
                            draggableCopy2.style.top = '0px';
                    } else {
                        document.body.removeChild(draggableCopy2);
                    }
                    document.addEventListener('mousemove', onMouseMove);
                    document.addEventListener('mouseup', onMouseUp);
                    return 0;
                } else if(last.children[i].id == "if") {
                    const ifOption = draggableCopy3.querySelector("#ifOption");
                    const ifOptionRect = ifOption.getBoundingClientRect();
                    if(copyRect.top >= ifOptionRect.top &&
                        copyRect.left >= ifOptionRect.left &&
                        copyRect.bottom <= ifOptionRect.bottom &&
                        copyRect.right <= ifOptionRect.right) {
                            ifOption.appendChild(draggableCopy2);
                            draggableCopy2.style.position = 'relative';
                            draggableCopy2.style.left = '0px';
                            draggableCopy2.style.top = '0px';
                            return 0;
                    }
                    else {
                        document.body.removeChild(draggableCopy2);
                    }
                    document.addEventListener('mousemove', onMouseMove);
                    document.addEventListener('mouseup', onMouseUp);
                    return 0;
                }
            }
            
            if (copyRect.top >= lastRect.top &&
                copyRect.left >= lastRect.left &&
                copyRect.bottom <= lastRect.bottom &&
                copyRect.right <= lastRect.right) {
                
                last.appendChild(draggableCopy2);
                draggableCopy2.style.position = 'relative';
                draggableCopy2.style.left = '0px';
                draggableCopy2.style.top = '0px';
            } else {
                document.body.removeChild(draggableCopy2);
            }
        }
        

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});

        

let isDragging3 = false;
let draggableCopy3 = null;
iff.addEventListener('mousedown', (event) => {

    if (event.target.classList.contains('if')) {
        isDragging3 = true;

        // Create a copy of the original element
        draggableCopy3 = iff.cloneNode(true);
        draggableCopy3.style.position = 'absolute';

        // Append the copy to the body to enable dragging
        document.body.appendChild(draggableCopy3);

        const rect = iff.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        draggableCopy3.style.left = `${rect.left}px`;
        draggableCopy3.style.top = `${rect.top}px`;

        function onMouseMove(e) {
            if (isDragging3) {
                draggableCopy3.style.left = `${e.clientX - offsetX}px`;
                draggableCopy3.style.top = `${e.clientY - offsetY}px`;
            }
        }

        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            
            const copyRect = draggableCopy3.getBoundingClientRect();
            const lastRect = last.getBoundingClientRect();
            
            if (copyRect.top >= lastRect.top &&
                copyRect.left >= lastRect.left &&
                copyRect.bottom <= lastRect.bottom &&
                copyRect.right <= lastRect.right) {
                
                last.appendChild(draggableCopy3);
                draggableCopy3.style.position = 'relative';
                draggableCopy3.style.left = '0px';
                draggableCopy3.style.top = '0px';
            } else {
                document.body.removeChild(draggableCopy3);
            }
        }
        

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});




let isDragging4 = false;
let draggableCopy4 = null;
forr.addEventListener('mousedown', (event) => {
    
    if (event.target.classList.contains('for')) {
        isDragging4 = true;

        // Create a copy of the original element
        draggableCopy4 = forr.cloneNode(true);
        draggableCopy4.style.position = 'absolute';

        // Append the copy to the body to enable dragging
        document.body.appendChild(draggableCopy4);

        const rect = forr.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        draggableCopy4.style.left = `${rect.left}px`;
        draggableCopy4.style.top = `${rect.top}px`;

        function onMouseMove(e) {
            if (isDragging4) {
                draggableCopy4.style.left = `${e.clientX - offsetX}px`;
                draggableCopy4.style.top = `${e.clientY - offsetY}px`;
            }
        }

        function onMouseUp() {
            isDragging4 = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            const copyRect = draggableCopy4.getBoundingClientRect();
            const lastRect = last.getBoundingClientRect();

            
            if (copyRect.top >= lastRect.top &&
                copyRect.left >= lastRect.left &&
                copyRect.bottom <= lastRect.bottom &&
                copyRect.right <= lastRect.right) {

                last.appendChild(draggableCopy4);
                draggableCopy4.style.position = 'relative';
                draggableCopy4.style.left = '0px';
                draggableCopy4.style.top = '0px';
            } else {
                document.body.removeChild(draggableCopy4);
            }
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});




var px = 0;
var px2 = 0;

const children = last.children;
        function play(){
            car.style.transition = "0.3s";
            let count_u = 0;
            let count_r = 0;
            const carRect = car.getBoundingClientRect();
            const red = document.getElementsByClassName("red");
            const redRect = red[0].getBoundingClientRect();
            const redRect2 = red[1].getBoundingClientRect();
            const redRect3 = red[2].getBoundingClientRect();
            const yellow = document.getElementsByClassName("yellow");
            const yellowRect = yellow[0].getBoundingClientRect();
            const yellowRect2 = yellow[1].getBoundingClientRect();
            const yellowRect3 = yellow[2].getBoundingClientRect();
            
            for (let i = 0; i < last.children.length; i++) {
                function rr(){
                    const ifOption = draggableCopy3.querySelector("#ifOption");
                    for(let j=0; j<ifOption.children.length; j++){
                        if(ifOption.children[j].id =="under"){
                    
                            count_u+=1;
                            px = count_u*50;
                            car.style.top =px+"px";
                        }
                        else if(ifOption.children[j].id =="right"){
                            count_r+=1;
                            px2 = 50*count_r;
                            car.style.left =px2+"px";   
                        }
                    }
                }
                if(last.children[i].id == "if"){
                    const ifSelect = last.children[i].children[0].value;
                    if(ifSelect == "1"){
                        console.log(1);
                        if(carRect.top>=redRect.top &&
                            carRect.left >= redRect.left &&
                            carRect.bottom <= redRect.bottom && 
                            carRect.right <= redRect.right){
                                rr();
                        }
                        else if(carRect.top>=redRect2.top &&
                            carRect.left >= redRect2.left &&
                            carRect.bottom <= redRect2.bottom && 
                            carRect.right <= redRect2.right){
                                rr();
                        }
                        else if(carRect.top>=redRect3.top &&
                            carRect.left >= redRect3.left &&
                            carRect.bottom <= redRect3.bottom && 
                            carRect.right <= redRect3.right){
                                rr();
                        }
                    }
                    else if(ifSelect == "2"){
                        
                        if (carRect.top >= yellowRect.top &&
                            carRect.left >= yellowRect.left &&
                            carRect.bottom <= yellowRect.bottom &&
                            carRect.right <= yellowRect.right) {
                                
                            rr();
                        } else if (carRect.top >= yellowRect2.top &&
                            carRect.left >= yellowRect2.left &&
                            carRect.bottom <= yellowRect2.bottom &&
                            carRect.right <= yellowRect2.right) {
                            rr();
                        } else if (carRect.top >= yellowRect3.top &&
                            carRect.left >= yellowRect3.left &&
                            carRect.bottom <= yellowRect3.bottom &&
                            carRect.right <= yellowRect3.right) {
                            rr();
                        }
                        
                    }
                }
                if(last.children[i].id =="for"){
                    const forOption = draggableCopy4.querySelector('#forOption');
                    const input = draggableCopy4.querySelector('input[type="text"]');
                    for(let num=1; num<=input.value; num++){
                        for(let j=0; j<forOption.children.length; j++){
                            if(forOption.children[j].id =="under"){
                        
                                count_u+=1;
                                px = count_u*50;
                                car.style.top =px+"px";
                                
                            }
                            else if(forOption.children[j].id =="right"){
                                count_r++;
                                px2 = 50*count_r;
                                car.style.left =px2+"px";
                                
                            }
                        }
                    }
                    
                }
                if(last.children[i].id =="under"){
                    
                    count_u+=1;
                    px = count_u*50;
                    car.style.top =px+"px";
                    
                }
                else if(last.children[i].id =="right"){
                    count_r++;
                    px2 = 50*count_r;
                    car.style.left =px2+"px";
                    
                }
            }
        }











function chect(){
    const carTop = parseInt(window.getComputedStyle(car).top, 10);
    const carLeft = parseInt(window.getComputedStyle(car).left, 10);
    if(carTop == 300 & carLeft == 0){
        alert("도착했습니다!");
    }
    else{
        alert("실패....");
    }
    car.style.top = "0px"
    car.style.left = "0px";
    
}
function del(){
    while (last.firstChild) {
        last.removeChild(last.firstChild);
    }
}