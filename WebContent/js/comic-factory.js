app.factory("usersResource", function ($resource) {
    return $resource("./model/users.json", 
        {},
        { get: { method: "GET", isArray: true }
    })
});


app.factory("comicsResource", function ($resource) {
    return $resource("./model/comics.json", 
        {},
        { get: { method: "GET", isArray: true }
    })
});