// Create the main table element
const table = document.createElement('table');
table.style.margin = '0 0 10px 0';
table.style.width = '244px';
table.style.background = '#fff';
table.style.border = '1px solid #F3F3F3';
table.cellSpacing = '0';
table.cellPadding = '0';

// Create the first row and cell for the iframe
const tr1 = document.createElement('tr');
const td1 = document.createElement('td');
td1.style.fontFamily = 'verdana';
td1.style.fontSize = '11px';
td1.style.color = '#000';
td1.style.padding = '5px 5px';

// Create the iframe element
const iframe = document.createElement('iframe');
iframe.allowFullscreen = true;
iframe.style.width = '968px';
iframe.style.height = '561px';
iframe.src = 'https://game316009.konggames.com/gamez/0031/6009/live/index.html';
iframe.frameBorder = '0';
iframe.scrolling = 'no';

// Append the iframe to the first cell
td1.appendChild(iframe);
tr1.appendChild(td1);
table.appendChild(tr1);

// Create the second row and cell for additional content
const tr2 = document.createElement('tr');
const td2 = document.createElement('td');
td2.style.fontFamily = 'verdana';
td2.style.fontSize = '11px';
td2.style.padding = '5px 10px';
td2.style.borderTop = '1px solid #F3F3F3';
td2.align = 'center';

// Append the second cell to the second row
tr2.appendChild(td2);
table.appendChild(tr2);

// Append the table to the body of the document
document.body.appendChild(table);
