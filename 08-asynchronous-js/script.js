const second = () => {
    console.log('Second');
    setTimeout(() => {
        console.log('Here\'s Johnny!')
    }, 2000)
}

const first = () => {
    console.log('hi Test');
    second();
    console.log('The end');
}

first();