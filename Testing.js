const myMenu = [
    {"name": "Table", "sub-name": [
        {"name": 'Season'},
        {"name": 'Today'},
        {"name": 'Red Line'}
        ]
    },
    {"name": "Player", "sub-name": [
        {"name": 'Defender'},
        {"name": 'MIdfield'},
        {"name": 'Attacker'}
        ]
    },
    {"name": "Club", "sub-name": [
        {"name": 'FC Barcelona'},
        {"name": 'Real Madrid'},
        {"name": 'Sevilla'}
        ]
    },
    {"name": "Country", "sub-name": []
    },
    {"name": "Other", "sub-name": [
        {"name": 'About Us'},
        {"name": 'Contact Us'},
        {"name": 'Supporter'}
        ]
    }
]
const myImage = [
    {
        "img": 'img/11.webp',
        "img2": 'img/1.jpg', 
        "name": 'Leo Messi'
    },
    {
        "img": 'img/22.webp', 
        "img2": 'img/2.jpg',
        "name": 'Thiago'
    },
    {
        "img": 'img/33.webp',
        "img2": 'img/3.jpg',
         "name": 'Meteo'
        },
    {
        "img": 'img/44.webp',
        "img2": 'img/4.jpg',
        "name": 'Ciro'
    }
]
const cityList = [
    {
        "name": "Phnom Penh",
        "district": [
            {"name": "Chomkar Mon", "code": "1201", 
            "commune": [
                {"name": "C1"},
                {"nmae": "C2"}
            ]},
            {"name": "Doun Penh", "code": "1202", 
            "commune": [
                {"name": "D1"},
                {"name": "D2"}
            ]},
            {"name": "Toul Kouk", "code": "1204", 
            "commune": [
                {"name": "T1"}, 
                {"name": "T2"}
            ]}
        ]
    },
    {
        "name": "Banteay Meanchey",
        "district": [
            {"name": "Preah Net Preah", "code": "1101", 
            "commune": [
                {"name": "Pnp1"},
                {"name": "Pnp2"}
            ]},
            {"name": "Phnom Srok", "code": "1102", 
            "commune": [
                {"name": "P1"},
                {"name": "P2"}
            ]},
            {"name": "Mongkol Bori", "code": "1104", 
            "commune": [
                {"name": "M1"}, 
                {"name": "M2"}
            ]}
        ]
    },
    {
        "name": "Siem Reap",
        "district": [
            {"name": "Dom Deak", "code": "1001", 
            "commune": [
                {"name": "DD1"},
                {"name": "DD2"}
            ]},
            {"name": "Banteay Srey", "code": "1002", 
            "commune": [
                {"name": "BS1"},
                {"name": "BS2"}
            ]},
            {"name": "Preah Dak", "code": "1004", 
            "commune": [
                {"name": "PD1"}, 
                {"name": "PD2"}
            ]}
        ]
    }
]
$(document).ready(function(){
    //Get menu from array object
    getMenu()
    function getMenu(){
        var txt = ""
        for(i in myMenu){
            var txt2 = ""
            for(x in myMenu[i]['sub-name']){
                txt2 += `
                    <li>
                        <a href="">${myMenu[i]['sub-name'][x]['name']}</a>
                    </li>
                `
            }
            txt += `
                <li>
                    <a href="">${myMenu[i]['name']}</a>
                    <ul class="sub-menu">
                        ${txt2}
                    </ul>
                </li>
            `
        }
        $('body').find('.top-menu ul').append(txt)
    }
    //Get left menu for array object
    getLeftMenu()
    function getLeftMenu(){
        var txt = ""
        for (i in myMenu){
            txt += `
                <li>
                    <a href="">${myMenu[i]['name']}</a>
                </li>
            `
        }
        $('.left-menu').find('ul').append(txt)
    }
    //Show left Menu
    var popup = "<div class='popup'></div>"
    $('#btn-leftMenu').click(function(){
        $('.left-menu').css({"left": '0px'})
        $('body').append(popup)
    })
    //Hide left Menu
    $('body').on('click','.popup',function(){
        $(this).remove()
        $('body').find('.left-menu').css({"left": '-201px'})
    })
    //Get leftMenu from array object
    get_leftMenu()
    function get_leftMenu(){
        var txt = ""
        for (i in myMenu){
            txt += `
                <li>
                    <a href="#" class="m1">${myMenu[i]['name']}<i class="fas fa-plus"></i></a>
                </li>
            `
        }
        $('body').find('.box ul').append(txt)
    }
    //Click li to Show and Hide sub menu
    $('.leftMenu').on('click','.m1',function(){
        var eThis = $(this)
        var parent = eThis.parent()
        var ind = parent.index()
        if(parent.find('.left-sub-menu').length == 0){
            var subMenu = myMenu[ind]['sub-name']
            var txt = ""
            for (i in subMenu){
                txt += `
                    <li>
                        <a href="">${subMenu[i]['name']}</a>
                    </li>
                `
            }
            parent.append(
                `
                    <div class="left-sub-menu">
                        <ul>
                            ${txt}
                        </ul>
                    </div>
                `
            )
            eThis.find('i').removeClass("fa-plus")
            eThis.find('i').addClass("fa-minus") 
        }else{
            //parent.find('.left-sub-menu').remove()
            if(eThis.find('.fa-minus').length > 0){
                parent.find('.left-sub-menu').slideUp()
                eThis.find('i').removeClass('fa-minus')
                eThis.find('i').addClass('fa-plus')
            }else{
                parent.find('.left-sub-menu').slideDown()
                eThis.find('i').removeClass('fa-plus')
                eThis.find('i').addClass('fa-minus')
            }
        }
         
    })
    //get Slide 
    getSlide()
    function getSlide(){
        var txt = ""
        var txtli = ""
        for (i in myImage){
            txt += `
                <div class="slide">
                    <img src="${myImage[i]['img']}" alt="">
                </div>
            `
            txtli += `
                <li>
                    ${parseFloat(i)+1}
                </li>
            `
        }
        $('.pageinition').append("<ul>"+ txtli +"</ul>")
        $('.pageinition').find('li').eq(0).addClass('active')
        $('.slide-box').append(txt)
    }
    //Change slide
    var slide = $('.slide')
    var slideInd = 0
    var slideNum = $('.slide').length
    slide.hide()
    slide.eq(slideInd).show()
    $('.slideNext').click(function(){
        slide.eq(slideInd).hide()
        $('.pageinition').find('li').eq(slideInd).removeClass('active')
        slideInd ++
        if(slideInd >= slideNum){
            slideInd = 0
        }
        slide.eq(slideInd).show()
        $('.pageinition').find('li').eq(slideInd).addClass('active')
    })
    $('.slideBack').click(function(){
        slide.eq(slideInd).hide()
        $('.pageinition').find('li').eq(slideInd).removeClass('active')
        slideInd --
        if(slideInd < 0){
            slideInd = slideNum - 1
        }
        slide.eq(slideInd).show()
        $('.pageinition').find('li').eq(slideInd).addClass('active')
    })
    //Auto Slide
    var myAutoSlide = setInterval(function(){
        $('.slideNext').click()
    }, 3000)
    $('.slide-box').mouseover(function(){
        clearInterval(myAutoSlide)
    })
    $('.slide-box').mouseout(function(){
        myAutoSlide = setInterval(function(){
            $('.slideNext').click()
        }, 3000) 
    })
    //Click Slide
    $('.pageinition').find('ul li').click(function(){
        slide.eq(slideInd).hide()
        $('.pageinition').find('li').eq(slideInd).removeClass('active')
        slideInd = $(this).index()
        slide.eq(slideInd).show()
        $('.pageinition').find('li').eq(slideInd).addClass('active')
    })
    //Get img for myImage
    var txtimg2 = ""
    myImage.forEach(e => {
        txtimg2 += `
            <div class="col-xl-3 item-box">
                <div class="box">
                    <img src="${e['img2']}" alt="">
                    <h1>${e['name']}</h1>
                </div>
            </div>
        `
    })
    $('.bar3').find('.row').append(txtimg2)
    //Click picture and alert popupimg
    $('.bar3').on('click', '.item-box', function(){
        var ind = $(this).index()
        var frm = `
            <div class="popupimg">
                <div class="frm">
                    <img src="${myImage[ind]['img2']}" alt="">
                    <div class="btn-close">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            </div>
        `
        $('body').append(frm)
    })
    //Close popup
    $('body').on('click', '.frm .btn-close', function(){
        $('.popupimg').remove()
    })
    //Get city
    getCity()
    function getCity(){
        var txt = "<option value='-1'>Select City</option>"
        cityList.forEach( (e, i) => {
            txt += `
                <option value="${i}">${e['name']}</option>
            `
        })
        $('#txt-city').html(txt)
    }
    //Get district
    var ind_city
    $('#txt-city').change(function(){
        ind_city = $(this).val()
        var getDistrict = cityList[ind_city]["district"]
        var txt = "<option value='-1'>Select District</option>"
        for(i in getDistrict){
            txt += `
                <option value="${i}">${getDistrict[i]['name']}</option>
            `
        }
        $('#txt-district').html(txt)
    })
    //Get Commune
    $('#txt-district').change(function(){
        var ind = $(this).val()
        var getCommune = cityList[ind_city]["district"][ind]["commune"]
        var txt = "<option value='-1'>Select Commune</option>"
        for(i in getCommune){
            txt += `
                <option value="${i}">${getCommune[i]['name']}</option>
            `
        }
        $('#txt-commune').html(txt)
    })
    //Get friend list 
    getFriendsList()
    function getFriendsList(){
        var txt = ""
        myImage.forEach(e => {
            txt += `
                <li>
                    <a href="#">
                        <img src="${e['img2']}" alt="">
                        <span>${e['name']}</span>
                    </a>
                </li>
            `
        })
        $('.fri-box').find('ul').append(txt)
    }
    var opt =0
    $('.fri-box').on('click', 'li.title-box', function(){
        if(opt == 0){
            $(this).parents('.fri-box').css({"bottom": '-310px', "overflow-y": 'hidden'})
            opt = 1
        }else{
            $(this).parents('.fri-box').css({"bottom": '10px', "overflow-y": 'scroll'})
            opt = 0
        }
    })
    //chat popup
    $('.fri-box').on('click', 'ul li', function(){
        var img = $(this).find('img').attr('src')
        var text = $(this).find('span').text()
        if($(this).index() == 0){
            return;
        }
        var txt = `
            <div class="chat-box" id="f${$(this).index()}">
                <div class="chat-title">
                    <img src="${img}" alt="">
                    <span>${text}</span>
                    <i class="fas fa-times btnClose"></i>
                </div>
            </div>
        `
        if($('.chat-container').find(`#f${$(this).index()}`).length == 0){ 
            if($('.chat-container').find('.chat-box').length > 2){
                $('.chat-container').find('.chat-box').eq(0).remove()
            }
            $('.chat-container').append(txt)
        }
    })
    //remove chat box
    $('.chat-container').on('click', '.chat-title i', function(){
        $(this).parents('.chat-box').remove()
    })
})