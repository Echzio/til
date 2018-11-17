package ex3;

public class Horse {
    String name;
    int speed;
    String color;
    boolean isMale;
    int age;

    void eat() {
        System.out.println("eating...");
    }

    void about() {
        String sex = (isMale == true) ? "Male" : "Female"; // тернарный оператор
        System.out.printf("name: %s, age: %d, sex: %s", name, age, sex);
    }

    void ride() {
        about();
        System.out.println(" riding at speed " + speed);
    }
}
