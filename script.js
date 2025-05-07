const app = Vue.createApp({
  data() {
    return {
      show: false
    };
  },
  methods: {
    showOverlay() {
      this.show = true;
    },
    hideOverlay() {
      this.show = false;
    }
  }
});
app.mount('#app');

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
  const multimediaSection = document.getElementById("multimedia");
  const multimediaBtn = document.getElementById("multimediaBtn");

  if (multimedia.classList.contains("hidden")) {
    multimedia.classList.remove("hidden");
    button.textContent = "Hide Multimedia";
  } else {
    multimedia.classList.add("hidden");
    button.textContent = "Show Multimedia";
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
