namespace L03_MemorySettings {

    let pairsAmount: number;
    let cardSymbol: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardArray: number[] = [];
    let cardField: HTMLElement;
    let cardStorage: HTMLElement[] = [];
    let foundPairs: number = 0;
    let startButton: HTMLElement;
    let divForm: HTMLElement;
    let cardProperties: string[] = [];

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        divForm = <HTMLElement>document.querySelector("#form");
        startButton = <HTMLElement>document.querySelector("#startButton");
        divForm.addEventListener("change", handleChange);
        cardField = <HTMLDivElement>document.querySelector("#memoryArea");
        startButton.addEventListener("click", createCards);
    }

    function handleChange(_event: Event): void {
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]);
        cardProperties = [];
        for (let entry of formData) {
            cardProperties.push(String(entry[1]));
            console.log(cardProperties);
        }            
    }

    function createCards(): void {
        divForm.classList.add("hidden");
        startButton.classList.add("hidden");
        pairsAmount = Number(cardProperties[0]);
        for (let i: number = 0; i < 2; i++) {
            for (let m: number = 0; m < pairsAmount; m++) {
                cardArray.push(cardSymbol[m]);
            }
        }

        cardArray.sort(() => 0.5 - Math.random());
        cardField.innerHTML = "";
        document.body.style.background = cardProperties[2];
        document.body.style.fontFamily = cardProperties[5];
        
        for (let index: number = 0; index < cardArray.length; index++) {
            let card: HTMLElement = <HTMLElement>document.createElement("div");
            card.style.width = cardProperties[1] + "px";
            card.style.height = cardProperties[1] + "px";
            card.style.background = cardProperties[4];
            card.style.color = cardProperties[3];
            card.innerHTML = "<span>" + cardArray[index] + "</span>";
            cardField.appendChild(card);
            card.addEventListener("click", flipCard);
            let allSpans: NodeListOf<HTMLElement> = document.querySelectorAll("span");
            allSpans[index].classList.add("visibility");
        }
        
    }



    function flipCard(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement> _event.target;
        cardStorage.push(target);
        cardStorage[0].style.background = "white";
        cardStorage[0].querySelector("span")?.classList.remove("visibility");
        if (cardStorage.length == 2) {
            cardStorage[1].style.background = "white";
            cardStorage[1].querySelector("span")?.classList.remove("visibility");
            setTimeout(compareCards, 2000);
        }
    }

    function compareCards(): void {
        let spanValue0: string = <string>cardStorage[0].querySelector("span")?.innerHTML;
        let spanValue1: string = <string>cardStorage[1].querySelector("span")?.innerHTML;
        if (spanValue0 == spanValue1) {
            cardStorage[0].classList.add("visibility");
            cardStorage[1].classList.add("visibility");
            cardStorage = [];
            foundPairs++;
            checkWin();
        } else {
            cardStorage[0].style.background = cardProperties[4];
            cardStorage[1].style.background = cardProperties[4];
            cardStorage[0].querySelector("span")?.classList.add("visibility");
            cardStorage[1].querySelector("span")?.classList.add("visibility");
            cardStorage = [];
        }
    }

    function checkWin(): void {
        if (foundPairs == pairsAmount) {
            //Stop Timer? 
            window.alert("WoW du hast es geschafft! Press F5 to play again!");
        }
    }
}