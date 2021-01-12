var Alphabet;
(function (Alphabet) {
    Alphabet[Alphabet["a"] = 0] = "a";
    Alphabet[Alphabet["b"] = 1] = "b";
    Alphabet[Alphabet["c"] = 2] = "c";
    Alphabet[Alphabet["d"] = 3] = "d";
    Alphabet[Alphabet["e"] = 4] = "e";
    Alphabet[Alphabet["f"] = 5] = "f";
    Alphabet[Alphabet["g"] = 6] = "g";
    Alphabet[Alphabet["h"] = 7] = "h";
    Alphabet[Alphabet["i"] = 8] = "i";
    Alphabet[Alphabet["j"] = 9] = "j";
    Alphabet[Alphabet["k"] = 10] = "k";
    Alphabet[Alphabet["l"] = 11] = "l";
    Alphabet[Alphabet["m"] = 12] = "m";
    Alphabet[Alphabet["n"] = 13] = "n";
    Alphabet[Alphabet["o"] = 14] = "o";
    Alphabet[Alphabet["p"] = 15] = "p";
    Alphabet[Alphabet["q"] = 16] = "q";
    Alphabet[Alphabet["r"] = 17] = "r";
    Alphabet[Alphabet["s"] = 18] = "s";
    Alphabet[Alphabet["t"] = 19] = "t";
    Alphabet[Alphabet["u"] = 20] = "u";
    Alphabet[Alphabet["v"] = 21] = "v";
    Alphabet[Alphabet["w"] = 22] = "w";
    Alphabet[Alphabet["x"] = 23] = "x";
    Alphabet[Alphabet["y"] = 24] = "y";
    Alphabet[Alphabet["z"] = 25] = "z";
})(Alphabet || (Alphabet = {}));
var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function position(alphabet) {
    return "Position of alphabet: " + (abc.indexOf(alphabet) + 1);
    //return "Position of alphabet: " + Alphabet.alphabet
}
console.log(position("a"), " Position of alphabet: 1");
console.log(position("z"), "Position of alphabet: 26");
console.log(position("e"), "Position of alphabet: 5");
