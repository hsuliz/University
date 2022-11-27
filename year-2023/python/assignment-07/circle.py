from point import Point


class Circle:

    def __init__(self, x, y, radius):
        if radius < 0:
            raise ValueError("Radius is negative!!")
        self.pt = Point(x, y)
        self.radius = radius

    def __repr__(self): pass  # "Circle(x, y, radius)"

    def __eq__(self, other):
        return self.pt == other.pt and self.radius == other.radius

    def __ne__(self, other):
        return not self == other

    def area(self): pass  # pole powierzchni

    def move(self, x, y): pass  # przesuniecie o (x, y)

    def cover(self, other): pass  # najmniejszy okrąg pokrywający oba
