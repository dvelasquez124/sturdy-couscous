const app = Vue.createApp({
  data() {
    return {
      expandedIndex: null,
      blogPosts: [
        {
          title: "Costa Rica",
          subtitle: "Our family honeymoon, November 2024",
          image: "./images/costa_rica.jpg",
          alt: "child standing on balcony looking at a volcano",
          preview: "Our family honeymoon in Costa Rica — with Sophie tagging along, of course!",
          content: [
            "<p>We stayed at two of the most stunning resorts we've ever experienced.</p>",
            "<p><strong>The Springs Resort & Spa at Arenal</strong> had thermal hot springs, lush greenery, and views of Arenal Volcano. Days were spent soaking in springs and visiting the wildlife sanctuary.</p>",
            "<p><strong>The Peace Lodge</strong> near San José offered a private hot tub overlooking La Paz Waterfall. Admission to the nature park was included, and Sophie loved the private frog tour.</p>",
            `<table>
              <tr><th>Name</th><th>Favorite</th><th>Least Favorite</th></tr>
              <tr><td>Jenssy</td><td>Soaking in the hot springs</td><td>Driving the winding roads</td></tr>
              <tr><td>Sophie</td><td>Frog tour</td><td>Getting out of the hot tub</td></tr>
              <tr><td>Diana</td><td>The view from the balcony</td><td>Leaving Costa Rica</td></tr>
            </table>`,
            "<p>Costa Rica was pure magic — luxury, nature, and family-friendly adventure all in one!</p>"
          ]
        },
        {
          title: "Dominican Republic",
          subtitle: "Coming May 2025",
          image: "./images/dominican_republic.jpg",
          alt: "beach with palm trees",
          preview: "Stay tuned for our next tropical family adventure!",
          content: [
            "<p>We're heading to the Dominican Republic for sun, sand, and new memories with Sophie.</p>"
          ]
        },
        {
          title: "San Antonio, Texas",
          subtitle: "All about our trip to San Antonio, Sept 2023",
          image: "./images/alamo.jpg",
          alt: "baby and woman standing in front of Alamo",
          preview: "It was HOT — and a birthday trip filled with food, history, and family fun!",
          content: [
            "<p>Here's what we did:</p>",
            `<ul>
              <li>Riverwalk Boat Tour</li>
              <li>Mission tour</li>
              <li>The Alamo</li>
              <li><a href='https://www.thedoseum.org/'>Doseum</a></li>
              <li>Market Square</li>
              <li>Tacos, obviously</li>
            </ul>`,
            `<table>
              <tr><th>Name</th><th>Favorite</th><th>Least Favorite</th></tr>
              <tr><td>Jenssy</td><td>Riverwalk Boat Tour</td><td>Shopping</td></tr>
              <tr><td>Sophie</td><td>The Doseum</td><td>The Alamo</td></tr>
              <tr><td>Diana</td><td>Shopping</td><td>The Alamo</td></tr>
            </table>`,
            "<p>If you're short on time, I'd skip the Alamo. Sophie much preferred the Doseum!</p>",
            "<video width='300' src='./assets/video/doseum.mp4' poster='./assets/video/doseum.jpg' controls></video>"
          ]
        },
        {
          title: "Orlando, Florida",
          subtitle: "First time in Orlando, June 2023",
          image: "./images/disney_world.jpg",
          alt: "family sitting in front of castle",
          preview: "We had a blast in Orlando — a mix of Disney magic and Crayola chaos!",
          content: [
            "<p>Highlights included:</p>",
            `<ul>
              <li>Magic Kingdom</li>
              <li>SeaWorld</li>
              <li><a href='https://www.druryhotels.com/locations/orlando-fl/drury-plaza-hotel-orlando'>Our Hotel</a></li>
              <li><a href='https://www.crayolaexperience.com/orlando'>The Crayola Experience</a></li>
            </ul>`,
            `<table>
              <tr><th>Name</th><th>Favorite</th><th>Least Favorite</th></tr>
              <tr><td>Jenssy</td><td>SeaWorld</td><td>Disney Springs</td></tr>
              <tr><td>Sophie</td><td>SeaWorld</td><td>Magic Kingdom</td></tr>
              <tr><td>Diana</td><td>Magic Kingdom</td><td>SeaWorld</td></tr>
            </table>`,
            "<p>Sophie especially loved Sesame Street Land. Highly recommend Drury Plaza Hotel!</p>"
          ]
        },
        {
          title: "Amsterdam, The Netherlands",
          subtitle: "First time in the Netherlands, Nov 2023",
          image: "./images/amsterdam.jpg",
          alt: "man and woman holding a baby",
          preview: "We visited Amsterdam for Sophie's birthday — rain, waffles, and beautiful canals.",
          content: [
            "<p>Our itinerary included:</p>",
            `<ul>
              <li>Private photoshoot</li>
              <li>City centre strolls</li>
              <li>Anne Frank House</li>
              <li>Spa day</li>
              <li>Canal tour</li>
              <li>Waffles. So many waffles.</li>
            </ul>`,
            `<table>
              <tr><th>Name</th><th>Favorite</th><th>Least Favorite</th></tr>
              <tr><td>Jenssy</td><td>Canal Tour</td><td>Shopping</td></tr>
              <tr><td>Sophie</td><td>Eating waffles</td><td>Anne Frank House</td></tr>
              <tr><td>Diana</td><td>Anne Frank House</td><td>Nothing :)</td></tr>
            </table>`
          ]
        }
      ]
    };
  }
});

