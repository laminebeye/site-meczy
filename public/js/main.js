/* **** ANIMATION TEXTE **** */
const text = "MUTUELLE D'EPARGNE ET DE CREDIT <br> DE LA ZONE DE YOFF !"; // Le texte à afficher
const textContainer = document.getElementById("animated-text"); // Conteneur pour le texte
let index = 0;

function typeLetterByLetter() {
  // Vérifie si on rencontre "<br>"
  if (text.substring(index, index + 4) === "<br>") {
    textContainer.innerHTML += "<br>";
    index += 4; // Passe à l'index suivant après "<br>"
  } else {
    // Ajoute la lettre suivante au conteneur
    textContainer.innerHTML += text.charAt(index);
    index++;
  }

  // Continue l'animation si on n'a pas atteint la fin du texte
  if (index < text.length) {
    setTimeout(typeLetterByLetter, 100); // Délai de 100 ms entre chaque lettre
  }
}

// Démarrer l'animation
typeLetterByLetter();



$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});

// Fonction pour faire défiler le texte
const counters = document.querySelectorAll('.counter');
const speed = 200; // Plus la valeur est petite, plus c’est rapide

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = formatNumber(target);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return '+' + (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return '+' + (num / 1000).toFixed(1) + 'K';
    return num;
  };

  updateCount();
});

function toggleDetails(row) {
  const next = row.nextElementSibling;
  if (next && next.classList.contains("details")) {
    next.style.display = next.style.display === "table-row" ? "none" : "table-row";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("tr.details").forEach(row => row.style.display = "none");
});


function initMap() {
  const map = new google.maps.Map(document.getElementById('map-meczy'), {
    zoom: 8,
    center: { lat: 14.7581, lng: -17.4767 } // Centre sur Dakar
  });

  const agences = [
    {
      nom: "MECZY Layène",
      position: { lat: 14.7550, lng: -17.4300 },
      adresse: "Layène, Dakar"
    },
    {
      nom: "MECZY Tonghor",
      position: { lat: 14.7505, lng: -17.4480 },
      adresse: "Tonghor, Dakar"
    },
    {
      nom: "MECZY Mboro",
      position: { lat: 15.1239, lng: -16.9318 },
      adresse: "Mboro, Thiès"
    },
    {
      nom: "MECZY Saint-Louis",
      position: { lat: 16.0179, lng: -16.4896 },
      adresse: "Saint-Louis, Sénégal"
    },
    {
      nom: "MECZY Autoroute",
      position: { lat: 14.7310, lng: -17.4875 },
      adresse: "Autoroute, Dakar"
    }
  ];

  agences.forEach(agence => {
    const marker = new google.maps.Marker({
      position: agence.position,
      map: map,
      title: agence.nom
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `<strong>${agence.nom}</strong><br>${agence.adresse}`
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });
  });
}


const actualites = [
  {
    titre: "Assemblée générale mixte",
    contenu: "L'assemblée générale mixte de la MECZY aura lieu le samedi 24 mai 2025 à 10h dans les locaux de la maison communautaire. Tous les membres sont invités."
  },
  {
    titre: "Nouveaux taux préférentiels",
    contenu: "Nos taux sur les crédits immobiliers et les comptes d'épargne sont maintenant plus avantageux pour nos clients fidèles."
  },
  {
    titre: "Nouvelle branche de finance islamique",
    contenu: "MECZY ouvre une branche dédiée à la finance islamique, conforme à la charia, pour répondre à une demande croissante."
  }
];

document.querySelectorAll('.btn.btn-outline-success').forEach((btn, index) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    openPopup(index, this);
  });
});

function openPopup(index, triggerBtn) {
  const popup = document.getElementById("popup-actualite");
  const title = document.getElementById("popup-title");
  const text = document.getElementById("popup-text");

  title.innerText = actualites[index].titre;
  text.innerText = actualites[index].contenu;

  // Positionnement juste au-dessus du bouton cliqué
  const rect = triggerBtn.getBoundingClientRect();
  popup.style.top = `${window.scrollY + rect.top - popup.offsetHeight - 20}px`;
  popup.style.left = `${rect.left}px`;
  popup.style.display = "block";
}

function closePopup() {
  document.getElementById("popup-actualite").style.display = "none";
}


 const cards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
  });