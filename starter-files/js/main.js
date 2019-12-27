// write your code here
// use products array from the other file in here 
// (yes you can use it, it doesn't matter if it's from another file)
$(document).ready(function () {
    //promise koj so izvrrsuva get baranje za da gi izvlece podatocite
    var bikes;
    var filter = 'all';


    let promise = new Promise(function (resolve, reject) {
        $.get('https://json-project3.herokuapp.com/products')
            .then(function (data) {
                resolve(data);
            })
            .catch(function (err) {
                console.log('error', err);
            })
    })

    //gi zima podatocite i ja popolnuva globalnata promenliva bikes
    var result = [], result1 = [], result2 = [], result3 = [], result4 = [], result5 = [], result6 = [], result7 = [], result8 = [], result9 = [];

    function fetchBikes() {
        promise
            .then(function (data) {

                bikes = data;
                $('.showAll').html(bikes.length);

                bikes.forEach(element => {
                    if (element.gender == "FEMALE") {
                        result.push(element);
                    }
                })
                let count = result.length;
                $('.femaleCount').html(count);
                //console.log(result);
                bikes.forEach(element => {
                    if (element.gender == "MALE") {
                        result1.push(element);
                    }
                })
                let count1 = result1.length;
                $('.maleCount').html(count1);

                bikes.forEach(element => {
                    if (element.brand == "LE GRAND BIKES") {
                        result2.push(element);
                    }
                })
                let count2 = result2.length;
                $('.legrandCount').html(count2);

                bikes.forEach(element => {
                    if (element.brand == "KROSS") {
                        result3.push(element);
                    }
                })
                let count3 = result3.length;
                $('.krossCount').html(count3);

                bikes.forEach(element => {
                    if (element.brand == "EXPLORER") {
                        result4.push(element);
                    }
                })
                let count4 = result4.length;
                $('.explorerCount').html(count4);

                bikes.forEach(element => {
                    if (element.brand == "VISITOR") {
                        result5.push(element);
                    }
                })
                let count5 = result5.length;
                $('.visitorCount').html(count5);

                bikes.forEach(element => {
                    if (element.brand == "E-BIKES") {
                        result6.push(element);
                    }
                })
                let count6 = result6.length;
                $('.ebikesCount').html(count6);

                bikes.forEach(element => {
                    if (element.brand == "FORCE") {
                        result7.push(element);
                    }
                })
                let count7 = result7.length;
                $('.forceCount').html(count7);

                bikes.forEach(element => {
                    if (element.brand == "IDEAL") {
                        result8.push(element);
                    }
                })
                let count8 = result8.length;
                $('.idealCount').html(count8);


                bikes.forEach(element => {
                    if (element.brand == "PONY") {
                        result9.push(element);
                    }
                })
                let count9 = result9.length;
                $('.ponyCount').html(count9);

                renderBikes(bikes);

            })
    }

    //kreira karticki i gi dodava vo htmlot
    function renderBikes(bikes) {

        for (let i = 0; i < bikes.length; i++) {
            $('#cards').append(`
            <div class="col-md-4 allDivs">
            <div class="thumbnail">
            <img src="/img/${bikes[i].image}.png" class="img-responsive" alt="">
            <div class="caption">
            <h3><b>${bikes[i].name}</b></h3>
            <p>${bikes[i].price} $</p>
            </div>
            </div>`
            )

        }


    }

    //na klik na filterot za zenski gi dava samo zenskite bikes i povtorno gi renderira.
    $('#female').on('click', function () {
        if (filter == 'female') {
            return;
        }
        $('#cards').html(result);
        renderBikes(result);
        filter = 'female';
        console.log(result);
    })

    $('#male').on('click', function () {
        if (filter == 'male') {
            return;
        }
        $('#cards').html(result1);
        renderBikes(result1);
        filter = 'male';
        console.log(result1);

    })
    $('#leGrandBikes').on('click', function () {
        if (filter == 'le grand') {
            return;
        }
        $('#cards').html(result2);
        renderBikes(result2);
        filter = 'le grand';
        console.log(result2);
    })

    $('#kross').on('click', function () {
        if (filter == 'kross') {
            return;
        }
        $('#cards').html(result3);
        renderBikes(result3);
        filter = 'kross';
        console.log(result3);
    })
    $('#explorer').on('click', function () {
        if (filter == 'explorer') {
            return;
        }
        $('#cards').html(result4);
        renderBikes(result4);
        filter = 'explorer';
        console.log(result4);
    })
    $('#visitor').on('click', function () {
        if (filter == 'visitor') {
            return;
        }
        $('#cards').html(result5);

        renderBikes(result5);
        filter = 'visitor';
        console.log(result5);
    })
    $('#pony').on('click', function () {
        if (filter == 'pony') {
            return;
        }

        $('#cards').html(result9);

        renderBikes(result9);
        filter = 'pony';
        console.log(result9);
    })
    $('#force').on('click', function () {
        if (filter == 'force') {
            return;
        }
        $('#cards').html(result7);

        renderBikes(result7);
        filter = 'force';
        console.log(result7);
    })
    $('#e-bikes').on('click', function () {
        if (filter == 'e-bikes') {
            return;
        }
        $('#cards').html(result6);
        renderBikes(result6);
        filter = 'e-bikes';
        console.log(result6);
        console.log(filter);
    })
    $('#ideal').on('click', function () {
        if (filter == 'ideal') {
            return;
        }
        $('#cards').html(result8);

        renderBikes(result8);
        filter = 'ideal';
        console.log(result8);
    })
    $('#all').on('click', function () {
        renderBikes(bikes);
        console.log(bikes);
    })


    // function countBadge(count){

    //     if(filter == 'all'){
    //         count = bikes.length;
    //         console.log(count);
    //         //count1 = result.length;
    //         // console.log(bikes);
    //         // console.log(count);
    //       $('.showAll').html(count);
    //       filter = 'all';
    //     }
    // else if(filter == 'male'){
    //     filter = 'male';
    //     console.log(filter);
    //     let result = [];
    //     bikes.forEach(element => {
    //         if (element.gender == "MALE") {
    //             result.push(element);
    //             $('#cards').html(result);
    //             count = result
    //         }
    //         $('.maleCount').html(count);

    //     })

    // }
    // }


    var spans = $('.margin-bottom');
    console.log(spans);
    for (var i = 0; i < spans.length; i++) {
        spans.on("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace("active", "");
            this.className += " active";
        });
    }

    var badges = $('.badge');
    console.log(badges);
    for (var i = 0; i < badges.length; i++) {
        badges.on("click", function () {
            var current = document.getElementsByClassName("bactive");
            current[0].className = current[0].className.replace("bactive", "");
            this.className += " bactive";
        });
    }



    $('.fab').on('mouseover', function () {
        $(this).addClass('socialShareHover');
    })

    $('.fab').on('mouseleave', function () {
        $(this).removeClass('socialShareHover');
    })

    $('li').on('mouseover', function () {
        $(this).addClass('liHover');
    })

    $('li').on('mouseleave', function () {
        $(this).removeClass('liHover');
    })

    //$('.thumbnail').on('mouseover',function(){
    //             $(this).addClass('cardsScale');
    // })
    //$('.thumbnail').on('mouseleave',function(){
    //     $(this).removeClass('cardsScale');
    // })

    $('.navbar-default .navbar-nav li a').on('mouseover', function () {
        $(this).addClass('aHover');
    })

    $('a').on('mouseleave', function () {

        $(this).removeClass('aHover');
    })

    fetchBikes();
})
