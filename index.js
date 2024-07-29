const car = document.getElementById("car");
const arrive = document.getElementById('arrive');

const under = document.getElementById('under');
const last = document.getElementById('last');
const list = document.getElementById("list");
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

var count = 0;


var px = 0;
let isFirstClick = true;
        function play(){
            const childNodes = last.childNodes;
            childNodes.forEach(node => {
                count++;
            });
            px = count*50;
            car.style.transition = "0.3s";
            if (isFirstClick) {
                car.style.top =(px-50)+"px";
                isFirstClick = false; // 상태 변경
            } else {
                car.style.top =px+"px";
            }
            
            console.log(count);
            count = 0;
            
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
    car.style.left = "50px";
    
}
function del(){
    while (last.firstChild) {
        last.removeChild(last.firstChild);
    }
}