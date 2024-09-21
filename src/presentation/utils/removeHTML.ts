export function removeHTML(textWithHTML:string) {
    var d = document.createElement('div');
    d.innerHTML = textWithHTML;
    return (d.textContent || d.innerText);
}