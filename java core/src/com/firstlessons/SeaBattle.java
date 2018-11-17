package com.firstlessons;

import java.util.Scanner;

public class SeaBattle {
    public static void main(String[] args) {
        // ..........x..............
        char[] cells = new char[10];

        for (int i = 0; i < cells.length; i++) {
            cells[i] = '.';
        }

        int position = 4;
        cells[position] = 'X';

        do {
            System.out.println(cells);
            Scanner scanner = new Scanner(System.in);
            String s = scanner.nextLine();
            System.out.printf("Вы ввели %s\n", s);

            int shoot = Integer.parseInt(s);
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

        } while (cells[position] == 'X');
    }
}
