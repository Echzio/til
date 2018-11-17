package ex1;

public class Main3 {
    public static void main(String[] args) {
        // кошка проинициализована, но утеряна для нас, обратиться к ней не сможем
        // это называется "утечка памяти"
        // java автоматически борется с утечками при помощи "garbage collector" - сборщик мусора
        // если со стека нет ссылки на объект в куче,
        // а в куче объект указывает на другой объект в куче, то все равно будет уничтожен GC
        new Cat(3, "Tom", 5.5, false);
        Cat cat1 = new Cat(3, "Tom", 5.5, true);
        Cat cat2 = new Cat(2, "Murka", 3.5, false);
        cat1.about();
        Cat tempCat = cat1;
        cat1 = cat2; // cat1 превратится в cat2

        cat1.about();
        tempCat.about();
    }
}
