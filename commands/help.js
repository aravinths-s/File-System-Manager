function helpFn(){
    console.log(`
    Your Entered command is wrong

    <node> <file> <command> <folder> <arguments>

    node mycli.js view "E:\\Pep" tree 
    node mycli.js view "E:\\Pep" flat
    node mycli.js organize "E:\\Pep" <optional>
    node mycli.js help

    `);
}

module.exports = {
    help : helpFn
}