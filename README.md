# String Calculator Kata in NodeJS

Your goal is to create a program that reads numbers in a string and produce their sum.

## Sequence of features to implement

Please, try to think the smallest increments you can work on:

- An empty string input must produce `0`
- An input string with a single number must produce that number
- An input string with more than one number separated by commas must produce their sum
  Example: `"1,2"` must produce `3`
- Now numbers can be separated also by the newline character
  Example: `"1\n2` must produce `3`
- Now a custom delimiter can be defined by prefixing the input string with `//<DELIMITER>\n<NUMBERS>`
  Example: `"//;\n1:2"` must produce `3`
- Now the program needs to fail with a message when there's a negative number in the input string. The error message must include the list of offending numbers
- Now the program needs to ignore any number greater than 1000
- Now a custom delimiter of any length can be defined by prefixing the input string with `//[<DELIMITER>]\n<NUMBERS>`
  Example: `"//[|||]\n1|||2|||3` must produce `6`
- Now multiple delimiters can be defined by prefixing the input string with `//[<DELIMITER>][<DELIMITER>]\n<NUMBERS>`
  Example: `"//[|][;;]\n1|2;;3` must produce `6`

## Preparing your environment

You can skip steps 1 and 2 if your development environment already has NodeJS 15 set up. Check the [`.tool-versions`](.tool-versions) file to know the specific NodeJS version this repo requires.

1. Install [asdf](https://asdf-vm.com/)
2. Add the NodeJS plugin to asdf with `asdf plugin add nodejs`   
3. Fork [this repo](https://github.com/ggalmazor-training/nodejs-string-calculator), clone it somewhere in your computer, and run `asdf install` and `npm install` where you cloned it.

   Example:

   ```shell_session
   ~ git clone git@github.com:<YOUR GITHUB USERNAME>/nodejs-string-calculator.git
   Cloning into 'nodejs-string-calculator'...
   remote: Enumerating objects: 5, done.
   remote: Counting objects: 100% (5/5), done.
   remote: Compressing objects: 100% (5/5), done.
   remote: Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
   Receiving objects: 100% (5/5), 5.33 KiB | 2.67 MiB/s, done.
   ~ cd nodejs-string-calculator
   ~/nodejs-string-calculator asdf install
     % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
   100  3490    0  3490    0     0   8574      0 --:--:-- --:--:-- --:--:--  8553
     % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
   100 29.1M  100 29.1M    0     0  8835k      0  0:00:03  0:00:03 --:--:-- 8835k
   node-v15.14.0-darwin-x64.tar.gz: OK
   ~/nodejs-string-calculator $ npm install
   npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
   npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
   npm WARN deprecated har-validator@5.1.5: this library is no longer supported
   npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
   npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
   
   added 537 packages, and audited 538 packages in 3s
   
   24 packages are looking for funding
     run `npm fund` for details
   
   found 0 vulnerabilities
   ```

4. Test your environment by running the tests with `npm run test`

   Example:

   ```shell_session
   
   > nodejs-string-calculator@1.0.0 test
   > node --experimental-vm-modules node_modules/.bin/jest
   
   (node:57454) ExperimentalWarning: VM Modules is an experimental feature. This feature could change at any time
   (Use `node --trace-warnings ...` to show where the warning was created)
    FAIL  test/foo_test.js
     ✕ adds 1 + 2 to equal 3 (5 ms)
   
     ● adds 1 + 2 to equal 3
   
       expect(received).toBe(expected) // Object.is equality
   
       Expected: 5
       Received: 3
   
         2 |
         3 | test('adds 1 + 2 to equal 3', () => {
       > 4 |     expect(sum(1, 2)).toBe(5);
           |                       ^
         5 | });
   
         at Object.<anonymous> (test/foo_test.js:4:23)
   
   Test Suites: 1 failed, 1 total
   Tests:       1 failed, 1 total
   Snapshots:   0 total
   Time:        0.689 s, estimated 1 s
   Ran all test suites.   
   ```
