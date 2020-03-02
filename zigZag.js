function zigZag(s, depth) {
    let matrix = Array.from({ length: depth }, () =>
        Array.from({ length: s.length }, () => ' ')
    );
    let isDown = false;
    let currentDepth = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % (depth - 1) === 0) {
            isDown = !isDown;
        }

        matrix[currentDepth][i] = s[i];
        if (isDown) {
            currentDepth++;
        } else {
            currentDepth--;
        }
    }

    let strings = matrix.map(level => level.join(''));

    strings.forEach(s => console.log(s));
}

zigZag(
    `o\\\\\\\\\\\\\\\\ //////// \\\\\\\\\\\\\\\\ //////// \\\\\\\\\\\\\\\\ ////////o`,
    10
);
