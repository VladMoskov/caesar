### My solution for task1 Caesar cipher Cli

## Instalation

use `git clone https://github.com/VladMoskov/caesar.git` to download the app

use `npm install` to install dependencies` 



## Usage

To run cipher use `node my_caesar_cli -s <number> -a <string> -i <string -o <string>`, 
where: 
  >`-s / --shift`- (required)  number of shifts. If shift is positive number - plain text will shefted from 'a' to 'z', if it negative - to another direction 'z' - 'a'  
  >
  >`-a / --action` - (required)  type of action. You can encode and decode plain text. use `-a encode` for encode text, or '-a decode' for decode text
  >
  >`-i / --input` - path to file with plain text. You can run app without this flag, in this case plain text will taken from command line.
  >
  >`-o / --output` - path to result file. You can run app without this flag, in this case result will output to command line.
  
  
  
  
## Expample

_-a (--action)_ is **encode**

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

