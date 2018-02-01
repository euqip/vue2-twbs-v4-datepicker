"use strict"

let tree = {
  "what": "title", "classes": "title", "label": "sidebar:Menu", "icon": "", "role": "user", "uri": "",
  "nodes": [
    {
      "id": "main0", "what": "group", "classes": "title", "label": "sidebar:Main", "icon": "", "role": "user", "uri": "", "name": "main1",
      "nodes": [
        { "id": "main01", "what": "route", "classes": "", "label": "sidebar:Home", "icon": "fa-home", "role": "user", "uri": "/" },
        { "id": "main02", "what": "route", "classes": "", "label": "sidebar:Counter", "icon": "fa-tasks", "role": "user", "uri": "/counter" },
        { "id": "main03", "what": "route", "classes": "", "label": "sidebar:Devices", "icon": "fa-tablet", "role": "user", "uri": "/devices" },
        { "id": "main04", "what": "route", "classes": "", "label": "sidebar:Posts", "icon": "fa-comments", "role": "user", "uri": "/posts" },
      ]
    },
    { "id": 5, "what": "route", "classes": "", "label": "sidebar:Profile", "icon": "fa-user", "role": "user", "uri": "/profile" },
    { "id": 6, "what": "title", "classes": "", "label": "sidebar:Profile", "icon": "", "role": "user", "uri": "" },

    {
      "id": "admin0", "what": "group", "classes": "title", "label": "sidebar:Admin", "icon": "", "role": "admin", "uri": "", "name": "main2",
      "nodes": [
        { "id": "admin21", "what": "route", "classes": "", "label": "sidebar:Users", "icon": "fa-users", "role": "admin", "uri": "/users" },
        { "id": "admin22", "what": "route", "classes": "", "label": "sidebar:resetPWD", "icon": "fa-users", "role": "admin", "uri": "/users" },
        { "id": "admin23", "what": "route", "classes": "", "label": "sidebar:userslist", "icon": "fa-users", "role": "admin", "uri": "/users" },
      ]
    },
    { "id": 8, "what": "link", "classes": "", "label": "sidebar:Logout", "icon": "fa-sign-out", "role": "user", "uri": "/logout" },
    { "id": 9, "what": "link", "classes": "", "label": "sidebar:login", "icon": "fa-sign-in", "role": "guest", "uri": "/login" },
  ],
  options: {
    "indentlength": 20,
    // these classes are equivalent to the default icon classes
    //"collapsedfolder": "fa-plus-square-o",
    //"deployedfolder": "fa-minus-square-o",
    // user provedid icon class, any fa icon is possible
    "collapsedfolder": "fa-caret-right",
    "deployedfolder": "fa-caret-down",
    // use blank or inexistent icon class to have blanks
    //"collapsedfolder": "blank",
    //"deployedfolder": "blank",
    "accordion": true,
    "deployedroot": true
  }

}
let me= {
  "username": "username",
  "fullName" : "User fulname",
  "roles": ["admin","user"]
}

module.exports = {
  "treedata": tree,
  "me": me
}
