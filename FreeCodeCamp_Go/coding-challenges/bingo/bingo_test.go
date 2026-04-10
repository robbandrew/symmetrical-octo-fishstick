package bingo

import "testing"

func TestGetNextBingoNumber(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		expected string
	}{
		{"returns B11", "B10", "B11"},
		{"returns N34", "N33", "N34"},
		{"returns N31", "I30", "N31"},
		{"returns O61", "G60", "O61"},
		{"returns B1", "O75", "B1"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := GetNextBingoNumber(tt.input)
			if result != tt.expected {
				t.Errorf("expected %s, got %s", tt.expected, result)
			}
		})
	}
}
