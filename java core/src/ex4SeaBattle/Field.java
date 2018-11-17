package ex4SeaBattle;

public class Field {
    final int SIZE = 10;
    char[] cells = new char[SIZE];
    Ship ship;

    void init() {
        for (int i = 0; i < cells.length; i++) {
            cells[i] = '.';
        }
    }

    void setShip(Ship ship) {
        this.ship = ship;
        cells[ship.position] = 'X';
    }

    void doShoot(int shoot) {
        switch (cells[shoot]) {
            case '.':
                System.out.println("Промазал");
                cells[shoot] = '*';
                break;
            case 'X':
                System.out.println("Попал");
                cells[shoot] = '-';
                System.out.println(cells);
                break;
            case '*':
                System.out.println("Ты туда уже стрелял");
                break;
            default:
                System.out.println("Warning");
        }
    }

    void show() {
        System.out.println(cells);
    }

    boolean isNotGameOver() {
        return cells[ship.position] == 'X';
    }

}
