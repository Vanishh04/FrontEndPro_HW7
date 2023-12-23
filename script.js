const container = document.querySelector('.container');
const mainGenerateButton = document.querySelector('.main-generate-button');

/*-------------------------------------------------------------------------*/
function createDivElement(divClassName, parentAppendElement, divInnerContent = ''){
    const divTitleName = document.createElement('div');
    divTitleName.classList.add(divClassName);
    parentAppendElement.appendChild(divTitleName);
    divTitleName.innerHTML = divInnerContent;
    return divTitleName;
}

/*-------------------------------------------------------------------------*/



mainGenerateButton.addEventListener('click', () =>{
    let tableRowCounter = 1;
    const tableNumberRow = createDivElement('table-number-row', container);
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const tableNumberRowItem = createDivElement('table-number-row-item-content', tableNumberRow, tableRowCounter);
            tableRowCounter++;
        }
    }
});