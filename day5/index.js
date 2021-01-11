function repeatCharacter(character, timeToRepeat=5){
    let myString = '';

    for (let i = 0; i < timeToRepeat; i++){
        myString += character;
    }

    console.log(myString);
}
repeatCharacter("a");