function getDevelopers(result) {

    console.log(result);

    for (res in result) {

        dev = result[res];

        var anchorTag = document.createElement("a");
        anchorTag.setAttribute("href", "#");
        anchorTag.append(document.createTextNode(dev.developerName));

        var listItem = document.createElement("li");
        listItem.setAttribute("class", "list-item");
        listItem.append(anchorTag);

        developerClass.appendChild(listItem);
    }

}

function devBackend() {
    fetch("http://localhost:8080/api/v1/developers")
        .then(validateResponse)
        .then(readResponseAsJSON)
        .then(getDevelopers)
        .catch(logError)
}

function consoleData(result) {
    console.log(result);
}

function logError(error) {
    console.log('Looks like there was a problem:', error);
}

function validateResponse(response) {
    if (response.status / 100 != 2) {
        throw Error(response.statusText);
    }
    return response;
}

function readResponseAsJSON(response) {
    return response.json();
}

function getProjects() {
    var projects = [];
    for (var i = 1; i <= 2; i++) {
        projects.push("Project " + i);
    }
    console.log(projects);
}

var developerClass = document.getElementById("developer");

// getDevelopers();
getProjects();
devBackend();