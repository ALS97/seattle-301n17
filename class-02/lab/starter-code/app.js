'use strict'


const store =[];
ConstHorn.prototype.render = function (){
  const tpl = $('#photo-template').html();
  const $createsection = $('<section></section>');
  $createsection.html(tpl);
  $createsection.find('h2').text(this.title);
  $createsection.find('img').attr('src', this.image_url);
  $createsection.find('p').text(this.desc);
  $('main').append($createsection);


};

$(document).ready(function () {

  // AJAX
  // Asynchronous Javascipt And XML (JSON)
  $.ajax('page-1.json')
    .then(hrn => {
      hrn.forEach((type) => {
        new ConstHorn(type).render();
        keyword();
        dropdown();
        
        
      });
    });
});
console.log(store);
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
    click.append(sort);
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