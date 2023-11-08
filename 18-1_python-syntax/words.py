def print_upper_words(words):

    for word in words:
        word=word.upper()
        print(word)


def print_upper_words2(words):

    for word in words:
        word=word.upper()
        if word.startswith("E"):
            print(word)


def print_words(words, start_w):

    for word in words:
        for letter in start_w:
            if word.startswith(letter):
                print(word)
