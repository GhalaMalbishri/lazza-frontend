import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cust-main-page',
  templateUrl: './cust-main-page.component.html',
  styleUrls: ['./cust-main-page.component.scss']
})
export class CustMainPageComponent implements OnInit, OnDestroy {

  private intervalId: any;


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.initAdsSlider();
  }

  ngOnDestroy() {
    this.clearAdsSlider();
  }

  initAdsSlider() {
    const adsItems = document.querySelectorAll('.ads-item');
    let currentIndex = 0;

    const showNextAd = () => {
      adsItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % adsItems.length;
      adsItems[currentIndex].classList.add('active');
    };

    this.intervalId = setInterval(showNextAd, 5000);
  }

  clearAdsSlider() {
    clearInterval(this.intervalId);
  }
  openModal(modal) {
    this.modalService.open(modal, { centered: true })
  }
}