app.mount("#app");


function showImage(imageSrc) {
  let popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;

  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "block";
  document.body.style.overflow = "hidden";
}
// function to hide the image when we click on cross button
function closeImage() {
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
}

function toggleMultimedia() {
  const wrapper = document.getElementById("multimediaWrapper");
  const btn = document.getElementById("multimediaBtn");

  if (wrapper.classList.contains("hidden")) {
    wrapper.classList.remove("hidden");
    btn.textContent = "Hide Multimedia";
  } else {
    wrapper.classList.add("hidden");
    btn.textContent = "Show Multimedia";
  }
}

function validateForm() {
  var firstname = document.getElementById("firstName");
  var lastname = document.getElementById("lastName");
  var email = document.getElementById("email");
  var textInput = document.getElementById("message");
  var regAlpha = /^[a-zA-Z]+$/;
  var is_valid = false;

  document.getElementById("name_errormsg1").style.display = "none";
  document.getElementById("name_errormsg2").style.display = "none";
  document.getElementById("last_name_errormsg1").style.display = "none";
  document.getElementById("last_name_errormsg2").style.display = "none";
  document.getElementById("email_errormsg").style.display = "none";
  document.getElementById("txt_errormsg").style.display = "none";


  is_valid = true;

  if (firstname == "" || firstname.value.length < 2) {
    document.getElementById("name_errormsg1").style.display = "inline";
    is_valid = false;
    firstname.focus();
    return false;
  }

  if (!regAlpha.test(firstname.value)) {
    document.getElementById("name_errormsg2").style.display = "inline";
    is_valid = false;
    firstname.focus();
    return false;
  }

  if (lastname == "" || lastname.value.length < 2) {
    document.getElementById("last_name_errormsg1").style.display = "inline";
    is_valid = false;
    lastname.focus();
    return false;
  }

  if (!regAlpha.test(lastname.value)) {
    document.getElementById("last_name_errormsg2").style.display = "inline";
    is_valid = false;
    lastname.focus();
    return false;
  }

  if (email.value == "") {
    document.getElementById("email_errormsg").style.display = "inline";
    is_valid = false;
    email.focus();
    return false;
  }
  if (textInput.value == "") {
    document.getElementById("txt_errormsg").style.display = "inline";
    is_valid = false;
    textInput.focus();
    return false;
  }

  return true;
}
