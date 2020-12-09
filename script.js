$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        }else{
            $('.scroll-up-btn').removeClass('show')
        }
        if(this.scrollY > 400){
          $('.me1img').addClass('show');
        }else{
          $('.me1img').removeClass('show');
        }
        if(this.scrollY > 1200){
          $('.card').addClass('show');
        }else{
          $('.card').removeClass('show');
        }
    });

    // slide up script koi 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // typing animation 

    var typed = new Typed(".typing", {
        strings: ["Engineering student", "Motion/Graphic Designer", "VFX / CG Artist", "Freelancer", "Human"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Engineering student", "Motion / Graphic Designer", "VFX / CG Artist", "Freelancer", "Human"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('fa-bars').removeClass("fa-bars").addClass("fa-close");
    });

    // olw carousel script 

    $('.carousel').owlCarousel({
       margin: 20,
       loop: true,
       responsive: {
           0 : {
               items: 1,
               nav: false
           },
           690 : {
                items: 1,
                nav: false
           },
           947 : {
                items: 2,
                nav: false
           },
           1280 : {
               items: 3,
               nav: false
           }
       } 
    }); 


});


// GOOGLE MAPS

function initMap() {
    // The location of Almaty
    const sduOffice = { lat: 43.2078777 , lng: 76.6697243 };
    const almatyOffice1 = { lat: 43.218539139747726 , lng: 76.92765596951253 };
    const almatyOffice2 = { lat: 43.26312541571862 , lng: 76.92739218824101 }; 
    // The map, centered at Almaty
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: almatyOffice1,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    });
    // The marker, positioned at Almaty
    const marker = new google.maps.Marker({
      position: sduOffice,
      map: map,
      icon: {
		url: "https://www.flaticon.com/svg/static/icons/svg/944/944551.svg",
		scaledSize: new google.maps.Size(48, 48)
	    }   
    });

    const marker2 = new google.maps.Marker({
        position: almatyOffice1,
        map: map,
        icon: {
            url: "https://www.flaticon.com/svg/static/icons/svg/944/944572.svg",
            scaledSize: new google.maps.Size(48, 48)
            }
      });

    const marker3 = new google.maps.Marker({
        position: almatyOffice2,
        map: map,
        icon: {
            url: "https://www.flaticon.com/svg/static/icons/svg/944/944539.svg",
            scaledSize: new google.maps.Size(48, 48)
            }
    });

    // onclick zoom 

    google.maps.event.addListener(marker,'click',function() {
        map.setZoom(12);
        map.setCenter(marker.getPosition('sduOffice'));
      });

    google.maps.event.addListener(marker2,'click',function() {
        map.setZoom(13);
        map.setCenter(marker2.getPosition('almatyOffice1'));
      });
      
    google.maps.event.addListener(marker3,'click',function() {
        map.setZoom(14);
        map.setCenter(marker3.getPosition('almatyOffice2'));
      });  
    
      // onclick content info text

      var infowindow = new google.maps.InfoWindow({
        content:"Kaskelen, SDU"
      });
      
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });
      
      var infowindow2 = new google.maps.InfoWindow({
        content:"Almaty, Esentai Mall Office"
      });
      
      google.maps.event.addListener(marker2, 'click', function() {
        infowindow2.open(map,marker2);
      });

      var infowindow3 = new google.maps.InfoWindow({
        content:"Almaty, Lotos business center"
      });
      
      google.maps.event.addListener(marker3, 'click', function() {
        infowindow3.open(map,marker3);
      });

      //lines between coordinates

      const flightPlanCoordinates = [
        { lat: 43.2078777 , lng: 76.6697243 },
        { lat: 43.26312541571862, lng: 76.92739218824101 },
        { lat: 43.218539139747726, lng: 76.92765596951253 },
        { lat: 43.2078777 , lng: 76.6697243 }
      ];
      const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#c05555",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      flightPath.setMap(map);

      const citymap = {
        almaty: {
          center: { lat: 43.218539139747726, lng: 76.92765596951253 },
          population: 100,
        },
      };

      for (const city in citymap) {
        // Add the circle for this city to the map.
        const cityCircle = new google.maps.Circle({
          strokeColor: "#c05555",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#c05555",
          fillOpacity: 0.35,
          map,
          center: citymap[city].center,
          radius: Math.sqrt(citymap[city].population) * 100,
        });
      }

  }

  // images preview lightbox.v2 options

  lightbox.option({
    'resizeDuration': 1,
    'fadeDuration': 100,
    'imageFadeDuration': 100,
    'showImageNumberLabel': false,
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true
  })

function instaLink(){
  window.open('https://instagram.com/dastanqs', '_blank');
}

function telegramLink(){
  window.open('https://t.me/cyberDas', '_blank');
}


const patternChangeBtn = document.getElementById('pattern-change-btn')
const redPattern = 'red-pattern'


patternChangeBtn.addEventListener('click', ()=>{
  document.documentElement.style.setProperty('--main-color', '#ec524b');
  document.documentElement.style.setProperty('--main-third-color', '#af2d2d');
  document.documentElement.style.setProperty('--bg-image-hue-color', '#222831');
});



// $('.pattern-change').click(function(){
//   $(':root').css('--main-color', '#ec524b');
// });


// $(".removeImg").ready(function(){
//   $(".removeImg").css({"opacity":"1"}).fadeDuration(1000);
// }, 1000);
