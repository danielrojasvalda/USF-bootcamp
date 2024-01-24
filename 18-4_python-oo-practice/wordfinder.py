"""Word Finder: finds random words from a dictionary."""


import random

class WordFinder:
    """Machine for finding random words from dictionary.

    >>> wf = WordFinder("words.txt")
    235886 words read

    >>> wf.random() in wf.words
    True
    
"""
    def __init__(self, filename):
        """Initialize the WordFinder with the given dictionary file."""
        self.words = self.read_file(filename)
        print(f"{len(self.words)} words read")
    
    def read_file(self, filename):
        """Read words from the specified file and return a list of words."""
        with open(filename, 'r') as file:
            return [line.strip() for line in file]
    
    def random(self):
        """Return a random word from the dictionary."""
        return random.choice(self.words)
    
class SpecialWordFinder(WordFinder):
    """Specialized WordFinder that excludes blank lines/comments.
    
    >>> wf = WordFinder("words_.txt")
    7 words read

    >>> wf.random() in wf.words
    True
    
    """
    
    def __init__(self, filename):
        """Initialize the SpecialWordFinder with the given dictionary file."""
        """super().__init__(filename)"""
        self.words = self.read_file(filename)
        print(f"{len(self.words)} words read")
    
    def read_file(self, filename):
        """Read words from the specified file, excluding blank lines and comments."""
        with open(filename, 'r') as file:
            return [line.strip() for line in file if line.strip() and not line.startswith("#")]
