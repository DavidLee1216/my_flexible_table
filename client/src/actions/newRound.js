var tiles = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10];
var cntToFind = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function matrix( rows, cols, defaultValue){

    var arr = [];
  
    // Creates all lines:
    for(var i=0; i < rows; i++){
  
        // Creates an empty line
        arr.push([]);
  
        // Adds cols to the empty line:
        arr[i].push( new Array(cols));
  
        for(var j=0; j < cols; j++){
          // Initializes:
          arr[i][j] = defaultValue;
        }
    }
    
  return arr;
}
function findValueInArray(arr, val){
    var len = arr.length;
    for (var i = 0; i< len; i++)
        if(arr[i]==val)
            return true;
    return false;
}

const newRound = (state=[], action) => {
    switch(action.type) {
        case 'ROUND':
            var matrix_array = [[]];
            matrix_array = matrix(tiles[action.round-1], tiles[action.round-1], 0);
            var itemToFind = [];
            var i = 0;
            var j = 0;
            var val = 0;
            while (i < cntToFind[action.round-1]){
                while(findValueInArray(itemToFind, val) === true)
                {
                    val = Math.floor(Math.random()*tiles[action.round-1]*tiles[action.round-1]);
                }    
                itemToFind.push(val);
                i++;
            }
            for (i = 0; i < cntToFind[action.round-1]; i++)
            {
                matrix_array[Math.floor(itemToFind[i]/tiles[action.round-1])][itemToFind[i]%tiles[action.round-1]] = 1;
            }
            return [
                ...state,
                {
                    round: action.round,
                    matrix: matrix_array
                }
            ]
        default:
            return state
    }
}

export default newRound;