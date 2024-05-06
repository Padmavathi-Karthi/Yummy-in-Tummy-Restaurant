$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.header-area').addClass('sticky');
        }else{
            $('.header-area').removeClass('sticky');
        }
    });

    let menu_icon = document.querySelector('.menu-icon i')
    let menu_list = document.querySelector('.header ul');

    menu_icon.onclick = () => {
        menu_icon.classList.toggle('bx-x');
        menu_list.classList.toggle('open');
    }
})


const menuButtons = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

let activeButton = 'featured';

showFoodMenu(activeButton);

menuButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});

function resetActiveBtn() {
    menuButtons.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}

function showFoodMenu(newMenuBtn) {
    activeButton = newMenuBtn;
    foodItems.forEach((item) => {
        if (item.classList.contains(activeButton)) {
            item.style.display = "grid";
        }
        else {
            item.style.display = "none";
        }
    });
}