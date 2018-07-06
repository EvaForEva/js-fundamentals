function sequence(input) {
    let n = input[0];
    let k = 1; //definirano tuk gore, zastoto taka e po uslovie. izpechatva se predi while cikula
    while(k <= n) {
        console.log(k);
        k = (2 * k) + 1;// i sled kato e izpechatano tuk se modificira
    }
}
sequence([3])