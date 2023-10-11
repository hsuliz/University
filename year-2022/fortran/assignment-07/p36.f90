MODULE nasze_zmienne
    IMPLICIT NONE
    REAL :: rank, x, y
END MODULE nasze_zmienne
PROGRAM p36
    USE nasze_zmienne
    INTERFACE
        SUBROUTINE root()
            USE nasze_zmienne
        END SUBROUTINE root
    END INTERFACE
    x = 1048576 ; rank = 20
    CALL root()
    WRITE(*, *) "20-th root of ", x, " equal ", y
    STOP
END PROGRAM p36
SUBROUTINE root() ! procedura bez parametrow formalnych
    USE nasze_zmienne
    RETURN
END SUBROUTINE root