def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    result = []  # Initialize an empty list to store the modified characters.
    
    for char in phrase:
        if char.lower() == to_swap.lower():
            # Flip the case of the character if it matches the to_swap character.
            result.append(char.swapcase())
        else:
            result.append(char)
    return ''.join(result)  # Convert the modified list back to a string and return.

    