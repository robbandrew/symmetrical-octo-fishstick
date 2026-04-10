package bingo

import (
	"fmt"
	"strconv"
)

type BingoRange struct {
	Letter rune
	Lower  int
	Upper  int
	Next   rune
}

var bingoRanges = []BingoRange{
	{'B', 1, 15, 'I'},
	{'I', 16, 30, 'N'},
	{'N', 31, 45, 'G'},
	{'G', 46, 60, 'O'},
	{'O', 61, 75, 'B'},
}

func GetNextBingoNumber(input string) string {
	if len(input) < 2 {
		return "Invalid Bingo Number - string too short"
	}

	letter := rune(input[0])

	number, err := strconv.Atoi(input[1:])
	if err != nil {
		return "Invalid Bingo Number - number not converted"
	}

	var current BingoRange
	found := false
	for _, r := range bingoRanges {
		if r.Letter == letter {
			current = r
			found = true
			break
		}
	}

	if !found {
		return "Invalid Bingo Number - cant find range"
	}

	if number < current.Lower || number > current.Upper {
		return "Invalid Bingo Number - number"
	}

	if number < current.Upper {
		return fmt.Sprintf("%c%d", letter, number+1)
	}

	// number == current.Upper → move to next letter
	for _, r := range bingoRanges {
		if r.Letter == current.Next {
			return fmt.Sprintf("%c%d", r.Letter, r.Lower)
		}
	}

	return "Invalid Bingo Number - eof"
}
