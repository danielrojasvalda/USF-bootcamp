def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """
    size = len(matrix)
    total_sum = 0

    for i in range(size):
        total_sum += matrix[i][i]          # TL-to-BR diagonal
        total_sum += matrix[i][size - i - 1]  # BL-to-TR diagonal

    return total_sum