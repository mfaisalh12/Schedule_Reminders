const data = [
    {
        nama : "SEA",
        umur : 20
    },
    {
        nama : "Marcus",
        umur : 20
    },
    {
        nama : "Theo",
        umur : 23
    }
]
for (var i in data) {
    console.log(data[i].nama + ", " + data[i].umur)
}