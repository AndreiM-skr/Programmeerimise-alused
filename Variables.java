import java.math.BigInteger;
import java.math.BigDecimal;


public class Variables {
public static void main(String[] args) {
    int snackCount; 
    snackCount = 5;
    int snackCount2 = 10;
    // snackCount = "15"; //viga
    int puppies = 2;
    System.out.println("Puppies: " + puppies + ", available snacks: " + snackCount);

    //byte on 8-bitine taisarvutuuo, mis voib votta vaartusi...
    byte puppyAgeMonths = 4;
    System.out.println("Puppy age in months: " + puppyAgeMonths);

    short footStepsOnWalk = 2_400;
    System.out.println("Foot steps on walk: " + footStepsOnWalk);

//long on 64-bitine taisarvutituup
long puppyVideosViews = 3_000_000_000L;
System.out.println("Puppy videos views: " + puppyVideosViews);

float roomTemperature =  22.5F;
System.out.println("Room temperature: " + roomTemperature + "C");

double puppyWeightKg = 3.5D;
System.out.println("Puppy weight: " + puppyWeightKg + "Kg");

boolean feedingTime = true;
System.out.println("Is it feeding time? " + feedingTime);

//char
char room = 'A';
System.out.println("feeding room: " + room);

//String on objekt
String keeper = "John";
System.out.println("Keeper: " + keeper + ", feeding room: " + room);

final int MINUTER_PER_HOUR = 60;
System.out.println("Minutes per hour: " + MINUTER_PER_HOUR);

System.out.println("Whole snacks per puppy: " + (snackCount /puppies));
System.out.println("Snack left after feeding: " + (snackCount % puppies));
System.out.println("Snacks left after feeding: " + (double)snackCount / puppies);

Integer backupSnackCount = Integer.valueOf(12);
System.out.println("Backup snack count: " + backupSnackCount);

Long boxedViews = Long.valueOf(puppyVideosViews);

Double boxedWeight = Double.valueOf(puppyWeightKg);
System.out.println("Puppy weight (boxed): " + boxedWeight + "kg");

BigInteger virtualPuppyPoints = new BigInteger("9223372036854775808");
BigInteger updateVirtualPuppypoints = virtualPuppyPoints.add(BigInteger.ONE);
System.out.println("Virtual puppy points: " + updateVirtualPuppypoints);

BigDecimal biscuitsPrice = new BigDecimal("0.10");
BigDecimal ribbonPrice = new BigDecimal("0.20");
BigDecimal totalPrice = biscuitsPrice.add(ribbonPrice);
System.out.println("Total price in BigDecimal: " + totalPrice);
System.out.println("Total price in double: " + (0.10 + 0.20));

    // Kordamisharjutus
    String kutsikaNimi = "Rex";
    int vanusKuudes = 6;
    System.out.println("Kutsika nimi: " + kutsikaNimi + ", vanus kuudes: " + vanusKuudes);
    int maius = 11;
    int kutsikad = 3;
    System.out.println("Taismaiuseid kutsika kohta: " + (maius / kutsikad));
    System.out.println("Jaak: " + (maius % kutsikad));
    System.out.println("Keskmine koos murdosaga: " + ((double) maius / kutsikad));
}
}