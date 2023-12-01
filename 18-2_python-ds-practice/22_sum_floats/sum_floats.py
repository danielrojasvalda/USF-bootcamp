def sum_floats(nums):
    """Return sum of floating point numbers in nums.
    
        >>> sum_floats([1.5, 2.4, 'awesome', [], 1])
        3.9
        
        >>> sum_floats([1, 2, 3])
        0
    """

    # hint: to find out if something is a float, you should use the
    # "isinstance" function --- research how to use this to find out
    # if something is a float!

    total = 0.0  # Initialize a variable to keep track of the sum.

    for num in nums:
        if isinstance(num, float):  # Check if the element is a float using isinstance.
            total += num

    return total