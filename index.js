const car = document.getElementById("car");


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
                car.style.transform += "translateY(50px)";
                car.style.transition = "0.3s";
            }
        }