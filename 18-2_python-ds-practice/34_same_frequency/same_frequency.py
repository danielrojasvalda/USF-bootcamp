def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    # Convert the numbers to strings to work with individual digits
    str_num1 = str(num1)
    str_num2 = str(num2)
    
    # Create dictionaries to store digit frequencies
    freq1 = {}
    freq2 = {}
    
    # Count the frequencies of digits in num1
    for digit in str_num1:
        freq1[digit] = freq1.get(digit, 0) + 1
    
    # Count the frequencies of digits in num2
    for digit in str_num2:
        freq2[digit] = freq2.get(digit, 0) + 1
    
    # Compare the dictionaries to check if they have the same frequencies
    return freq1 == freq2