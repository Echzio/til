package com.firstlessons;


import java.util.Arrays;

public class Main5Array1 {
    public static void main(String[] args) {
       int[] numbers = {3, 5, 10, 22};
        System.out.println(Arrays.toString(numbers));
        System.out.println(numbers[3]);

        numbers[3] = 50;
        System.out.println(numbers[3]);
        System.out.println(Arrays.toString(numbers));
        
        // itar
        for (int i = 0; i < numbers.length; i++) {
            int number = numbers[i];
            System.out.println(number);
        }

        // iter
        /**
         * for (пробежать по массиву numbers, каждый раз сохраняя очередной элемент массива во
         * временную переменную number типо int)
         * это foreach.
         */
        for (int number : numbers) {
            System.out.println(number);
        }
        for (String s : args) {
            System.out.println(s);
        }
    }
}
