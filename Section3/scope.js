// Scope var
if (true) {
    var slogan = "Học Lập trình online Toidicode.com";
}
console.log(slogan);

// Scope let
if (true) {
    let slogan1 = "Học Lập trình online Toidicode.com";
}
console.log(slogan1);

//Block-Scoped Functions.
{
    function foo() {
        return 1;
    }
    {
        function foo() {
            return 2;
        }
        console.log('scope 2: ' + foo());
    }
    console.log('scope 1: ' + foo());
}