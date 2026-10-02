function findRoute() {

    const start = document.getElementById("start").value;
    const destination = document.getElementById("destination").value;

    if (start === "" || destination === "") {
        document.getElementById("result").innerText =
            "출발지와 도착지를 선택해주세요.";
        return;
    }

    if (start === destination) {
        document.getElementById("result").innerText =
            "출발지와 도착지가 같습니다.";
        return;
    }

    document.getElementById("result").innerText =
        start + "에서 " + destination + "까지 안내합니다!";
}
