const car = document.getElementById("car");
const arrive = document.getElementById('arrive');

const under = document.getElementById('under');
const last = document.getElementById('last');

        under.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });

        last.addEventListener('dragover', (event) => {
            event.preventDefault();
        });
        last.addEventListener('drop', (event) => {
            event.preventDefault();
            const id = event.dataTransfer.getData('text');
            const draggableElement = document.getElementById(id);
            last.appendChild(draggableElement);
        });
        function play(){
            if(under.parentElement === last){
                car.style.transition = "0.3s";
                car.style.top += "50px";
            }
            if (carTop === 300) {
                alert('div3 is at top: 100px');
            }
        }
function chect(){
    const carTop = parseInt(window.getComputedStyle(car).top, 10);
    const carLeft = parseInt(window.getComputedStyle(car).left, 10);
    if(carTop == 300 & carLeft == 50){
        alert("도착했습니다!");
    }
    else{
        alert("실패....")
    }
}