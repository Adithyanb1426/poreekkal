const busSchedule = [
         { time: "4:15", bus_name: "SARANYA", destination: "ERNAKULAM" },
        { time: "6:30", bus_name: "RAJA", destination: "MALANADA" },
        { time: "6:45", bus_name: "MURAHARA", destination: "RANNI" },
        { time: "7:00", bus_name: "ATHIRA", destination: "ENATHU" },
        { time: "7:10", bus_name: "PUNCHIRY", destination: "CHERUPOIKA" },
        { time: "7:20", bus_name: "LAKSHMI", destination: "P/THITTA" },
        { time: "7:25", bus_name: "SOCIETY", destination: "ENATHU" },
        { time: "7:35", bus_name: "MANIKYAM", destination: "ENATHU" },
        { time: "7:40", bus_name: "UNNIKRISHNAN", destination: "P/THITTA" },
        { time: "7:50", bus_name: "DIYA", destination: "MALANADA" },
        { time: "8:00", bus_name: "THAMBURATTI", destination: "ENATHU" },
        { time: "8:05", bus_name: "ST JOHNS", destination: "PUTHOOR" },
        { time: "8:15", bus_name: "ATHIRA", destination: "PUTHOOR" },
        { time: "8:30", bus_name: "BROTHERS", destination: "ENATHU" },
        { time: "8:30", bus_name: "KSRTC", destination: "ADOOR" },
        { time: "8:40", bus_name: "GURUDEVAN", destination: "BHAJANA" },
        { time: "9:00", bus_name: "ATHIRA", destination: "PUTHOOR" },
        { time: "9:05", bus_name: "KSRTC", destination: "ADOOR" },
        { time: "9:25", bus_name: "AMRUTESWARI", destination: "ADOOR" },
        { time: "9:35", bus_name: "ATHIRA", destination: "CHEKKALKAD" },
        { time: "9:40", bus_name: "SOCIETY", destination: "ENATHU" },
        { time: "9:45", bus_name: "ST. JONES", destination: "PUTHOOR" },
        { time: "10:00", bus_name: "KSRTC", destination: "ADOOR" },
        { time: "10:05", bus_name: "MURAHARA", destination: "KONNI" }
        { time: "5:20", bus_name: "DIYA", destination: "KOLLAM" },
        { time: "6:00", bus_name: "ATHIRA", destination: "KOLLAM" },
        { time: "6:15", bus_name: "SOCIETY", destination: "KUNDARA" },
        { time: "6:15", bus_name: "KSRTC", destination: "TRV" },
        { time: "6:35", bus_name: "ATHIRA", destination: "KOLLAM" },
        { time: "6:45", bus_name: "KSRTC", destination: "TRV" },
        { time: "7:05", bus_name: "AMRITESWARI", destination: "KOLLAM" },
        { time: "7:10", bus_name: "ST JOHNS", destination: "KUNDARA" },
        { time: "7:15", bus_name: "KSRTC", destination: "KOLLAM" },
        { time: "7:25", bus_name: "GURUDEVAN", destination: "KUNDARA" },
        { time: "7:30", bus_name: "KSRTC", destination: "KOLLAM" },
        { time: "7:45", bus_name: "KSRTC", destination: "KOLLAM" },
        { time: "7:45", bus_name: "KSRTC", destination: "KUNDARA" },
        { time: "7:45", bus_name: "MURAHARA", destination: "KOLLAM" },
        { time: "8:00", bus_name: "KSRTC", destination: "KOLLAM" },
        { time: "8:00", bus_name: "PUNCHIRI", destination: "KOLLAM" },
        { time: "8:20", bus_name: "MURAHARA", destination: "KOLLAM" },
        { time: "8:30", bus_name: "RAJA", destination: "KOLLAM" },
        { time: "8:40", bus_name: "ST JONES", destination: "KUNDARA" },
        { time: "8:50", bus_name: "ATHIRA", destination: "KOTTIYAM" },
        { time: "9:15", bus_name: "ATHIRA", destination: "KOLLAM" },
        { time: "9:20", bus_name: "THAMBURATTI", destination: "KUNDARA" },
        { time: "9:35", bus_name: "ATHIRA", destination: "KOLLAM" }
        { time: "10:15", bus_name: "THAMBURATTI", destination: "ENATHU" },
        { time: "10:30", bus_name: "PUNJIRI", destination: "CHERUPOIKA" },
        { time: "10:30", bus_name: "SOCIETY", destination: "ENATHU" },
        { time: "11:00", bus_name: "GURUDEVAN", destination: "BHAJANA" },
        { time: "11:05", bus_name: "MURAHARA", destination: "RANNI/PTA" },
        { time: "11:15", bus_name: "RAJA", destination: "MALANADA" },
        { time: "11:30", bus_name: "ATHIRA", destination: "PUTHOOR" },
        { time: "11:45", bus_name: "ST. JONES", destination: "PUTHOOR" },
        { time: "12:00", bus_name: "THAMBURATTI", destination: "ENATHU" },
        { time: "12:20", bus_name: "BROTHERS", destination: "ENATHU" },
        { time: "12:25", bus_name: "ATHIRA", destination: "PUTHOOR" },
        { time: "12:30", bus_name: "MANIKYAM", destination: "ENATHU" },
        { time: "12:45", bus_name: "GURUDEVAN", destination: "BHAJANA" },
        { time: "1:15", bus_name: "BROTHERS", destination: "ENATHU" },
        { time: "1:30", bus_name: "LAKSHMI", destination: "P/THITTA" },
        { time: "1:45", bus_name: "SOCIETY", destination: "ENATHU" },
        { time: "2:00", bus_name: "ST. JOHNS", destination: "PUTHOOR" },
        { time: "2:30", bus_name: "KSRTC", destination: "ENATHU" },
        { time: "2:35", bus_name: "DIYA", destination: "MALANADA" },
        { time: "2:35", bus_name: "PUNCHIRY", destination: "CHERUPOIKA" },
        { time: "2:45", bus_name: "AMRITESWARI", destination: "CHEKKALKAD" },
        { time: "3:00", bus_name: "UNNIKRISHNAN", destination: "P/THITTA" },
        { time: "3:15", bus_name: "GURUDEVAN", destination: "BHAJANA" },
        { time: "3:25", bus_name: "ST. JONES", destination: "PUTHOOR" },
        { time: "3:35", bus_name: "ATHIRA", destination: "ENATHU" },
        { time: "3:40", bus_name: "ATHIRA", destination: "PUTHOOR" }
        { time: "10:00", bus_name: "SOCIETY", destination: "KUNDARA" },
        { time: "10:10", bus_name: "GURUDEVAN", destination: "KUNDARA" },
        { time: "10:15", bus_name: "MANIKYAM", destination: "KOLLAM" },
        { time: "10:25", bus_name: "ST. JONES", destination: "KUNDARA" },
        { time: "10:40", bus_name: "DIYA", destination: "KOLLAM" },
        { time: "10:50", bus_name: "BROTHERS", destination: "KOTTIYAM" },
        { time: "11:00", bus_name: "THAMBURATTI", destination: "KUNDARA" },
        { time: "11:15", bus_name: "ATHIRA", destination: "KOTTIYAM" },
        { time: "11:40", bus_name: "PUNCHIRY", destination: "KOLLAM" },
        { time: "12:10", bus_name: "GURUDEVAN", destination: "KUNDARA" },
        { time: "12:10", bus_name: "AMRITESWARI", destination: "KOLLAM" },
        { time: "12:15", bus_name: "ST. JONES", destination: "KUNDARA" },
        { time: "12:20", bus_name: "LAKSHMI", destination: "KUNDARA" },
        { time: "12:30", bus_name: "UNNIKRISHNAN", destination: "KOLLAM" },
        { time: "12:40", bus_name: "ATHIRA", destination: "KOLLAM" },
        { time: "1:00", bus_name: "SOCIETY", destination: "KUNDARA" },
        { time: "1:10", bus_name: "MURAHARA", destination: "KOLLAM" },
        { time: "1:30", bus_name: "ATHIRA", destination: "KOTTIYAM" },
        { time: "2:15", bus_name: "RAJA", destination: "KOLLAM" },
        { time: "2:05", bus_name: "GURUDEVAN", destination: "KUNDARA" },
        { time: "2:15", bus_name: "KSRTC", destination: "KOLLAM" },
        { time: "2:25", bus_name: "ST. JONES", destination: "KUNDARA" },
        { time: "2:45", bus_name: "BROTHERS", destination: "PARAVUR" },
        { time: "3:00", bus_name: "MURAHARA", destination: "KOLLAM" },
        { time: "3:20", bus_name: "THAMBURATTI", destination: "KOLLAM" }
         { time: "4:00", bus_name: "ATHIRA", destination: "PUTHOOR" },
        { time: "4:25", bus_name: "BROTHERS", destination: "ENATHU" },
        { time: "4:50", bus_name: "THAMBURATTI", destination: "ENATHU" },
        { time: "4:55", bus_name: "RAJA", destination: "MALANADA" },
        { time: "5:00", bus_name: "KSRTC", destination: "ADOOR" },
        { time: "5:05", bus_name: "ST. JONES", destination: "PUTHOOR" },
        { time: "5:15", bus_name: "KSRTC", destination: "PATHALA" },
        { time: "5:20", bus_name: "MURAHARA", destination: "RANNI/PTA" },
        { time: "5:30", bus_name: "ATHIRA", destination: "PUTHOOR" },
        { time: "5:45", bus_name: "GURUDEVAN", destination: "BHAJANA" },
        { time: "6:05", bus_name: "ATHIRA", destination: "ENATHU" },
        { time: "6:15", bus_name: "PUNCHIRY", destination: "CHERUPOIKA" },
        { time: "6:20", bus_name: "SOCIETY", destination: "ENATHU" }
        { time: "3:45", bus_name: "PUNCHIRY", destination: "KOLLAM" },
        { time: "4:10", bus_name: "DIYA", destination: "KOLLAM" },
        { time: "4:15", bus_name: "ST. JONES", destination: "KUNDARA" },
        { time: "4:25", bus_name: "MANIKYAM", destination: "KOLLAM" },
        { time: "4:40", bus_name: "ATHIRA", destination: "KOLLAM" },
        { time: "4:45", bus_name: "GURUDEVAN", destination: "KUNDARA" },
        { time: "5:00", bus_name: "ATHIRA", destination: "KOTTIYAM" },
        { time: "5:05", bus_name: "AMRITESWARI", destination: "KOLLAM" },
        { time: "5:25", bus_name: "SOCIETY", destination: "KUNDARA" },
        { time: "5:35", bus_name: "ST. JONES", destination: "KUNDARA" },
        { time: "5:40", bus_name: "MURAHARA", destination: "KOLLAM" },
        { time: "5:50", bus_name: "LAKSHMI", destination: "KUNDARA" },
        { time: "6:00", bus_name: "ATHIRA", destination: "KOLLAM" }
         { time: "6:20", bus_name: "SOCIETY", destination: "ENATHU" },
        { time: "6:35", bus_name: "MURAHARA", destination: "KONNI" },
        { time: "6:50", bus_name: "ST. JONES", destination: "PUTHOOR" },
        { time: "7:15", bus_name: "ATHIRA", destination: "PUTHOOR" },
        { time: "7:40", bus_name: "AMRITESWARI", destination: "CHEKKALKAD" },
        { time: "8:00", bus_name: "DIYA", destination: "MALANADA" },
        { time: "8:15", bus_name: "ATHIRA", destination: "PUTHOOR" },
        { time: "8:30", bus_name: "KSRTC", destination: "ADOOR" }
        { time: "6:00", bus_name: "ATHIRA", destination: "KOLLAM" },
        { time: "6:05", bus_name: "KSRTC", destination: "KUNDARA" },
        { time: "6:15", bus_name: "BROTHERS", destination: "PARAVUR" },
        { time: "6:40", bus_name: "MURAHARA", destination: "KOLLAM" },
        { time: "6:45", bus_name: "THAMBURATTI", destination: "KOTTIYAM" },
        { time: "7:00", bus_name: "RAJA", destination: "KOLLAM" },
        { time: "7:00", bus_name: "GURUDEVAN", destination: "KUNDARA" },
        { time: "7:15", bus_name: "UNNIKRISHNAN", destination: "KOLLAM" },
        { time: "7:20", bus_name: "ST. JONES", destination: "KUNDARA" },
        { time: "7:35", bus_name: "ATHIRA", destination: "KOTTIYAM" },
        { time: "7:50", bus_name: "PUNCHIRY", destination: "KOLLAM" },
        { time: "8:00", bus_name: "SARANYA", destination: "N/KAVU" }
    
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
