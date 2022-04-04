import { Component, Input, OnInit } from '@angular/core';
//import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root', // here muss be updated, not 'lib-soo-nfc-scanner'
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{
  //@HostBinding('class.soo-plugin-component') sooPluginComponent: Host = true;

  @Input() text: string = '';

  constructor() { }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
  }

  title = 'soo-nfc-scanner';

    async scan() {  // (click)="scan()"
      try {
        const ndef = new (window as any).NDEFReader();
        await ndef.scan();
  
        ndef.addEventListener("readingerror", () => {
          console.log("Argh! Cannot read data from the NFC tag. Try another one?");
          alert(`Error reading tag`);
        });
  
        ndef.addEventListener("reading", ({ message, serialNumber }: { message: any, serialNumber: string }) => {
          // serialNumber ausgeben
          // in app.component.html anzeigen lassen

          alert("Serial number of the tag: " + serialNumber + message);
          console.log("serial number of tag " + serialNumber);
        
        });
      } catch (error) {
        alert(error + ". Try it on smartphone with Chrome Android Browser");
        
      }
    }

    async write() {  // (click)="write()"
      try {
        const ndef = new (window as any).NDEFReader();
        await ndef.write("message").then(() => {alert('message written')});
  
        ndef.addEventListener("reading", ({ message, serialNumber }: { message: any, serialNumber: string }) => {
          // serialNumber ausgeben
          // in app.component.html anzeigen lassen

          alert("Serial number" + serialNumber + "and message" + message + "of the tag: ");
          console.log("serial number of tag " + serialNumber);
        
        });
      } catch (error) {
        alert(error + ". Try it on smartphone with Chrome Android Browser");
        
      }
    }
}