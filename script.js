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
            { time: "10:05", bus_name: "MURAHARA", destination: "KONNI" },
            { time: "10:15", bus_name: "THAMBURATTI", destination: "ENATHU" },
            { time: "10:30", bus_name: "PUNCHIRI", destination: "CHERUPOIKA" },
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
            { time: "3:00", bus_name: "UNNIKRISHNAN", destination: "P/THITTA" }
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
