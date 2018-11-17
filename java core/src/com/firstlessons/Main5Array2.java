package com.firstlessons;


public class Main5Array2 {
    public static void main(String[] args) {
        // фигурные скобки можно использовать лишь раз в жизни массива, при объявлении
        // int[] stables = {1, 2, 3, 4, 5};
        int[] stables;
        stables = new int[100]; // зарезервированный массив со 100 пустыми местами
        stables[3] = 55;
        for (int stable : stables) {
            System.out.println(stable);
        }

    }
}