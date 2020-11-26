/**
 * My usual small but readable fizz buzz solution.
 */
const fizzBuzzPrinter = count => {
    for (let i = 1; i <= count; i++) {
        const fizz = i % 3 === 0 ? 'Fizz' : '';
        const buzz = i % 5 === 0 ? 'Buzz' : '';
        console.log(`${fizz}${buzz}` || i);
    }
};

fizzBuzzPrinter(15);

/**
 * Output:
 *  1
 *  2
 *  Fizz
 *  4
 *  Buzz
 *  Fizz
 *  7
 *  8
 *  Fizz
 *  Buzz
 *  11
 *  Fizz
 *  13
 *  14
 *  FizzBuzz
 */
