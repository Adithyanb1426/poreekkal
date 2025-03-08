const busSchedule = [
    { time: "6:15", bus_name: "SARANYA", destination: "ERNAKULAM" },
    { time: "6:30", bus_name: "RAJA", destination: "MALANADA" },
    { time: "7:00", bus_name: "MURAHAARA", destination: "RANNI" },
    { time: "7:10", bus_name: "ATHIRA", destination: "RANNI" },
    { time: "7:25", bus_name: "PUNCHIRY", destination: "CHERUPONKA" },
    { time: "7:25", bus_name: "LAKSHMI", destination: "P/THITTA" },
    { time: "7:30", bus_name: "SOCIETY", destination: "ENATHU" },
    { time: "7:35", bus_name: "MANIKYAM", destination: "ENATHU" },
    { time: "8:15", bus_name: "ST.JOHNS", destination: "PUTHOOR" },
    { time: "8:30", bus_name: "ATHIRA", destination: "PUTHOOR" },
    { time: "9:10", bus_name: "KSRTC", destination: "ADOOR" },
    { time: "10:00", bus_name: "ST.JONES", destination: "PUTHOOR" },
    { time: "10:30", bus_name: "KSRTC", destination: "CHEERANKAVU" },
    { time: "12:15", bus_name: "ATHIRA", destination: "PUTHOOR" },
    { time: "12:45", bus_name: "GURUDEVAN", destination: "BHAJANA" },
    { time: "1:10", bus_name: "BROTHERS", destination: "ENATHU" },
    { time: "3:00", bus_name: "PUNCHIRY", destination: "CHERUPONKA" },
    { time: "4:05", bus_name: "BROTHERS", destination: "THATHA" },
    { time: "5:30", bus_name: "ST.JONES", destination: "PUTHOOR" },
    { time: "6:15", bus_name: "ST.JOHNS", destination: "PUTHOOR" },
    { time: "8:30", bus_name: "KSRTC", destination: "ADOOR" },
    { time: "5:20", bus_name: "DIYA", destination: "KOLLAM" },
    { time: "6:00", bus_name: "ATHIRA", destination: "KOLLAM" },
    { time: "6:15", bus_name: "SOCIETY", destination: "KUNDARA" },
    { time: "6:45", bus_name: "KSRTC", destination: "KOLLAM" },
    { time: "7:15", bus_name: "ST.JOHNS", destination: "KOLLAM" },
    { time: "8:00", bus_name: "MURAHAARA", destination: "KOLLAM" },
    { time: "9:30", bus_name: "THAMBURATTI", destination: "KOLLAM" },
    { time: "12:10", bus_name: "LAKSHMI", destination: "KUNDARA" }
];

function loadTable() {
    const tableBody = document.querySelector("#busTable tbody");
    busSchedule.forEach(bus => {
        let row = `<tr><td>${bus.time}</td><td>${bus.bus_name}</td><td>${bus.destination}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

function filterTable() {
    let input = document.getElementById("search").value.toLowerCase();
    let destination = document.getElementById("destinationFilter").value;
    let rows = document.querySelectorAll("#busTable tbody tr");

    rows.forEach(row => {
        let text = row.textContent.toLowerCase();
        let matchesSearch = text.includes(input);
        let matchesDestination = destination === "" || row.cells[2].textContent.includes(destination);
        row.style.display = matchesSearch && matchesDestination ? "" : "none";
    });
}

loadTable();
