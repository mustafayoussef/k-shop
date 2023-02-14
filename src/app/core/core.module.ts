import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent, MiniCardComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [HeaderComponent, CardComponent, MiniCardComponent],
})
export class CoreModule {}
