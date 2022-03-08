import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public height:number=0;
  public weight:number=0;
  public result:number=0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  hesapla(){
    this.result = (this.weight/((this.height/100)*(this.height/100)));
    console.log("height:"+this.height+" weight:"+this.weight+" SONUÇ:"+this.result);
  }
}