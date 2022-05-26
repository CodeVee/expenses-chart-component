const url = 'data.json';
const amountSuffix = '-amount';
const barSuffix = '-bar';
const activeClass = 'bar--active';
const animationClasses = ['animate__animated', 'animate__fadeInDown'];

const amountElements = Array.from(document.getElementsByClassName('amount'));

const setAnimations = () => 
    amountElements.forEach(element => element.classList.add(...animationClasses));


const loadData = async () => {
    const data = await fetch(url)
    const amounts = await data.json();
    
    amounts.forEach(({day, amount}, index) => {
        const amountId = `${day}${amountSuffix}`;
        document.getElementById(amountId).innerText = `$${amount}`;

        const date = new Date();
        const dayNo = date.getDay();
        const updatedIndex = index + 1;

        if (dayNo === updatedIndex) {
            const barId = `${day}${barSuffix}`;
            document.getElementById(barId).classList.add(activeClass);
        }
    });
}

const handler = (e) => {
    setAnimations();
    loadData();
};

document.addEventListener('DOMContentLoaded', handler);
