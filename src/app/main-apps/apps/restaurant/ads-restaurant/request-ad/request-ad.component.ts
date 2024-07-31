import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ImpApiService } from 'src/app/services/imp-api.service';
import { ads_restaurant } from 'src/constent/Route';

@Component({
  selector: 'app-request-ad',
  templateUrl: './request-ad.component.html',
  styleUrls: ['./request-ad.component.scss']
})
export class RequestAdComponent implements OnInit {
  add_new_ad_form = null;
  selectedImg :File | null = null
  constructor(private impApiService: ImpApiService, private Route: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.add_new_ad_form = this.fb.group({
      image: [''],
      duration: ['', Validators.required],
      description: ['', Validators.required]
    })
  }


selectImg(event){
  this.selectedImg = event.target.files[0];
}

  submit_ad() {
    if (this.add_new_ad_form.invalid) {
      return this.toastr.error("خطا", "يوجد بيانات فارغه");
    } else {





      this.toastr.success("تم ارسال طلبك");
      console.log(this.add_new_ad_form.value);

      const form = new FormData()
      form.append('image', this.selectedImg);
      form.append('duration', this.add_new_ad_form.get('duration').value);
      form.append('description', this.add_new_ad_form.get('description').value);

      console.log(form);

      this.impApiService.post(ads_restaurant.request_ad.add_ads, form).subscribe(data => {
        console.log(data);

      })

    }
  }
}
