const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  //logic..
  searchInputEl.focus();
});
/* 서치 요소를 클릭했을 시에 input 요소를 focus 해라 */

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
/* 서치인풋 엘리먼트 선택시 focused라는 클래스 추가 , 그 속성은 placeholder : 통합검색 */
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022