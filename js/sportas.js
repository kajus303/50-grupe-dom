export function renderSportTable(data) {
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${data[i].title}</td>
                <td>${data[i].date}</td>
            </tr>`;
    }

    return `
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Next game date</td>
                </tr>
            </thead>
            <tbody>${HTML}</tbody>
        </table>`;
}