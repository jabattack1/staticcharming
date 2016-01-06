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
var gallery_page ="<div id='box'><p id='comingsoon' class='animated fadeIn'>coming soon</p><div id= 'crossfade'><img class = 'cthree' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/mani3_zps6ouo12kj.jpg'><img class = 'cone' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/mani1_zpszjw7j14v.jpg'><img class = 'ctwo' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/mani2_zpsubxdnocg.jpg'><img class = 'cfour' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/manicure5_zpsfnjmirju.jpg'><img class = 'cfive' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/manicure4_zps9shplwhf.jpg'></div></div>"
var review_page ="<div id='box'><p id='review1' class='animated fadeIn'>'I finally found the loveliest nail place near my house about a year ago. The salon is located in a small square mall. There are always parking spots. The salon is cozy, has a simple decoration and really clean, that is a huge plus!......Every two weeks, I have a good few hours to pamper myself at this salon with beautiful mani & pedi. I normally go to Saturday and it's always busy with customer. Make an appointment might be the smartest way to do. (Sunday is closed). I would absolutely recommend if you live close by :)'<br><br>-Masae<br><br><br>'This place is a hidden jewel in a strip mall . When you walk in you are immediately greeted by friendly faces and smiles. The owner Sue is so sweet! This place is kept emasculate! The station where the nails are done have a light with a fan built in to suck up any dust or powder from the drilling or filing of the nails.'<br><br>-Donna<br><br><br>'I have walked by this place a million times and never walked in until a month ago, and I absolutely love it! The women who work at the salon are sweet and helpful. One even helped me pick out my nail colors.......The decor is also great, and they did a much better job than the other salons in the area........  Will definitely be going back here!'<br><br>-Monica</p><div id= 'crossfade'><img class = 'cfive' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/nails5_zps8bxlfbel.jpg'><img class = 'cfour' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/nails4_zpsqxd910mf.jpg'><img class = 'ctwo' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/nails2_zps5az8ejhp.jpeg'><img class = 'cone' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/nails1_zps3xpedq2t.jpeg'><img class = 'cthree' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/manid_zpsods5qbpa.jpg'></div></div>"
var visit_page ="<div id='box'><p id='contact_address' class='animated fadeIn'>The Charming Nail<br>596 Valley Road<br>Gillette, NJ 07933</p><p id='contact_phone' class='animated fadeIn'>(908) 647-1162</p><p id='schedule' class='animated fadeIn'>Monday<br>Tuesday<br>Wednesday<br>Thursday<br>Friday<br>Saturday<br>Sunday</p><p id='time' class='animated fadeIn'>9AM-7PM<br>9AM-7PM<br>9AM-7PM<br>9AM-7PM<br>9AM-7PM<br>9AM-6PM<br>CLOSED</p><p id='recommendation' class='animated fadeIn'>Appointments are recommended, but walk-ins are welcome.</p><iframe id='map' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12103.117546270274!2d-74.45466752960454!3d40.67882962641563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3bb1aa0d0b1a3%3A0xaef9091a20d7a2b4!2sCharming+Nail+%26+Skin+Care!5e0!3m2!1sen!2sus!4v1431486414379' width='600' height='450' frameborder='0' style='border:0' class='animated fadeIn'></iframe><div id= 'crossfade'><img class = 'cthree' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic_zpsvmqfz5ef.jpg'><img class = 'cfive' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic4_zpsodhtvkfu.jpeg'><img class = 'cone' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic3_zpsko49cejy.jpg'><img class = 'ctwo' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic2_zpspvadgz9h.jpeg'><img class = 'cfour' src = 'http://i1301.photobucket.com/albums/ag119/jabattack1/scenic1_zpsgtmernwx.jpg'></div></div>"


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

function gallery_thing(){
	$('#content').empty();
	$('#content').append(gallery_page);
    // $('#content').empty();
    // $('#video').empty();
    // $("body").children("#contact_email").remove();
    // $('#content').append(flash);
}

function review_thing(){
	$('#content').empty();
	$('#content').append(review_page);
    // $('#content').empty();
    // $('#video').empty();
    // $("body").children("#contact_email").remove();
    // $('#content').append(flash);
}

function visit_thing(){
	$('#content').empty();
	$('#content').append(visit_page);
    // $('#content').empty();
    // $('#video').empty();
    // $("body").children("#contact_email").remove();
    // $('#content').append(flash);
}