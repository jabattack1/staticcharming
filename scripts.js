console.log('connected');


// $(document).ready(function() {
//   $("#cf_onclick").click(function() {
//   $("#cf img.top").toggleClass("transparent");
// });
// })

// setInterval("changeImage()", 30000);



 // function startTimer() {
 //              setInterval($("#cf img.top").toggleClass("transparent");, 3000);
 //          }


var mani_page ="<div id='box'><p id='manimani' class='animated fadeIn'>Manicure includes a hand soak, nail shaping, cuticle care, buffing, a relaxing hand massage with warm cream and long lasting polish of your choice.  Buffing to a natural gloss is available if you do not desire polish.</p><p id='manicure_menu_1' class='animated fadeIn'><span id='manititle_1'>Manicure & Set</span><br><br>Manicure...................11<br>French Manicure.......16<br>Paraffin Manicure.....20<br>Spa Manicure............25<br>Glue Manicure..........20<br>Powder Filling...........30<br>Wrap Set...................65<br>Extension..................70<br>Teen Tip Set..........40up<br>UV Gel Set.............70up<br>Color Gel...............30up</p><div id= 'crossfade'><img class = 'cone' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/mani1_zpszjw7j14v.jpg'><img class = 'ctwo' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/mani2_zpsubxdnocg.jpg'><img class = 'cthree' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/mani3_zps6ouo12kj.jpg'><img class = 'cfour' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/manicure5_zpsfnjmirju.jpg'><img class = 'cfive' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/manicure4_zps9shplwhf.jpg'></div></div>"
var pedi_page ="<div id='box'><p id='pedipedi' class='animated fadeIn'>Relax on one of our comfy pedicure chairs and soak your feet in a whirlpool footbath. Pedicure includes detailed nail shaping, extended foot filing, cuticle care, and a warm cream foot massage. It also the choice of long-lasting polish or natural gloss buff.</p><p id='pedicure_menu_1' class='animated fadeIn'><span id='pedititle_1'>Pedicure</span><br><br>Pedicure..........................23<br>Lavender Mud Pedicure..28<br>Jelly Spa..........................37<br>Green Tea Spa................55<br>Lemon Callus..................18<br></p><div id= 'crossfade'><img class = 'cfive' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedicureuse1_zpsixukyt4b.jpg'><img class = 'cone' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedi_zpsmmyxejwi.jpg'><img class = 'ctwo' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedi2_zpssldk3jwb.jpg'><img class = 'cthree' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedi1_zpsonwmtrqc.jpg'><img class = 'cfour' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedicure2_zpspcad27mz.jpg'></div></div>"
var mas_page ="<div id='box'><p id='masmas' class='animated fadeIn'>Release your stress and tension with a muscle-melting massage. Whether you prefer the gentle pressure of a Swedish massage or the structural release of Deep Tissue pressure, our massage treatments and packages are always customized to meet your individual needs.</p><p id='massage_menu_1' class='animated fadeIn'><span id='massagetitle_1'>Massage</span><br><br>10 Min Back Massage........12<br>30 Min Body Massage........35<br>1 Hour Body Massage.........70<br>30 Min Foot Reflexology....40<br>Facial...............................65up</p><div id= 'crossfade'><img class = 'cone' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/massage3_zpseqm1x5zo.jpg'><img class = 'ctwo' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/footmassage_zpsay8il0pe.jpg'><img class = 'cthree' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/massage4_zpsoz9gvexw.jpg'><img class = 'cfour' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/massage2_zpsjqgh8wjj.jpg'><img class = 'cfive' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/massage1_zpsqlmhetoq.jpg'></div></div>"
var about_page ="<div id='box'><p id='aboutstuff' class='animated fadeIn'>Here at The Charming Nail, our goal is to provide expert and carefully administered services that cater to the specific personal as well as professional needs of our clients. We offer a wide range of services in a clean, pleasant, relaxing, and inviting environment we believe all customers deserve.<br><br>What’s more, in addition to giving you the best results whether you step into our store for a manicure, pedicure, facial, or massage, we want your experience of visiting The Charming Nail to be one that will relax you and put you in a state-of-mind that can offer you an escape from the stress and pressures of everyday living.  We recognize that great customer service can only be determined by the client, we want to make sure that each of ours is satisfied.<br><br>We want to make an art form out of our services and encourage customers to make The Charming Nail a part of their lives.</p><p id='recommendation1' class='animated fadeIn'>Appointments are recommended, but walk-ins are welcome.</p><div id= 'crossfade'><img class = 'ctwo' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic2_zpspvadgz9h.jpeg'<img class = 'cthree' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic_zpsvmqfz5ef.jpg'><img class = 'cfour' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic1_zpsgtmernwx.jpg'><img class = 'cone' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic3_zpsko49cejy.jpg'><img class = 'cfive' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic4_zpsodhtvkfu.jpeg'></div>"
var menu_page ="<div id='box'><p id='manicure_menu' class='animated fadeIn'><span id='manititle'>Manicure & Set</span><br><br>Manicure...................11<br>French Manicure.......16<br>Paraffin Manicure.....20<br>Spa Manicure............25<br>Glue Manicure..........20<br>Powder Filling...........30<br>Wrap Set...................65<br>Extension..................70<br>Teen Tip Set..........40up<br>UV Gel Set.............70up<br>Color Gel...............30up</p><p id='pedicure_menu' class='animated fadeIn'><span id='pedititle'>Pedicure</span><br><br>Pedicure..........................23<br>Lavender Mud Pedicure..28<br>Jelly Spa..........................37<br>Green Tea Spa................55<br>Lemon Callus..................18<br></p><p id='massage_menu' class='animated fadeIn'><span id='massagetitle'>Massage</span><br><br>10 Min Back Massage........12<br>30 Min Body Massage........35<br>1 Hour Body Massage.........70<br>30 Min Foot Reflexology....40<br>Facial...............................65up</p><p id='recommendationmenu' class='animated fadeIn'>Appointments are recommended, but walk-ins are welcome.</p><div id= 'crossfade'><img class = 'cfour' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedicure2_zpspcad27mz.jpg'><img class = 'cthree' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedi1_zpsonwmtrqc.jpg'><img class = 'cfive' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedicureuse1_zpsixukyt4b.jpg'><img class = 'cone' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedi_zpsmmyxejwi.jpg'><img class = 'ctwo' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/pedi2_zpssldk3jwb.jpg'></div>"


