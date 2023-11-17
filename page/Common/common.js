function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const onClickAutomaticIssuance = (target) => {
    target.parentElement.previousElementSibling.value = this.getRndInteger(10000,99999);
}