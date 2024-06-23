import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterOutlet } from '@angular/router';
import { LoginService } from '../../../pages/Login/service/login.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatBadgeModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  isMobile = true;

  constructor(private observer: BreakpointObserver,
    private router: Router,
    private loginService: LoginService) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