function home_thing(){
	$('#content').empty();
    // $('#content').empty();
    // $('#video').empty();
    // $("body").children("#contact_email").remove();
    // $('#content').append(flash);
}

function manicure_thing(){
	$('#content').empty();
	$('#content').append(mani_page);
    // $('#content').empty();
    // $('#video').empty();
    // $("body").children("#contact_email").remove();
    // $('#content').append(flash);
}

function pedicure_thing(){
	$('#content').empty();
	$('#content').append(pedi_page);
    // $('#content').empty();
    // $('#video').empty();
    // $("body").children("#contact_email").remove();
    // $('#content').append(flash);
}

function massage_thing(){
	$('#content').empty();
	$('#content').append(mas_page);
    // $('#content').empty();
    // $('#video').empty();
    // $("body").children("#contact_email").remove();
    // $('#content').append(flash);
}

function about_thing(){
	$('#content').empty();
	$('#content').append(about_page);
    // $('#content').empty();
    // $('#video').empty();
    // $("body").children("#contact_email").remove();
    // $('#content').append(flash);
}

function menu_thing(){
	$('#content').empty();
	$('#content').append(menu_page);
    // $('#content').empty();
    // $('#video').empty();
    // $("body").children("#contact_email").remove();
    // $('#content').append(flash);
}