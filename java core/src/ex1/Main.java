package ex1;

public class Main {
    public static void main(String[] args) {
        Cat cat1;
        cat1 = new Cat(3,"Мурка", 5.5, false); // круглые скобки - вызов метода "пустой конструктор"
       // cat1.age = 3;
       // cat1.name = "Мурка";
        cat1.about();

        Cat cat2;
        cat2 = new Cat(5,"Tom", 3.3, true);
//        cat2.name = "Tom";
//        cat2.age = 5;
//        cat2.isMale = true;
        cat2.about();
    }


}