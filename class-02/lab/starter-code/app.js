'use strict'


const store =[];
// ConstHorn.prototype.render = function (){
//   const tpl = $('#photo-template').html();
//   const $createsection = $('<section></section>');
//   $createsection.html(tpl);
//   $createsection.find('h2').text(this.title);
//   $createsection.find('img').attr('src', this.image_url);
//   $createsection.find('p').text(this.desc);
//   $('main').append($createsection);
  // got help from Will Kroger




function renderCreature(horn){
  let template = $(`#${'creature-template'}`).html();
  let markup = Mustache.render(template, horn);
  $(`#${'photo-template'}`).append(markup);
}

$(document).ready(function () {

  // AJAX
  // Asynchronous Javascipt And XML (JSON)
  $.ajax('page-1.json')
    .then(hrn => {
      hrn.forEach((horn) => {
        // new ConstHorn(type).render();
        renderCreature(horn);
        keyword();
        dropdown();
        
        
      });
    });
});
console.log(store);

function displaykeywords(){

}
let keywordArr = [];

function keyword() {
  store.forEach(val =>{
    if(!keywordArr.includes(val.keyword)){
      keywordArr.push(val.keyword);
    }
  });
}

function dropdown(){
  let click = $('#sort');
  click.empty();
  keywordArr.forEach(keyword =>{
    let sort = $(`<option value = ${keyword}>${keyword}</option>`);
    $('option').append(sort);
  });
}

function ConstHorn(Horn) {
  this.title = Horn.title;
  this.image_url = Horn.image_url;
  this.keyword = Horn.keyword;
  this.hornnum = Horn.hornnum;
  this.desc = Horn.desc;
  store.push(this);
}