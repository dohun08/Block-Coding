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
            isDragging2 = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            const copyRect = draggableCopy2.getBoundingClientRect();
            const lastRect = last.getBoundingClientRect();

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
            isDragging3 = false;
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

let isDragging5 = false;
let draggableCopy5 = null;

stop.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('stop')) {
        isDragging5 = true;

        // Create a copy of the original element
        draggableCopy5 = stop.cloneNode(true);
        draggableCopy5.style.position = 'absolute';

        // Append the copy to the body to enable dragging
        document.body.appendChild(draggableCopy5);

        const rect = stop.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        draggableCopy5.style.left = `${rect.left}px`;
        draggableCopy5.style.top = `${rect.top}px`;

        function onMouseMove(e) {
            if (isDragging5) {
                draggableCopy5.style.left = `${e.clientX - offsetX}px`;
                draggableCopy5.style.top = `${e.clientY - offsetY}px`;
            }
        }

        function onMouseUp() {
            isDragging5 = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            const copyRect = draggableCopy5.getBoundingClientRect();
            const lastRect = last.getBoundingClientRect();

            if (copyRect.top >= lastRect.top &&
                copyRect.left >= lastRect.left &&
                copyRect.bottom <= lastRect.bottom &&
                copyRect.right <= lastRect.right) {

                last.appendChild(draggableCopy5);
                draggableCopy5.style.position = 'relative';
                draggableCopy5.style.left = '0px';
                draggableCopy5.style.top = '0px';
            } else {
                document.body.removeChild(draggableCopy5);
            }
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
});


var count_u = 0;
var count_r = 0;

var px = 0;
var px2 = 0;
const child = last.children;
        function play(){
            car.style.transition = "0.3s";
            const childNodes = last.childNodes;
            childNodes.forEach(node => {
                if(node.id == "under") count_u++;
                if(node.id == "right") count_r++;
                if (node.nodeType === Node.ELEMENT_NODE) {
                    console.log("1");
                    if(node.id == "for"){
                        console.log("1");
                        const input = draggableCopy4.querySelector('input[type="text"]');
                        const num = parseInt(input.value, 10);
                        for(let j=1; j<=num; j++){
                            console.log("2");
                            for(let i=1; `child[${j}].id` !="stop"; i++){
                                console.log("3");
                                if(`child[${i}].id` == "under"){
                                    px = count_u*50;
                                    car.style.top =px+"px";
                                }
                                else if(`child[${i}].id` == "right"){
                                    px2 = count_r*50;
                                    car.style.left =px2+"px";
                                }
                            }
                        }
                    }
                    else if(node.id == "under"){
                        px = count_u*50;
                        car.style.top =px+"px";
                    } 
                    else if(node.id == "right"){
                        px2 = count_r*50;
                        car.style.left =px2+"px";
                    }
                }
                
            });
            count_u = 0;
            count_r = 0;
        }











function chect(){
    const carTop = parseInt(window.getComputedStyle(car).top, 10);
    const carLeft = parseInt(window.getComputedStyle(car).left, 10);
    if(carTop == 300 & carLeft == 50){
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