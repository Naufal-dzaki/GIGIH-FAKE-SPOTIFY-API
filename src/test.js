let number = [
    {
        "listen": 5
    },
    {
        "listen": 7
    },
    {
        "listen": 1
    },
    {
        "listen": 10
    },
    {
        "listen": 8
    },
];

console.log(number.sort((a, b) => b.listen - a.listen))