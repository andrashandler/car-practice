import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = [
    {
      id: uuidv4(),
      brand: "Toyota",
      model: "Prius",
      year: 2025,
      price: 17740000,
      imgUrl: "/images/toyota-prius.jpg",
      excerpt: "A 2025-ös Toyota Prius tovább finomított hibridrendszerrel és hatékonyabb hajtással kínál csendes, takarékos mindennapi használatot.",
      description: "A legújabb Prius a Toyota hibridtechnológiai tapasztalatának csúcsa: gyorsabban reagáló elektromos-motor támogatás, jobb hatótáv és javított aerodinamika jellemzi. A modell modernizált beltere digitális műszerekkel, tágasabb érzetet adó elrendezéssel és fejlett vezetéstámogató rendszerekkel érkezik. A Prius továbbra is a megbízható, városi és országúti használatra optimalizált hibrid autók egyik legjobb képviselője, alacsony fenntartási költségekkel.",
    },
    {
      id: uuidv4(),
      brand: "Hyundai",
      model: "Staria",
      year: 2025,
      price: 18299000,
      imgUrl: "/images/hyundai-staria.jpg",
      excerpt: "A Hyundai Staria futurisztikus dizájnnal és hatalmas belső térrel kínál kényelmes utazást akár nagycsaládos, akár üzleti felhasználóknak.",
      description: "A Staria űrjármű-szerű formáival tűnik ki a kategóriából, miközben belül kimagasló helykínálatot és variálhatóságot nyújt. A 2025-ös modell modern infotainmenttel, fejlett biztonsági csomaggal és kényelmi extrákkal teszi vonzóvá a hosszabb utakra is. A dízel és benzines verziók mellett hibrid opciót is kínáló Staria kiváló választás nagycsaládosoknak vagy személyszállítóknak."
    },
    {
      id: uuidv4(),
      brand: "Ford",
      model: "Ranger",
      year: 2015,
      price: 11740000,
      imgUrl: "/images/ford-ranger.jpg",
      excerpt: "A 2015-ös Ford Ranger masszív felépítésével és erős dízelmotorjaival kiváló terepképességeket és teherbírást kínál.",
      description: "Ez a generáció már sokkal kifinomultabb belsőt és jobb úttartást hozott a pickup kategóriába. A Ranger stabil futóműve, nagy vontatási kapacitása és strapabíró konstrukciója miatt közkedvelt a munkagépnek szánt autót keresők körében. Mindennapi használatra is meglepően kényelmes, miközben terepen és nehéz körülmények között is megbízható partner marad."
    },
    {
      id: uuidv4(),
      brand: "Opel",
      model: "Ampera",
      year: 2012,
      price: 2890000,
      imgUrl: "/images/opel-ampera.jpg",
      excerpt: "Az Opel Ampera hatótávnövelt elektromos hajtása csendes vezetést és hosszabb utakra is alkalmas, benzines biztonsági tartalékot kínál.",
      description: "Az Ampera úttörő volt Európában: tisztán elektromos üzemben 40–80 km közötti hatótávot tudott, melyet egy benzinmotorral működő generátor hosszabb utak esetén egészített ki. A futurisztikus belső tér és a stabil vezetési élmény különlegessé tette a modellpiacon. Környezetbarát, mégis kompromisszummentes választás azoknak, akik nem akartak teljesen a töltőhálózatra hagyatkozni."
    },
    {
      id: uuidv4(),
      brand: "Kia",
      model: "e-Niro",
      year: 2020,
      price: 7250000,
      imgUrl: "/images/kia-e-niro.jpg",
      excerpt: "A 2020-as Kia e-Niro nagy hatótávjával és praktikus crossover formájával az egyik legsokoldalúbb elektromos családi autó.",
      description: "A 64 kWh-s változat akár 450 km körüli valós hatótávot kínál, ezzel a kategóriájának egyik legjobb ár-érték arányú modellje. A tágas belső tér, a kényelmes üléspozíció és a gazdag felszereltség ideális mindennapi társává teszi. A gyors töltési lehetőségek és a megbízható hajtás miatt városban és hosszabb utak során is egyformán jól használható."
    },
    {
      id: uuidv4(),
      brand: "Tesla",
      model: "Model S",
      year: 2012,
      price: 6990000,
      imgUrl: "/images/tesla-model-s.jpg",
      excerpt: "A 2012-es Tesla Model S forradalmi hatótávval és elektromos teljesítménnyel nyitott új fejezetet a prémium szedánok világában.",
      description: "A Model S első kiadása sokak számára mutatta meg, hogy az elektromos autó lehet gyors, kényelmes és hosszú távon is használható. A letisztult belső tér, a hatalmas érintőkijelző és a folyamatos szoftverfrissítések új standardot teremtettek az iparágban. Erős gyorsulása és alacsony fenntartási költségei miatt a mai napig keresett klasszikus elektromos modell."
    },
    {
      id: uuidv4(),
      brand: "Honda",
      model: "Jazz",
      year: 2015,
      price: 4560000,
      imgUrl: "/images/honda-jazz.jpg",
      excerpt: "A 2015-ös Honda Jazz kategóriáján felüli tágasságot és megbízható, gazdaságos üzemet kínál városi használatra.",
      description: "A Jazz egyik legnagyobb erőssége a „Magic Seat” rendszer, amely a hátsó ülések sokféle variálását teszi lehetővé, így a kisautó meglepően sok csomagot képes elnyelni. A 1.3-as benzines motor takarékos, a futómű pedig kényelmesen viseli a városi úthibákat. Megbízhatósága és praktikus kialakítása miatt a használtpiacon is rendkívül népszerű."
    },
    {
      id: uuidv4(),
      brand: "BMW",
      model: "i3 REX",
      year: 2016,
      price: 4799000,
      imgUrl: "/images/BMW-i3.jpg",
      excerpt: "A BMW i3 REX könnyű karbonvázával és hatótávnövelő benzinmotorjával egyedülálló, városbarát elektromos autó.",
      description: "A 2016-os i3 REX a tisztán elektromos változat előnyeit kínálja, miközben a kisméretű benzinmotor generátorként extra biztonságot ad hosszabb utakra. A karbon-karosszéria miatt az autó rendkívül könnyű és fürge, ami városban élvezetes vezethetőséget nyújt. Belső tere modern, minimalista és fenntartható anyagok felhasználásával készült – valódi prémium elektromos élmény."
    },

  ];


  getCars() {
    return this.cars;
  }

  getCarById(id: string) {
    return this.cars.find(car => car.id === id);
  }
}
