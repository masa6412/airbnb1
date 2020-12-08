    // 別ページへ飛ばしたかった為
    const button = document.getElementById('button');
    button.addEventListener('click', function() {
        window.open('https://www.airbnb.jp/d/host_testimonial_dennis', '_blank')
    })

    const secondButton = document.getElementById('second-button')
    secondButton.addEventListener('click', function() {
        window.open('https://www.airbnb.jp/d/host_testimonial_tessa', '_blank')
    })

    // アコーディオンクリックでアイコンが消える動作をかく

    const close = document.getElementById('res__accordion');
    close.addEventListener('click', function() {
        close.style.display = "none"
    })

    // ’リスティング掲載をはじめる’ボタン押下　modalからmodalへ遷移するコード
    function changeModal(){
        $('body').removeClass( 'modal-open' );
        $('.modal-backdrop').remove();
        $('#staticBackdrop1').modal( 'hide' );
        $('#staticBackdrop2').modal();
        }
    
      // 一泊料金✖︎宿泊料金の計算式
      // 3桁区切りにtoLocaleString()を利用したかったが実装できず
    window.addEventListener("load",()=>{
        document.querySelectorAll('.form-group').forEach(frm=>{
          frm.addEventListener('keyup',()=>{
            form3.textContent ="¥" + form1.value * form2.value

          });
        });
      });

    // bottom navbarアニメーション
  window.addEventListener('DOMContentLoaded', function() {
    $(function() {
      var menu = $('.bottom_nav__item');    
      //スクロールしてページトップから1500pxに達したらクラスを付与する
      $(window).on('load scroll',function () {
          if ($(this).scrollTop() > 1500) {
              menu.addClass('active');
          } else {
              menu.removeClass('active');
          }
         
      });
  });
})

    // 未記入の場合は先に進めない設定
    let mail = document.getElementById('must-input__address');
    let pushGoAhead = document.getElementById('goAhead');
    
    mail.addEventListener('keyup', () => {
      if (mail.value.length < 10) {
        pushGoAhead.setAttribute('disabled','true');
      } else if(mail.value.length > 10) {
        pushGoAhead.removeAttribute('disabled')
      }
    })
    
    // 正規表現を実装したかったが正しい形式でもfalseの方が返されてしまいできていない

    // let address = mail.value;
    // let reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    // pushGoAhead.addEventListener('click', () => {
    //   if (reg.test(address)) {
    //     console.log("正しい記述です")
    //   } else {
    //     console.log("メールアドレスが間違っています")
    //   }
    // })

   