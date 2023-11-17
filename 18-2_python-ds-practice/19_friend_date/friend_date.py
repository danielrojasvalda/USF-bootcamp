def friend_date(a, b):
    """Given two friends, do they have any hobbies in common?

    - a: friend #1, a tuple of (name, age, list-of-hobbies)
    - b: same, for friend #2

    Returns True if they have any hobbies in common, False is not.

        >>> elmo = ('Elmo', 5, ['hugging', 'being nice'])
        >>> sauron = ('Sauron', 5000, ['killing hobbits', 'chess'])
        >>> gandalf = ('Gandalf', 10000, ['waving wands', 'chess'])

        >>> friend_date(elmo, sauron)
        False

        >>> friend_date(sauron, gandalf)
        True
    """

    elmo = ('Elmo', 5, ['hugging', 'being nice'])
    sauron = ('Sauron', 5000, ['killing hobbits', 'chess'])
    gandalf = ('Gandalf', 10000, ['waving wands', 'chess'])
    
    common_hobbies = set(a[2]) & set(b[2])  # Calculate the intersection of hobby sets.

    return bool(common_hobbies)  # Return True if common_hobbies is not empty, False otherwise.
