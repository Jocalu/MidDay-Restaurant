import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { StoreService } from '../../../core/services/store.service'
import { BehaviorSubject } from 'rxjs'
import { PopupMenusdeleteComponent } from './popup-menusdelete/popup-menusdelete.component'

@Component({
  selector: 'app-menus-delete',
  templateUrl: './menus-delete.component.html',
  styleUrls: ['./menus-delete.component.scss']
})
export class MenusDeleteComponent implements OnInit {
  constructor (
    public StoreService: StoreService,
    private dialog: MatDialog
  ) { }

    menu$ = new BehaviorSubject([])

    openPopUp () {
      this.dialog.open(PopupMenusdeleteComponent, {})
    }

    deleteClick (id: string) {
      this.StoreService.deleteMenu(id)
    }

    ngOnInit () {
      this.StoreService.getMenu().subscribe((menu) => { this.menu$.next(menu) })
    }
}