<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bus Schedule</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 20px;
            text-align: center;
        }
        h2 {
            color: #333;
        }
        table {
            width: 90%;
            margin: auto;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            overflow: hidden;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: center;
        }
        th {
            background-color: #007bff;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
    </style>
</head>
<body>

    <h2>Bus Schedule</h2>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Bus Name</th>
                <th>Destination</th>
            </tr>
        </thead>
        <tbody id="busTableBody"></tbody>
    </table>

    <script>
        const busSchedule = [
            { time: "4:15 AM", bus_name: "SARANYA", destination: "ERNAKULAM" },
            { time: "6:30 AM", bus_name: "RAJA", destination: "MALANADA" },
            { time: "6:45 AM", bus_name: "MURAHARA", destination: "RANNI" },
            { time: "7:00 AM", bus_name: "ATHIRA", destination: "ENATHU" },
            { time: "7:10 AM", bus_name: "PUNCHIRY", destination: "CHERUPOIKA" },
            { time: "7:20 AM", bus_name: "LAKSHMI", destination: "P/THITTA" },
            { time: "7:25 AM", bus_name: "SOCIETY", destination: "ENATHU" },
            { time: "7:35 AM", bus_name: "MANIKYAM", destination: "ENATHU" },
            { time: "7:40 AM", bus_name: "UNNIKRISHNAN", destination: "P/THITTA" },
            { time: "7:50 AM", bus_name: "DIYA", destination: "MALANADA" },
            { time: "8:00 AM", bus_name: "THAMBURATTI", destination: "ENATHU" },
            { time: "8:05 AM", bus_name: "ST JOHNS", destination: "PUTHOOR" },
            { time: "8:15 AM", bus_name: "ATHIRA", destination: "PUTHOOR" },
            { time: "8:30 AM", bus_name: "BROTHERS", destination: "ENATHU" },
            { time: "8:30 AM", bus_name: "KSRTC", destination: "ADOOR" },
            { time: "8:40 AM", bus_name: "GURUDEVAN", destination: "BHAJANA" },
            { time: "9:00 AM", bus_name: "ATHIRA", destination: "PUTHOOR" },
            { time: "9:05 AM", bus_name: "KSRTC", destination: "ADOOR" },
            { time: "9:25 AM", bus_name: "AMRUTESWARI", destination: "ADOOR" },
            { time: "9:35 AM", bus_name: "ATHIRA", destination: "CHEKKALKAD" },
            { time: "9:40 AM", bus_name: "SOCIETY", destination: "ENATHU" },
            { time: "9:45 AM", bus_name: "ST. JONES", destination: "PUTHOOR" },
            { time: "10:00 AM", bus_name: "KSRTC", destination: "ADOOR" },
            { time: "10:05 AM", bus_name: "MURAHARA", destination: "KONNI" },
            { time: "10:15 AM", bus_name: "THAMBURATTI", destination: "ENATHU" },
            { time: "10:30 AM", bus_name: "PUNCHIRI", destination: "CHERUPOIKA" },
            { time: "10:30 AM", bus_name: "SOCIETY", destination: "ENATHU" },
            { time: "11:00 AM", bus_name: "GURUDEVAN", destination: "BHAJANA" },
            { time: "11:05 AM", bus_name: "MURAHARA", destination: "RANNI/PTA" },
            { time: "11:15 AM", bus_name: "RAJA", destination: "MALANADA" },
            { time: "11:30 AM", bus_name: "ATHIRA", destination: "PUTHOOR" },
            { time: "11:45 AM", bus_name: "ST. JONES", destination: "PUTHOOR" },
            { time: "12:00 PM", bus_name: "THAMBURATTI", destination: "ENATHU" },
            { time: "12:20 PM", bus_name: "BROTHERS", destination: "ENATHU" },
            { time: "12:25 PM", bus_name: "ATHIRA", destination: "PUTHOOR" },
            { time: "12:30 PM", bus_name: "MANIKYAM", destination: "ENATHU" },
            { time: "12:45 PM", bus_name: "GURUDEVAN", destination: "BHAJANA" },
            { time: "1:15 PM", bus_name: "BROTHERS", destination: "ENATHU" },
            { time: "1:30 PM", bus_name: "LAKSHMI", destination: "P/THITTA" },
            { time: "1:45 PM", bus_name: "SOCIETY", destination: "ENATHU" },
            { time: "2:00 PM", bus_name: "ST. JOHNS", destination: "PUTHOOR" },
            { time: "2:30 PM", bus_name: "KSRTC", destination: "ENATHU" },
            { time: "2:35 PM", bus_name: "DIYA", destination: "MALANADA" },
            { time: "2:35 PM", bus_name: "PUNCHIRY", destination: "CHERUPOIKA" },
            { time: "2:45 PM", bus_name: "AMRITESWARI", destination: "CHEKKALKAD" },
            { time: "3:00 PM", bus_name: "UNNIKRISHNAN", destination: "P/THITTA" },
            { time: "4:00 PM", bus_name: "ATHIRA", destination: "PUTHOOR" },
            { time: "6:20 PM", bus_name: "SOCIETY", destination: "ENATHU" }, 
            { time: "6:35 PM", bus_name: "MURAHARA", destination: "KONNI" },
            { time: "6:50 PM", bus_name: "ST. JONES", destination: "PUTHOOR" },
            { time: "7:15 PM", bus_name: "ATHIRA", destination: "PUTHOOR" },
            { time: "7:40 PM", bus_name: "AMRITESWARI", destination: "CHEKKALKAD" },
            { time: "8:00 PM", bus_name: "DIYA", destination: "MALANADA" },
            { time: "6:00 PM", bus_name: "ATHIRA", destination: "KOLLAM" },
            { time: "6:05 PM", bus_name: "KSRTC", destination: "KUNDARA" },
            { time: "6:15 PM", bus_name: "BROTHERS", destination: "PARAVUR" },
            { time: "6:40 PM", bus_name: "MURAHARA", destination: "KOLLAM" },
            { time: "7:00 PM", bus_name: "RAJA", destination: "KOLLAM" },
            { time: "7:20 PM", bus_name: "ST. JONES", destination: "KUNDARA" },
            { time: "7:50 PM", bus_name: "PUNCHIRY", destination: "KOLLAM" },
            { time: "8:00 PM", bus_name: "SARANYA", destination: "N/KAVU" }
        
        ];

        function populateTable() {
            const tableBody = document.getElementById("busTableBody");
            busSchedule.forEach((bus, index) => {
                let row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${bus.time}</td>
                    <td>${bus.bus_name}</td>
                    <td>${bus.destination}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        window.onload = populateTable;
    </script>

</body>
</html>
