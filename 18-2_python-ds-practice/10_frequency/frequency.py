def frequency(lst, search_term):
    """Return frequency of term in lst.
    
        >>> frequency([1, 4, 3, 4, 4], 4)
        3
        
        >>> frequency([1, 4, 3], 7)
        0
    """

    count = 0  # Initialize a count variable to keep track of the frequency.
    
    # Loop through each element in the list.
    for item in lst:
        if item == search_term:
            count += 1  # Increment the count if the item matches the search term.
    
    return count  # Return the final count after looping through the entire list.