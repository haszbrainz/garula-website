var tooglerMenuMobile = false;
document.querySelector('#navMobileButton>img').addEventListener('click', ()=>{
    if(tooglerMenuMobile == false){
    document.querySelector('#klw-list-mobilenav').style.display = 'block';
    document.querySelector('#klw-placeholder-quit1').style.display = 'block';
    document.querySelector('#klw-list-mobilenav').style.animation = 'munculMenuNavMobile 0.2s ease-out';
    tooglerMenuMobile = true;
    } else{
    document.querySelector('#klw-list-mobilenav').style.animation = 'buangMenuNavMobile 0.2s ease-out';
    setTimeout(()=>{
        document.querySelector('#klw-list-mobilenav').style.display = 'none';
        document.querySelector('#klw-placeholder-quit1').style.display = 'none';
    }, 175);
    tooglerMenuMobile = false;
    }
});
document.querySelector('#klw-placeholder-quit1').addEventListener('click', ()=>{
    document.querySelector('#klw-list-mobilenav').style.animation = 'buangMenuNavMobile 0.2s ease-out';
    setTimeout(()=>{
    document.querySelector('#klw-list-mobilenav').style.display = 'none';
    document.querySelector('#klw-placeholder-quit1').style.display = 'none';
    }, 175);
});
document.querySelector('#klw-lang-desk>div').addEventListener('mouseover', ()=>{
    cekKeluarLang1 = false;
    document.querySelector('#klw-lang-desk>div').style.backgroundColor = '#323B42';
    document.querySelector('#klw-lang-desk>div').style.borderRadius = '1rem 1rem 0 0';
    document.querySelector('#klw-lang-desk>div>span').style.color = '#FFF';
    document.querySelector('#klw-list-lang').style.animation = 'munculMenuLang 0.2s ease-out';
    document.querySelector('#klw-list-lang').style.display = 'block';
    document.querySelector('#klw-list-lang').style.top = 'var(--listlang)';
    document.querySelector('#klw-placeholder-quit').style.display = 'block';
});
document.querySelector('#klw-placeholder-quit').addEventListener('mouseover', ()=>{
    closeMenuLang();
});
function closeMenuLang(){
    document.querySelector('#klw-placeholder-quit').style.display = 'none';
    document.querySelector('#klw-lang-desk>div').style.backgroundColor = 'rgba(0,0,0,0)';
    document.querySelector('#klw-lang-desk>div').style.borderRadius = '1rem';
    document.querySelector('#klw-lang-desk>div>span').style.color = '#323B42';
    document.querySelector('#klw-list-lang').style.top = 'var(--listlang)';
    document.querySelector('#klw-list-lang').style.display = 'none';
    document.querySelector('#klw-list-lang').style.display = 'block';
    document.querySelector('#klw-list-lang').style.animation = 'buangMenuLang 0.2s ease-out';
    setTimeout(()=>{
    document.querySelector('#klw-list-lang').style.display = 'none';
    }, 175);
}
document.getElementById('logoNav').addEventListener('click', ()=>{
    window.location.reload();
});
document.getElementById('scrollButton').addEventListener('click', ()=>{
    window.location.href = '#section1';
});
document.getElementById('chatButton').addEventListener('click', ()=>{
    window.open('https://wa.me/6285292677431?text=Saya%20tertarik%20dengan%20garula', '_blank');
});
var indikatorScrollButton = false;
setInterval(()=>{
    if(scrollY > 300){
        indikatorScrollButton = true;
        document.getElementById('scrollButton').style.animation = 'munculScrollButton 0.2s ease-out';
        document.getElementById('scrollButton').style.display = 'block';
    } else{
        if(indikatorScrollButton == true){
            document.getElementById('scrollButton').style.display = 'none';
            document.getElementById('scrollButton').style.animation = 'buangScrollButton 0.2s ease-out';
            document.getElementById('scrollButton').style.display = 'block';
            setTimeout(()=>{
                document.getElementById('scrollButton').style.display = 'none';
            }, 175);
            indikatorScrollButton = false;
        }
    }
}, 200);
function sendInput() {
    document.getElementById('notif').style.animation = 'munculNotif 0.2s ease-out';
    document.getElementById('notif').style.display = 'block';
    setTimeout(()=>{
        document.getElementById('notif').style.display = 'none';
        document.getElementById('notif').style.animation = 'buangNotif 0.2s ease-out';
        document.getElementById('notif').style.display = 'block';
        setTimeout(()=>{
            document.getElementById('notif').style.display = 'none';
            setTimeout(()=>{
                window.location.reload();
            }, 500);
        }, 175);
    },2000);
}
var navLinkDesktop = document.querySelectorAll('nav ul>li>a');
var navLinkMobile = document.querySelectorAll('#klw-list-mobilenav ul>li');
var navLink = [navLinkDesktop, navLinkMobile];
for(var i = 0; i < navLink.length;i++){
    navLink[i][0].addEventListener('click', ()=>{
        window.location.href = '../index.html';
    });
    navLink[i][1].addEventListener('click', ()=>{
        window.location.href = 'product.html';
    });
    navLink[i][2].addEventListener('click', ()=>{
        window.location.href = 'about.html';
    });
    navLink[i][3].addEventListener('click', ()=>{
        window.location.reload();
    });
}
// Footer
var iconSosmedFooter = document.querySelectorAll('footer>div>div:nth-of-type(1)>div>img');
iconSosmedFooter[0].addEventListener('click', ()=>{
    window.open('https://mail.google.com', '_blank');
});
iconSosmedFooter[1].addEventListener('click', ()=>{
    window.open('https://facebook.com', '_blank');
});
iconSosmedFooter[2].addEventListener('click', ()=>{
    window.open('https://instagram.com', '_blank');
});
iconSosmedFooter[3].addEventListener('click', ()=>{
    window.open('https://tiktok.com', '_blank');
});
var linkOlshopFooter = document.querySelectorAll('footer>div>div:nth-of-type(2)>a');
linkOlshopFooter[0].addEventListener('click', ()=>{
    window.open('https://shopee.co.id', '_blank');
});
linkOlshopFooter[1].addEventListener('click', ()=>{
    window.open('https://tokopedia.co.id', '_blank');
});
iconSosmedFooter[2].addEventListener('click', ()=>{
    window.open('https://bukalapak.co.id', '_blank');
});
linkOlshopFooter[3].addEventListener('click', ()=>{
    window.open('https://lazada.co.id', '_blank');
});
var iconSosmedFooterMobile = document.querySelectorAll('footer>div>div:nth-of-type(3)>div>img');
iconSosmedFooterMobile[0].addEventListener('click', ()=>{
    window.open('https://mail.google.com', '_blank');
});
iconSosmedFooterMobile[1].addEventListener('click', ()=>{
    window.open('https://facebook.com', '_blank');
});
iconSosmedFooterMobile[2].addEventListener('click', ()=>{
    window.open('https://instagram.com', '_blank');
});
iconSosmedFooterMobile[3].addEventListener('click', ()=>{
    window.open('https://tiktok.com', '_blank');
});
var iconPageFooter = document.querySelectorAll('footer>div>div:nth-of-type(5)>a');
iconPageFooter[0].addEventListener('click', ()=>{
    window.location.href = 'pages/about.html';
});
iconPageFooter[1].addEventListener('click', ()=>{
    window.location.href = 'pages/product.html';
});
iconPageFooter[2].addEventListener('click', ()=>{
    window.location.href = 'pages/contact.html';
});
var changeLang = document.querySelectorAll('#klw-list-lang>ul>li');
changeLang[0].addEventListener('click', ()=>{
    window.location.reload();
});
changeLang[1].addEventListener('click', ()=>{
    window.location.href = 'contact_en.html';
});