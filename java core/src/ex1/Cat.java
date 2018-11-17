package ex1;

public class Cat {
    // Характеристики (состояние), свойства, поля
    int age;
    String name;
    double weight;
    boolean isMale;
    Tail tail; // композиция. Когда класс не может существовать вне родительского класса
    Talisman talisman; // агрегация. Когда класс может существовать сам по себе

    // методы (поведение)
    void voice() {
        System.out.println("myau");
    }

    void sleep() {
        System.out.println("hrrrr");
    }

    void about() {
        String s = "Cat{" +
                "age=" + age +
                ", name='" + name + '\'' +
                ", weight=" + weight +
                ", isMale=" + isMale +
                ", tail=" + tail +
                ", talisman=" + talisman +
                '}';
        System.out.println(s);
    }

    // Конструкторы
    Cat() {
        System.out.println("Вызвали пустой конструтор");
    }

    public Cat(int age, String name, double weight, boolean isMale) {
        // Аргумент метода скрывает поле класса, поэтому нужно обращение через this
        this.age = age;
        this.name = name;
        this.weight = weight;
        this.isMale = isMale;
    }
}
