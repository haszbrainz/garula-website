// Navbar
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
var navLinkDesktop = document.querySelectorAll('nav ul>li>a');
var navLinkMobile = document.querySelectorAll('#klw-list-mobilenav ul>li');
var navLink = [navLinkDesktop, navLinkMobile];
for(var i = 0; i < navLink.length;i++){
    navLink[i][0].addEventListener('click', ()=>{
        window.location.reload();
    });
    navLink[i][1].addEventListener('click', ()=>{
        window.location.href = 'product_en.html';
    });
    navLink[i][2].addEventListener('click', ()=>{
        window.location.href = 'about_en.html';
    });
    navLink[i][3].addEventListener('click', ()=>{
        window.location.href = 'contact_en.html';
    });
}
// Content
var counterCarousel = 0;
var carouselFoto = ['../media/testi_1.png', '../media/testi_3.png', '../media/testi_2.png'];
var carouselNama = ['Alie Pratama', 'Moh.Rohmad Nuryanto', 'Cahyani Dewi'];
var carouselAsal = ['Central Java', 'West Nusa Tenggara', 'Bali'];
var carouselKalimat = ['I highly recommend using seaweed salt for people who suffer from hypertension or want to maintain a stable blood pressure.', 
'After using this product for 2 months, my blood pressure is normal and my body feels very good.', 
'Every time I eat processed meat, my blood pressure goes up and I feel dizzy, since changing garula salt, I feel better.'];
document.getElementById('sliderNext').addEventListener('click', ()=>{
    counterCarousel += 1;
    if(counterCarousel < 3){
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
        document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiOut 0.2s ease-out';
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(1)').innerHTML = carouselKalimat[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(2)').innerHTML = carouselNama[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(3)').innerHTML = carouselAsal[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(1)').innerHTML = carouselNama[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(2)').innerHTML = carouselAsal[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(2)>img').src = carouselFoto[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>img').src = carouselFoto[counterCarousel];
            document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
            document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiIn 0.2s ease-out';
            document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        },175);
    } else{
        counterCarousel = 0;
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
        document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiOut 0.2s ease-out';
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(1)').innerHTML = carouselKalimat[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(2)').innerHTML = carouselNama[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(3)').innerHTML = carouselAsal[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(1)').innerHTML = carouselNama[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(2)').innerHTML = carouselAsal[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(2)>img').src = carouselFoto[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>img').src = carouselFoto[counterCarousel];
            document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
            document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiIn 0.2s ease-out';
            document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        },175);
    }
});
document.getElementById('sliderBack').addEventListener('click', ()=>{
    counterCarousel -= 1;
    if(counterCarousel >= 0){
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
        document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiOut 0.2s ease-out';
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        setTimeout(()=>{
        document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(1)').innerHTML = carouselKalimat[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(2)').innerHTML = carouselNama[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(3)').innerHTML = carouselAsal[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(1)').innerHTML = carouselNama[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(2)').innerHTML = carouselAsal[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(2)>img').src = carouselFoto[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>div>img').src = carouselFoto[counterCarousel];
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
        document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiIn 0.2s ease-out';
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        },175);
    } else{
        counterCarousel = 2;
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
        document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiOut 0.2s ease-out';
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        setTimeout(()=>{
        document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(1)').innerHTML = carouselKalimat[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(2)').innerHTML = carouselNama[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(3)').innerHTML = carouselAsal[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(1)').innerHTML = carouselNama[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(2)').innerHTML = carouselAsal[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(2)>img').src = carouselFoto[counterCarousel];
        document.querySelector('#carouselUtama>div:nth-of-type(1)>div>img').src = carouselFoto[counterCarousel];
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
        document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiIn 0.2s ease-out';
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        },175);
    }
});
setInterval(()=>{
    counterCarousel += 1;
    if(counterCarousel < 3){
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
        document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiOut 0.2s ease-out';
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(1)').innerHTML = carouselKalimat[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(2)').innerHTML = carouselNama[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(3)').innerHTML = carouselAsal[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(1)').innerHTML = carouselNama[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(2)').innerHTML = carouselAsal[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(2)>img').src = carouselFoto[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>img').src = carouselFoto[counterCarousel];
            document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
            document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiIn 0.2s ease-out';
            document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        },175);
    } else{
        counterCarousel = 0;
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
        document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiOut 0.2s ease-out';
        document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(1)').innerHTML = carouselKalimat[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(2)').innerHTML = carouselNama[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>p:nth-of-type(3)').innerHTML = carouselAsal[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(1)').innerHTML = carouselNama[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>div>p:nth-of-type(2)').innerHTML = carouselAsal[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(2)>img').src = carouselFoto[counterCarousel];
            document.querySelector('#carouselUtama>div:nth-of-type(1)>div>img').src = carouselFoto[counterCarousel];
            document.querySelector('#section6>div:nth-of-type(2)').style.display = 'none';
            document.querySelector('#section6>div:nth-of-type(2)').style.animation = 'carouselGantiIn 0.2s ease-out';
            document.querySelector('#section6>div:nth-of-type(2)').style.display = 'flex';
        },175);
    }
},5000);
var linkOlshopSection8 = document.querySelectorAll('#section8>div:nth-of-type(2)>div>div');
linkOlshopSection8[0].addEventListener('click', ()=>{
    window.open('https://shopee.co.id', '_blank');
});
linkOlshopSection8[1].addEventListener('click', ()=>{
    window.open('https://tokopedia.co.id', '_blank');
});
linkOlshopSection8[2].addEventListener('click', ()=>{
    window.open('https://bukalapak.co.id', '_blank');
});
linkOlshopSection8[3].addEventListener('click', ()=>{
    window.open('https://lazada.co.id', '_blank');
});
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
    window.location.href = 'about_en.html';
});
iconPageFooter[1].addEventListener('click', ()=>{
    window.location.href = 'product_en.html';
});
iconPageFooter[2].addEventListener('click', ()=>{
    window.location.href = 'contact_en.html';
});
var changeLang = document.querySelectorAll('#klw-list-lang>ul>li');
changeLang[0].addEventListener('click', ()=>{
    window.location.href = '../index.html';
});
changeLang[1].addEventListener('click', ()=>{
    window.location.reload();
});