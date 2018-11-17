package com.firstlessons;

/**
 * @author Echzio
 * javadoc
 * this is a lerning java class
 */
public class Main {
    public static void main(String[] args) {
        int i = 25;
        String j = "косточка";
        String s = aport(j,i);
        System.out.println(s);
    }

    private static String aport(String it, int amount) {
        String result = "Пожёванная " + it + " в колличестве " + amount;
        return result;
    }
}

// Stack
// |  4            |
// |  3            |
// |  2 "25"       |
// |  1 "Косточка" |
// _________________