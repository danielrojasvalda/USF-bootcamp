def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """

    words = phrase.split()  # Split the input phrase into words.
    title_case_words = [word.capitalize() for word in words]  # Capitalize each word.

    return ' '.join(title_case_words)  # Join the capitalized words with spaces.
