let content = [];

$0.querySelectorAll('tr').forEach((tr) => {
  const row = new Array(4);

  content.push(row);

  tr.querySelectorAll('td').forEach((td, index) => {
    row[index] = td.innerText;
  });
});
