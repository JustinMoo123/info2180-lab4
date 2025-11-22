document.getElementById("searchBtn").addEventListener("click", () => {
    let query = document.getElementById("searchField").value.trim();
    let url = "superheroes.php";

    if (query !== "") {
        url += "?query=" + encodeURIComponent(query);
    }

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => console.error("Error:", error));
});