package com.firstlessons;

public class Main6MultTable {
    public static void main(String[] args) {
        for (int i = 1; i < 10; i++) {
            for (int j = 1; j < 10; j++) {
              //  System.out.print(j + "*" + i + "==" + i * j + "\t\t");
                System.out.printf("%d * %d == %d\t\t", j, i, j * i);
            }
            System.out.println();
        }
        // %d - целое число
        // %s - строка
        // %.2f - дробное число
        System.out.printf("Число %d, строка %s, дробное %.2f", 100, "java", 5.5);
    }
}
