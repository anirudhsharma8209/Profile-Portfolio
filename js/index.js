function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrolly >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// ==================== SERVICES MODAL =================
const modalViews = document.querySelectorAll('.services_modal')
modalBtns = document.querySelectorAll('.services_button');
modalClose = document.querySelectorAll('.services_modal-close');
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}
modalBtns.forEach((mb, i) => {
    mb.addEventListener('click',() =>{
        modal(i);
    })
})
modalClose.forEach((mc) => {
    mc.addEventListener('click',() => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal');
        })
    })
})

// ================= MIXITUP FILTER PORTFOLIO =================
