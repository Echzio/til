package com.firstlessons;

public class Kitchen {

    public static void main(String[] args) {
        System.out.println("Main!");
        cookBreakfast();
        cookSoup();
    }

    public static void cookSoup() {
        System.out.println("Boil water!");
        System.out.println("@@@");
        System.out.println("PROFIT!");
    }

    public static void cookBreakfast() {
        System.out.println("Breakfast is done!");
    }
}