import pytest

from parser import MatrixParser


@pytest.fixture
def matrix_parser():
    return MatrixParser()


def test_given_matrix_should_parse(matrix_parser):
    # given, when
    given = matrix_parser.scan('testing.txt')
    expected = [
        [0, 9, 75, 0, 0],
        [9, 0, 95, 19, 42],
        [75, 95, 0, 51, 66],
        [0, 19, 51, 0, 31],
        [0, 42, 66, 31, 0]
    ]
    # then
    assert given == expected