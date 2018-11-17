package com.firstlessons;

import java.util.Arrays;

public class MyDictionary {
    public static void main(String[] args) {
        int[] myArrays = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110};
        System.out.println(Arrays.toString(myArrays)); //посмотрели на массив в качестве String
        myArrays[5] = 55;
        System.out.println(myArrays[5]); // проверяем подмену 5 значения в массиве
        //iter
        for (int myArray : myArrays) {
            System.out.println(myArray); // побежали по массиву
        }

        /**
         * посмотрим на аргументы, которые передаются при старте метода Main в String[] args
         */
        for (String arg : args) {
            System.out.println(arg);
        }
    }
}
