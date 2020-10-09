export default function changeColorOfItems(array, firstIndex, secondIndex, color) {
    changeColorInArray(array, secondIndex, color);
    changeColorInArray(array, firstIndex, color);
    changeColorOfPreviousElementToDefault(array, firstIndex);
};

function changeColorInArray(array, index, color='default') {
    if(array[index]){
        const defautColor = array[index].dColor;
        color = color === 'default'? defautColor: color;
        array[index].color = color;
    }
};

function changeColorOfPreviousElementToDefault(array, index) {
    changeColorInArray(array, index - 1);
};