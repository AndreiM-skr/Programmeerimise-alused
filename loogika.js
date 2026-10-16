//Laualambi sisselülitamine

//Reegel: lamp põleb, kui elektrivool on olemas ja lüliti on sisse lülitatud.

const PowerOn = true; // Elektrivool on olemas
const SwitchOn = true; // Lüliti on sisse lülitatud

const result = PowerOn && SwitchOn; // Kontrollime, kas lamp põleb
console.log("Kas lamp põleb? " + result); // Väljasta tulemus

//2. Veebitunni avamine
//reegel: Tunni avamiseks on vaja internetiühendust ja linki

//internetiühendus olemas
const InternetOn = true;

//link olemas
const HasLink = false;

const result2 = InternetOn && HasLink; // Kontrollime, kas tunni saab avada

console.log("Kas tundi saab avada? " + result2);

const CashAvailable = false; // Sularaha olemas
const HasCard = true; // Pangakaart olemas

const result3 = CashAvailable || HasCard; // Kontrollime, kas saab tasuda

console.log("Kas saab tasuda? " + result3); // Väljasta tulemus

//4. Teate saamine

//Reegel: Teade on saadud, kui saabus e-kiri või SMS

const HasEmail = true; // E-kiri saabus
const HasSMS = false; // SMS saabus

const result4 = HasEmail || HasSMS; // Kontrollime, kas teade on saadud

console.log("Kas teade on saadud? " + result4);

//5. Akna avamine
//Reegel: Võib avada, kui vihma ei saja

const IsRaining = false; // Vihma ei saja

const result5 = !IsRaining; // Kontrollime, kas akent võib avada

console.log("Kas võib avada? " + result5); // Väljasta tulemus

//6. Serveri käivitamine
//Reegel: Vaja on sisselülitatud arvutit, paigaldatud operatsioonisüsteemi
// ja käivitamisõigust

const ComputerOn = true; // Arvuti on sisse lülitatud
const OSInstalled = true; // Operatsioonisüsteem on paigaldatud
const HasPermission = false; // Käivitamisõigus on olemas

const result6 = ComputerOn && OSInstalled && HasPermission;

console.log("Kas serveri saab käivitada? " + result6);

//7. Kooli jõudmine
//Reegel: Kooli saab minna bussi, jalgratta või vanema autoga

const HasBus = false; // Buss olemas
const HasBicycle = true; // Jalgratas olemas
const HasParentsCar = false; // Vanema auto olemas

const result7 = HasBus || HasBicycle || HasParentsCar;

console.log("Kas kooli saab minna? " + result7);

//8. Filmi vaatamine

//Reegel: Vaja on internetiühendust ning tellimust või ostetud veebiseansi piletit

const InternetHomeOn = false; // Internetiühendus on olemas
const HasSubscription = true; // Tellimus on olemas
const HasTicket = true; // Veebiseansi pilet on ostetud

const result8 = InternetHomeOn && (HasSubscription || HasTicket);
console.log("Kas filmi saab vaadata? " + result8);

//9. Piknik

//Reegel: Vaja on toitu ning kuiva ilma või katusega lehtlat

const HasFood = true; // Toit on olemas
const GoodWeather = false; // Kuiv ilm
const HasGazebo = true; // Katusega lehtla olemas

const result9 = HasFood && (GoodWeather || HasGazebo);

console.log("Kas piknikku saab pidada? " + result9);

//10. Uuenduse allalaadimine

//Reegel: Vaja on internetiühendust ning kettaruumi.
//Madal akutase koos ühendamata laadijaga keelab allalaadimise

const InternetConnection = true; // Internetiühendus on olemas
const DiskSpace = true; // Kettaruum on olemas
const LowBattery = true; // Madal aku tase
const ChargerConnected = false; // Laadija on ühendatud

const result10 = InternetConnection && DiskSpace && (!LowBattery || ChargerConnected);

console.log("Kas uuendust saab alla laadida? " + result10);

//11. Valmis tellimuse kättesaamine

//Reegel: Tellimus peab olema valmis, kuller või väljastuspunkt saadaval ning väljastamine blokeerimata

const OrderReady = true; // Tellimus on valmis
const CourierAvailable = false; // Kuller on saadaval
const PickupAvailable = true; // Väljastuspunkt on saadaval
const Blocked = false; // Väljastamine pole blokeeritud

const result11 = OrderReady && (CourierAvailable || PickupAvailable) && !Blocked;

console.log("Kas tellimust saab kätte? " + result11);
