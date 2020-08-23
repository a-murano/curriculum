package check;

import constants.Constants;

class Check{
    private static  String firstName = "村野";
    private static String lastName = "敦";

    private static void printName() {
        System.out.println("printNameメソッド →"+firstName+lastName);
    }
    public static void main(String[] args) {
        Check.printName();

        Pet pet = new Pet(Constants.CHECK_CLASS_JAVA,Constants.CHECK_CLASS_HOGE);
        pet. introduce();

        RobotPet robotpet = new RobotPet(Constants. CHECK_CLASS_R2D2,Constants. CHECK_CLASS_LUKE);
        robotpet.introduce();
    }
}