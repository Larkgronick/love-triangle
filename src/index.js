/**
* @param preferences - an array of integers. Indices of people, whom they love
* @returns number of love triangles
*/
module.exports = function getLoveTrianglesCount(preferences = []) {
    // your implementation
    var length = preferences.length; 
    var count = 0;  
    for (var n = 0; n<length; n++) { 
    var a = preferences[n] - 1;
    if (a == n) continue;
    var b = preferences[a] - 1;
    if (a == b) continue;
    var c = preferences[b] - 1;
    if (c == b) continue;
    if (c == n) {
    count++;
    }
    }
    return count / 3;
    }