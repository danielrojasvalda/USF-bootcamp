def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """

    vowels = 'aeiouAEIOU'  # List of vowels (both lowercase and uppercase).
    vowel_counts = {}      # Initialize an empty dictionary to store vowel counts.

    for char in phrase:
        if char in vowels:
            char_lower = char.lower()  # Convert the character to lowercase.
            vowel_counts[char_lower] = vowel_counts.get(char_lower, 0) + 1

    return vowel_counts