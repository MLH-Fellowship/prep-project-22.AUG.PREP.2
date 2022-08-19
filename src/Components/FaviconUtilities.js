
// returns the favion element in the index.html
export function getFaviconEl() {
    return document.getElementById("favicon");
}
  
export function changeFaviconEl(picName) {
    const favicon = getFaviconEl(); // Accessing favicon element
    favicon.href = `/${picName}`;
    return;
}
  