
$(function(){
  $('.head').load('header.html');
})
//
// fetch('header.html').then(function(response){
//   console.log('response successful', response);
//   return response.text();
// }).then(function(html){
//   const head = document.querySelector('.head');
//   head.innerHTML = html;
//   // console.log(html);
// })




// $('h1').hide();
// $('h1#heading1').hide();
// $('.heading2').hide();

// $('p span').css('color', 'red');

// $('ul#list li:first').css('color', 'red');
// $('ul#list li:last').css('color', 'green');
// $('ul#list li:even').css('background-color', 'yellow');
// $('ul#list li:odd').css('background-color', 'white');
// $('ul#list li:nth-child(3n)').css('list-style', 'none');

// $(':button').hide();
// $(':submit').hide();
// $(':text').hide();

// $('[href]').css('color', 'red');
$('a[href="https://www.yahoo.com"]').css('color', 'green');

// asterix is a wildcard to select EvErYtHiNg!
// $('*').hide();


// $('#btn1').click(function(){
//   // $('.para1').hide()
//   $('.para1').toggle();
// });
// $('#btn2').click(function(){
//   $('.para1').show()
// });

// $('#btn1').dblclick(function(){
//   $('.para1').toggle();
// })
// $('#btn1').hover(function(){
//   $('.para1').toggle();
// })

////HOVER is the same as running both mouseover & mouseout (mouseever, mouseleave)
//
// $('#btn1').on('mouseover', function(){
//   $('.para1').toggle();
// })
// $('#btn1').on('mouseout', function(){
//   $('.para1').toggle();
// })

// $('#btn1').on('mousemove', function(){
//   $('.para1').toggle();
// })
// $('#btn1').on('mousedown', function(){
//   $('.para1').toggle();
// })
// $('#btn1').on('mouseup', function(){
//   $('.para1').toggle();
// })
//
// $('#btn1').click(function(e){
//   console.log(e.currentTarget.innerHTML);
// });
// $('#btn1').click(function(e){
//   console.log(e.currentTarget.id);
// });
// $('#btn1').click(function(e){
//   console.log(e.currentTarget.outerHTML);
// });
// $('#btn1').click(function(e){
//   console.log(e.currentTarget.className);
// });
//
// $('#btn1').on('mousemove', function(e){
//   console.log('Co-ords: Y: '+e.clientY+' X: '+e.clientX);
// })
// $(document).on('mousemove', function(e){
//   $('#cords').html('Co-ords: Y: '+e.clientY+' X: '+e.clientX);
// })
//
// $('input').focus(function(){
//   // alert('Focus')
//   $(this).css('background', 'pink');
// })
// $('input').blur(function(){
//   // alert('Focus')
//   $(this).css('background', '#fff');
// })
//
// $('input').keyup(function(e){
//   console.log(e.target.value);
// })

// $('select#gender').change(function(e){
//   alert('Your gender is ' +e.target.value)
// })

$('#form').submit(function(e){
  e.preventDefault();
  var name = $('input#name').val();
  var gen = $('select').val();
  console.log('Name: '+name+ '. You are: '+gen);
})


$('p.para1').css({color: 'red', background: '#ccc'});

// $('p.para2').addClass('myClass');
// $('p.para2').removeClass('myClass');
// $('#btn1').click(function(){
//   $('p.para2').toggleClass('myClass');
// })

// $('.myDiv').text('Hello World');
// $('.myDiv').html('<h3>Hello World</h3>');
// alert($('.myDiv').text())

// $('ul').append('<li>Append List Item</li>')
// $('ul').prepend('<li>Prepend List Item</li>')
// $('.para1').appendTo('.para2')
// $('.para1').prependTo('.para2')
// $('ul').before('<h4>Hello</h4>')
// $('ul').after('<h4>world</h4>')
// $('li').empty() //Empty an element but keep it 'on page'
//  $('ul').detach() // completely remove from DOM
// $('a').attr('target', '_blank')
// // alert($('a').attr('href'))
// $('a').removeAttr('target')

// $('p').wrap('<h1>')
// $('p').wrapAll('<h1>')

$('#newItem').keyup(function(e){
  var code = e.which;
  if(code == 13){
    e.preventDefault();
    $('ul#list').append('<li>'+e.target.value+'</li>')
  }
})

var myArr = ['Lee', 'Kelly', 'Brad', 'Nate', 'Beth'];

$.each(myArr, function(i, val){
  $('#users').append('<li>'+val+'</li>')
})

var newArr = $('ul#list li').toArray();
$.each(newArr, function(i, val){
  console.log(val.innerHTML);
})

$('#btnFadeOut').click(function(){
  $('.box').fadeOut(1500, function(){
    $('#btnFadeOut').text('Its Gone!')
  });
})
$('#btnFadeIn').click(function(){
  $('.box').fadeIn(1500);
})
$('#btnFadeTog').click(function(){
  $('.box').fadeToggle(1000);
})

$('#btnSlideUp').click(function(){
  $('.box').slideUp(1500, function(){
    $('#btnSlideUp').text('It Slid!')
  });
})
$('#btnSlideDown').click(function(){
  $('.box').slideDown(1500);
})
$('#btnSlideTog').click(function(){
  $('.box').slideToggle(1000);
})
$('#btnStop').click(function(){
  $('.box').stop();
})

$('#moveRight').click(function(){
  $('.box2').animate({
    left:500,
    height: '200px',
    width: '200px',
    opacity: '0.5'
  })
})
$('#moveLeft').click(function(){
  $('.box2').animate({
    left:0,
    height: '100px',
    width: '100px',
    opacity: '1'
  })
})

$('#moveAround').click(function(){
  var box = $('.box2');
  box.animate( {
    left: 300
  });
  box.animate({
    top: 100
  });
  box.animate({
    left: 0,
    // top: 300
  });
  box.animate({
    // left: 0,
    top: 0
  });
})

//////AJAX

// $('.result').load('test.html', function(responseTxt, statusTxt, xhr) {
//   if(statusTxt == "success"){
//     alert('it went fine');
//   }else if (statusTxt == "error"){
//     alert('Error! '+xhr.statusText)
//   }
// });


// $.get('test.html', function(data){
//   $('.result').html(data)
// })

$.getJSON('users.json', function(data){
  $.each(data, function(i, user){
    $('ul#users5').append('<li>'+user.firstName+'</li>')
  })
})

$.ajax({
  method:'GET',
  url:'https://jsonplaceholder.typicode.com/posts',
  dataType:'json'
}).done(function(data){
  console.log(data);
  $.map(data, function(post, i){
    $('.result').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>')
  })
})

$('#postForm').submit(function(e){
  e.preventDefault();
  var title = $('#title').val();
  var body = $('#body').val();
  var url = $('#postForm').attr('action');

  $.post(url, {title:title, body:body}).done(function(data){
    console.log('Post Saved');
    console.log(data);
  })


})
