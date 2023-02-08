import $ from 'jquery';


export const NavBars = () => {
    $(".left-sidebar").toggle(10)
    $('.left-sidebar').css('display', 'block')
    $('.left-sidebar').css('position', 'fixed')
    $('.left-sidebar').css('background', 'White')

    // const demoId = document.getElementsByClassName('small-nav-icon')
    // document.getElementsByClassName('small-nav-icon').style.display = "block";
    // document.getElementsByClassName('small-nav-icon').style.position = "position";
    // document.getElementsByClassName('small-nav-icon').style.background = "White";

};
export const SearchNav =() =>{
    $(".small-search").toggle(10)
    $('.small-search').css('display', 'block')
};
