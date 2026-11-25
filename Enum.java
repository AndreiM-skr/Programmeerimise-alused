public class Enum {
    enum PetKind {
        DOG, CAT, BIRD, FISH, RABBIT
    }
    public static  void main(String[] args) {
        PetKind myPet = PetKind.DOG;
        System.out.println("My pet is a " + myPet.name());

        System.out.println("Is my pet a cat? " + (myPet == PetKind.CAT));
        myPet = PetKind.CAT;
        System.out.println("Is my pet a cat? " + (myPet == PetKind.CAT));
    }
}
