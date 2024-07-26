const car = document.getElementById("car");
function play(){
    car.style.transform += "translateY(50px)";
}



let offsetX, offsetY;
let isDragging = false;
const under = document.getElementById("under");
under.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - under.getBoundingClientRect().left;
    offsetY = e.clientY - under.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    under.style.transition = "0s";
    if (isDragging) {
        const minLeft = 0;
        const minTop = 0;
        const maxLeft = window.innerWidth - under.offsetWidth;
        const maxTop = window.innerHeight - under.offsetHeight;
        
        // 새 위치를 계산
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;
        
        // 경계 체크
        if (newLeft < minLeft) newLeft = minLeft;
        if (newTop < minTop) newTop = minTop;
        if (newLeft > maxLeft) newLeft = maxLeft;
        if (newTop > maxTop) newTop = maxTop;
        
        // 위치 업데이트
        under.style.left = `${newLeft}px`;
        under.style.top = `${newTop}px`;
        under.style.transform = 'none'; // 초기 transform을 무효화

        
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});
