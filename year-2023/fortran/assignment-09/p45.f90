PROGRAM p45
    IMPLICIT NONE
    INTEGER :: ISTEP
    REAL :: a, b, dl, dx, x0, x1
    REAL :: fx, dfx
    dl = 1.0e-06
    a = 1.0
    b = 2.0
    dx = b - a
    x0 = (a + b) / 2.0
    istep = 0
    DO WHILE (ABS(dx).GT.dl)
        x1 = x0 - fx(x0) / dfx(x0)
        dx = x1 - x0
        x0 = x1
        istep = istep + 1
    END DO
    WRITE (6, " (I4,2F16.8)") istep, x0, dx
END PROGRAM p45
FUNCTION fx(x) RESULT (f)
    IMPLICIT NONE
    REAL :: f
    REAL, INTENT (IN) :: X
    F = EXP(X) * ALOG(X) - x * x
END FUNCTION fx
FUNCTION dfx (x) RESULT (af)
    IMPLICIT NONE
    REAL :: af
    REAL, INTENT (IN) :: x
END FUNCTION dfx