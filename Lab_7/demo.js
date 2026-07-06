// HTTP Overview -> дефинира правила (нарича се "протокол") за интеракция между клиент(браузера) и сървър(софтуер)
// HTTP (Hyper Text Transfer Protocol) 

// Web Client --> HTTP request --> Web Server
// Web Server --> HTTP response --> Web Client

// когато изпращаме заявка към Server се работи с Methods
// GET  --> Retrieve / load a resource
// POST --> Create / store a resource (регистрация)
// PUT --> Update a resource (изцяло заменя съществуващият запис)
// DELETE  --> Delete (remove) a resource
// PATCH  --> Update resource partially (обновява само една или няколко конкретни части но не и всичко)

// HEAD --> Retrieve the resource's headers (много по-рядко се използва)
// OPTIONS Returns the HTTP methods that the
// server supports for the specified URL (показва какви други опции подържа даден URL)

// Status          Code Action                  Description
//---------------------------------------------------------------------------------
// 200                 OK             Successfully retrieved resource
// 201              Created              A new resource was created
// 204             No Content           Request has nothing to return
// 301 / 302         Moved           Moved to another location (redirect)
// 400            Bad Request           Invalid request / syntax error
// 401 / 403      Unauthorized       Authentication failed / Access denied
// 404             Not Found                   Invalid resource
// 409              Conflict        Conflict was detected, e.g. duplicated email
// 500 / 503      Server Error      Internal server error / Service unavailable
//---------------------------------------------------------------------------------

// Content-Type and Disposition
//---------------------------------------------
// Content-Type: application/json
// Content-Type: text/html; charset=utf-8

// Content-Type: application/pdf
// Content-Disposition: attachment;
// filename="Financial-Report-April-2016.pdf"
//---------------------------------------------

// Representational State Transfer (REST) --> съвкупност от правила за итеракция м/у сървъра и клиента 

//---------------------------------------------------------------------------------

// Node Package Manager (NPM) --> помага да ссе инсталират допълнителни пакети и библиотеки за JavaScript and
// Node.js projects


// Задачите от Lab са Postman
// -----------------------------

// Линкове отнасящи се за 1.REST Countries
// GET -- https://restcountries.com/v3.1/name/Bulgaria
// GET -- https://restcountries.com/v3.1/name/Italy?fields=name,capital,region,population
// GET -- https://restcountries.com/v3.1/currency/eur?fields=name,subregion

// Линкове отнасящи се за 2.GitHub: Labels Issue
// GET -- https://api.github.com/repos/testnakov/test-nakov-repo/issues/1

// Линкове отнасящи се за 3.Github: Create Issue
// POST -- https://api.github.com/repos/testnakov/test-nakov-repo/issues
// създаване на Issue създава се поетапно в GitHub (за да се потвърди че е оторизиран потребител)