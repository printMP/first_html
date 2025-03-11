function preview() {
    var code = document.getElementById("code").value;
    document.getElementById("preview").innerHTML = code;
}

function insertTable123() {
    var code = document.getElementById("code");
    var cursorPosition = code.selectionStart;
    var currentCode = code.value;
    var newCode = currentCode.slice(0, cursorPosition) + "<table border='1' width='100%' cellspacing='0' cellpadding='0' style='border-collapse: collapse' bordercolor='#000000'>\n<tr>\n<td> </td>\n<td> </td>\n</tr>\n<tr>\n<td> </td>\n<td> </td>\n</tr>\n</table>" + currentCode.slice(cursorPosition);
    code.value = newCode;
}

function insertTable() {
    const rows = prompt("Enter the number of rows:");
    const columns = prompt("Enter the number of columns:");
    let html = "<table border='1' width='100%' cellspacing='0' cellpadding='0' style='border-collapse: collapse' bordercolor='#000000'>\n";
    for (let i = 0; i < rows; i++) {
        html += "<tr>\n";
        for (let j = 0; j < columns; j++) {
            html += "<td> </td>\n";
        }
        html += "</tr>\n";
    }
    html += "</table>";
    const codeArea = document.getElementById("code");
    const currentCode = codeArea.value;
    const newCode = currentCode + html;
    codeArea.value = newCode;
}




function selectText() {
    var code = document.getElementById("code");
    code.focus();
    code.select();
}

function applyBold() {
    var code = document.getElementById("code");
    var cursorPosition = code.selectionStart;
    var currentCode = code.value;
    var selectedText = code.value.slice(code.selectionStart, code.selectionEnd);
    var newCode = currentCode.slice(0, cursorPosition) + "<b>" + selectedText + "</b>" + currentCode.slice(code.selectionEnd);
    code.value = newCode;
}
function applyright() {
    var code = document.getElementById("code");
    var cursorPosition = code.selectionStart;
    var currentCode = code.value;
    var selectedText = code.value.slice(code.selectionStart, code.selectionEnd);
    var newCode = currentCode.slice(0, cursorPosition) + "<code style='text-align:right'>" + selectedText + "</code>" + currentCode.slice(code.selectionEnd);
    code.value = newCode;
}