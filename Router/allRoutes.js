import Route from "/Router/Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/carte", "La carte", "/pages/carte.html", []),
    new Route("/signin", "connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "compte", "/pages/auth/account.html", ["client","admin"], "/js/auth/account.js"),
    new Route("/editPassword", "changement mot de passe", "/pages/auth/editPassword.html", ["client","admin"], "/js/auth/editPassword.js"),
    new Route("/allResa", "vos réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "réserver", "/pages/reservations/reserver.html", ["client"]),
    new Route("/gestionCarte", "gestion carte", "/pages/gestionCarte.html", ["admin"],),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";