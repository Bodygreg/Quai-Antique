export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Que les non connectés
["admin"] -> Que les admins
["client"] -> Que les clients
["admin","client"] -> Que les connectés (admin ou client)
*/

