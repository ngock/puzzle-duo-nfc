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

    async start() {
      try {
        const ndef = new (window as any).NDEFReader();
        await ndef.scan();
        console.log("> Scan started");
        alert("Scanning a tag...");
  
        ndef.addEventListener("readingerror", () => {
          console.log("Argh! Cannot read data from the NFC tag. Try another one?");
          alert(`Error reading tag`);
        });
  
        ndef.addEventListener("reading", ({ message, serialNumber }: { message: any, serialNumber: string }) => {
  
        
        });
      } catch (error) {
        alert(error + " try it on smartphone with Chrome Android Browser");
        
      }
    }
}