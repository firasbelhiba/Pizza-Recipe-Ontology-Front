import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { VehiculesService } from '../../services/vehicules.service';
import { Router } from '@angular/router';

export class Vehicule {
  ID: number;
  Name: string;
  couleur: string;
  nombreDePortes: number;
  marque: string;
  type: string;
  boite: string;
  cylindree: number;
  carburant: string;
}
@Component({
  selector: 'app-add-vehicules',
  templateUrl: './add-vehicules.component.html',
  styleUrls: ['./add-vehicules.component.css']
})

export class AddVehiculesComponent implements OnInit {
  vehicule:Vehicule[];
  newVehicule:Vehicule=new Vehicule();
  buttonOptions: any = {
    text: "Register",
    type: "success",
    useSubmitBehavior: true
}
  //vehicule={name:'',marque:'',type:'',couleur:'',nombreDePortes:'',boite:'',cylindree:'',carburant:''};
  constructor(private service:VehiculesService,private router:Router) { }
 marques : string[] = [
    // "CHERRY",
    // "MAHINDRA",
    // "FIAT",
    // "RENAULT",
    // "MERCEDES BENZ",
    // "LAND ROVER"
];
types : string[] = [
  //"Pick-up","SUV","Berline","Citadine","Coupée"
];
boites : string[] = [
  //"Auto","Semi-auto","Manuelle"
];
cylindrees : string[] = [
  "4","6","8","12"
];
carburants : string[] = [
  // "Essence",
  // "Diesel",
  // "Electrique",
  // "Hybride"
];
  ngOnInit(): void {
    this.service.getMarques().subscribe(
      res => {
        res.forEach(e=>{
          this.marques.push(e.property)
        })
      }
    );
    this.service.getSubClasses('Boite').subscribe(
      res => {
        res.forEach(e=>{
          this.boites.push(e.name)
        })
      } 
    );
    this.service.getSubClasses('Carburant').subscribe(
      res => {
        res.forEach(e=>{
          this.carburants.push(e.name)
        })
      } 
    );
    this.service.getSubClasses('Voiture').subscribe(
      res => {
        res.forEach(e=>{
          this.types.push(e.name)
        })
      } 
    );
  
  }
  form_fieldDataChanged (e) {
    let updatedField = e.dataField;
    let newValue = e.value;
    if(updatedField === 'Name') this.newVehicule.Name =newValue
    if(updatedField === 'couleur') this.newVehicule.couleur =newValue
    if(updatedField === 'boite') this.newVehicule.boite =newValue
    if(updatedField === 'carburant') this.newVehicule.carburant =newValue
    if(updatedField === 'cylindree') this.newVehicule.cylindree =newValue
    if(updatedField === 'marque') this.newVehicule.marque =newValue
    if(updatedField === 'nombreDePortes') this.newVehicule.nombreDePortes =newValue
    if(updatedField === 'type') this.newVehicule.type =newValue

    console.log(this.newVehicule)
    // Event handling commands go here
}

  Submit(e){
    this.service.addVehicule(this.newVehicule.Name,this.newVehicule.couleur,this.newVehicule.nombreDePortes,this.newVehicule.marque,this.newVehicule.cylindree,this.newVehicule.boite,this.newVehicule.carburant,this.newVehicule.type)
    .subscribe(data=>{
      notify({
        message: "You have submitted the form",
        position: {
            my: "center top",
            at: "center top"
        }
    }, "success", 3000);
    this.router.navigate(['/display'])
    })
    

  console.log(this.vehicule)
  e.preventDefault();
}
  }


