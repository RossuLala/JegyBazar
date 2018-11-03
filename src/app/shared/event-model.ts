export class EventModel {
  id: number;
  name: string;
  date: string;
  pictureURL: string;
  description: string;

  constructor(param?: EventModel){
    if (param) {
      Object.assign(this, param);
    }
  }

  proba(){
    console.log('dudu');
  }
}


// new EventModel() segítségével lehet meghívni

// let kocsi = new Eventmodel()
// kocsi.proba();
// ---kiírja--> dudu
